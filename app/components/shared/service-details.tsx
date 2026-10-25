import Image from "next/image";
import { Check, ArrowRight } from "lucide-react";
import { services, preparationData, type ServiceId } from "@/app/data/data";
import { serviceArticles, serviceMedia } from "@/app/data/content";
import { ArticleLayout } from "./article-layout";
import { ActionLink, container } from "./design";
import { FaqList } from "./faq-list";
import { ServiceCard } from "./service-card";

export function ServiceDetails({
  service,
}: {
  service: (typeof services)[number];
}) {
  const media = serviceMedia[service.id];
  const articles = serviceArticles[service.id];
  const sections = [
    { id: "overview", title: "पूजा का परिचय" },
    ...articles.map((s) => ({ id: s.id, title: s.title })),
    { id: "purpose", title: "पूजन के संकल्प" },
    { id: "rituals", title: "पूजन का सामान्य क्रम" },
    { id: "prepare", title: "आवश्यक तैयारी" },
    { id: "questions", title: "इस पूजा से जुड़े प्रश्न" },
  ];
  const questions = [
    {
      id: "preparation",
      question: `${service.title} की तैयारी कैसे करें?`,
      answer: service.preparation,
    },
    {
      id: "duration",
      question: "अवधि और दक्षिणा की जानकारी कैसे मिलेगी?",
      answer:
        "पूजा के स्वरूप, सामग्री और जप संख्या के अनुसार अवधि तथा शुल्क बदल सकते हैं। आयोजन से पहले कुल शुल्क, दक्षिणा, सामग्री और पूजा के समय की स्पष्ट पुष्टि करें।",
    },
    {
      id: "sankalp",
      question: "संकल्प के लिए क्या विवरण चाहिए?",
      answer:
        "संकल्प में शामिल व्यक्तियों के नाम और गोत्र यदि ज्ञात हो तो तैयार रखें। कुंडली संबंधी चर्चा के लिए जन्म तिथि, समय और स्थान उपयोगी हो सकते हैं। आवश्यक जानकारी पहले पूछ लें।",
    },
  ];
  return (
    <>
      <ArticleLayout
        sections={sections}
        contactHref={`/contact?service=${service.slug}`}
      >
        <section id="overview">
          <div className="relative mb-9 aspect-16/9 overflow-hidden rounded-2xl">
            <Image
              src={media.image}
              alt={media.alt}
              fill
              sizes="(max-width: 1024px) 90vw, 800px"
              className="object-cover"
            />
          </div>
          <h2>{service.title} का परिचय</h2>
          <p>{service.details}</p>
        </section>
        {articles.map((section) => (
          <section key={section.id} id={section.id}>
            <h2>{section.title}</h2>
            {section.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </section>
        ))}
        <section id="purpose">
          <h2>किन संकल्पों के साथ पूजन किया जाता है?</h2>
          <p>
            अपनी भावना और पारिवारिक परंपरा के अनुसार पूजा का उद्देश्य समझें। इस
            अनुष्ठान से जुड़े प्रमुख संकल्प हैं:
          </p>
          <ul className="mt-5 space-y-3">
            {service.purposes.map((p) => (
              <li
                key={p}
                className="flex items-start gap-3 rounded-xl border bg-card px-5 py-3 text-sm text-wine"
              >
                <Check className="mt-1.5 size-4 shrink-0 text-primary" />
                {p}
              </li>
            ))}
          </ul>
        </section>
        <section id="rituals">
          <h2>पूजन का सामान्य क्रम</h2>
          <p>
            अंतिम विधि पूजा स्थल और निर्धारित अनुष्ठान के अनुसार स्पष्ट की जाती
            है। सामान्य रूप से निम्न चरण शामिल हो सकते हैं:
          </p>
          <ol className="mt-6 space-y-4">
            {service.rituals.map((ritual, i) => (
              <li
                key={ritual}
                className="flex items-center gap-4 border-b pb-4"
              >
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-secondary text-xs text-primary">
                  {new Intl.NumberFormat("hi-IN-u-nu-deva").format(i + 1)}
                </span>
                <span className="text-sm text-wine">{ritual}</span>
              </li>
            ))}
          </ol>
        </section>
        <section id="prepare">
          <h2>पूजा से पहले आवश्यक तैयारी</h2>
          <p className="rounded-xl border-l-3 border-primary bg-secondary/60 px-5 py-4 text-wine">
            {service.preparation}
          </p>
          <ul className="mt-6 list-disc space-y-3 pl-5 text-sm">
            {preparationData.items.slice(0, 5).map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
          <p className="mt-5">
            यात्रा की योजना बनाने से पहले स्थान, तिथि और पहुँचने का समय
            सुनिश्चित करें। केवल पूछताछ भेजने से बुकिंग निश्चित नहीं होती;
            व्यवस्था की पुष्टि आवश्यक है।
          </p>
        </section>
        <section id="questions">
          <h2>इस पूजा से जुड़े प्रश्न</h2>
          <FaqList items={questions} />
        </section>
        <div className="rounded-2xl border border-gold/40 bg-secondary/40 p-6 sm:p-8">
          <h2 className="text-2xl!">अपने प्रश्न तैयार हैं?</h2>
          <p>पूजा और व्यवस्था की जानकारी के लिए अपना संकल्प साझा करें।</p>
          <ActionLink
            href={`/contact?service=${service.slug}`}
            className="mt-5"
          >
            इस पूजा की पूछताछ करें
            <ArrowRight className="size-4" />
          </ActionLink>
        </div>
      </ArticleLayout>
      <section className={`${container} pb-20`}>
        <h2 className="mb-8 font-heading text-2xl font-semibold text-wine">
          अन्य पूजा सेवाएँ भी जानें
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {relatedServices(service.id).map((s) => (
            <ServiceCard key={s.id} service={s} />
          ))}
        </div>
      </section>
    </>
  );
}

function relatedServices(id: ServiceId) {
  const preferred: Partial<Record<ServiceId, readonly ServiceId[]>> = {
    "gand-mool-shanti": ["navgrah-shanti", "nav-chandi", "kundli-paramarsh"],
    "nav-chandi": ["navgrah-shanti", "mahamrityunjay", "kundli-paramarsh"],
    "angarak-dosh": ["mangal-shanti", "navgrah-shanti", "kundli-paramarsh"],
    "pitra-dosh": ["grahan-dosh", "navgrah-shanti", "kundli-paramarsh"],
    "grahan-dosh": ["navgrah-shanti", "kaal-sarp", "kundli-paramarsh"],
    "guru-chandal": ["navgrah-shanti", "nav-chandi", "kundli-paramarsh"],
    "mangal-shanti": ["bhat-puja", "navgrah-shanti", "kundli-paramarsh"],
    "bhat-puja": ["mangal-shanti", "rudrabhishek", "navgrah-shanti"],
    "kaal-sarp": ["rudrabhishek", "navgrah-shanti", "kundli-paramarsh"],
    mahamrityunjay: ["rudrabhishek", "navgrah-shanti", "kundli-paramarsh"],
    "shani-shanti": ["navgrah-shanti", "kundli-paramarsh", "rudrabhishek"],
  };
  return preferred[id]
    ? services.filter((s) => preferred[id]?.includes(s.id))
    : services.filter((s) => s.id !== id).slice(0, 3);
}
