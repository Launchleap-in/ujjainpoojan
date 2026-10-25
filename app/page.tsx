import { Hero } from "@/app/components/home/hero";
import { AboutSection } from "@/app/components/home/about-section";
import { ServicesSection } from "@/app/components/home/services-section";
import { BhatPujaFeature } from "@/app/components/home/bhat-puja-feature";
import { KundliAnalysisSection } from "@/app/components/home/kundli-analysis-section";
import { MarriageGuidanceSection } from "@/app/components/home/marriage-guidance-section";
import { ProcessSection } from "@/app/components/home/process-section";
import { GallerySection } from "@/app/components/home/gallery-section";
import { PreparationSection } from "@/app/components/home/preparation-section";
import { FaqSection } from "@/app/components/home/faq-section";
import { ContactCta } from "@/app/components/shared/contact-cta";
import { PlanetsSection } from "@/app/components/home/planets-section";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <KundliAnalysisSection />
      <BhatPujaFeature />
      <MarriageGuidanceSection />
      <AboutSection />
      <PlanetsSection />
      <ProcessSection />
      <GallerySection />
      <PreparationSection />
      <FaqSection />
      <ContactCta />
    </>
  );
}
