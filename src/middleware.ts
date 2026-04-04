import { HttpTypes } from "@medusajs/types"
import { NextRequest, NextResponse } from "next/server"

const BACKEND_URL = process.env.MEDUSA_BACKEND_URL
const PUBLISHABLE_API_KEY = process.env.NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY
const DEFAULT_REGION = process.env.NEXT_PUBLIC_DEFAULT_REGION || "us"

const SUPPORTED_LOCALES = ["en", "fr", "ar"]
const DEFAULT_LOCALE = "en"

const regionMapCache = {
  regionMap: new Map<string, HttpTypes.StoreRegion>(),
  regionMapUpdated: Date.now(),
}

async function getRegionMap(cacheId: string) {
  const { regionMap, regionMapUpdated } = regionMapCache

  if (!BACKEND_URL) {
    throw new Error(
      "Middleware.ts: Error fetching regions. Did you set up regions in your Medusa Admin and define a MEDUSA_BACKEND_URL environment variable?"
    )
  }

  if (
    !regionMap.keys().next().value ||
    regionMapUpdated < Date.now() - 3600 * 1000
  ) {
    const { regions } = await fetch(`${BACKEND_URL}/store/regions`, {
      headers: {
        "x-publishable-api-key": PUBLISHABLE_API_KEY!,
      },
      next: {
        revalidate: 3600,
        tags: [`regions-${cacheId}`],
      },
      cache: "force-cache",
    }).then(async (response) => {
      const json = await response.json()
      if (!response.ok) {
        throw new Error(json.message)
      }
      return json
    })

    if (!regions?.length) {
      throw new Error(
        "No regions found. Please set up regions in your Medusa Admin."
      )
    }

    regions.forEach((region: HttpTypes.StoreRegion) => {
      region.countries?.forEach((c) => {
        regionMapCache.regionMap.set(c.iso_2 ?? "", region)
      })
    })

    regionMapCache.regionMapUpdated = Date.now()
  }

  return regionMapCache.regionMap
}

async function getCountryCode(
  request: NextRequest,
  regionMap: Map<string, HttpTypes.StoreRegion | number>,
  urlCountryCode?: string
) {
  try {
    let countryCode

    const vercelCountryCode = request.headers
      .get("x-vercel-ip-country")
      ?.toLowerCase()

    if (urlCountryCode && regionMap.has(urlCountryCode)) {
      countryCode = urlCountryCode
    } else if (vercelCountryCode && regionMap.has(vercelCountryCode)) {
      countryCode = vercelCountryCode
    } else if (regionMap.has(DEFAULT_REGION)) {
      countryCode = DEFAULT_REGION
    } else if (regionMap.keys().next().value) {
      countryCode = regionMap.keys().next().value
    }

    return countryCode
  } catch (error) {
    if (process.env.NODE_ENV === "development") {
      console.error(
        "Middleware.ts: Error getting the country code. Did you set up regions in your Medusa Admin?"
      )
    }
  }
}

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  const segments = pathname.split("/").filter(Boolean)

  // Parse locale and countryCode from URL
  let locale: string
  let urlCountryCode: string | undefined
  let restPath: string

  if (SUPPORTED_LOCALES.includes(segments[0])) {
    // URL already has a valid locale: /{locale}/{countryCode}/rest
    locale = segments[0]
    urlCountryCode = segments[1]?.toLowerCase()
    restPath = segments.slice(2).join("/")
  } else if (segments[0]) {
    // No locale in URL — treat first segment as countryCode for backward compat
    locale = DEFAULT_LOCALE
    urlCountryCode = segments[0]?.toLowerCase()
    restPath = segments.slice(1).join("/")
  } else {
    // Root path
    locale = DEFAULT_LOCALE
    urlCountryCode = undefined
    restPath = ""
  }

  let response = NextResponse.next()

  let cacheIdCookie = request.cookies.get("_medusa_cache_id")
  let cacheId = cacheIdCookie?.value || crypto.randomUUID()

  const regionMap = await getRegionMap(cacheId)
  const countryCode = regionMap && (await getCountryCode(request, regionMap, urlCountryCode))

  // Check if URL is already fully correct: /{validLocale}/{validCountryCode}/...
  const localeInUrl = SUPPORTED_LOCALES.includes(segments[0])
  const countryCodeInUrl = localeInUrl && countryCode && segments[1]?.toLowerCase() === countryCode

  if (localeInUrl && countryCodeInUrl && cacheIdCookie) {
    return NextResponse.next()
  }

  if (localeInUrl && countryCodeInUrl && !cacheIdCookie) {
    const resp = NextResponse.next()
    resp.cookies.set("_medusa_cache_id", cacheId, {
      maxAge: 60 * 60 * 24,
    })
    return resp
  }

  // Check if static asset
  if (pathname.includes(".")) {
    return NextResponse.next()
  }

  const queryString = request.nextUrl.search ? request.nextUrl.search : ""
  const rest = restPath ? `/${restPath}` : ""

  if (!countryCode) {
    return new NextResponse(
      "No valid regions configured. Please set up regions with countries in your Medusa Admin.",
      { status: 500 }
    )
  }

  // Redirect to /{locale}/{countryCode}/rest
  const redirectUrl = `${request.nextUrl.origin}/${locale}/${countryCode}${rest}${queryString}`
  const redirectResponse = NextResponse.redirect(redirectUrl, 307)

  if (!cacheIdCookie) {
    redirectResponse.cookies.set("_medusa_cache_id", cacheId, {
      maxAge: 60 * 60 * 24,
    })
  }

  return redirectResponse
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|images|assets|png|svg|jpg|jpeg|gif|webp).*)",
  ],
}
