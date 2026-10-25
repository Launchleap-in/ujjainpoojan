"use client";

import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/app/components/ui/accordion";

export type Question = { id: string; question: string; answer: string };
export function FaqList({ items, light = false }: { items: readonly Question[]; light?: boolean }) {
  return (
    <Accordion
      defaultValue={items[0] ? [items[0].id] : []}
      className={cn("border-t", light && "border-gold/30")}
    >
      {items.map((item, i) => (
        <AccordionItem key={item.id} value={item.id} className={light ? "border-gold/30" : "border-border"}>
          <AccordionTrigger className={cn("gap-4 rounded-none py-6 text-sm leading-7 hover:no-underline sm:text-base", light ? "text-cream **:data-[slot=accordion-trigger-icon]:text-saffron" : "text-wine")}>
            <span className="text-xs font-normal text-gold" aria-hidden="true">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="flex-1">{item.question}</span>
          </AccordionTrigger>
          <AccordionContent className={cn("pb-6 pl-8 text-sm leading-8", light ? "text-cream/75" : "text-muted-foreground")}>
            {item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
