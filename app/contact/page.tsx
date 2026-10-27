import type { Metadata } from "next";
import { ArrowUpRight, Flower2, Mail, MapPin, Phone } from "lucide-react";
import { WhatsAppIcon } from "@/app/components/shared/whatsapp-icon";
import { contactData, pageMetadata } from "@/app/data/data";
import { whatsappHref } from "@/lib/contact";
import { PageHeading } from "@/app/components/shared/page-heading";
import { container, Mandala, sectionSpace, TextLink } from "@/app/components/shared/design";

export const metadata: Metadata = {
  ...pageMetadata.contact,
  title: { absolute: pageMetadata.contact.title },
};

export default function ContactPage() {
  return (
    <>
      <PageHeading
        eyebrow="संपर्क एवं पूछताछ"
        title="एक संवाद, शुभ संकल्प की शुरुआत।"
        description="पूजा की विधि, तैयारी या तिथि के बारे में जानना चाहते हैं? पंडित जी से सीधे जुड़ें और अपने संकल्प के लिए मार्गदर्शन पाएँ।"
        primaryAction={{ label: "संपर्क के विकल्प देखें", href: "#contact-options" }}
        secondaryAction={{ label: "पूजा सेवाएँ जानें", href: "/services" }}
      />
      <section id="contact-options" className={`${container} ${sectionSpace}`}>
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
          <div className="sacred-section relative isolate flex flex-col overflow-hidden rounded-3xl border border-gold/30 p-7 text-cream sm:p-10 lg:p-12">
            <Mandala className="pointer-events-none absolute -right-40 -top-24 -z-10 size-[32rem] text-gold/15" />
            <span className="mb-8 flex size-16 items-center justify-center rounded-2xl border border-gold/30 bg-cream/5">
              <Flower2 aria-hidden="true" className="size-8 text-saffron" />
            </span>
            <p className="text-xs font-semibold tracking-wide text-saffron">॥ श्री गणेशाय नमः ॥</p>
            <h2 className="mt-4 font-heading text-3xl leading-relaxed font-semibold sm:text-4xl">आपकी आस्था,<br />हमारा मार्गदर्शन।</h2>
            <p className="mt-5 max-w-md text-sm leading-8 text-cream/75">पंडित दीपक शर्मा से पूजा और परामर्श के लिए सीधे बात करें। अपना प्रश्न और पसंद की तिथि WhatsApp पर भेजें।</p>
            <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex min-h-14 w-fit items-center justify-center gap-3 rounded-full bg-[#25D366] px-7 py-4 text-sm font-semibold text-[#073b20] shadow-lg transition-colors hover:bg-[#50e285] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cream">
              <WhatsAppIcon className="size-5" />
              WhatsApp पर बात करें
              <ArrowUpRight aria-hidden="true" className="size-4" />
            </a>
            <div className="mt-10 border-t border-cream/15 pt-7">
              <p className="text-xs leading-7 text-cream/65">पूछताछ में पूजा का नाम, पसंद की तिथि और सहभागी सदस्यों की संख्या बताएँ, ताकि व्यवस्था की जानकारी साझा की जा सके।</p>
            </div>
          </div>
          <div className="grid min-w-0 gap-5">
            <a href={`tel:${contactData.phone.replace(/[^+\d]/g, "")}`} className="flex items-center gap-5 rounded-2xl border border-gold/30 bg-card p-6 transition-colors hover:border-primary/50 hover:bg-secondary/40 sm:p-7">
              <span className="flex size-13 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary"><Phone aria-hidden="true" className="size-6" /></span>
              <div className="min-w-0 flex-1">
                <h2 className="text-xs font-semibold text-muted-foreground">सीधे कॉल करें</h2>
                <p dir="ltr" className="mt-2 w-fit text-xl font-semibold tracking-wide text-wine sm:text-2xl">{contactData.phone}</p>
              </div>
              <ArrowUpRight aria-hidden="true" className="size-5 shrink-0 text-primary" />
            </a>
            <a href={`mailto:${contactData.email}`} className="flex items-center gap-5 rounded-2xl border border-gold/30 bg-card p-6 transition-colors hover:border-primary/50 hover:bg-secondary/40 sm:p-7">
              <span className="flex size-13 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary"><Mail aria-hidden="true" className="size-6" /></span>
              <div className="min-w-0 flex-1">
                <h2 className="text-xs font-semibold text-muted-foreground">ईमेल भेजें</h2>
                <p className="mt-2 break-all text-sm leading-7 font-medium text-wine sm:text-base">{contactData.email}</p>
              </div>
              <ArrowUpRight aria-hidden="true" className="size-5 shrink-0 text-primary" />
            </a>
            <div className="rounded-2xl border border-gold/30 bg-secondary/40 p-6 sm:p-7">
              <div className="flex items-start gap-5">
                <span className="flex size-13 shrink-0 items-center justify-center rounded-2xl bg-card text-primary"><MapPin aria-hidden="true" className="size-6" /></span>
                <div>
                  <h2 className="font-heading text-xl leading-9 font-semibold text-wine">{contactData.locationName}</h2>
                  <p className="mt-1 text-sm leading-7 text-muted-foreground">{contactData.address}</p>
                  <a href="https://www.google.com/maps?cid=16557046453918187572&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAMYASAF" target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-primary">मानचित्र पर देखें <ArrowUpRight aria-hidden="true" className="size-4" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 flex flex-col justify-between gap-4 rounded-2xl border border-gold/25 bg-card px-6 py-5 sm:flex-row sm:items-center">
          <p className="max-w-2xl text-xs leading-7 text-muted-foreground">तिथि, स्थान, सामग्री और कुल शुल्क की पुष्टि के बाद पूजा की योजना बनाएँ।</p>
          <TextLink href="/preparation" className="shrink-0">पूजा की तैयारी पढ़ें</TextLink>
        </div>
      </section>
    </>
  );
}
