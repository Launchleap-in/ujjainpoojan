import type { Metadata } from "next";
import { pageMetadata, servicesData } from "@/app/data/data";
import { PageHeading } from "@/app/components/shared/page-heading";
import { container, sectionSpace } from "@/app/components/shared/design";
import { ServiceExplorer } from "@/app/components/shared/service-explorer";
import { ContactCta } from "@/app/components/shared/contact-cta";

export const metadata: Metadata = {
  ...pageMetadata.services,
  title: { absolute: pageMetadata.services.title },
};
export default function ServicesPage() {
  return (
    <>
      <PageHeading
        eyebrow="पूजा एवं परामर्श"
        title="अपने संकल्प के अनुरूप पूजन समझें।"
        description={servicesData.description}
        primaryAction={{ label: "पूजा चुनने में सहायता लें", href: "/contact?service=guidance" }}
        secondaryAction={{ label: "सभी पूजा सेवाएँ देखें", href: "#puja-list" }}
      />
      <section id="puja-list" className={`${container} ${sectionSpace}`}>
        <ServiceExplorer />
      </section>
      <ContactCta />
    </>
  );
}
