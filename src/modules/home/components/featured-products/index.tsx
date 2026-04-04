import { HttpTypes } from "@medusajs/types"
import ProductRail from "@modules/home/components/featured-products/product-rail"
import type { Dictionary } from "@/i18n/types"

export default async function FeaturedProducts({
  collections,
  region,
  dict,
}: {
  collections: HttpTypes.StoreCollection[]
  region: HttpTypes.StoreRegion
  dict: Dictionary
}) {
  return collections.map((collection) => (
    <li key={collection.id}>
      <ProductRail collection={collection} region={region} dict={dict} />
    </li>
  ))
}
