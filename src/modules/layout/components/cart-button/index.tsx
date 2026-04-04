import { retrieveCart } from "@lib/data/cart"
import CartDropdown from "../cart-dropdown"
import type { Dictionary } from "@/i18n/types"

export default async function CartButton({ dict }: { dict: Dictionary }) {
  const cart = await retrieveCart().catch(() => null)

  return <CartDropdown cart={cart} dict={dict} />
}
