import { ShieldCheck, MapPin, GaugeCircle, TrendingDown, DollarSign } from "lucide-react"
import { Heading } from "@medusajs/ui"
import type { Dictionary } from "@/i18n/types"

const ICONS = [ShieldCheck, MapPin, GaugeCircle, TrendingDown, DollarSign]

const WhyMegtech = ({ dict }: { dict: Dictionary }) => {
  const w = dict.home.whyMegtech
  return (
    <div className="py-24 bg-ui-bg-subtle border-y border-ui-border-base">
      <div className="content-container mx-auto">
        <div className="text-center mb-16">
          <Heading level="h2" className="text-3xl font-semibold mb-4">
            {w.sectionTitle}
          </Heading>
          <p className="text-ui-fg-subtle max-w-2xl mx-auto text-lg">{w.sectionSubtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {w.features.map((feature, idx) => {
            const Icon = ICONS[idx]
            return (
              <div
                key={idx}
                className="bg-white p-8 border border-ui-border-base rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="mb-6 inline-block p-4 bg-green-50 rounded-full">
                  <Icon className="w-8 h-8 text-brand" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-medium mb-3 text-ui-fg-base">{feature.title}</h3>
                <p className="text-ui-fg-subtle leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default WhyMegtech
