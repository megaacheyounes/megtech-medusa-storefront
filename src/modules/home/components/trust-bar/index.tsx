import { RefreshCcw, CheckCircle2, Banknote, Truck } from "lucide-react"
import type { Dictionary } from "@/i18n/types"

const TrustBar = ({ dict }: { dict: Dictionary }) => {
  const t = dict.home.trustBar
  const items = [
    { icon: <RefreshCcw className="w-6 h-6 text-brand" strokeWidth={1.5} />, label: t.returns },
    { icon: <CheckCircle2 className="w-6 h-6 text-brand" strokeWidth={1.5} />, label: t.tested },
    { icon: <Banknote className="w-6 h-6 text-brand" strokeWidth={1.5} />, label: t.cod },
    { icon: <Truck className="w-6 h-6 text-brand" strokeWidth={1.5} />, label: t.delivery },
  ]
  return (
    <div className="w-full bg-ui-bg-subtle border-b border-ui-border-base py-6">
      <div className="content-container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-4">
          {items.map((item, i) => (
            <div key={i} className="flex flex-col items-center justify-center text-center gap-2">
              {item.icon}
              <span className="text-sm font-medium text-ui-fg-base">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TrustBar
