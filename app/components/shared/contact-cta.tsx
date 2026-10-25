import { ArrowUpRight, Flower2 } from "lucide-react";
import { ActionLink, container, Mandala } from "./design";

export function ContactCta() {
  return (
    <section className={`${container} py-20 sm:py-24`}>
      <div className="relative isolate overflow-hidden rounded-3xl bg-wine px-6 py-14 text-center sm:px-12 sm:py-16">
        <Mandala className="absolute -left-35 -top-30 -z-10 w-100 text-gold/20" />
        <Mandala className="absolute -bottom-36 -right-30 -z-10 w-100 text-gold/20" />
        <Flower2
          aria-hidden="true"
          className="mx-auto mb-5 size-7 text-saffron"
        />
        <h2 className="font-heading text-3xl leading-[1.7] font-semibold text-cream sm:text-4xl">
          अपने शुभ संकल्प की शुरुआत करें।
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-8 text-cream/75">
          पूजा का उद्देश्य, पसंद की तिथि और अपने प्रश्न साझा करें। श्रद्धा के
          साथ, स्पष्ट जानकारी से आगे बढ़ें।
        </p>
        <ActionLink
          href="/contact"
          variant="secondary"
          className="mt-7 bg-cream text-wine hover:bg-cream/90"
        >
          पूजा संबंधी जानकारी लें
          <ArrowUpRight className="size-4" />
        </ActionLink>
      </div>
    </section>
  );
}
