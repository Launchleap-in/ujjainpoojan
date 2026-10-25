import type { Metadata } from "next";
import Image from "next/image";
import { Flower2, BookOpen, HeartHandshake } from "lucide-react";
import { aboutData, pageMetadata, whyChooseUsData } from "@/app/data/data";
import { PageHeading } from "@/app/components/shared/page-heading";
import {
  container,
  sectionSpace,
  SectionHeading,
  TextLink,
} from "@/app/components/shared/design";
import { ContactCta } from "@/app/components/shared/contact-cta";

export const metadata: Metadata = {
  ...pageMetadata.about,
  title: { absolute: pageMetadata.about.title },
};
export default function AboutPage() {
  return (
    <>
      <PageHeading
        eyebrow="हमारे बारे में"
        title="परंपरा से जुड़ाव, आपके संकल्प का सम्मान।"
        description={aboutData.introduction}
        secondaryAction={{ label: "पूजा सेवाएँ देखें", href: "/services" }}
      />
      <section
        className={`${container} ${sectionSpace} grid items-center gap-12 lg:grid-cols-2 lg:gap-20`}
      >
        <figure className="mx-auto w-full max-w-100 overflow-hidden rounded-t-full rounded-b-2xl border border-gold/35 bg-wine-dark p-2">
          <div className="relative aspect-[4/5] overflow-hidden rounded-t-full rounded-b-xl">
          <Image
            src="/self/pandit-professional-natural.webp"
            alt="पंडित दीपक शर्मा का परिचय चित्र"
            fill
            sizes="(max-width: 1024px) 80vw, 400px"
            className="-scale-x-100 object-cover"
          />
          </div>
          <figcaption className="px-5 py-5 text-cream">
            <p className="font-heading text-xl leading-9 font-semibold">पंडित दीपक शर्मा</p>
            <p className="mt-1 text-sm text-saffron">१५ वर्षों का अनुभव · मंगलनाथ, उज्जैन</p>
          </figcaption>
        </figure>
        <div>
          <SectionHeading
            eyebrow="हमारा दृष्टिकोण"
            title="पूजा की जानकारी सरल हो, सहभागिता सहज हो।"
          />
          {aboutData.paragraphs.map((p) => (
            <p key={p} className="mt-5 text-sm leading-9 text-muted-foreground">
              {p}
            </p>
          ))}
          <div className="mt-7 border-l-2 border-primary pl-5 font-heading text-lg leading-9 text-wine">
            {aboutData.mission}
          </div>
          <TextLink href="/services" className="mt-6">
            पूजा एवं अनुष्ठान जानें
          </TextLink>
        </div>
      </section>
      <section className="sacred-section relative isolate overflow-hidden text-cream">
        <div className={`${container} ${sectionSpace}`}>
          <SectionHeading
            eyebrow="हमारे मूल्य"
            title="श्रद्धा, स्पष्टता और सहज संवाद।"
            center
            light
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {aboutData.values.map((v, i) => {
              const Icon = [Flower2, BookOpen, HeartHandshake][i];
              return (
                <div key={v.title} className="rounded-2xl border border-gold/30 bg-wine-dark/60 p-8">
                  <Icon
                    className="mb-5 size-7 text-saffron"
                    strokeWidth={1.4}
                  />
                  <h3 className="font-heading text-xl text-cream">{v.title}</h3>
                  <p className="mt-3 text-sm leading-8 text-cream/75">
                    {v.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className={`${container} ${sectionSpace}`}>
        <SectionHeading
          eyebrow="हर तैयारी में साथ"
          title="स्पष्ट जानकारी से, श्रद्धापूर्वक पूजन तक।"
        />
        <div className="mt-10 grid gap-x-12 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseUsData.items.map((item) => (
            <div key={item.id} className="border-t pt-6">
              <h3 className="font-heading text-lg leading-8 text-wine">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-8 text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>
      <ContactCta />
    </>
  );
}
