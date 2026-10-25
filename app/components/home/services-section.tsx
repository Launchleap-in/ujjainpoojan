import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check, Sparkles } from "lucide-react";
import { services, type ServiceId } from "@/app/data/data";
import { serviceMedia } from "@/app/data/content";
import { container, sectionSpace, SectionHeading, TextLink } from "@/app/components/shared/design";

const featured = [
  {
    "id": "mangal-shanti",
    "label": "मंगल दोष शांति",
    "note": "मंगल की स्थिति एवं दांपत्य से जुड़े प्रश्न",
    "points": [
      "मंगल पूजन एवं शांति संकल्प",
      "मंत्र जप, हवन एवं आरती"
    ]
  },
  {
    "id": "bhat-puja",
    "label": "मंगलनाथ भात पूजा",
    "note": "मंगलनाथ की विशेष पूजन परंपरा",
    "points": [
      "विधिपूर्वक भात अर्पण",
      "सामग्री एवं सहभागिता की जानकारी"
    ]
  },
  {
    "id": "kaal-sarp",
    "label": "कालसर्प दोष शांति",
    "note": "राहु–केतु एवं शिव आराधना",
    "points": [
      "कुंडली के संदर्भ में परामर्श",
      "शिव एवं नाग पूजन का संकल्प"
    ]
  },
  {
    "id": "angarak-dosh",
    "label": "अंगारक दोष शांति",
    "note": "मंगल–राहु संबंध की व्यक्तिगत व्याख्या",
    "points": [
      "मंगल दोष से अंतर समझें",
      "परामर्शानुसार ग्रह पूजन एवं जप"
    ]
  },
  {
    "id": "pitra-dosh",
    "label": "पितृ दोष शांति",
    "note": "पितृ स्मरण एवं पारिवारिक परंपरा",
    "points": [
      "पितृ संबंधी प्रश्नों पर चर्चा",
      "निर्धारित तर्पण एवं शांति विधि"
    ]
  },
  {
    "id": "grahan-dosh",
    "label": "ग्रहण दोष शांति",
    "note": "सूर्य–चंद्र और राहु–केतु संबंध",
    "points": [
      "कुंडली में ग्रह स्थिति का परामर्श",
      "संबंधित ग्रह मंत्र जप एवं पूजन"
    ]
  },
  {
    "id": "nav-chandi",
    "label": "नव चंडी पाठ",
    "note": "विशेष संकल्प के साथ देवी आराधना",
    "points": [
      "निर्धारित दुर्गा सप्तशती पाठ",
      "हवन की वैकल्पिक व्यवस्था"
    ]
  },
  {
    "id": "navgrah-shanti",
    "label": "नवग्रह शांति पूजा",
    "note": "नौ ग्रहों की उपासना एवं शांति संकल्प",
    "points": [
      "नवग्रह स्थापना एवं मंत्र जप",
      "हवन एवं पारिवारिक संकल्प"
    ]
  }
] satisfies { id: ServiceId; label: string; note: string; points: string[] }[];
export function ServicesSection() {
  return (
    <section id="services" className={`${sectionSpace} relative bg-secondary/40`}>
      <div className={container}>
        <div className="mb-10 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
          <SectionHeading eyebrow="प्रमुख पूजा एवं परामर्श" title={"आपके संकल्प के लिए,\nसही जानकारी और पूजन।"} description="मंगल, अंगारक, पितृ और ग्रहण दोष शांति से नव चंडी पाठ तक—आठ प्रमुख सेवाओं का उद्देश्य, विधि और तैयारी जानें।" />
          <TextLink href="/services" className="shrink-0">सभी पूजा सेवाएँ</TextLink>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {featured.map((item, i) => {
            const service = services.find(s => s.id === item.id)!;
            const media = serviceMedia[service.id];
            return <article key={item.id} className="group flex flex-col overflow-hidden rounded-2xl border border-gold/35 bg-card shadow-sm transition-shadow hover:shadow-xl hover:shadow-wine/10">
              <Link href={`/services/${service.slug}`} className="relative block overflow-hidden">
                <Image src={media.image} alt={media.alt} width={media.width} height={media.height} sizes="(max-width: 640px) 90vw, (max-width: 1280px) 45vw, 280px" className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transform-none" />
                <span className="absolute left-3 top-3 rounded-full bg-wine-dark/95 px-3 py-1.5 text-[10px] text-cream">{i === 0 ? "विशेष केंद्रित सेवा" : media.label}</span>
              </Link>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-heading text-xl leading-9 font-semibold text-wine"><Link href={`/services/${service.slug}`}>{item.label}</Link></h3>
                <p className="mt-2 text-xs leading-7 text-muted-foreground">{item.note}</p>
                <ul className="my-5 space-y-2 border-t border-border pt-4">{item.points.map(point => <li key={point} className="flex items-start gap-2 text-xs leading-6"><Check aria-hidden="true" className="mt-1 size-3.5 shrink-0 text-primary" />{point}</li>)}</ul>
                <Link href={`/services/${service.slug}`} className="mt-auto flex items-center justify-between border-t pt-4 text-xs font-semibold text-primary">पूरी जानकारी देखें <ArrowUpRight aria-hidden="true" className="size-4" /></Link>
              </div>
            </article>;
          })}
        </div>
        <div className="mt-7 flex flex-wrap items-center justify-center gap-x-5 gap-y-3 rounded-xl border border-gold/25 bg-cream/70 px-5 py-5 text-xs">
          <span className="flex items-center gap-2 font-semibold text-wine"><Sparkles aria-hidden="true" className="size-4 text-primary" />अन्य अनुष्ठान</span>
          {services.filter(s => !featured.some(f => f.id === s.id)).map(s => <Link key={s.id} href={`/services/${s.slug}`} className="text-muted-foreground underline-offset-4 hover:text-primary hover:underline">{s.title} ↗</Link>)}
        </div>
      </div>
    </section>
  );
}
