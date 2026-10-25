"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { FaqList, type Question } from "./faq-list";
import { TextLink } from "./design";

export function FaqSearch({ items }: { items: readonly Question[] }) {
  const [query, setQuery] = useState("");
  const terms = query.trim().toLocaleLowerCase("hi").split(/\s+/).filter(Boolean);
  const filtered = items.filter(item => terms.every(term => `${item.question} ${item.answer}`.toLocaleLowerCase("hi").includes(term)));
  return (
    <div className="min-w-0">
      <label htmlFor="faq-search" className="mb-3 block text-sm font-semibold text-wine">अपना प्रश्न खोजें</label>
      <div className="relative">
        <Search aria-hidden="true" className="pointer-events-none absolute left-4 top-4 size-5 text-primary" />
        <input id="faq-search" type="search" value={query} onChange={event => setQuery(event.target.value)} placeholder="जैसे: सामग्री, शुल्क, समय…" aria-controls="faq-results" className="min-h-13 w-full rounded-xl border border-gold/40 bg-card py-3 pl-12 pr-4 text-base text-foreground placeholder:text-muted-foreground" />
      </div>
      <p role="status" className="my-4 text-xs leading-7 text-muted-foreground">{terms.length ? `${filtered.length} प्रश्न मिले` : "प्रश्न पर क्लिक करके उत्तर पढ़ें।"}</p>
      <div id="faq-results">
        {filtered.length ? <FaqList key={query} items={filtered} /> : (
          <div className="rounded-2xl border border-gold/30 bg-secondary/30 p-6">
            <h2 className="font-heading text-xl leading-9 text-wine">इस शब्द से कोई प्रश्न नहीं मिला।</h2>
            <p className="mt-2 text-sm leading-8 text-muted-foreground">दूसरा शब्द लिखें या अपना प्रश्न सीधे साझा करें।</p>
            <button type="button" onClick={() => { setQuery(""); document.getElementById("faq-search")?.focus(); }} className="mt-3 min-h-11 text-sm font-semibold text-primary underline underline-offset-4">सभी प्रश्न दिखाएँ</button>
            <div><TextLink href="/contact?service=guidance">अपना प्रश्न साझा करें</TextLink></div>
          </div>
        )}
      </div>
    </div>
  );
}
