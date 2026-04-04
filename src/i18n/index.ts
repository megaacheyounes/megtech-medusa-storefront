import type { Dictionary, Locale } from "./types"

const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  en: () => import("./dictionaries/en").then((m) => m.default),
  fr: () => import("./dictionaries/fr").then((m) => m.default),
  ar: () => import("./dictionaries/ar").then((m) => m.default),
}

export const getDictionary = async (locale: string): Promise<Dictionary> => {
  const validLocale = (["en", "fr", "ar"].includes(locale) ? locale : "en") as Locale
  return dictionaries[validLocale]()
}

export { type Locale, type Dictionary }
export { locales, defaultLocale } from "./types"
