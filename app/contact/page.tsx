import type { Metadata } from "next";
import { Suspense } from "react";
import { MapPin, Phone, Mail, ArrowUpRight } from "lucide-react";
import { pageMetadata, contactData } from "@/app/data/data";
import { publicContact } from "@/lib/contact";
import { PageHeading } from "@/app/components/shared/page-heading";
import {
  container,
  sectionSpace,
  TextLink,
} from "@/app/components/shared/design";
import { EnquiryForm } from "@/app/components/contact/enquiry-form";

export const metadata: Metadata = {
  ...pageMetadata.contact,
  title: { absolute: pageMetadata.contact.title },
};
type Search = Promise<{ service?: string | string[]; topic?: string | string[] }>;
async function ContactRequest({ searchParams }: { searchParams: Search }) {
  const query = await searchParams;
  const service = typeof query.service === "string" ? query.service : "";
  const topics = ["मंगल दोष", "विवाह एवं मिलान", "कालसर्प दोष", "जन्मकुंडली"];
  const topic = typeof query.topic === "string" && topics.includes(query.topic) ? query.topic : "";
  return <EnquiryForm key={`${service}-${topic}`} defaultService={service} defaultTopic={topic} />;
}
export default function ContactPage({
  searchParams,
}: {
  searchParams: Search;
}) {
  return (
    <>
      <PageHeading
        eyebrow="संपर्क एवं पूछताछ"
        title="अपने शुभ संकल्प के बारे में बताएँ।"
        description={contactData.description}
        primaryAction={{ label: "पूछताछ का संदेश तैयार करें", href: "#enquiry-form" }}
        secondaryAction={{ label: "पहले पूजा सेवाएँ जानें", href: "/services" }}
      />
      <section
        className={`${container} ${sectionSpace} grid items-start gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20`}
      >
        <aside className="order-last min-w-0 space-y-6 lg:order-first">
          <div className="sacred-section relative isolate overflow-hidden rounded-2xl border border-gold/30 p-6 text-cream">
            <p className="mb-2 text-xs font-semibold text-saffron">पूछताछ से पूजन तक</p>
            <h2 className="font-heading text-xl leading-9 font-semibold">तीन सरल चरण</h2>
            <ol className="mt-5 space-y-4 text-sm leading-7 text-cream/80">
              {["अपना नाम और पूजा या प्रश्न लिखें।", (publicContact.whatsapp || publicContact.email ? "तैयार संदेश जाँचें और उपलब्ध संपर्क विकल्प चुनें।" : "तैयार संदेश जाँचें, फिर कॉपी या डाउनलोड करके सुरक्षित रखें।"), "तिथि, सामग्री और कुल शुल्क की पुष्टि के बाद पूजा तय करें।"].map((step, index) => (
                <li key={step} className="flex items-start gap-3"><span aria-hidden="true" className="flex size-7 shrink-0 items-center justify-center rounded-full border border-gold/40 text-xs text-saffron">{index + 1}</span><span>{step}</span></li>
              ))}
            </ol>
          </div>
          <div className="rounded-2xl border border-gold/30 bg-card p-6">
            <span className="mb-5 flex size-13 items-center justify-center rounded-full bg-primary/10">
              <MapPin className="size-6 text-primary" />
            </span>
            <h2 className="font-heading text-2xl leading-10 text-wine">
              मंगलनाथ, उज्जैन
            </h2>
            <p className="mt-3 text-sm leading-8 text-muted-foreground">
              पंडित दीपक शर्मा · मध्य प्रदेश, भारत
            </p>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Mangalnath+Temple+Ujjain"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex min-h-11 items-center gap-2 text-sm font-medium text-primary"
            >
              मानचित्र पर देखें
              <ArrowUpRight className="size-4" />
            </a>
            <div className="mt-8 space-y-5 border-y py-7">
              {publicContact.phone && (
                <a
                  href={`tel:${publicContact.phone.replace(/[^+\d]/g, "")}`}
                  className="flex min-h-11 items-center gap-3 text-sm text-wine"
                >
                  <Phone className="size-4 text-primary" />
                  {publicContact.phone}
                </a>
              )}
              {publicContact.email && (
                <a
                  href={`mailto:${publicContact.email}`}
                  className="flex min-h-11 items-center gap-3 break-all text-sm text-wine"
                >
                  <Mail className="size-4 text-primary" />
                  {publicContact.email}
                </a>
              )}
              <h3 className="font-heading text-lg text-wine">
                पूछताछ में क्या बताएँ?
              </h3>
              <ul className="list-disc space-y-3 pl-5 text-sm leading-7 text-muted-foreground">
                <li>पूजा का उद्देश्य और पसंद का अनुष्ठान।</li>
                <li>पसंदीदा तिथि और सहभागी सदस्यों की संख्या।</li>
                <li>सामग्री, अवधि और व्यवस्था से जुड़े प्रश्न।</li>
              </ul>
            </div>
            <p className="mt-6 text-xs leading-7 text-muted-foreground">
              {contactData.enquiryNotice}
            </p>
            <TextLink href="/preparation" className="mt-5">
              पूजा से पहले की तैयारी पढ़ें
            </TextLink>
          </div>
        </aside>
        <Suspense
          fallback={
            <div
              className="min-h-140 animate-pulse rounded-2xl border bg-secondary/50"
              aria-label="पूछताछ फॉर्म लोड हो रहा है"
            />
          }
        >
          <ContactRequest searchParams={searchParams} />
        </Suspense>
      </section>
    </>
  );
}
