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
    title: dict.legal.privacy.metaTitle,
    description: dict.legal.privacy.metaDescription,
  }
}

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: string; countryCode: string }>
}) {
  const { locale } = await params
  const dict = await getDictionary(locale)
  const data = dict.legal.privacy

  return <LegalPageTemplate title={data.title} sections={data.sections} />
}
