import { Suspense } from "react";
import { ArticleLoading } from "@/app/components/shared/article-loading";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { planets, services, planetsData } from "@/app/data/data";
import { planetArticles } from "@/app/data/content";
import { PageHeading } from "@/app/components/shared/page-heading";
import { ArticleLayout } from "@/app/components/shared/article-layout";
import { PlanetIcon, PlanetCard } from "@/app/components/shared/planet-card";
import { TextLink, container } from "@/app/components/shared/design";
import { Badge } from "@/app/components/ui/badge";
import { FaqList } from "@/app/components/shared/faq-list";

export function generateStaticParams() {
  return planets.map((p) => ({ slug: p.id }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = planets.find((p) => p.id === slug);
  return {
    title: p ? `${p.name} — पारंपरिक महत्व एवं आराधना` : "ग्रह उपलब्ध नहीं",
    description: p?.description,
  };
}
async function PlanetPageContent({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const planet = planets.find((p) => p.id === slug);
  if (!planet) notFound();
  const linkedServices = services.filter((s) =>
    (planet.serviceIds as readonly string[]).includes(s.id),
  );
  return (
    <>
      <PageHeading
        eyebrow="नवग्रह परिचय"
        title={`${planet.name}: पारंपरिक महत्व एवं आराधना`}
        description={planet.description}
        parent={{ label: "नवग्रह", href: "/planets" }}
        primaryAction={{ label: "कुंडली परामर्श की जानकारी लें", href: "/contact?service=kundli-paramarsh" }}
        secondaryAction={{ label: "अन्य ग्रहों को जानें", href: "/planets" }}
      />
      <ArticleLayout
        contactHref="/contact?service=kundli-paramarsh"
        sections={[
          { id: "meaning", title: "पारंपरिक परिचय" },
          { id: "qualities", title: "प्रतीक एवं गुण" },
          { id: "worship", title: "आराधना का संदर्भ" },
          { id: "services", title: "संबंधित पूजा सेवाएँ" },
          { id: "prepare", title: "परामर्श की तैयारी" },
          { id: "questions", title: "सामान्य प्रश्न" },
        ]}
      >
        <section id="meaning">
          <PlanetIcon id={planet.id} className="mb-6 size-56 sm:size-64" />
          <h2>{planet.name} का पारंपरिक परिचय</h2>
          <p>{planet.description}</p>
          <p>{planetArticles[planet.id]}</p>
          <p>
            ग्रहों से जुड़े अर्थ धार्मिक एवं ज्योतिषीय परंपराओं के संदर्भ में
            समझे जाते हैं। एक ग्रह की चर्चा को संपूर्ण कुंडली की व्याख्या का
            विकल्प न मानें।
          </p>
        </section>
        <section id="qualities">
          <h2>प्रतीक और संबंधित गुण</h2>
          <div className="mb-5 flex flex-wrap gap-3">
            {planet.associations.map((a) => (
              <Badge
                key={a}
                variant="secondary"
                className="h-auto px-4 py-2 text-sm"
              >
                {a}
              </Badge>
            ))}
          </div>
          <p>
            इन गुणों का उपयोग ज्योतिषीय व्याख्या की भाषा में किया जाता है।
            परामर्श में पूछें कि इन प्रतीकों का आपकी चर्चा से क्या संबंध है और
            व्याख्या किस आधार पर की जा रही है।
          </p>
        </section>
        <section id="worship">
          <h2>आराधना का संदर्भ</h2>
          <h3>{planet.worship}</h3>
          <p className="mt-4">
            आराधना अपनी श्रद्धा, पारिवारिक परंपरा और पूजा स्थल की विधि के अनुसार
            की जाती है। मंत्र जप, अर्चना या शांति संकल्प का स्वरूप आयोजन से पहले
            समझें।
          </p>
          <p>
            किसी विशेष अर्पण, सामग्री या दान की व्यवस्था हो तो उसका उद्देश्य और
            आवश्यक तैयारी स्पष्ट करें। अपने संकल्प एवं सामर्थ्य के अनुरूप निर्णय
            लें।
          </p>
        </section>
        <section id="services">
          <h2>संबंधित पूजा सेवाएँ</h2>
          <p>
            इन सेवाओं के पृष्ठों पर उद्देश्य, सामान्य विधि और तैयारी का परिचय
            पढ़ें। अनुष्ठान का चयन चर्चा और स्पष्ट जानकारी के आधार पर करें।
          </p>
          <div className="mt-6 divide-y rounded-xl border bg-card px-5">
            {linkedServices.map((s) => (
              <div key={s.id} className="py-5">
                <h3>{s.title}</h3>
                <p className="mt-2 text-sm">{s.description}</p>
                <TextLink href={`/services/${s.slug}`} className="mt-2">
                  विधि एवं तैयारी जानें
                </TextLink>
              </div>
            ))}
          </div>
        </section>
        <section id="prepare">
          <h2>परामर्श से पहले तैयारी</h2>
          <p>
            जन्म तिथि, यथासंभव सही जन्म समय और स्थान उपलब्ध रखें। समय अनुमानित
            हो तो पहले बताएँ। अपनी शंका और पूजा संबंधी प्रश्न लिखकर रखने से
            बातचीत सहज रहती है।
          </p>
          <p>{planetsData.note}</p>
          <TextLink href="/astrology" className="mt-4">
            कुंडली, राशि और भाव को समझें
          </TextLink>
        </section>
        <section id="questions">
          <h2>सामान्य प्रश्न</h2>
          <FaqList
            items={[
              {
                id: "single",
                question: `क्या केवल ${planet.name} से पूरी कुंडली समझी जा सकती है?`,
                answer:
                  "कुंडली की पारंपरिक व्याख्या में कई ग्रहों, राशियों और भावों के संबंध देखे जाते हैं। किसी एक ग्रह के परिचय को व्यक्तिगत परामर्श के बराबर न मानें।",
              },
              {
                id: "puja",
                question: "संबंधित पूजा कैसे चुनें?",
                answer:
                  "अपना संकल्प, उपलब्ध जन्म विवरण और पारिवारिक परंपरा साझा करें। पूजा का उद्देश्य, विधि और आवश्यक तैयारी समझकर ही व्यवस्था तय करें।",
              },
              {
                id: "details",
                question: "परामर्श के लिए जन्म समय ज्ञात होना आवश्यक है?",
                answer:
                  "जन्म समय व्याख्या में उपयोगी है। समय ज्ञात न हो या अनुमानित हो तो उसकी अनिश्चितता स्पष्ट बताएँ और उपलब्ध विवरण के अनुसार चर्चा की सीमाएँ समझें।",
              },
            ]}
          />
        </section>
      </ArticleLayout>
      <section className={`${container} pb-20`}>
        <h2 className="mb-7 font-heading text-2xl text-wine">
          अन्य ग्रहों को भी जानें
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {planets
            .filter((p) => p.id !== planet.id)
            .slice(0, 3)
            .map((p) => (
              <PlanetCard key={p.id} planet={p} />
            ))}
        </div>
      </section>
    </>
  );
}

export default function PlanetPage(props: {
  params: Promise<{ slug: string }>;
}) {
  return (
    <Suspense fallback={<ArticleLoading />}>
      <PlanetPageContent {...props} />
    </Suspense>
  );
}
