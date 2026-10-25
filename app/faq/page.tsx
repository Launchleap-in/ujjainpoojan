import type { Metadata } from "next";
import { faqData, pageMetadata } from "@/app/data/data";
import { PageHeading } from "@/app/components/shared/page-heading";
import { FaqSearch } from "@/app/components/shared/faq-search";
import {
  container,
  sectionSpace,
  TextLink,
} from "@/app/components/shared/design";
import { ContactCta } from "@/app/components/shared/contact-cta";

export const metadata: Metadata = {
  ...pageMetadata.faq,
  title: { absolute: pageMetadata.faq.title },
};
export default function FaqPage() {
  return (
    <>
      <PageHeading
        eyebrow="सामान्य प्रश्न"
        title="पूजन से पहले, अपने प्रश्नों को समझें।"
        description="पूजा के चयन, सामग्री, अवधि, शुल्क और व्यवस्था से जुड़े सामान्य प्रश्नों के उत्तर यहाँ पढ़ें।"
        primaryAction={{ label: "अपना प्रश्न साझा करें", href: "/contact?service=guidance" }}
        secondaryAction={{ label: "उत्तर खोजें", href: "#faq-search" }}
      />
      <section
        className={`${container} ${sectionSpace} grid gap-10 lg:grid-cols-[250px_1fr]`}
      >
        <aside className="h-fit rounded-2xl border border-gold/30 bg-secondary/35 p-6 lg:sticky lg:top-30">
          <h2 className="font-heading text-xl leading-9 text-wine">
            जानकारी से सहज होती है तैयारी।
          </h2>
          <p className="mt-4 text-sm leading-8 text-muted-foreground">
            किसी विशिष्ट पूजा की जानकारी के लिए उसका विस्तृत पृष्ठ भी देखें।
          </p>
          <TextLink href="/services" className="mt-5">
            पूजा सेवाएँ देखें
          </TextLink>
        </aside>
        <FaqSearch items={faqData.items} />
      </section>
      <ContactCta />
    </>
  );
}
