import { planets } from "@/app/data/data";
import { homeContent } from "@/app/data/content";
import {
  container,
  sectionSpace,
  SectionHeading,
  TextLink,
  Mandala,
} from "@/app/components/shared/design";
import { PlanetCard } from "@/app/components/shared/planet-card";

export function PlanetsSection() {
  return (
    <section
      id="navgrah"
      aria-labelledby="navgrah-title"
      className={`${sectionSpace} sacred-section relative isolate overflow-hidden text-cream`}
    >
      <Mandala className="pointer-events-none absolute -right-64 -top-32 -z-10 w-180 text-gold/15" />
      <div className={container}>
        <div id="navgrah-title">
          <SectionHeading {...homeContent.planets} center light />
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {planets.map((planet) => (
            <PlanetCard key={planet.id} planet={planet} light showDescription />
          ))}
        </div>
        <div className="mt-8 text-center">
          <TextLink href="/planets" light>नवग्रहों का विस्तृत परिचय</TextLink>
        </div>
      </div>
    </section>
  );
}
