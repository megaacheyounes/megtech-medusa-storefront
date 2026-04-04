"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@radix-ui/react-accordion"
import { ChevronDown } from "lucide-react"

type FaqItem = { question: string; answer: string }

const FaqAccordion = ({ items }: { items: FaqItem[] }) => {
  return (
    <Accordion type="single" collapsible className="flex flex-col gap-3">
      {items.map((item, idx) => (
        <AccordionItem
          key={idx}
          value={`item-${idx}`}
          className="border border-ui-border-base rounded-xl overflow-hidden"
        >
          <AccordionTrigger className="w-full flex items-center justify-between p-6 text-start hover:bg-ui-bg-subtle transition-colors group">
            <span className="font-medium text-ui-fg-base text-base">{item.question}</span>
            <ChevronDown className="w-5 h-5 text-ui-fg-subtle shrink-0 group-data-[state=open]:rotate-180 transition-transform duration-200" />
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-6 text-ui-fg-subtle leading-relaxed whitespace-pre-line">
            {item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}

export default FaqAccordion
