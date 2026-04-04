import React from "react"

import UnderlineLink from "@modules/common/components/interactive-link"

import AccountNav from "../components/account-nav"
import { HttpTypes } from "@medusajs/types"

interface AccountLayoutProps {
  customer: HttpTypes.StoreCustomer | null
  children: React.ReactNode
}

const AccountLayout: React.FC<AccountLayoutProps> = ({
  customer,
  children,
}) => {
  return (
    <div className="flex-1 small:py-12" data-testid="account-page">
      <div className="flex-1 content-container h-full max-w-5xl mx-auto bg-white flex flex-col pt-8">
        <div className="grid grid-cols-1 small:grid-cols-[240px_1fr] py-12">
          <div>{customer && <AccountNav customer={customer} />}</div>
          <div className="flex-1 border-l border-neutral-100 pl-8">{children}</div>
        </div>
        <div className="flex flex-col small:flex-row items-end justify-between small:border-t border-neutral-200 py-12 gap-8">
          <div>
            <h3 className="text-2xl font-black mb-2 text-black tracking-tight">Got questions?</h3>
            <span className="text-sm font-medium text-neutral-500">
              You can find frequently asked questions and answers on our
              customer service page.
            </span>
          </div>
          <div className="text-sm font-bold text-black uppercase tracking-wider">
            <UnderlineLink href="/customer-service">
              Customer Service
            </UnderlineLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AccountLayout
