import { Metadata } from "next"
import { getDictionary } from "@/i18n"
import FaqAccordion from "@modules/legal/components/faq-accordion"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const dict = await getDictionary(locale)
  return {
    title: dict.legal.faq.metaTitle,
    description: dict.legal.faq.metaDescription,
  }
}

export default async function FaqPage({
  params,
}: {
  params: Promise<{ locale: string; countryCode: string }>
}) {
  const { locale } = await params
  const dict = await getDictionary(locale)
  const data = dict.legal.faq

  return (
    <div className="py-16 bg-white min-h-screen">
      <div className="content-container mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold text-ui-fg-base mb-4">{data.title}</h1>
        <p className="text-ui-fg-subtle text-lg mb-12">{data.subtitle}</p>
        <FaqAccordion items={data.items} />
      </div>
    </div>
  )
}
