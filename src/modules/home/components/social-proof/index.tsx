import type { Dictionary } from "@/i18n/types"

const SocialProof = ({ dict }: { dict: Dictionary }) => {
  const s = dict.home.socialProof
  return (
    <div className="py-20 bg-brand text-white">
      <div className="content-container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div className="flex flex-col gap-2">
            <span className="text-5xl font-bold">{s.yearsExp.value}</span>
            <span className="text-lg font-medium opacity-90">{s.yearsExp.label}</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-5xl font-bold">{s.customers.value}</span>
            <span className="text-lg font-medium opacity-90">{s.customers.label}</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-5xl font-bold">{s.coverage.value}</span>
            <span className="text-lg font-medium opacity-90">{s.coverage.label}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SocialProof
