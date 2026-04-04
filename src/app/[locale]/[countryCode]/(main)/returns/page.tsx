import { Metadata } from "next"
import { getDictionary } from "@/i18n"
import LegalPageTemplate from "@modules/legal/templates/legal-page"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const dict = await getDictionary(locale)
  return {
    title: dict.legal.returns.metaTitle,
    description: dict.legal.returns.metaDescription,
  }
}

export default async function ReturnsPage({
  params,
}: {
  params: Promise<{ locale: string; countryCode: string }>
}) {
  const { locale } = await params
  const dict = await getDictionary(locale)
  const data = dict.legal.returns

  return <LegalPageTemplate title={data.title} sections={data.sections} />
}
