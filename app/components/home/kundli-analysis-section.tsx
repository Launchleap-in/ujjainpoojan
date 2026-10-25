"use client";

import { useState } from "react";
import { ArrowUpRight, CalendarDays, Clock3, MapPin, Check, Orbit, HeartHandshake, Sun, BookOpenText } from "lucide-react";
import { ActionLink, container, Mandala, sectionSpace } from "@/app/components/shared/design";

const topics = [
  { title: "मंगल दोष", icon: Sun, heading: "मंगल की स्थिति को संदर्भ के साथ समझें।", description: "मंगल दोष से जुड़े प्रश्नों पर पूरी जन्मकुंडली के संदर्भ में चर्चा करें। विवाह या पूजा का निर्णय लेने से पहले अपनी स्थिति और पारिवारिक परंपरा को समझें।", points: ["कुंडली में मंगल की स्थिति पर चर्चा", "विवाह और दांपत्य से जुड़े प्रश्न", "मंगल शांति एवं भात पूजा के विकल्प"] },
  { title: "विवाह एवं मिलान", icon: HeartHandshake, heading: "विवाह के प्रश्नों पर स्पष्ट संवाद।", description: "दोनों व्यक्तियों के जन्म विवरण के साथ कुंडली मिलान, गुण मिलान और विवाह मुहूर्त से जुड़े प्रश्न साझा करें। परामर्श में अपनी प्राथमिकताएँ और पारिवारिक संदर्भ भी बताएँ।", points: ["दोनों कुंडलियों एवं गुण मिलान की चर्चा", "मंगल दोष संबंधी प्रश्नों की समझ", "पसंदीदा विवाह अवधि और मुहूर्त पर परामर्श"] },
  { title: "कालसर्प दोष", icon: Orbit, heading: "राहु–केतु से जुड़े प्रश्नों को समझें।", description: "कालसर्प संबंधी अलग-अलग पारंपरिक व्याख्याओं को समझने के लिए जन्मकुंडली पर चर्चा करें। पूजन की आवश्यकता, स्वरूप और तैयारी की जानकारी परामर्श में लें।", points: ["राहु–केतु एवं ग्रह स्थितियों पर चर्चा", "पूजन के उद्देश्य और विधि की जानकारी", "व्यक्तिगत संकल्प के अनुसार अगला चरण"] },
  { title: "जन्मकुंडली", icon: BookOpenText, heading: "अपनी कुंडली की भाषा को सरल बनाएँ।", description: "ग्रह, राशि, भाव और दशा के पारंपरिक अर्थ जानें। जन्म विवरण और अपने स्पष्ट प्रश्नों के साथ व्यक्तिगत परामर्श की तैयारी करें।", points: ["ग्रह, राशि और भावों का परिचय", "दशा एवं गोचर संबंधी प्रश्न", "आस्था के अनुसार पूजा और संकल्प पर चर्चा"] },
];

