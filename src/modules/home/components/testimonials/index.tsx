import { Quote } from "lucide-react"

const reviews = [
  {
    id: 1,
    name: "Amine B.",
    location: "Algiers",
    text: "The delivery was fast and the GPU was perfectly packaged. Installed it right away and it works exactly as described. Highly recommended!",
  },
  {
    id: 2,
    name: "Yacine T.",
    location: "Oran",
    text: "Got an RTX 3070 for a price I couldn't find anywhere else in the local shops. Communication on Facebook was top notch and very transparent.",
  },
  {
    id: 3,
    name: "Mehdi K.",
    location: "Constantine",
    text: "I was initially skeptical about buying 'used' electronics, but Megtech completely changed my mind. Received the product safely and paid at the door. No surprises, just quality.",
  }
]

const Testimonials = () => {
  return (
    <div className="py-24 bg-white">
      <div className="content-container mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-16 text-ui-fg-base">
          What our customers say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div 
              key={review.id} 
              className="flex flex-col p-8 bg-ui-bg-subtle rounded-2xl border border-ui-border-base relative"
            >
              <Quote className="w-10 h-10 text-brand opacity-20 absolute top-6 right-6" />
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
