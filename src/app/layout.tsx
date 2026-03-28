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

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en" data-mode="dark" className="dark">
      <body className="bg-zinc-950 text-zinc-50 overflow-x-hidden">
        <main className="relative">{props.children}</main>
      </body>
    </html>
  )
}
