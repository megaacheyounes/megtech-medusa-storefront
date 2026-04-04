import { Metadata } from "next"
import { getDictionary } from "@/i18n"
import LoginTemplate from "@modules/account/templates/login-template"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const dict = await getDictionary(locale)
  return {
    title: dict.account.logIn,
    description: `${dict.account.logIn} — ${dict.nav.storeName}`,
  }
}

export default function Login() {
  return <LoginTemplate />
}
