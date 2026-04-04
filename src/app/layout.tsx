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

export default function RootLayout(props: {
  children: React.ReactNode
  params?: { locale?: string }
}) {
  // Note: lang/dir are set per-locale in the [locale] layout
  return (
    <html lang="en" data-mode="light">
      <body>
        <main className="relative">{props.children}</main>
      </body>
    </html>
  )
}
