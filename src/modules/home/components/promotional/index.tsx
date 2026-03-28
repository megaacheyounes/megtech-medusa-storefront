import { Button } from "@medusajs/ui"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

const PromotionalSection = () => {
  return (
    <div className="relative border-b border-zinc-800 overflow-hidden bg-zinc-950">
      {/* Background visual flair */}
      <div className="absolute inset-0 z-0 flex shadow-[inset_0_0_100px_rgba(118,185,0,0.15)] pointer-events-none" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand/10 to-transparent pointer-events-none" />
      
      <div className="content-container relative z-10 py-24 md:py-32 flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="max-w-2xl text-left">
          <span className="text-brand font-bold uppercase tracking-widest text-sm mb-4 block">
            The Megtech Promise
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight mb-6">
            Always Adding <span className="text-brand">Value</span>.
          </h2>
          <p className="text-zinc-400 text-lg md:text-xl leading-relaxed mb-8">
            We don't just sell components; we engineer advantages. From meticulously binned silicon to factory-overclocked mastery, every piece of hardware we ship is designed to give you the competitive edge. Experience uncompromised performance and relentless value.
          </p>
          <LocalizedClientLink href="/store">
            <Button variant="primary" className="bg-white hover:bg-zinc-200 text-zinc-950 font-bold px-8 py-3 rounded-sm h-12 text-base transition-colors shadow-lg">
              Upgrade Your Setup
            </Button>
          </LocalizedClientLink>
        </div>
        
        {/* Abstract graphic representing "Value/Performance" */}
        <div className="hidden md:flex w-full md:w-1/3 justify-center relative">
          <div className="w-64 h-64 border-2 border-brand/50 rounded-full animate-[spin_10s_linear_infinite] absolute mix-blend-screen" />
          <div className="w-48 h-48 bg-brand/30 blur-2xl rounded-full absolute" />
          <div className="w-56 h-56 border border-brand rounded-sm rotate-45 flex items-center justify-center bg-zinc-900/50 backdrop-blur-sm z-10 shadow-[0_0_50px_rgba(118,185,0,0.2)]">
            <span className="text-4xl font-black text-white -rotate-45 italic">M</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PromotionalSection
