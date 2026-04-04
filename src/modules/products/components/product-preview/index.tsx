import { Text } from "@medusajs/ui"
import { listProducts } from "@lib/data/products"
import { getProductPrice } from "@lib/util/get-product-price"
import { HttpTypes } from "@medusajs/types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Thumbnail from "../thumbnail"
import PreviewPrice from "./price"

export default async function ProductPreview({
  product,
  isFeatured,
  region,
}: {
  product: HttpTypes.StoreProduct
  isFeatured?: boolean
  region: HttpTypes.StoreRegion
}) {
  // const pricedProduct = await listProducts({
  //   regionId: region.id,
  //   queryParams: { id: [product.id!] },
  // }).then(({ response }) => response.products[0])

  // if (!pricedProduct) {
  //   return null
  // }

  const { cheapestPrice } = getProductPrice({
    product,
  })

  return (
    <LocalizedClientLink href={`/products/${product.handle}`} className="group block h-full">
      <div 
        data-testid="product-wrapper" 
        className="h-full bg-neutral-50 flex flex-col group-hover:bg-neutral-100 transition-colors duration-300"
      >
        <div className="relative aspect-square w-full bg-white flex items-center justify-center overflow-hidden border-b border-neutral-100">
          <div className="w-full h-full transform group-hover:scale-105 transition-transform duration-500 ease-out flex items-center justify-center p-6">
            <Thumbnail
              thumbnail={product.thumbnail}
              images={product.images}
              size="full"
              isFeatured={isFeatured}
            />
          </div>
        </div>
        
        <div className="flex flex-col mt-2 justify-between flex-1 gap-2 p-6 pt-0">
          <Text className="text-black font-medium text-sm line-clamp-2 leading-snug" data-testid="product-title">
            {product.title}
          </Text>
          <div className="flex items-center gap-x-2 mt-auto pt-2">
            {cheapestPrice ? (
              <div className="text-neutral-600 font-medium text-sm">
                <PreviewPrice price={cheapestPrice} />
              </div>
            ) : (
              <div className="h-6"></div>
            )}
            
            {/* Minimal Plus Icon for "Add" hint */}
            <div className="ml-auto w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0 duration-300">
               <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <path d="M6 1V11" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                 <path d="M1 6H11" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
               </svg>
            </div>
          </div>
        </div>
      </div>
    </LocalizedClientLink>
  )
}
