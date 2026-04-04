import { Metadata } from "next"

import FeaturedProducts from "@modules/home/components/featured-products"
import Hero from "@modules/home/components/hero"
import TrustBar from "@modules/home/components/trust-bar"
import BrandsSection from "@modules/home/components/brands"
import CategoriesSection from "@modules/home/components/categories"
import PromotionalSection from "@modules/home/components/promotional"
import TestimonialsSection from "@modules/home/components/testimonials"
import LatestProducts from "@modules/home/components/latest-products"
import { listCollections } from "@lib/data/collections"
import { getRegion } from "@lib/data/regions"

export const metadata: Metadata = {
  title: "Megtech Store | Always Adding Value",
  description:
    "High-performance gaming hardware, premium components, and uncompromising quality.",
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

  // We proceed even if collections are missing to still show LatestProducts
  if (!region) {
    return null
  }

  return (
    <div className="bg-white min-h-screen">
      <Hero />
      <TrustBar />
      <BrandsSection />
      
      {/* Editorial Category Grid */}
      <CategoriesSection />
      
      {/* Latest Products as a clean section */ }
      <div className="border-b border-neutral-200">
        <LatestProducts region={region} />
      </div>
      
      <PromotionalSection />
      
      {/* Featured Products Collection */}
      <div className="bg-neutral-50 py-12 border-b border-neutral-200">
        <div className="content-container mb-8">
          <h2 className="text-4xl text-black font-black tracking-tighter">Shop Collections.</h2>
        </div>
        <ul className="flex flex-col gap-x-6 group">
          <FeaturedProducts collections={collections} region={region} />
        </ul>
      </div>
      
      <TestimonialsSection />
    </div>
  )
}
