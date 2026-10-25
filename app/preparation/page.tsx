import type { Metadata } from "next";
import { Check, MapPin, Clock, PackageCheck, Shirt } from "lucide-react";
import { preparationData, bookingProcessData } from "@/app/data/data";
import { PageHeading } from "@/app/components/shared/page-heading";
import { ArticleLayout } from "@/app/components/shared/article-layout";
import { TextLink } from "@/app/components/shared/design";
import { ContactCta } from "@/app/components/shared/contact-cta";

export const metadata: Metadata = {
  title: "पूजा एवं उज्जैन यात्रा की तैयारी",
  description:
    "संकल्प, पूजा सामग्री, वस्त्र, समय और यात्रा की तैयारी की सरल हिंदी सूची।",
};
export default function PreparationPage() {
  return (
    <>
      <PageHeading
        eyebrow="पूजा की तैयारी"
        title="थोड़ी तैयारी, श्रद्धापूर्वक सहभागिता।"
        description="पूजा तय करने से लेकर उज्जैन पहुँचने तक, आवश्यक बातों की यह सूची अपनी यात्रा और संकल्प की तैयारी में साथ रखें।"
        secondaryAction={{ label: "तैयारी सूची पढ़ें", href: "#checklist" }}
      />
      <ArticleLayout
        sections={[
          { id: "checklist", title: "आवश्यक जानकारी" },
          { id: "materials", title: "पूजा सामग्री" },
          { id: "travel", title: "यात्रा एवं समय" },
          { id: "clothes", title: "वस्त्र एवं सहभागिता" },
          { id: "confirmation", title: "व्यवस्था की पुष्टि" },
        ]}
      >
        <section id="checklist">
          <h2>संकल्प और परामर्श की जानकारी</h2>
          <ul className="space-y-4">
            {preparationData.items.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-xl border bg-card px-5 py-4 text-sm"
              >
                <Check className="mt-1.5 size-4 shrink-0 text-primary" />
                {item}
              </li>
            ))}
          </ul>
        </section>
        <section id="materials">
          <PackageCheck className="mb-4 size-7 text-primary" />
          <h2>सामग्री की व्यवस्था पहले समझें</h2>
          <p>
            कौन-सी सामग्री आयोजक उपलब्ध कराएगा और क्या साथ लाना होगा, यह पहले तय
            करें। व्यक्तिगत संकल्प से जुड़ी वस्तुओं और स्थानीय रूप से उपलब्ध
            सामग्री के बारे में पूछें।
          </p>
          <p>
            सामग्री की सूची पूजा के अनुसार बदलती है। भात पूजा, अभिषेक या मंत्र
            जप की अलग आवश्यकताएँ हो सकती हैं। बिना पुष्टि के बड़ी मात्रा में
            सामग्री खरीदने के बजाय संबंधित विधि की सूची लें।
          </p>
        </section>
        <section id="travel">
          <MapPin className="mb-4 size-7 text-primary" />
          <h2>स्थान और पहुँचने के समय की पुष्टि</h2>
          <p>
            मंगलनाथ, उज्जैन में पूजा का सटीक स्थान और मिलने का बिंदु पहले
            सुनिश्चित करें। यात्रा, आवास और स्थानीय आवागमन की योजना पूजा के समय
            के साथ बनाएँ।
          </p>
          <p>
            पूजा स्थल पर प्रवेश और व्यवस्था के निर्देश बदल सकते हैं। निकलने से
            पहले संबंधित स्थान से वर्तमान जानकारी लें और अपने साथ आने वाले
            सदस्यों को भी समय बताएँ।
          </p>
          <a
            href="https://www.google.com/maps/search/?api=1&query=Mangalnath+Temple+Ujjain"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block text-sm font-medium text-primary underline underline-offset-4"
          >
            मानचित्र पर मंगलनाथ देखें ↗
          </a>
        </section>
        <section id="clothes">
          <Shirt className="mb-4 size-7 text-primary" />
          <h2>वस्त्र और सहभागिता संबंधी निर्देश</h2>
          <p>
            पूजा स्थल के अनुसार वस्त्र, उपवास और व्यक्तिगत सहभागिता की जानकारी
            लें। परिवार में बच्चों, बुजुर्गों या विशेष सहायता की आवश्यकता वाले
            सदस्यों के आने पर व्यवस्था के बारे में पहले चर्चा करें।
          </p>
          <p>
            अभिषेक, अर्पण या किसी विशिष्ट चरण में सहभागी होने की अनुमति और तरीका
            स्थल की विधि के अनुसार समझें।
          </p>
        </section>
        <section id="confirmation">
          <Clock className="mb-4 size-7 text-primary" />
          <h2>इन बातों की पुष्टि के बाद योजना तय करें</h2>
          <ol className="list-decimal space-y-4 pl-5">
            {bookingProcessData.steps.map((step) => (
              <li key={step.step}>
                <h3>{step.title}</h3>
                <p className="text-sm">{step.description}</p>
              </li>
            ))}
          </ol>
          <p className="mt-5">
            कुल शुल्क, दक्षिणा, जप संख्या और अतिरिक्त व्यवस्था का विवरण स्पष्ट
            रखें। पूछताछ के बाद उपलब्धता और व्यवस्था की पुष्टि मिलने पर ही
            बुकिंग तय मानें।
          </p>
          <TextLink href="/contact" className="mt-3">
            अपनी पूछताछ तैयार करें
          </TextLink>
        </section>
      </ArticleLayout>
      <ContactCta />
    </>
  );
}
