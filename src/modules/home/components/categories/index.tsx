import LocalizedClientLink from "@modules/common/components/localized-client-link"

const FEATURED_CATEGORIES = [
  {
    title: "Processors",
    description: "Multi-core dominance for gaming and rendering.",
    href: "/store",
    image: "/public/cpu-placeholder.png" // using placeholder since we don't have exact names
  },
  {
    title: "Graphics Cards",
    description: "Push the limits of ray tracing and FPS.",
    href: "/store",
    image: "/public/gpu-placeholder.png"
  },
  {
    title: "Gaming Laptops",
    description: "Desktop performance, anywhere.",
    href: "/store",
    image: "/public/laptop-placeholder.png"
  }
]

const CategoriesSection = () => {
  return (
    <div className="py-24 bg-zinc-950 border-b border-zinc-800">
      <div className="content-container">
        <div className="flex flex-col items-center text-center mb-16 gap-4">
          <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight">
            Shop By <span className="text-brand">Category</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl text-lg">
            Upgrade your rig with our hand-picked selection of top-tier components.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FEATURED_CATEGORIES.map((cat, idx) => (
            <LocalizedClientLink href={cat.href} key={idx} className="group block">
              <div className="bg-zinc-900 border border-zinc-800 rounded-sm overflow-hidden transition-all duration-300 group-hover:border-brand group-hover:-translate-y-1 group-hover:shadow-[0_0_30px_-5px_rgba(118,185,0,0.3)]">
                <div className="h-64 bg-zinc-950 flex items-center justify-center p-8 relative overflow-hidden">
                  {/* Placeholder for real images. We use a CSS pattern for now to look cool */}
                  <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-700 via-zinc-900 to-zinc-950" />
                  <div className="z-10 text-zinc-600 group-hover:text-brand transition-colors">
                    <svg className="w-24 h-24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                    </svg>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-brand transition-colors uppercase tracking-wide">{cat.title}</h3>
                  <p className="text-zinc-400 text-sm">{cat.description}</p>
                </div>
              </div>
            </LocalizedClientLink>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CategoriesSection
