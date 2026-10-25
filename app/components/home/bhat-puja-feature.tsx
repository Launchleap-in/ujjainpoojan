import Image from "next/image";
import { Check, ArrowRight } from "lucide-react";
import {
  ActionLink,
  container,
  SectionHeading,
  sectionSpace,
} from "@/app/components/shared/design";

export function BhatPujaFeature() {
  return (
    <section className={sectionSpace}>
      <div
        className={`${container} grid items-center gap-12 lg:grid-cols-2 lg:gap-20`}
      >
        <div>
          <SectionHeading
            eyebrow="मंगलनाथ की पूजन परंपरा"
            title={"भात अर्पण में श्रद्धा,\nमन में मंगल का संकल्प।"}
            description="मंगलनाथ में भात पूजा की परंपरा को करीब से जानें। संकल्प, पूजन और भात अर्पण के माध्यम से परिवार के मंगल की प्रार्थना करें।"
          />
          <ul className="my-7 space-y-3">
            {[
              "भात पूजा का अर्थ और मंगल शांति से संबंध",
              "पूजन का सामान्य क्रम और सहभागिता",
              "सामग्री एवं यात्रा की आवश्यक तैयारी",
            ].map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-sm leading-7"
              >
                <Check
                  aria-hidden="true"
                  className="mt-1 size-4 shrink-0 text-primary"
                />
                {item}
              </li>
            ))}
          </ul>
          <ActionLink href="/services/bhat-puja">
            भात पूजा की पूरी जानकारी
            <ArrowRight className="size-4" />
          </ActionLink>
        </div>
        <div className="relative pl-7 pt-7">
          <div
            aria-hidden="true"
            className="absolute inset-0 bottom-8 right-8 rounded-2xl border border-gold/60"
          />
          <div className="relative overflow-hidden rounded-2xl">
            <Image
              src="/pujan/pujan-08.jpeg"
              alt="मंदिर में पुष्प और भात अर्पण का पूजन स्थल"
              width={1080}
              height={1350}
              sizes="(max-width: 1024px) 90vw, 550px"
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
          <span className="absolute bottom-5 left-0 rounded-r-full bg-wine px-6 py-3 text-xs text-cream">
            मंगलनाथ · उज्जैन
          </span>
        </div>
      </div>
    </section>
  );
}
