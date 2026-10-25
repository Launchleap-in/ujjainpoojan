import { HeartHandshake, ArrowUpRight, Check } from "lucide-react";
import { ActionLink, container, SectionHeading, sectionSpace } from "@/app/components/shared/design";

export function MarriageGuidanceSection() {
  return (
    <section id="marriage-guidance" className={`${sectionSpace} sacred-section relative isolate overflow-hidden text-cream`}>
      <div className={container}>
        <div className="grid items-start gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div>
            <span className="mb-6 flex size-14 items-center justify-center rounded-2xl border border-gold/40 bg-card text-primary"><HeartHandshake aria-hidden="true" className="size-7" /></span>
            <SectionHeading light eyebrow="विवाह एवं दांपत्य मार्गदर्शन" title={"शुभ रिश्ते की शुरुआत,\nसमझ और विश्वास के साथ।"} description="शादी में देरी, कुंडली मिलान या मंगल दोष से जुड़े प्रश्न हैं? अपनी परिस्थितियाँ साझा करें और परामर्श के बाद पूजन का निर्णय लें।" />
            <ActionLink href="/contact?service=kundli-paramarsh&topic=विवाह%20एवं%20मिलान" className="mt-7 whitespace-normal bg-saffron text-wine-dark hover:bg-[#f3b974]">विवाह संबंधी प्रश्न साझा करें <ArrowUpRight aria-hidden="true" className="size-4" /></ActionLink>
          </div>
          <div className="overflow-hidden rounded-2xl border border-gold/40 bg-card shadow-sm">
            <div className="flex items-center justify-between border-b bg-wine px-6 py-5 text-cream"><h3 className="font-heading text-lg leading-8">आपका प्रश्न · परामर्श का विषय</h3><span aria-hidden="true" className="text-saffron">✦</span></div>
            {[
              { number: "०१", title: "शादी में देरी या विवाह का समय", text: "जन्म विवरण, पसंदीदा अवधि और अपने प्रश्नों के साथ विवाह मुहूर्त पर चर्चा करें।", tag: "विवाह परामर्श" },
              { number: "०२", title: "मंगल दोष एवं दांपत्य", text: "कुंडली में मंगल की स्थिति समझें और मंगल शांति या भात पूजा की विधि की जानकारी लें।", tag: "मंगल शांति" },
              { number: "०३", title: "कुंडली एवं गुण मिलान", text: "दोनों व्यक्तियों की जन्म जानकारी के साथ मिलान के पारंपरिक पहलुओं पर परामर्श लें।", tag: "कुंडली मिलान" },
            ].map(row => <div key={row.number} className="flex gap-4 border-b border-border px-5 py-6 last:border-0 sm:px-7"><span aria-hidden="true" className="mt-1 font-heading text-2xl text-primary/60">{row.number}</span><div><h4 className="font-heading text-lg leading-8 font-semibold text-wine">{row.title}</h4><p className="mt-2 text-sm leading-8 text-muted-foreground">{row.text}</p><span className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-primary/5 px-3 py-1 text-[11px] text-primary"><Check aria-hidden="true" className="size-3" />{row.tag}</span></div></div>)}
          </div>
        </div>
      </div>
    </section>
  );
}
