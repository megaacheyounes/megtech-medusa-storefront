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

const TestimonialsSection = () => {
  return (
    <div className="py-24 bg-zinc-900 border-b border-zinc-800">
      <div className="content-container flex flex-col items-center">
        <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight mb-16 text-center">
          Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-lime-400">Professionals</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {TESTIMONIALS.map((t, idx) => (
            <div key={idx} className="bg-zinc-950 p-8 rounded-sm border border-zinc-800 hover:border-brand/50 transition-colors shadow-lg relative flex flex-col justify-between">
              {/* Decorative Quote Mark */}
              <div className="text-6xl text-brand/20 font-serif absolute top-4 left-6 pointer-events-none">"</div>
              
              <p className="text-zinc-300 text-lg leading-relaxed relative z-10 italic mb-8">
                "{t.quote}"
              </p>
              
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center font-bold text-brand uppercase text-lg border border-zinc-700">
                  {t.author.charAt(0)}
                </div>
                <div>
                  <h4 className="text-white font-bold">{t.author}</h4>
                  <p className="text-brand text-sm">{t.role}</p>
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