export function KundliAnalysisSection() {
  const [selected, setSelected] = useState(0);
  const topic = topics[selected];
  return (
    <section id="kundli-analysis" aria-labelledby="kundli-title" className={`${sectionSpace} sacred-section relative isolate overflow-hidden text-cream`}>
      <Mandala className="pointer-events-none absolute -right-64 -top-32 w-180 text-gold/10" />
      <div className={`${container} relative`}>
        <div className="mb-10 grid gap-6 lg:grid-cols-[1.2fr_1fr] lg:items-end">
          <div><p className="mb-4 text-sm font-medium text-saffron">✦ जन्मकुंडली विश्लेषण · KUNDLI ANALYSIS</p><h2 id="kundli-title" className="font-heading text-3xl leading-[1.65] font-semibold sm:text-4xl">कुंडली को समझें,<br /><span className="text-[#f3b974]">अपने प्रश्नों को दिशा दें।</span></h2></div>
          <p className="max-w-md text-sm leading-8 text-cream/70">हर कुंडली अलग है, हर प्रश्न भी। मंगल दोष, शादी या ग्रह स्थितियों पर अपनी जन्म जानकारी के साथ व्यक्तिगत परामर्श की शुरुआत करें।</p>
        </div>
        <div className="grid overflow-hidden rounded-2xl border border-gold/30 bg-cream/[0.03] lg:grid-cols-[1.6fr_1fr]">
          <div className="p-5 sm:p-8 lg:p-10">
            <div role="tablist" aria-label="कुंडली परामर्श के विषय" className="grid grid-cols-2 gap-2 border-b border-gold/20 pb-6 sm:grid-cols-4">
              {topics.map((item, i) => <button key={item.title} type="button" role="tab" id={`kundli-tab-${i}`} aria-selected={selected === i} aria-controls={`kundli-panel-${i}`} tabIndex={selected === i ? 0 : -1} onClick={() => setSelected(i)} onKeyDown={event => { let next = i; if (event.key === "ArrowRight") next = (i + 1) % topics.length; else if (event.key === "ArrowLeft") next = (i + topics.length - 1) % topics.length; else if (event.key === "Home") next = 0; else if (event.key === "End") next = topics.length - 1; else return; event.preventDefault(); setSelected(next); document.getElementById(`kundli-tab-${next}`)?.focus(); }} className={`flex min-h-14 items-center justify-center gap-2 rounded-lg border px-2 py-3 text-xs transition-colors ${selected === i ? "border-saffron bg-saffron text-wine-dark" : "border-gold/25 text-cream/75 hover:bg-cream/10"}`}><item.icon aria-hidden="true" className="size-4 shrink-0" />{item.title}</button>)}
            </div>
            {topics.map((item, i) => <div key={item.title} role="tabpanel" id={`kundli-panel-${i}`} aria-labelledby={`kundli-tab-${i}`} hidden={selected !== i} tabIndex={0} className="pt-7">
              <h3 className="font-heading text-2xl leading-10 text-cream">{item.heading}</h3>
              <p className="mt-4 max-w-xl text-sm leading-8 text-cream/70">{item.description}</p>
              <ul className="mt-5 grid gap-3">{item.points.map(point => <li key={point} className="flex items-start gap-3 text-sm leading-7 text-cream/85"><Check aria-hidden="true" className="mt-1 size-4 shrink-0 text-saffron" />{point}</li>)}</ul>
            </div>)}
          </div>
          <aside className="border-t border-gold/25 bg-[#f6eddd] p-6 text-wine sm:p-8 lg:border-l lg:border-t-0 lg:p-10">
            <div className="mb-5 flex items-center gap-3"><span aria-hidden="true" className="flex size-12 items-center justify-center rounded-full border border-gold/60 font-heading text-2xl">ॐ</span><p className="text-xs font-semibold tracking-wide text-primary">परामर्श से पहले की तैयारी</p></div>
            <h3 className="font-heading text-2xl leading-10 font-semibold">ये जन्म विवरण तैयार रखें।</h3>
            <ul className="my-6 space-y-4">{[{ icon: CalendarDays, label: "जन्म तिथि", detail: "दिन, महीना और वर्ष" }, { icon: Clock3, label: "जन्म का समय", detail: "यथासंभव सही समय" }, { icon: MapPin, label: "जन्म स्थान", detail: "शहर, राज्य एवं देश" }].map(({ icon: Icon, label, detail }) => <li key={label} className="flex items-center gap-3 border-b border-wine/10 pb-3"><Icon aria-hidden="true" className="size-5 shrink-0 text-primary" /><div><p className="text-sm font-semibold">{label}</p><p className="mt-1 text-xs text-muted-foreground">{detail}</p></div></li>)}</ul>
            <ActionLink href={`/contact?service=kundli-paramarsh&topic=${encodeURIComponent(topic.title)}`} className="w-full px-3">कुंडली परामर्श की पूछताछ <ArrowUpRight aria-hidden="true" className="size-4" /></ActionLink>
            <p className="mt-4 text-xs leading-6 text-muted-foreground">जन्म समय अनुमानित हो तो बताएँ। विवाह मिलान के लिए दोनों व्यक्तियों का विवरण आवश्यक है।</p>
          </aside>
        </div>
        <p className="mt-5 text-xs leading-7 text-cream/55">यह व्यक्तिगत परामर्श के लिए जानकारी है। यहाँ स्वचालित कुंडली गणना या निश्चित परिणाम का दावा नहीं किया जाता।</p>
      </div>
    </section>
  );
}
