import Link from "next/link";
import { ArrowUpRight, ChevronRight, MapPin } from "lucide-react";
import { ActionLink, container, Mandala } from "./design";

type PageAction = { label: string; href: string };

export function PageHeading({
  eyebrow,
  title,
  description,
  parent,
  primaryAction = { label: "पूजा संबंधी पूछताछ", href: "/contact" },
  secondaryAction,
}: {
  eyebrow: string;
  title: string;
  description: string;
  parent?: { label: string; href: string };
  primaryAction?: PageAction | null;
  secondaryAction?: PageAction;
}) {
  return (
    <section className="sacred-section relative isolate overflow-hidden border-b border-gold/25 py-10 text-cream sm:py-16">
      <Mandala className="pointer-events-none absolute -right-30 -top-20 -z-10 w-120 text-gold/15" />
      <div className={container}>
        <nav
          aria-label="पृष्ठ का स्थान"
          className="mb-8 flex flex-wrap items-center gap-2 text-xs leading-6 text-cream/65"
        >
          <Link href="/" className="hover:text-saffron">
            मुख्य पृष्ठ
          </Link>
          <ChevronRight aria-hidden="true" className="size-3 shrink-0" />
          {parent && (
            <>
              <Link href={parent.href} className="hover:text-saffron">
                {parent.label}
              </Link>
              <ChevronRight aria-hidden="true" className="size-3 shrink-0" />
            </>
          )}
          <span aria-current="page" className="text-saffron">
            {parent ? title : eyebrow}
          </span>
        </nav>
        <p className="mb-4 text-xs font-semibold tracking-wide text-saffron">
          {eyebrow}
        </p>
        <h1 className="max-w-4xl text-balance font-heading text-3xl leading-[1.65] font-semibold text-cream sm:text-4xl lg:text-5xl lg:leading-[1.65]">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-sm leading-8 text-cream/75 sm:text-base sm:leading-9">
          {description}
        </p>
        {(primaryAction || secondaryAction) && (
          <div className="mt-7 flex flex-wrap gap-3">
            {primaryAction && (
              <ActionLink href={primaryAction.href} className="whitespace-normal bg-saffron text-wine-dark hover:bg-[#f3b974]">
                {primaryAction.label}<ArrowUpRight aria-hidden="true" className="size-4 shrink-0" />
              </ActionLink>
            )}
            {secondaryAction && (
              <ActionLink href={secondaryAction.href} variant="outline" className="whitespace-normal border-cream/30 bg-transparent text-cream hover:bg-cream/10 hover:text-cream">
                {secondaryAction.label}
              </ActionLink>
            )}
          </div>
        )}
        <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 border-t border-gold/20 pt-5 text-xs leading-6 text-cream/65">
          <span className="flex items-center gap-2"><MapPin aria-hidden="true" className="size-3.5 text-saffron" />मंगलनाथ, उज्जैन</span>
          <span>पंडित दीपक शर्मा · १५ वर्षों का अनुभव</span>
        </div>
      </div>
    </section>
  );
}
