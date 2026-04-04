import { RefreshCcw, CheckCircle2, Banknote, Truck } from "lucide-react"

const TrustBar = () => {
  return (
    <div className="w-full bg-ui-bg-subtle border-b border-ui-border-base py-6">
      <div className="content-container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-4">
          <div className="flex flex-col items-center justify-center text-center gap-2">
            <RefreshCcw className="w-6 h-6 text-brand" strokeWidth={1.5} />
            <span className="text-sm font-medium text-ui-fg-base">Hassle-free returns & replacement</span>
          </div>
          <div className="flex flex-col items-center justify-center text-center gap-2">
            <CheckCircle2 className="w-6 h-6 text-brand" strokeWidth={1.5} />
            <span className="text-sm font-medium text-ui-fg-base">Every product tested</span>
          </div>
          <div className="flex flex-col items-center justify-center text-center gap-2">
            <Banknote className="w-6 h-6 text-brand" strokeWidth={1.5} />
            <span className="text-sm font-medium text-ui-fg-base">Cash on delivery</span>
          </div>
          <div className="flex flex-col items-center justify-center text-center gap-2">
            <Truck className="w-6 h-6 text-brand" strokeWidth={1.5} />
            <span className="text-sm font-medium text-ui-fg-base">Delivered across Algeria</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TrustBar
