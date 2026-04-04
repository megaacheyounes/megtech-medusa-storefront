import { Metadata } from "next"

import FeaturedProducts from "@modules/home/components/featured-products"
import Hero from "@modules/home/components/hero"
import TrustBar from "@modules/home/components/trust-bar"
import Brands from "@modules/home/components/brands"
import CategoryShowcase from "@modules/home/components/category-showcase"
import WhyMegtech from "@modules/home/components/why-megtech"
import Testimonials from "@modules/home/components/testimonials"
import SocialProof from "@modules/home/components/social-proof"
import ProductPreview from "@modules/products/components/product-preview"
import InteractiveLink from "@modules/common/components/interactive-link"
import { listCollections } from "@lib/data/collections"
import { getRegion } from "@lib/data/regions"
import { listProducts } from "@lib/data/products"
import { getDictionary } from "@/i18n"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; countryCode: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const dict = await getDictionary(locale)
  return {
    title: dict.nav.storeName + " - Premium Used Tech | Tested & Trusted",
    description: dict.store.pageDescription,
  }
}

export default async function Home(props: {
  params: Promise<{ locale: string; countryCode: string }>
}) {
  const params = await props.params
  const { locale, countryCode } = params

  const dict = await getDictionary(locale)
  const region = await getRegion(countryCode)

  const { collections } = await listCollections({
    fields: "id, handle, title",
  })

  let products = []
  try {
    const { response } = await listProducts({
      countryCode,
      regionId: region?.id,
      queryParams: {
        limit: 8,
        fields: "*variants.calculated_price",
      },
    })
    products = response.products
  } catch (error) {
    console.error("Failed to fetch products for homepage", error)
  }

  if (!region) {
    return null
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Hero dict={dict} />
      <TrustBar dict={dict} />
      <CategoryShowcase dict={dict} />
      <Brands dict={dict} />

      {products && products.length > 0 && (
        <div className="py-16 bg-white w-full border-b border-ui-border-base">
          <div className="content-container mx-auto">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-semibold text-ui-fg-base">
                {dict.home.latestArrivals.sectionTitle}
              </h2>
              <InteractiveLink href="/store">
                {dict.home.latestArrivals.viewAll}
              </InteractiveLink>
            </div>
            <ul className="grid grid-cols-2 small:grid-cols-3 medium:grid-cols-4 gap-x-6 gap-y-8">
              {products.map((product) => (
                <li key={product.id}>
                  <ProductPreview product={product} region={region} isFeatured dict={dict} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {collections && collections.length > 0 && (
        <div className="py-16 bg-white w-full border-b border-ui-border-base">
          <ul className="flex flex-col gap-x-6">
            <FeaturedProducts collections={collections} region={region} dict={dict} />
          </ul>
        </div>
      )}

      <WhyMegtech dict={dict} />
      <SocialProof dict={dict} />
      <Testimonials dict={dict} />
    </div>
  )
}
