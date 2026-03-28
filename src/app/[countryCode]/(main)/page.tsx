import { Metadata } from "next"

import FeaturedProducts from "@modules/home/components/featured-products"
import Hero from "@modules/home/components/hero"
import CategoriesSection from "@modules/home/components/categories"
import PromotionalSection from "@modules/home/components/promotional"
import TestimonialsSection from "@modules/home/components/testimonials"
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

  if (!collections || !region) {
    return null
  }

  return (
    <>
      <Hero />
      <CategoriesSection />
      <div className="bg-zinc-950">
        <ul className="flex flex-col gap-x-6 group">
          <FeaturedProducts collections={collections} region={region} />
        </ul>
      </div>
      <PromotionalSection />
      <TestimonialsSection />
    </>
  )
}
