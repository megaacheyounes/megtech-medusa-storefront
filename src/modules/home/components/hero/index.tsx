import { Button } from "@medusajs/ui"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

const Hero = () => {
  return (
    <div className="h-[80vh] w-full relative bg-zinc-950 flex border-b border-zinc-800 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand/20 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-brand/10 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="content-container z-10 flex flex-col justify-center items-start text-left h-full">
        <div className="max-w-3xl flex flex-col gap-6">
          <span className="text-brand font-bold uppercase tracking-[0.2em] text-sm animate-fade-in-top">
            Megtech Official Store
          </span>
          <h1 className="text-5xl md:text-7xl leading-tight text-white font-black uppercase tracking-tighter">
            Unleash Ultimate <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-lime-300">Performance</span>
          </h1>
          <p className="text-lg md:text-xl text-zinc-400 font-normal max-w-2xl leading-relaxed">
            Explore the next generation of CPUs, GPUs, and custom gaming laptops built for absolute domination. Always adding Value to your setup.
          </p>
          <div className="flex items-center gap-4 mt-4">
            <LocalizedClientLink href="/store">
              <Button variant="primary" className="bg-brand hover:bg-brand-hover text-zinc-950 font-bold px-8 py-3 rounded-sm h-12 w-40 text-base">
                Shop Hardware
              </Button>
            </LocalizedClientLink>
            <LocalizedClientLink href="/categories/laptops">
              <Button variant="secondary" className="bg-transparent border border-zinc-700 hover:border-brand hover:text-brand text-zinc-300 font-bold px-8 py-3 rounded-sm h-12 text-base transition-colors">
                View Laptops
              </Button>
            </LocalizedClientLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
