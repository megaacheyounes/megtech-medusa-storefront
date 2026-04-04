import { getBaseURL } from "@lib/util/env"
import { Metadata } from "next"
import "styles/globals.css"

export const metadata: Metadata = {
  metadataBase: new URL(getBaseURL()),
  title: {
    default: "Megtech Store",
    template: "%s | Megtech Store",
  },
}

// Root layout: minimal shell. The [locale] segment provides <html lang dir>.
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children
}
