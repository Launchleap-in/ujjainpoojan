import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { astrologyTopics, homeContent } from "@/app/data/content";
import {
  container,
  Mandala,
  sectionSpace,
  SectionHeading,
  TextLink,
} from "@/app/components/shared/design";

export function AstrologySection() {
  return (
    <section
      className={`relative isolate overflow-hidden bg-wine-dark ${sectionSpace}`}
    >
      <Mandala className="pointer-events-none absolute -bottom-52 -right-48 -z-10 w-180 text-gold/15" />
      <div
        className={`${container} grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20`}
      >
        <div>
          <SectionHeading {...homeContent.astrology} light />
          <TextLink href="/astrology" light className="mt-6">
            ज्योतिष की मूल बातें पढ़ें
          </TextLink>
          <div className="mt-9 flex items-center gap-3 border-t border-cream/15 pt-6 text-xs leading-7 text-cream/60">
            <Sparkles className="size-5 shrink-0 text-saffron" />
            परंपरा की समझ के साथ, सोच-समझकर अगला कदम।
          </div>
        </div>
        <div className="grid gap-x-8 gap-y-4 sm:grid-cols-2">
          {astrologyTopics.map((topic) => (
            <Link
              key={topic.id}
              href={`/astrology#${topic.id}`}
              className="group border-b border-cream/15 py-6"
            >
              <span className="font-heading text-sm text-gold">
                {topic.number}
              </span>
              <h3 className="mt-4 flex items-center justify-between gap-3 font-heading text-xl text-cream">
                {topic.title}
                <ArrowUpRight
                  aria-hidden="true"
                  className="size-4 text-saffron transition-transform group-hover:-translate-y-1"
                />
              </h3>
              <p className="mt-3 text-sm leading-8 text-cream/60">
                {topic.short}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
