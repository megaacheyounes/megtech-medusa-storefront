import { Metadata } from "next"
import { getDictionary } from "@/i18n"
import { SortOptions } from "@modules/store/components/refinement-list/sort-products"
import StoreTemplate from "@modules/store/templates"

type Params = {
  searchParams: Promise<{ sortBy?: SortOptions; page?: string }>
  params: Promise<{ locale: string; countryCode: string }>
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { locale } = await params
  const dict = await getDictionary(locale)
  return {
    title: dict.store.pageTitle,
    description: dict.store.pageDescription,
  }
}

export default async function StorePage(props: Params) {
  const params = await props.params
  const searchParams = await props.searchParams
  const { sortBy, page } = searchParams
  const dict = await getDictionary(params.locale)

  return (
    <StoreTemplate
      sortBy={sortBy}
      page={page}
      countryCode={params.countryCode}
      dict={dict}
    />
  )
}
