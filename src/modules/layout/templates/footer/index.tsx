import { listCategories } from "@lib/data/categories"
import { listCollections } from "@lib/data/collections"
import { Text, clx } from "@medusajs/ui"
import { MapPin, Phone } from "lucide-react"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import type { Dictionary } from "@/i18n/types"

export default async function Footer({ dict }: { dict: Dictionary }) {
  const { collections } = await listCollections({
    fields: "*products",
  })
  const productCategories = await listCategories()

  return (
    <footer className="border-t border-ui-border-base w-full bg-white pt-10">
      <div className="content-container flex flex-col w-full">
        <div className="flex flex-col gap-y-12 md:flex-row items-start justify-between py-16">
          <div className="md:w-1/3 flex flex-col gap-6">
            <LocalizedClientLink
              href="/"
              className="text-3xl font-bold text-brand uppercase tracking-tighter"
            >
              Megtech
            </LocalizedClientLink>
            <p className="text-ui-fg-subtle text-sm md:w-5/6 leading-relaxed">
              {dict.footer.description}
            </p>
            <div className="flex flex-col gap-3 mt-2 text-ui-fg-subtle text-sm">
              <a
                href="https://www.facebook.com/megtechn"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-brand transition-colors"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
                <span>{dict.footer.facebookPage}</span>
              </a>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>{dict.footer.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>{dict.footer.address}</span>
              </div>
            </div>
          </div>

          <div className="text-small-regular gap-10 md:gap-x-16 grid grid-cols-1 sm:grid-cols-3 md:w-2/3">
            {productCategories && productCategories?.length > 0 && (
              <div className="flex flex-col gap-y-4">
                <span className="font-semibold text-ui-fg-base">
                  {dict.footer.categoriesHeading}
                </span>
                <ul className="grid grid-cols-1 gap-3" data-testid="footer-categories">
                  {productCategories?.slice(0, 6).map((c) => {
                    if (c.parent_category) return null
                    return (
                      <li className="flex flex-col gap-2 text-ui-fg-subtle text-sm" key={c.id}>
                        <LocalizedClientLink
                          className="hover:text-brand transition-colors"
                          href={`/categories/${c.handle}`}
                          data-testid="category-link"
                        >
                          {c.name}
                        </LocalizedClientLink>
                      </li>
                    )
                  })}
                </ul>
              </div>
            )}

            {collections && collections.length > 0 && (
              <div className="flex flex-col gap-y-4">
                <span className="font-semibold text-ui-fg-base">
                  {dict.footer.collectionsHeading}
                </span>
                <ul className="grid grid-cols-1 gap-3 text-ui-fg-subtle text-sm">
                  {collections?.slice(0, 6).map((c) => (
                    <li key={c.id}>
                      <LocalizedClientLink
                        className="hover:text-brand transition-colors"
                        href={`/collections/${c.handle}`}
                      >
                        {c.title}
                      </LocalizedClientLink>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="flex flex-col gap-y-4">
              <span className="font-semibold text-ui-fg-base">{dict.footer.helpHeading}</span>
              <ul className="grid grid-cols-1 gap-y-3 text-ui-fg-subtle text-sm">
                <li>
                  <LocalizedClientLink href="/returns" className="hover:text-brand transition-colors">
                    {dict.footer.returnsLink}
                  </LocalizedClientLink>
                </li>
                <li>
                  <LocalizedClientLink href="/faq" className="hover:text-brand transition-colors">
                    {dict.footer.faqLink}
                  </LocalizedClientLink>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row w-full mb-16 justify-between items-center text-ui-fg-muted pt-8 border-t border-ui-border-base">
          <Text className="txt-compact-small">{dict.footer.copyright}</Text>
          <div className="mt-4 md:mt-0">
            <Text className="txt-compact-small">{dict.footer.madeWith}</Text>
          </div>
        </div>
      </div>
    </footer>
  )
}
