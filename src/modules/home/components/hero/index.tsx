import { Button, Heading } from "@medusajs/ui"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

const Hero = () => {
  return (
    <div className="relative w-full overflow-hidden bg-white border-b border-ui-border-base">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-50/50 via-white to-white"></div>
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-white to-transparent"></div>
      </div>
      
      <div className="content-container relative z-10 pt-32 pb-24 small:pt-48 small:pb-32 flex flex-col items-center text-center px-4">
        <div className="mb-6 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 border border-green-100 text-brand text-sm font-medium">
          <span className="w-2 h-2 rounded-full bg-brand animate-pulse"></span>
          <span>Cash on delivery • Nationwide delivery • No surprises</span>
        </div>

        <Heading
          level="h1"
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-ui-fg-base max-w-4xl mb-6"
        >
          Premium Tech.<br className="hidden sm:block" /> 
          <span className="text-brand">Tested. Trusted.</span> Affordable.
        </Heading>

        <p className="text-lg md:text-xl text-ui-fg-subtle max-w-2xl font-normal mb-10 leading-relaxed">
          Imported from Dubai. Fully tested. Delivered across Algeria.
          Upgrade your setup with confidence without paying retail prices.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <LocalizedClientLink href="/store" className="w-full sm:w-auto">
            <Button size="large" className="w-full sm:w-auto bg-brand hover:bg-green-700 text-white rounded-full font-medium px-8">
              Shop Now
            </Button>
          </LocalizedClientLink>
          <LocalizedClientLink href="/store" className="w-full sm:w-auto">
            <Button size="large" variant="secondary" className="w-full sm:w-auto rounded-full font-medium">
              Browse Categories
            </Button>
          </LocalizedClientLink>
        </div>
      </div>
    </div>
  )
}

export default Hero
