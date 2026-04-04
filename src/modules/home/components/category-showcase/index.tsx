import { Heading } from "@medusajs/ui"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Image from "next/image"

const categories = [
  {
    title: "Graphics Cards (GPUs)",
    handle: "gpus",
    image: "/images/gpu_category.png",
    description: "Next-gen graphics power for ultimate performance.",
  },
  {
    title: "Gaming Laptops",
    handle: "laptops",
    image: "/images/laptop_category.png",
    description: "Thin, light, and powerful portable machines.",
  },
  {
    title: "Gaming Accessories",
    handle: "accessories",
    image: "/images/accessories_category.png",
    description: "Premium headsets, mice, and keyboards to complete your setup.",
  }
]

const CategoryShowcase = () => {
  return (
    <div className="py-24 bg-white border-b border-ui-border-base">
      <div className="content-container mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <Heading level="h2" className="text-3xl font-semibold mb-3 text-ui-fg-base">
              Shop by Category
            </Heading>
            <p className="text-ui-fg-subtle text-lg">
              Explore our curated selection of premium gear.
            </p>
          </div>
          <LocalizedClientLink 
            href="/store"
            className="hidden sm:block text-brand font-medium hover:underline"
          >
            Browse all products &rarr;
          </LocalizedClientLink>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <LocalizedClientLink
              key={category.handle}
              href={`/categories/${category.handle}`}
              className="group flex flex-col relative rounded-2xl overflow-hidden border border-ui-border-base hover:shadow-xl transition-all duration-300"
            >
              <div className="w-full aspect-[4/3] bg-ui-bg-subtle relative overflow-hidden">
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col items-start text-white">
                <h3 className="text-2xl font-bold mb-2">{category.title}</h3>
                <p className="text-white/80 text-sm leading-relaxed mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                  {category.description}
                </p>
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-brand/90 backdrop-blur-md">
                  &rarr;
                </div>
              </div>
            </LocalizedClientLink>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CategoryShowcase
