import { faqData } from "@/app/data/data";
import { homeContent } from "@/app/data/content";
import {
  container,
  sectionSpace,
  SectionHeading,
  TextLink,
} from "@/app/components/shared/design";
import { FaqList } from "@/app/components/shared/faq-list";

export function FaqSection() {
  return (
    <section className={`${sectionSpace} sacred-section relative isolate overflow-hidden text-cream`}>
      <div
        className={`${container} grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20`}
      >
        <div>
          <SectionHeading {...homeContent.faq} light />
          <TextLink href="/faq" light className="mt-7">
            सभी प्रश्न देखें
          </TextLink>
        </div>
        <FaqList items={faqData.items.slice(0, 6)} light />
      </div>
    </section>
  );
}
