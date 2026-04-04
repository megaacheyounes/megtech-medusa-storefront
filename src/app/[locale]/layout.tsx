import { getBaseURL } from "@lib/util/env"
import { Metadata } from "next"
import { getDictionary } from "@/i18n"

export const metadata: Metadata = {
  metadataBase: new URL(getBaseURL()),
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const dict = await getDictionary(locale)
  const dir = dict.dir

  return (
    <html lang={locale} dir={dir} data-mode="light">
      <body>
        <main className="relative">{children}</main>
      </body>
    </html>
  )
}
