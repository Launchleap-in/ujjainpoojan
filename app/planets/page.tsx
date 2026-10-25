import type { Metadata } from "next";
import { planets, planetsData, pageMetadata } from "@/app/data/data";
import { PageHeading } from "@/app/components/shared/page-heading";
import {
  container,
  sectionSpace,
  TextLink,
} from "@/app/components/shared/design";
import { PlanetCard } from "@/app/components/shared/planet-card";
import { ContactCta } from "@/app/components/shared/contact-cta";

export const metadata: Metadata = {
  ...pageMetadata.planets,
  title: { absolute: pageMetadata.planets.title },
};
export default function PlanetsPage() {
  return (
    <>
      <PageHeading
        eyebrow="नवग्रह परिचय"
        title="नौ ग्रहों की परंपरा को समझें।"
        description={planetsData.description}
        primaryAction={{ label: "कुंडली परामर्श की जानकारी लें", href: "/contact?service=kundli-paramarsh" }}
        secondaryAction={{ label: "नौ ग्रहों का परिचय पढ़ें", href: "#planet-list" }}
      />
      <section id="planet-list" className={`${container} ${sectionSpace}`}>
        <h2 className="mb-3 font-heading text-2xl leading-10 font-semibold text-wine">ग्रह का अर्थ और आराधना जानें</h2>
        <p className="mb-8 text-sm leading-8 text-muted-foreground">किसी ग्रह को चुनकर उसका परिचय, पारंपरिक महत्व और संबंधित पूजा पढ़ें।</p>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {planets.map((planet) => (
            <PlanetCard key={planet.id} planet={planet} showDescription />
          ))}
        </div>
        <div className="mt-10 max-w-3xl rounded-xl border bg-card p-6">
          <h2 className="mb-3 font-heading text-xl text-wine">
            ज्योतिष और खगोल के शब्द
          </h2>
          <p className="text-sm leading-8 text-muted-foreground">
            {planetsData.note}
          </p>
          <TextLink href="/astrology" className="mt-3">
            ज्योतिष की मूल बातें
          </TextLink>
        </div>
      </section>
      <ContactCta />
    </>
  );
}
