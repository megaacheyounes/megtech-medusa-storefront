import LocalizedClientLink from "@modules/common/components/localized-client-link"

const PromotionalSection = () => {
  return (
    <div className="relative border-b border-neutral-200 overflow-hidden bg-white py-24 md:py-32">
      <div className="content-container relative z-10 flex flex-col md:flex-row items-stretch justify-between gap-12">
        <div className="w-full md:w-5/12 text-left flex flex-col justify-center">
          <div className="flex items-center gap-2 mb-4">
             <div className="w-8 h-px bg-black"></div>
             <span className="text-black font-bold uppercase tracking-widest text-xs block">
               The Megtech Standard
             </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-black tracking-tighter mb-6 leading-[0.9]">
            Designed <br/> For The <br/> <span className="text-neutral-400">Elite.</span>
          </h2>
          <p className="text-neutral-600 text-lg leading-relaxed mb-8 max-w-sm">
            We don't just sell components; we engineer advantages. Experience uncompromised performance and relentless value with every purchase.
          </p>
          <div>
            <LocalizedClientLink href="/store">
              <button className="bg-black text-white font-bold px-8 py-4 text-sm tracking-wide uppercase hover:bg-neutral-800 transition-colors">
                Learn our process
              </button>
            </LocalizedClientLink>
          </div>
        </div>
        
        <div className="w-full md:w-7/12 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-neutral-50 border border-neutral-200 p-8 transition-colors hover:bg-neutral-100 flex flex-col justify-end min-h-[300px]">
            <svg className="w-8 h-8 text-black mb-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M5 13l4 4L19 7" /></svg>
            <h3 className="text-black font-black text-2xl tracking-tighter mb-2">Premium Silicon</h3>
            <p className="text-neutral-500 text-sm leading-relaxed">We source only the highest quality components capable of sustaining maximum factory overclocks without thermal throttling.</p>
          </div>
          
          <div className="bg-neutral-50 border border-neutral-200 p-8 transition-colors hover:bg-neutral-100 flex flex-col justify-end min-h-[300px]">
            <svg className="w-8 h-8 text-black mb-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
            <h3 className="text-black font-black text-2xl tracking-tighter mb-2">Extended Coverage</h3>
            <p className="text-neutral-500 text-sm leading-relaxed">Most products come with an extended 3-year Megtech warranty, ensuring your investment is fully protected against manufacturer defects.</p>
          </div>

          <div className="bg-neutral-50 border border-neutral-200 p-8 transition-colors hover:bg-neutral-100 sm:col-span-2 flex flex-col md:flex-row items-start md:items-center gap-8 justify-between">
            <div className="max-w-md">
              <svg className="w-8 h-8 text-black mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
              <h3 className="text-black font-black text-2xl tracking-tighter mb-2">Expert Community</h3>
              <p className="text-neutral-500 text-sm leading-relaxed">Join thousands of PC enthusiasts. Get direct access to certified technicians and custom build advice from our community discord.</p>
            </div>
            <div className="hidden md:block w-32 h-32 border border-neutral-200 rounded-full flex items-center justify-center animate-[spin_10s_linear_infinite]">
              <div className="w-24 h-24 border border-dashed border-neutral-300 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PromotionalSection
