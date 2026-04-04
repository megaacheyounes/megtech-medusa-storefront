"use client"

import { useActionState } from "react"
import { useParams } from "next/navigation"
import Input from "@modules/common/components/input"
import { LOGIN_VIEW } from "@modules/account/templates/login-template"
import ErrorMessage from "@modules/checkout/components/error-message"
import { SubmitButton } from "@modules/checkout/components/submit-button"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { signup } from "@lib/data/customer"

// Static translations for this client component
const translations = {
  en: {
    title: "Become a Megtech Store Member",
    desc: "Create your Megtech Store Member profile, and get access to an enhanced shopping experience.",
    firstName: "First name",
    lastName: "Last name",
    email: "Email",
    phone: "Phone",
    password: "Password",
    agreeToTerms: "By creating an account, you agree to Megtech's",
    privacyPolicy: "Privacy Policy",
    and: "and",
    termsOfUse: "Terms of Use",
    join: "Join",
    alreadyMember: "Already a member?",
    signIn: "Sign in",
  },
  fr: {
    title: "Devenez membre Megtech Store",
    desc: "Créez votre profil Megtech Store et accédez à une expérience d'achat améliorée.",
    firstName: "Prénom",
    lastName: "Nom",
    email: "Email",
    phone: "Téléphone",
    password: "Mot de passe",
    agreeToTerms: "En créant un compte, vous acceptez les",
    privacyPolicy: "Politique de confidentialité",
    and: "et les",
    termsOfUse: "Conditions d'utilisation",
    join: "Rejoindre",
    alreadyMember: "Déjà membre ?",
    signIn: "Se connecter",
  },
  ar: {
    title: "كن عضواً في ميجتك ستور",
    desc: "أنشئ ملفك الشخصي في ميجتك ستور واحصل على تجربة تسوق محسّنة.",
    firstName: "الاسم الأول",
    lastName: "اسم العائلة",
    email: "البريد الإلكتروني",
    phone: "رقم الهاتف",
    password: "كلمة المرور",
    agreeToTerms: "بإنشاء حساب، أنت توافق على",
    privacyPolicy: "سياسة الخصوصية",
    and: "و",
    termsOfUse: "شروط الاستخدام",
    join: "انضم",
    alreadyMember: "هل أنت عضو بالفعل؟",
    signIn: "تسجيل الدخول",
  },
}

type Props = {
  setCurrentView: (view: LOGIN_VIEW) => void
}

const Register = ({ setCurrentView }: Props) => {
  const [message, formAction] = useActionState(signup, null)
  const { locale } = useParams<{ locale: string }>()
  const t = translations[(locale as keyof typeof translations) || "en"] || translations.en

  return (
    <div className="max-w-sm flex flex-col items-center" data-testid="register-page">
      <h1 className="text-large-semi uppercase mb-6">{t.title}</h1>
      <p className="text-center text-base-regular text-ui-fg-base mb-4">{t.desc}</p>
      <form className="w-full flex flex-col" action={formAction}>
        <div className="flex flex-col w-full gap-y-2">
          <Input label={t.firstName} name="first_name" required autoComplete="given-name" data-testid="first-name-input" />
          <Input label={t.lastName} name="last_name" required autoComplete="family-name" data-testid="last-name-input" />
          <Input label={t.email} name="email" required type="email" autoComplete="email" data-testid="email-input" />
          <Input label={t.phone} name="phone" type="tel" autoComplete="tel" data-testid="phone-input" />
          <Input label={t.password} name="password" required type="password" autoComplete="new-password" data-testid="password-input" />
        </div>
        <ErrorMessage error={message} data-testid="register-error" />
        <span className="text-center text-ui-fg-base text-small-regular mt-6">
          {t.agreeToTerms}{" "}
          <LocalizedClientLink href="/privacy" className="underline">{t.privacyPolicy}</LocalizedClientLink>{" "}
          {t.and}{" "}
          <LocalizedClientLink href="/returns" className="underline">{t.termsOfUse}</LocalizedClientLink>.
        </span>
        <SubmitButton className="w-full mt-6" data-testid="register-button">
          {t.join}
        </SubmitButton>
      </form>
      <span className="text-center text-ui-fg-base text-small-regular mt-6">
        {t.alreadyMember}{" "}
        <button onClick={() => setCurrentView(LOGIN_VIEW.SIGN_IN)} className="underline">
          {t.signIn}
        </button>.
      </span>
    </div>
  )
}

export default Register
