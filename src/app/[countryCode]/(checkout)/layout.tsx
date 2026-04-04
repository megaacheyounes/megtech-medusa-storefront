import LocalizedClientLink from "@modules/common/components/localized-client-link"
import ChevronDown from "@modules/common/icons/chevron-down"
import MedusaCTA from "@modules/layout/components/medusa-cta"

export default function CheckoutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="w-full bg-white relative small:min-h-screen">
      <div className="h-16 bg-white border-b border-neutral-200">
        <nav className="flex h-full items-center content-container justify-between">
          <LocalizedClientLink
            href="/cart"
            className="flex items-center gap-x-2 text-sm uppercase flex-1 basis-0 text-neutral-500 hover:text-black transition-colors font-bold tracking-wider"
            data-testid="back-to-cart-link"
          >
            <ChevronDown className="rotate-90" size={16} />
            <span className="mt-px hidden small:block">
              Back to shopping bag
            </span>
            <span className="mt-px block small:hidden">
              Back
            </span>
          </LocalizedClientLink>
          <LocalizedClientLink
            href="/"
            className="text-2xl font-black tracking-tighter uppercase text-black hover:opacity-70 transition-opacity"
            data-testid="store-link"
          >
            Megtech
          </LocalizedClientLink>
          <div className="flex-1 basis-0" />
        </nav>
      </div>
      <div className="relative bg-neutral-50 min-h-[calc(100vh-64px)]" data-testid="checkout-container">{children}</div>
      <div className="py-4 w-full flex items-center justify-center bg-neutral-50">
        <span className="text-neutral-400 text-xs font-bold uppercase tracking-widest">made with &lt;3 by Megtech</span>
      </div>
    </div>
  )
}
