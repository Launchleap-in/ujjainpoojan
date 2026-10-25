import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Flower2, MapPin, BookOpenText, HeartHandshake } from "lucide-react";
import { ActionLink, container, Mandala } from "@/app/components/shared/design";

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="sacred-hero relative isolate overflow-hidden text-cream">
      <Mandala className="pointer-events-none absolute -left-64 top-12 w-180 text-gold/15" />
      <div className={`${container} relative grid items-center gap-12 py-14 sm:py-18 lg:grid-cols-[1.15fr_1fr] lg:gap-16 lg:py-20`}>
        <div className="relative z-10">
          <p className="mb-7 flex items-center gap-3 text-sm text-saffron"><span className="h-px w-8 bg-saffron/60" />॥ श्री गणेशाय नमः ॥</p>
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-4 py-2 text-xs text-cream/85"><MapPin aria-hidden="true" className="size-3.5 text-saffron" /> मंगलनाथ की पावन भूमि · उज्जैन</span>
          <h1 id="hero-title" className="font-heading text-[2.25rem] leading-[1.65] font-semibold sm:text-5xl sm:leading-[1.6] xl:text-[3.6rem]">श्रद्धा का संकल्प,<br /><span className="text-[#f3b974]">जीवन में मंगल</span><br />की प्रार्थना।</h1>
          <p className="mt-5 max-w-lg text-sm leading-8 text-cream/75 sm:text-base sm:leading-9">मंगल दोष शांति, मंगलनाथ भात पूजा और कालसर्प दोष पूजन। विवाह एवं जन्मकुंडली से जुड़े प्रश्नों के लिए सरल, व्यक्तिगत मार्गदर्शन।</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ActionLink href="/contact?service=mangal-shanti-puja" className="border border-saffron bg-saffron text-wine-dark hover:bg-[#f3b974]">पूजन के लिए संपर्क करें <ArrowUpRight aria-hidden="true" className="size-4" /></ActionLink>
            <ActionLink href="#kundli-analysis" variant="outline" className="border-cream/30 bg-transparent text-cream hover:bg-cream/10 hover:text-cream">कुंडली विश्लेषण <ArrowRight aria-hidden="true" className="size-4" /></ActionLink>
          </div>
          <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 border-t border-gold/20 pt-6 text-xs text-cream/70">
            <span className="flex items-center gap-2"><Flower2 aria-hidden="true" className="size-4 text-saffron" />वैदिक पूजन परंपरा</span>
            <span className="flex items-center gap-2"><BookOpenText aria-hidden="true" className="size-4 text-saffron" />विधि की स्पष्ट जानकारी</span>
            <span className="flex items-center gap-2"><HeartHandshake aria-hidden="true" className="size-4 text-saffron" />व्यक्तिगत संवाद</span>
          </div>
        </div>
        <figure className="relative mx-auto w-full max-w-110 pb-5 pl-3 sm:pl-5">
          <Mandala className="pointer-events-none absolute -right-20 -top-16 -z-10 w-96 text-gold/40" />
          <div className="absolute inset-0 bottom-9 left-0 right-5 rounded-t-[12rem] rounded-b-2xl border border-gold/60" aria-hidden="true" />
          <div className="relative overflow-hidden rounded-t-[12rem] rounded-b-2xl border border-gold/40 bg-wine-dark p-2">
            <Image src="/self/pandit-professional-natural.webp" alt="पीले कुर्ते और सफेद अंगवस्त्र में पंडित दीपक शर्मा" width={1122} height={1402} preload sizes="(max-width: 640px) 90vw, 440px" className="aspect-[4/5] w-full -scale-x-100 rounded-t-[11.5rem] rounded-b-xl object-cover" />
            <figcaption className="flex items-center gap-3 px-4 py-5">
              <Flower2 aria-hidden="true" className="size-8 shrink-0 text-saffron" />
              <div>
                <p className="font-heading text-xl font-semibold leading-9 text-cream">पंडित दीपक शर्मा</p>
                <p className="mt-1 text-sm leading-7 text-saffron">१५ वर्षों का अनुभव</p>
              </div>
            </figcaption>
          </div>
          <span aria-hidden="true" className="absolute -right-2 top-7 flex size-16 items-center justify-center rounded-full border border-gold bg-[#f4e4c8] font-heading text-3xl text-wine shadow-lg sm:-right-5">ॐ</span>
        </figure>
      </div>
      <div className="relative border-y border-gold/25 bg-black/10">
        <div className={`${container} grid grid-cols-2 text-center md:grid-cols-4`}>
          {[
            ["मंगल दोष शांति", "/services/mangal-shanti-puja"],
            ["मंगलनाथ भात पूजा", "/services/bhat-puja"],
            ["विवाह एवं कुंडली मिलान", "#marriage-guidance"],
            ["कालसर्प दोष पूजा", "/services/kaal-sarp-shanti-puja"],
          ].map(([label, href]) => <Link key={href} href={href} className="flex items-center justify-center gap-2 border-gold/20 px-2 py-5 text-xs transition-colors hover:bg-gold/10 sm:text-sm md:border-x"><span aria-hidden="true" className="text-saffron">✦</span>{label}</Link>)}
        </div>
      </div>
    </section>
  );
}
