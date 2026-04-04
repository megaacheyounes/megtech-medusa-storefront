const TRUST_FEATURES = [
  {
    icon: (
      <svg className="w-6 h-6 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
    title: "Free Express Shipping",
    subtitle: "On orders over $500",
  },
  {
    icon: (
      <svg className="w-6 h-6 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 15v-1a4 4 0 00-4-4H8m0 0l3 3m-3-3l3-3m9 14V5a2 2 0 00-2-2H6a2 2 0 00-2 2v16l4-2 4 2 4-2 4 2z" />
      </svg>
    ),
    title: "30-Day Returns",
    subtitle: "Hassle-free hardware returns",
  },
  {
    icon: (
      <svg className="w-6 h-6 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Secure Checkout",
    subtitle: "Encrypted payment gateways",
  },
  {
    icon: (
      <svg className="w-6 h-6 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "24/7 Tech Support",
    subtitle: "Expert community assistance",
  },
]

const TrustBar = () => {
  return (
    <div className="bg-white border-b border-neutral-200 py-8 hidden md:block">
      <div className="content-container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 divide-x-0 md:divide-x divide-neutral-200">
          {TRUST_FEATURES.map((feature, idx) => (
            <div key={idx} className="flex items-center gap-4 px-2 md:px-6 justify-center md:justify-center group cursor-default">
              <div className="text-neutral-400 group-hover:text-black transition-colors duration-300">
                {feature.icon}
              </div>
              <div className="flex flex-col">
                <span className="text-black font-semibold text-xs uppercase tracking-wider">
                  {feature.title}
                </span>
                <span className="text-neutral-500 text-xs">
                  {feature.subtitle}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TrustBar
