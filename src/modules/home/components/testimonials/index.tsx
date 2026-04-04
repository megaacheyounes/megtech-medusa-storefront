import { Quote } from "lucide-react"
import type { Dictionary } from "@/i18n/types"

const Testimonials = ({ dict }: { dict: Dictionary }) => {
  const t = dict.home.testimonials
  return (
    <div className="py-24 bg-white">
      <div className="content-container mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-16 text-ui-fg-base">
          {t.sectionTitle}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.reviews.map((review, idx) => (
            <div
              key={idx}
              className="flex flex-col p-8 bg-ui-bg-subtle rounded-2xl border border-ui-border-base relative"
            >
              <Quote className="w-10 h-10 text-brand opacity-20 absolute top-6 end-6" />
              <div className="flex-1">
                <p className="text-ui-fg-base text-lg leading-relaxed mb-8 italic">
                  "{review.text}"
                </p>
              </div>
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-brand font-bold text-lg">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-semibold text-ui-fg-base">{review.name}</h4>
                  <span className="text-sm text-ui-fg-subtle">{review.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Testimonials
