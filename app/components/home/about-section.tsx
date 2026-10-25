import Image from "next/image";
import { HeartHandshake, BookOpen, Flower2 } from "lucide-react";
import { homeContent } from "@/app/data/content";
import {
  container,
  SectionHeading,
  sectionSpace,
  TextLink,
} from "@/app/components/shared/design";

export function AboutSection() {
  const data = homeContent.about;
  return (
    <section id="about" className={sectionSpace}>
      <div
        className={`${container} grid items-center gap-14 lg:grid-cols-2 lg:gap-22`}
      >
        <div className="relative mx-auto w-full max-w-lg pb-10 pr-8">
          <div className="relative overflow-hidden rounded-2xl">
            <Image
              src="/pujan/pujan-11.jpeg"
              alt="पूजन में श्रद्धापूर्वक संकल्प अर्पित करते हाथ"
              width={1080}
              height={1080}
              sizes="(max-width: 1024px) 90vw, 470px"
              className="h-auto w-full"
            />
          </div>
          <div className="absolute -right-1 bottom-0 flex max-w-65 items-center gap-4 rounded-2xl border border-gold/30 bg-cream px-6 py-5 shadow-lg shadow-wine/5">
            <Flower2
              aria-hidden="true"
              className="size-9 shrink-0 text-primary"
            />
            <p className="font-heading text-lg leading-8 text-wine">
              श्रद्धा से आरंभ,
              <br />
              संकल्प से जुड़ाव।
            </p>
          </div>
          <span
            aria-hidden="true"
            className="absolute -left-4 -top-4 -z-10 size-48 rounded-full border border-gold/30"
          />
        </div>
        <div>
          <SectionHeading {...data} />
          <p className="mt-4 text-sm leading-8 text-muted-foreground">
            {data.detail}
          </p>
          <div className="my-7 grid grid-cols-3 divide-x border-y py-5">
            {[
              { icon: Flower2, label: "परंपरा का सम्मान" },
              { icon: BookOpen, label: "स्पष्ट जानकारी" },
              { icon: HeartHandshake, label: "सहज संवाद" },
            ].map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex flex-col items-center gap-3 px-2 text-center"
              >
                <Icon
                  aria-hidden="true"
                  className="size-5 text-primary"
                  strokeWidth={1.4}
                />
                <p className="text-xs text-wine">{label}</p>
              </div>
            ))}
          </div>
          <TextLink href="/about">हमारे दृष्टिकोण को जानें</TextLink>
        </div>
      </div>
    </section>
  );
}
