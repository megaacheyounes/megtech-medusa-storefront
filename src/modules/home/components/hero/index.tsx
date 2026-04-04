import { Button } from "@medusajs/ui"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

const Hero = () => {
  return (
    <div className="w-full relative bg-white border-b border-neutral-200 overflow-hidden py-24 md:py-32">
      <div className="content-container z-10 flex flex-col md:flex-row items-center justify-between text-left h-full gap-12">
        <div className="w-full md:w-1/2 flex flex-col gap-8 relative z-10">
          <div className="flex items-center gap-3 mb-2 animate-fade-in-top">
            <span className="w-2 h-2 rounded-full bg-black"></span>
            <span className="text-neutral-500 font-medium tracking-widest text-xs uppercase">
              Next-Gen Architecture
            </span>
          </div>
          
          <h1 className="text-6xl md:text-8xl leading-[0.95] text-black font-black tracking-tighter">
            Perform. <br/>
            Beyond. <br/>
            Limits.
          </h1>
          
          <p className="text-lg md:text-xl text-neutral-600 font-normal leading-relaxed max-w-md">
            Uncompromising components engineered for those who demand the absolute best. Welcome to the new era of computing.
          </p>
          
          <div className="flex items-center gap-6 mt-4">
            <LocalizedClientLink href="/store">
              <span className="group flex items-center gap-3 text-black font-bold uppercase tracking-wide text-sm cursor-pointer whitespace-nowrap">
                <span className="border-b-2 border-transparent group-hover:border-black transition-all pb-1">Shop Latest</span>
                <span className="group-hover:translate-x-2 transition-transform">→</span>
              </span>
            </LocalizedClientLink>
            <LocalizedClientLink href="/categories/laptops">
              <span className="group flex items-center gap-3 text-neutral-500 font-bold uppercase tracking-wide text-sm cursor-pointer whitespace-nowrap hover:text-black transition-colors">
                <span className="pb-1">Explore Systems</span>
              </span>
            </LocalizedClientLink>
          </div>
        </div>

        {/* Abstract / Technical Rig Representation on the right */}
        <div className="w-full md:w-1/2 relative h-[500px] flex justify-center items-center bg-neutral-50 border border-neutral-200">
           <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-neutral-200/50 to-transparent pointer-events-none" />
           {/* Abstract minimalist shape representing a chip/tower */}
           <div className="w-64 h-80 border-2 border-black flex flex-col shadow-2xl relative bg-white">
             <div className="w-full h-8 border-b-2 border-black flex items-center px-3 gap-2">
               <div className="w-2 h-2 rounded-full bg-black"></div>
               <div className="w-2 h-2 rounded-full bg-neutral-300"></div>
             </div>
             <div className="flex-1 p-6 flex flex-col gap-4">
                <div className="w-full h-1/2 border-2 border-neutral-200 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-neutral-100 group-hover:bg-neutral-200 transition-colors"></div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 border border-neutral-300 rounded-full animate-[spin_4s_linear_infinite]"></div>
                </div>
                <div className="w-full h-12 bg-black mt-auto"></div>
             </div>
           </div>
           
           <div className="absolute top-8 right-8 w-24 h-24 border border-neutral-300 rounded-full border-dashed hidden md:block animate-[spin_20s_linear_infinite]"></div>
        </div>
      </div>
    </div>
  )
}

export default Hero
