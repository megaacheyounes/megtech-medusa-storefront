import { listCategories } from "@lib/data/categories"
import { listCollections } from "@lib/data/collections"
import { Text, clx } from "@medusajs/ui"

import LocalizedClientLink from "@modules/common/components/localized-client-link"
import MedusaCTA from "@modules/layout/components/medusa-cta"

export default async function Footer() {
  const { collections } = await listCollections({
    fields: "*products",
  })
  const productCategories = await listCategories()

  return (
    <footer className="border-t border-neutral-200 w-full bg-neutral-50">
      <div className="content-container flex flex-col w-full">
        <div className="flex flex-col gap-y-6 xsmall:flex-row items-start justify-between py-20 lg:py-32">
          <div className="max-w-[300px]">
            <LocalizedClientLink
              href="/"
              className="flex items-center gap-2 mb-4 hover:opacity-70 transition-opacity"
            >
              <div className="w-8 h-8 flex items-center justify-center text-black border border-black font-black text-xl italic">M</div>
              <span className="font-black text-xl tracking-tight text-black uppercase">MEGTECH</span>
            </LocalizedClientLink>
            <p className="text-sm text-neutral-500 mb-2">
              High-performance gaming hardware, premium components, and uncompromising quality.
            </p>
            <p className="text-black font-semibold italic">
              Always adding Value.
            </p>
          </div>
          <div className="text-sm gap-10 md:gap-x-16 grid grid-cols-2 sm:grid-cols-3">
            {productCategories && productCategories?.length > 0 && (
              <div className="flex flex-col gap-y-4">
                <span className="font-bold text-black uppercase tracking-wider text-xs">
                  Categories
                </span>
                <ul
                  className="grid grid-cols-1 gap-3"
                  data-testid="footer-categories"
                >
                  {productCategories?.slice(0, 6).map((c) => {
                    if (c.parent_category) {
                      return
                    }

                    const children =
                      c.category_children?.map((child) => ({
                        name: child.name,
                        handle: child.handle,
                        id: child.id,
                      })) || null

                    return (
                      <li
                        className="flex flex-col gap-2 text-neutral-500"
                        key={c.id}
                      >
                        <LocalizedClientLink
                          className={clx(
                            "hover:text-black transition-colors font-medium",
                            children && "text-neutral-800"
                          )}
                          href={`/categories/${c.handle}`}
                          data-testid="category-link"
                        >
                          {c.name}
                        </LocalizedClientLink>
                        {children && (
                          <ul className="grid grid-cols-1 ml-3 gap-2 mt-1">
                            {children &&
                              children.map((child) => (
                                <li key={child.id}>
                                  <LocalizedClientLink
                                    className="hover:text-black transition-colors"
                                    href={`/categories/${child.handle}`}
                                    data-testid="category-link"
                                  >
                                    {child.name}
                                  </LocalizedClientLink>
                                </li>
                              ))}
                          </ul>
                        )}
                      </li>
                    )
                  })}
                </ul>
              </div>
            )}
            {collections && collections.length > 0 && (
              <div className="flex flex-col gap-y-4">
                <span className="font-bold text-black uppercase tracking-wider text-xs">
                  Collections
                </span>
                <ul
                  className={clx(
                    "grid grid-cols-1 gap-3 text-neutral-500 font-medium",
                    {
                      "grid-cols-2": (collections?.length || 0) > 3,
                    }
                  )}
                >
                  {collections?.slice(0, 6).map((c) => (
                    <li key={c.id}>
                      <LocalizedClientLink
                        className="hover:text-black transition-colors"
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
              <span className="font-bold text-black uppercase tracking-wider text-xs">Socials</span>
              <ul className="grid grid-cols-1 gap-y-3 text-neutral-500 font-medium">
                <li>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-black transition-colors"
                  >
                    Twitter / X
                  </a>
                </li>
                <li>
                  <a
                    href="https://discord.com"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-black transition-colors"
                  >
                    Discord
                  </a>
                </li>
                <li>
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-black transition-colors"
                  >
                    YouTube
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex w-full mb-16 justify-between items-center text-neutral-400 border-t border-neutral-200 pt-8 font-medium">
          <Text className="text-sm">
            © {new Date().getFullYear()} Megtech. All rights reserved.
          </Text>
          <Text className="text-sm">
            made with &lt;3 by Megtech
          </Text>
        </div>
      </div>
    </footer>
  )
}
