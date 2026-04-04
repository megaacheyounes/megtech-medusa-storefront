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

export const metadata: Metadata = {
  title: "Megtech - Premium Used Tech | Tested & Trusted",
  description:
    "Buy high-end used GPUs, CPUs, and gaming gear. Imported from Dubai, fully tested, and delivered across Algeria with Cash on Delivery.",
}

export default async function Home(props: {
  params: Promise<{ countryCode: string }>
}) {
  const params = await props.params

  const { countryCode } = params

  const region = await getRegion(countryCode)

  const { collections } = await listCollections({
    fields: "id, handle, title",
  })

  // Fetch some general products to display on the homepage
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
    // Graceful fallback if fetching fails
    console.error("Failed to fetch products for homepage", error)
  }

  if (!region) {
    return null
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <TrustBar />
      <CategoryShowcase />
      <Brands />
      
      {/* Fallback to display general products if collections are empty, or just display them normally */}
      {products && products.length > 0 && (
        <div className="py-16 bg-white w-full border-b border-ui-border-base">
          <div className="content-container mx-auto">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-semibold text-ui-fg-base">Latest Arrivals</h2>
              <InteractiveLink href="/store">View all products</InteractiveLink>
            </div>
            <ul className="grid grid-cols-2 small:grid-cols-3 medium:grid-cols-4 gap-x-6 gap-y-8">
              {products.map((product) => (
                <li key={product.id}>
                  <ProductPreview product={product} region={region} isFeatured />
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Featured Collections Rail */}
      {collections && collections.length > 0 && (
        <div className="py-16 bg-white w-full border-b border-ui-border-base">
          <ul className="flex flex-col gap-x-6">
            <FeaturedProducts collections={collections} region={region} />
          </ul>
        </div>
      )}

      <WhyMegtech />
      <SocialProof />
      <Testimonials />
    </div>
  )
}
