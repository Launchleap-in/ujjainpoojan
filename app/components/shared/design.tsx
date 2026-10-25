import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Flower2, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/app/components/ui/button";

export const container = "mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12";
export const sectionSpace = "py-20 sm:py-24 lg:py-28";

export function SectionHeading({
  eyebrow,
  title,
  description,
  light = false,
  center = false,
  className,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  light?: boolean;
  center?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn("max-w-2xl", center && "mx-auto text-center", className)}
    >
      <p
        className={cn(
          "mb-5 flex items-center gap-3 text-xs font-semibold tracking-wide sm:text-sm",
          light ? "text-saffron" : "text-primary",
          center && "justify-center",
        )}
      >
        <span aria-hidden="true" className="h-px w-7 bg-current opacity-60" />
        {eyebrow}
        <Flower2 aria-hidden="true" className="size-4" />
      </p>
      <h2
        className={cn(
          "whitespace-pre-line font-heading text-3xl leading-[1.65] font-semibold sm:text-4xl lg:text-[2.65rem]",
          light ? "text-cream" : "text-wine",
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-5 text-sm leading-8 sm:text-base",
            light ? "text-cream/70" : "text-muted-foreground",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}

export function TextLink({
  href,
  children,
  light = false,
  className,
}: {
  href: string;
  children: React.ReactNode;
  light?: boolean;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex items-center gap-3 py-2 text-sm font-semibold underline-offset-8 transition-colors hover:underline",
        light ? "text-cream" : "text-primary",
        className,
      )}
    >
      {children}
      <ArrowRight
        aria-hidden="true"
        className="size-4 transition-transform group-hover:translate-x-1 motion-reduce:transition-none"
      />
    </Link>
  );
}

export function ActionLink({
  href,
  children,
  variant = "default",
  className,
}: {
  href: string;
  children: React.ReactNode;
  variant?: "default" | "outline" | "secondary";
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        buttonVariants({ variant }),
        "h-auto min-h-12 max-w-full gap-3 whitespace-normal rounded-full px-6 py-3.5 text-center text-sm leading-6",
        className,
      )}
    >
      {children}
    </Link>
  );
}

export function Brand({ light = false }: { light?: boolean }) {
  return (
    <Link
      href="/"
      aria-label="पंडित पूजा उज्जैन — मुख्य पृष्ठ"
      className={cn(
        "flex w-fit shrink-0 items-center gap-3",
        light ? "text-cream" : "text-wine",
      )}
    >
      <Image
        src="/brand/pandit-pooja-ujjain-mark.svg"
        alt=""
        width={96}
        height={96}
        className="size-12 shrink-0 sm:size-14"
        unoptimized
      />
      <span>
        <span className="block whitespace-nowrap font-heading text-lg font-semibold sm:text-xl">
          पंडित पूजा उज्जैन
        </span>
        <span
          className={cn(
            "mt-1 block whitespace-nowrap font-sans text-[9px] font-medium tracking-[0.13em] sm:text-[10px]",
            light ? "text-cream/60" : "text-muted-foreground",
          )}
        >
          PANDIT POOJA UJJAIN
        </span>
      </span>
    </Link>
  );
}

export function LocationLabel({ light = false }: { light?: boolean }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 text-xs",
        light ? "text-cream/70" : "text-muted-foreground",
      )}
    >
      <MapPin aria-hidden="true" className="size-3.5" />
      अंगारेश्वर महादेव मंदिर, उज्जैन
    </span>
  );
}

export function Mandala({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 600 600"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <circle
        cx="300"
        cy="300"
        r="289"
        stroke="currentColor"
        strokeWidth="0.7"
      />
      <circle
        cx="300"
        cy="300"
        r="276"
        stroke="currentColor"
        strokeWidth="0.6"
        strokeDasharray="2 7"
      />
      <circle
        cx="300"
        cy="300"
        r="237"
        stroke="currentColor"
        strokeWidth="0.6"
      />
      <circle
        cx="300"
        cy="300"
        r="180"
        stroke="currentColor"
        strokeWidth="0.7"
      />
      {Array.from({ length: 24 }, (_, i) => (
        <g key={i} transform={`rotate(${i * 15} 300 300)`}>
          <path
            d="M300 40 Q250 115 300 165 Q350 115 300 40Z"
            stroke="currentColor"
            strokeWidth="0.7"
          />
          <path d="M300 14 V35 M300 252 V269" stroke="currentColor" />
          <circle cx="300" cy="48" r="3" fill="currentColor" />
        </g>
      ))}
      {Array.from({ length: 12 }, (_, i) => (
        <path
          key={i}
          d="M300 120 L300 480"
          transform={`rotate(${i * 15} 300 300)`}
          stroke="currentColor"
          strokeWidth="0.4"
        />
      ))}
      <circle cx="300" cy="300" r="60" stroke="currentColor" />
      <path
        d="M300 240 L352 330 H248 Z M300 360 L248 270 H352 Z"
        stroke="currentColor"
      />
    </svg>
  );
}
