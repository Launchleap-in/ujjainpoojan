"use client";

import { useState } from "react";
import { services, type ServiceId } from "@/app/data/data";
import { ServiceCard } from "./service-card";
import { TextLink } from "./design";
import { cn } from "@/lib/utils";

const categories: { label: string; ids: ServiceId[] | null }[] = [
  { label: "सभी सेवाएँ", ids: null },
  { label: "दोष शांति", ids: ["mangal-shanti", "kaal-sarp", "angarak-dosh", "pitra-dosh", "grahan-dosh", "guru-chandal", "pishach-dosh", "shrapit-dosh"] },
  { label: "ग्रह आराधना", ids: ["bhat-puja", "navgrah-shanti", "shani-shanti"] },
  { label: "नक्षत्र शांति", ids: ["gand-mool-shanti"] },
  { label: "शिव आराधना", ids: ["rudrabhishek", "mahamrityunjay"] },
  { label: "विशेष अनुष्ठान", ids: ["nav-chandi", "ark-vivah", "kumbh-vivah"] },
  { label: "कुंडली परामर्श", ids: ["kundli-paramarsh"] },
];

export function ServiceExplorer() {
  const [category, setCategory] = useState(0);
  const ids = categories[category].ids;
  const visible = services.filter(service => !ids || ids.includes(service.id));
  return (
    <>
      <div className="mb-8 flex flex-col justify-between gap-5 border-b border-gold/25 pb-7 lg:flex-row lg:items-end">
        <div>
          <h2 className="font-heading text-2xl leading-10 font-semibold text-wine">किस विषय की जानकारी चाहिए?</h2>
          <p className="mt-2 text-sm leading-7 text-muted-foreground">विषय चुनें, फिर पूजा की विधि और तैयारी पढ़ें।</p>
        </div>
        <TextLink href="/contact?service=guidance">पूजा चुनने में सहायता लें</TextLink>
      </div>
      <div aria-label="सेवाओं के विषय" className="mb-5 flex flex-wrap gap-2">
        {categories.map((item, index) => (
          <button key={item.label} type="button" aria-pressed={category === index} aria-controls="service-results" onClick={() => setCategory(index)}
            className={cn("min-h-11 rounded-full border px-4 py-2 text-sm transition-colors", category === index ? "border-wine bg-wine text-cream" : "border-gold/35 bg-card text-wine hover:bg-secondary")}>
            {item.label}
          </button>
        ))}
      </div>
      <p role="status" className="mb-6 text-xs leading-6 text-muted-foreground">{categories[category].label} · {new Intl.NumberFormat("hi-IN-u-nu-deva").format(visible.length)} विकल्प</p>
      <div id="service-results" className="grid items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map(service => <ServiceCard key={service.id} service={service} />)}
      </div>
    </>
  );
}
