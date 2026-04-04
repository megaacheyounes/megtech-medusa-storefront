import React from "react"

const TESTIMONIALS = [
  {
    author: "Alex 'Viper' Chen",
    role: "Pro Esports Player",
    quote: "Megtech hardware gave me the frame rate stability I needed to compete at the highest tier. Absolutely zero bottlenecks during tournament play."
  },
  {
    author: "Sarah Jenkins",
    role: "3D Artist & Streamer",
    quote: "Rendering times cut entirely in half. The multi-core processor I got here is a beast. 'Always Adding Value' is an understatement."
  },
  {
    author: "Marcus Rivera",
    role: "Hardware Enthusiast",
    quote: "The cooling solutions and factory clock speeds are insane out of the box. Megtech is my permanent go-to for upgrades from now on."
  }
]

const StarRating = () => (
  <div className="flex gap-1 mb-4">
    {[1, 2, 3, 4, 5].map((star) => (
      <svg key={star} className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
)

const TestimonialsSection = () => {
  return (
    <div className="py-24 bg-white border-b border-neutral-200">
      <div className="content-container flex flex-col items-center">
        <div className="text-center mb-16">
          <p className="text-black font-bold uppercase tracking-widest text-xs mb-4">Verified Customer Reviews</p>
          <h2 className="text-4xl md:text-5xl font-black text-black tracking-tighter">
            Trusted by Professionals.
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {TESTIMONIALS.map((t, idx) => (
            <div key={idx} className="bg-neutral-50 p-8 border border-neutral-200 hover:border-black transition-colors flex flex-col justify-between">
              <div>
                <StarRating />
                <p className="text-neutral-700 font-medium text-base leading-relaxed mb-8">
                  "{t.quote}"
                </p>
              </div>
              
              <div className="flex items-center gap-4 mt-auto border-t border-neutral-200 pt-6">
                <div>
                  <h4 className="text-black font-black tracking-tighter text-lg">{t.author}</h4>
                  <p className="text-neutral-500 text-xs font-medium uppercase tracking-wider">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TestimonialsSection
