"use client"

import FilterRadioGroup from "@modules/common/components/filter-radio-group"
import type { Dictionary } from "@/i18n/types"

export type SortOptions = "price_asc" | "price_desc" | "created_at"

type SortProductsProps = {
  sortBy: SortOptions
  setQueryParams: (name: string, value: SortOptions) => void
  dict: Dictionary
  "data-testid"?: string
}

const SortProducts = ({
  "data-testid": dataTestId,
  sortBy,
  setQueryParams,
  dict,
}: SortProductsProps) => {
  const sortOptions = [
    { value: "created_at", label: dict.store.sortOptions.latest },
    { value: "price_asc", label: dict.store.sortOptions.priceLow },
    { value: "price_desc", label: dict.store.sortOptions.priceHigh },
  ]

  const handleChange = (value: SortOptions) => {
    setQueryParams("sortBy", value)
  }

  return (
    <FilterRadioGroup
      title={dict.store.sortBy}
      items={sortOptions}
      value={sortBy}
      handleChange={handleChange}
      data-testid={dataTestId}
    />
  )
}

export default SortProducts
