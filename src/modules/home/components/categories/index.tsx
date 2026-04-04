import LocalizedClientLink from "@modules/common/components/localized-client-link"

const FEATURED_CATEGORIES = [
  {
    title: "Processors",
    description: "Multi-core dominance for gaming and workloads.",
    href: "/store",
    icon: (
      <svg className="w-16 h-16 text-black group-hover:text-black transition-colors duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
        <rect x="4" y="4" width="16" height="16" rx="2" ry="2" />
        <rect x="9" y="9" width="6" height="6" fill="black" />
        <line x1="9" y1="1" x2="9" y2="4" />
        <line x1="15" y1="1" x2="15" y2="4" />
        <line x1="9" y1="20" x2="9" y2="23" />
        <line x1="15" y1="20" x2="15" y2="23" />
        <line x1="20" y1="9" x2="23" y2="9" />
        <line x1="20" y1="14" x2="23" y2="14" />
        <line x1="1" y1="9" x2="4" y2="9" />
        <line x1="1" y1="14" x2="4" y2="14" />
      </svg>
    ),
    colSpan: "md:col-span-2 md:row-span-2",
    bgClass: "bg-white"
  },
  {
    title: "Graphics Cards",
    description: "Push the limits of ray tracing and raw FPS.",
    href: "/store",
    icon: (
      <svg className="w-12 h-12 text-black group-hover:text-black transition-colors duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
        <rect x="2" y="5" width="20" height="14" rx="2" />
        <line x1="6" y1="12" x2="10" y2="12" />
        <line x1="14" y1="12" x2="18" y2="12" />
        <path d="M4 19v2h16v-2" />
        <circle cx="8" cy="12" r="2" fill="currentColor"/>
        <circle cx="16" cy="12" r="2" fill="currentColor"/>
      </svg>
    ),
    colSpan: "md:col-span-1 md:row-span-1",
    bgClass: "bg-neutral-50"
  },
  {
    title: "Gaming Systems",
    description: "Pre-built desktops and laptops for anywhere.",
    href: "/store",
    icon: (
      <svg className="w-12 h-12 text-black group-hover:text-black transition-colors duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
        <rect x="3" y="3" width="18" height="12" rx="2" ry="2" />
        <path d="M2 19h20l-2 3H4z" />
        <path d="M12 15v4" />
        <path d="M8 19h8" />
      </svg>
    ),
    colSpan: "md:col-span-1 md:row-span-1",
    bgClass: "bg-neutral-100"
  }
]

const CategoriesSection = () => {
  return (
    <div className="py-24 bg-white border-b border-neutral-200">
      <div className="content-container">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-black text-black tracking-tighter mb-4">
              Explore Architecture
            </h2>
            <p className="text-neutral-500 text-base">
              Upgrade your rig with our hand-picked selection of top-tier components and complete systems.
            </p>
          </div>
          <LocalizedClientLink href="/store" className="text-black font-bold uppercase tracking-wider text-sm hover:opacity-70 transition-opacity flex items-center gap-2 group border-b border-black pb-1">
            View Catalog <span className="group-hover:translate-x-1 transition-transform">→</span>
          </LocalizedClientLink>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4 h-[600px]">
          {FEATURED_CATEGORIES.map((cat, idx) => (
            <LocalizedClientLink href={cat.href} key={idx} className={`group block ${cat.colSpan}`}>
              <div className={`border border-neutral-200 p-8 transition-all duration-500 ${cat.bgClass} h-full flex items-start justify-between flex-col md:flex-row overflow-hidden relative cursor-crosshair`}>
                <div className="flex flex-col h-full justify-between z-10 relative">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-black text-black tracking-tighter mb-2">
                      {cat.title} 
                    </h3>
                    <p className="text-neutral-500 text-sm leading-relaxed max-w-xs">{cat.description}</p>
                  </div>
                  
                  <span className="text-black font-bold text-sm tracking-wide mt-8 flex items-center gap-2">
                    Shop Now <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">→</span>
                  </span>
                </div>
                
                <div className="absolute right-0 bottom-0 p-8 opacity-20 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 pointer-events-none transform origin-bottom-right">
                  {cat.icon}
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
