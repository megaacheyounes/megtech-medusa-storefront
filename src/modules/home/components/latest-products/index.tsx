import { listProducts } from "@lib/data/products"
import { HttpTypes } from "@medusajs/types"
import ProductPreview from "@modules/products/components/product-preview"
import InteractiveLink from "@modules/common/components/interactive-link"

export default async function LatestProducts({
  region,
}: {
  region: HttpTypes.StoreRegion
}) {
  const {
    response: { products: latestProducts },
  } = await listProducts({
    regionId: region.id,
    queryParams: {
      order: "-created_at",
      limit: 4,
      fields: "*variants.calculated_price",
    },
  })

  if (!latestProducts || latestProducts.length === 0) {
    return null
  }

  return (
    <div className="content-container py-16 bg-zinc-950 border-b border-zinc-800">
      <div className="flex justify-between items-end mb-10">
        <h2 className="text-3xl font-black uppercase tracking-tight text-white border-l-4 border-brand pl-4">
          Latest Arrivals
        </h2>
        <InteractiveLink href="/store">
          Shop all
        </InteractiveLink>
      </div>
      <ul className="grid grid-cols-2 small:grid-cols-4 gap-x-6 gap-y-16">
        {latestProducts.map((product) => (
          <li key={product.id}>
            <ProductPreview product={product} region={region} isFeatured />
          </li>
        ))}
      </ul>
    </div>
  )
}
