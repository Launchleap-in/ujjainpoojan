import type { Metadata } from "next";
import { astrologyTopics } from "@/app/data/content";
import { planetsData } from "@/app/data/data";
import { PageHeading } from "@/app/components/shared/page-heading";
import { ArticleLayout } from "@/app/components/shared/article-layout";
import { Mandala, TextLink } from "@/app/components/shared/design";
import { ContactCta } from "@/app/components/shared/contact-cta";

export const metadata: Metadata = {
  title: "ज्योतिष की मूल बातें — कुंडली, ग्रह एवं भाव",
  description:
    "जन्मकुंडली, ग्रह, राशि, भाव और दशा का सरल हिंदी परिचय। परामर्श और पूजा की तैयारी समझें।",
};
export default function AstrologyPage() {
  return (
    <>
      <PageHeading
        eyebrow="ज्योतिष परिचय"
        title="परंपरा की भाषा, सरल शब्दों में।"
        description="जन्मकुंडली और ग्रहों से जुड़े विचारों को समझें, अपने प्रश्न तैयार करें और परामर्श में स्पष्टता के साथ आगे बढ़ें।"
        primaryAction={{ label: "कुंडली परामर्श की जानकारी लें", href: "/contact?service=kundli-paramarsh" }}
        secondaryAction={{ label: "ज्योतिष का परिचय पढ़ें", href: `#${astrologyTopics[0].id}` }}
      />
      <ArticleLayout
        contactHref="/contact?service=kundli-paramarsh"
        sections={[
          ...astrologyTopics.map((t) => ({ id: t.id, title: t.title })),
          { id: "navgrah", title: "नवग्रह परिचय" },
          { id: "consultation", title: "परामर्श की तैयारी" },
        ]}
      >
        <div className="relative flex h-60 items-center justify-center overflow-hidden rounded-2xl bg-wine-dark">
          <Mandala className="absolute -top-37 w-130 text-gold/35" />
          <span
            className="relative font-heading text-6xl text-saffron"
            aria-hidden="true"
          >
            ॐ
          </span>
        </div>
        {astrologyTopics.map((topic) => (
          <section key={topic.id} id={topic.id}>
            <p className="mb-2 text-xs font-medium text-primary">
              {topic.number} · ज्योतिष की मूल बातें
            </p>
            <h2>{topic.title}</h2>
            {topic.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </section>
        ))}
        <section id="navgrah">
          <h2>वैदिक ज्योतिष में नवग्रह</h2>
          <p>{planetsData.description}</p>
          <p>{planetsData.note}</p>
          <TextLink href="/planets" className="mt-4">
            नौ ग्रहों का परिचय पढ़ें
          </TextLink>
        </section>
        <section id="consultation">
          <h2>परामर्श से पहले क्या तैयार रखें?</h2>
          <ul className="list-disc space-y-3 pl-5">
            <li>जन्म तिथि, यथासंभव सही जन्म समय और जन्म स्थान।</li>
            <li>अपने प्रश्नों की छोटी सूची और पूजा संबंधी उद्देश्य।</li>
            <li>उपलब्ध विवरण में कोई अनिश्चितता हो तो उसकी जानकारी।</li>
            <li>
              अनुष्ठान सुझाए जाने पर विधि, तैयारी और व्यवस्था से जुड़े प्रश्न।
            </li>
          </ul>
          <p className="mt-5">
            ज्योतिषीय व्याख्या धार्मिक और पारंपरिक मान्यताओं का विषय है। अपने
            निर्णयों में आवश्यक तथ्य, व्यक्तिगत परिस्थिति और संबंधित विशेषज्ञों
            की सलाह का भी ध्यान रखें।
          </p>
          <TextLink href="/services/kundli-paramarsh" className="mt-3">
            जन्मकुंडली एवं पूजा परामर्श जानें
          </TextLink>
        </section>
      </ArticleLayout>
      <ContactCta />
    </>
  );
}
