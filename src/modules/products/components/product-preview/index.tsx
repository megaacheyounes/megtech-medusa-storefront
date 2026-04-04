import { Button, Text } from "@medusajs/ui"
import { getProductPrice } from "@lib/util/get-product-price"
import { HttpTypes } from "@medusajs/types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Thumbnail from "../thumbnail"
import PreviewPrice from "./price"
import { CheckCircle2 } from "lucide-react"
import type { Dictionary } from "@/i18n/types"

export default async function ProductPreview({
  product,
  isFeatured,
  region,
  dict,
}: {
  product: HttpTypes.StoreProduct
  isFeatured?: boolean
  region: HttpTypes.StoreRegion
  dict: Dictionary
}) {
  const { cheapestPrice } = getProductPrice({ product })

  return (
    <LocalizedClientLink href={`/products/${product.handle}`} className="group">
      <div
        data-testid="product-wrapper"
        className="flex flex-col h-full bg-white rounded-xl overflow-hidden border border-ui-border-base hover:shadow-lg transition-shadow duration-300"
      >
        <div className="p-4 flex-1">
          <div className="relative mb-4">
            <Thumbnail
              thumbnail={product.thumbnail}
              images={product.images}
              size="full"
              isFeatured={isFeatured}
            />
            <div className="absolute top-2 start-2 bg-green-50 backdrop-blur-md px-2.5 py-1 rounded-full border border-green-200 text-xs font-semibold text-brand flex items-center gap-1 shadow-sm">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>{dict.product.testedBadge}</span>
            </div>
          </div>

          <div className="flex flex-col txt-compact-medium gap-1">
            <Text
              className="text-ui-fg-base font-medium line-clamp-2"
              data-testid="product-title"
            >
              {product.title}
            </Text>
            <div className="flex items-center gap-x-2 mt-2">
              {cheapestPrice && <PreviewPrice price={cheapestPrice} />}
            </div>
          </div>
        </div>

        <div className="p-4 pt-0 mt-auto">
          <Button
            variant="secondary"
            className="w-full justify-center bg-gray-50 hover:bg-brand hover:text-white transition-colors duration-200"
          >
            {dict.product.viewProduct}
          </Button>
        </div>
      </div>
    </LocalizedClientLink>
  )
}
