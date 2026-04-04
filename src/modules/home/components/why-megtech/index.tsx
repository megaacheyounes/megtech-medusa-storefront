import { ShieldCheck, MapPin, GaugeCircle, TrendingDown, DollarSign } from "lucide-react"
import { Heading } from "@medusajs/ui"

const features = [
  {
    icon: <ShieldCheck className="w-8 h-8 text-brand" strokeWidth={1.5} />,
    title: "5+ Years Experience",
    description: "A trusted seller in the Algerian tech community with hundreds of satisfied customers."
  },
  {
    icon: <MapPin className="w-8 h-8 text-brand" strokeWidth={1.5} />,
    title: "Imported from Dubai",
    description: "We source our electronics directly from premium markets to guarantee quality."
  },
  {
    icon: <GaugeCircle className="w-8 h-8 text-brand" strokeWidth={1.5} />,
    title: "100% Tested Before Sale",
    description: "Every single GPU, CPU, and accessory is rigorously tested to ensure performance."
  },
  {
    icon: <TrendingDown className="w-8 h-8 text-brand" strokeWidth={1.5} />,
    title: "Unbeatable Prices",
    description: "We offer significantly better pricing compared to local market standards."
  },
  {
    icon: <DollarSign className="w-8 h-8 text-brand" strokeWidth={1.5} />,
    title: "Cash On Delivery (COD)",
    description: "Pay only when you receive and inspect your product. Zero risk involved."
  }
]

const WhyMegtech = () => {
  return (
    <div className="py-24 bg-ui-bg-subtle border-y border-ui-border-base">
      <div className="content-container mx-auto">
        <div className="text-center mb-16">
          <Heading level="h2" className="text-3xl font-semibold mb-4">
            Why Choose Megtech?
          </Heading>
          <p className="text-ui-fg-subtle max-w-2xl mx-auto text-lg">
            We are dedicated to providing premium used tech with complete transparency and trust.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div 
              key={idx} 
              className="bg-white p-8 border border-ui-border-base rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="mb-6 inline-block p-4 bg-green-50 rounded-full">
                {feature.icon}
              </div>
              <h3 className="text-xl font-medium mb-3 text-ui-fg-base">{feature.title}</h3>
              <p className="text-ui-fg-subtle leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default WhyMegtech
