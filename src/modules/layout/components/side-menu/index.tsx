"use client"

import { Popover, PopoverPanel, Transition } from "@headlessui/react"
import { ArrowRightMini, XMark } from "@medusajs/icons"
import { Text, clx, useToggleState } from "@medusajs/ui"
import { Fragment, useTransition } from "react"
import { useParams, usePathname, useRouter } from "next/navigation"

import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CountrySelect from "../country-select"
import { HttpTypes } from "@medusajs/types"
import type { Dictionary } from "@/i18n/types"
import { locales } from "@/i18n/types"

const LOCALE_LABELS: Record<string, string> = {
  en: "English",
  fr: "Français",
  ar: "العربية",
}

type SideMenuProps = {
  regions: HttpTypes.StoreRegion[] | null
  dict: Dictionary
}

const SideMenu = ({ regions, dict }: SideMenuProps) => {
  const countryToggleState = useToggleState()
  const { locale, countryCode } = useParams<{ locale: string; countryCode: string }>()
  const pathname = usePathname()
  const router = useRouter()
  const [isPending, startTransition] = useTransition()

  const SideMenuItems = [
    { name: dict.nav.home, href: "/" },
    { name: dict.nav.store, href: "/store" },
    { name: dict.nav.account, href: "/account" },
    { name: dict.nav.cart, href: "/cart" },
  ]

  const handleLocaleChange = (newLocale: string) => {
    const newPath = pathname.replace(`/${locale}/`, `/${newLocale}/`)
    startTransition(() => {
      router.push(newPath)
    })
  }

  return (
    <div className="h-full">
      <div className="flex items-center h-full">
        <Popover className="h-full flex">
          {({ open, close }) => (
            <>
              <div className="relative flex h-full">
                <Popover.Button
                  data-testid="nav-menu-button"
                  className="relative h-full flex items-center transition-all ease-out duration-200 focus:outline-none hover:text-ui-fg-base"
                >
                  {dict.nav.menu}
                </Popover.Button>
              </div>

              {open && (
                <div
                  className="fixed inset-0 z-[50] bg-black/0 pointer-events-auto"
                  onClick={close}
                  data-testid="side-menu-backdrop"
                />
              )}

              <Transition
                show={open}
                as={Fragment}
                enter="transition ease-out duration-150"
                enterFrom="opacity-0"
                enterTo="opacity-100 backdrop-blur-2xl"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 backdrop-blur-2xl"
                leaveTo="opacity-0"
              >
                <PopoverPanel className="flex flex-col absolute w-full pr-4 sm:pr-0 sm:w-1/3 2xl:w-1/4 sm:min-w-min h-[calc(100vh-1rem)] z-[51] inset-x-0 text-sm text-ui-fg-on-color m-2 backdrop-blur-2xl">
                  <div
                    data-testid="nav-menu-popup"
                    className="flex flex-col h-full bg-[rgba(3,7,18,0.5)] rounded-rounded justify-between p-6"
                  >
                    <div className="flex justify-end" id="xmark">
                      <button data-testid="close-menu-button" onClick={close}>
                        <XMark />
                      </button>
                    </div>
                    <ul className="flex flex-col gap-6 items-start justify-start">
                      {SideMenuItems.map(({ name, href }) => (
                        <li key={href}>
                          <LocalizedClientLink
                            href={href}
                            className="text-3xl leading-10 hover:text-ui-fg-disabled"
                            onClick={close}
                          >
                            {name}
                          </LocalizedClientLink>
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-col gap-y-6">
                      <div className="flex flex-col gap-y-2">
                        <span className="txt-compact-small text-ui-fg-on-color/70">
                          {dict.common.language}
                        </span>
                        <div className="flex gap-x-2 flex-wrap gap-y-2">
                          {locales.map((loc) => (
                            <button
                              key={loc}
                              onClick={() => { handleLocaleChange(loc); close() }}
                              disabled={isPending}
                              className={clx(
                                "px-3 py-1 rounded-full text-xs font-medium border transition-colors",
                                locale === loc
                                  ? "bg-white text-black border-white"
                                  : "bg-transparent text-white border-white/40 hover:border-white"
                              )}
                            >
                              {LOCALE_LABELS[loc]}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div
                        className="flex justify-between"
                        onMouseEnter={countryToggleState.open}
                        onMouseLeave={countryToggleState.close}
                      >
                        {regions && (
                          <CountrySelect
                            toggleState={countryToggleState}
                            regions={regions}
                          />
                        )}
                        <ArrowRightMini
                          className={clx(
                            "transition-transform duration-150",
                            countryToggleState.state ? "-rotate-90" : ""
                          )}
                        />
                      </div>
                      <Text className="flex justify-between txt-compact-small">
                        {dict.footer.copyright}
                      </Text>
                    </div>
                  </div>
                </PopoverPanel>
              </Transition>
            </>
          )}
        </Popover>
      </div>
    </div>
  )
}

export default SideMenu
