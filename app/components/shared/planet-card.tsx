import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Planet } from "@/app/data/data";
import { cn } from "@/lib/utils";

// Each deity occupies one exact third of the shared devotional artwork.
const deityPanels = {
  surya: { name: "सूर्य देव", position: "left-0 top-0" },
  chandra: { name: "चंद्र देव", position: "-left-full top-0" },
  mangal: { name: "मंगल देव", position: "-left-[200%] top-0" },
  budh: { name: "बुध देव", position: "left-0 -top-full" },
  guru: { name: "बृहस्पति देव", position: "-left-full -top-full" },
  shukra: { name: "शुक्राचार्य", position: "-left-[200%] -top-full" },
  shani: { name: "शनि देव", position: "left-0 -top-[200%]" },
  rahu: { name: "राहु देव", position: "-left-full -top-[200%]" },
  ketu: { name: "केतु देव", position: "-left-[200%] -top-[200%]" },
};

export function PlanetIcon({
  id,
  className,
}: {
  id: string;
  className?: string;
}) {
  const deity =
    deityPanels[id as keyof typeof deityPanels] ?? deityPanels.surya;
  return (
    <span
      className={cn(
        "relative inline-block size-28 shrink-0 overflow-hidden rounded-2xl bg-cream",
        className,
      )}
    >
      <Image
        src="/pujan/navagraha-deities.webp"
        alt={`${deity.name} का पारंपरिक चित्रण`}
        width={1254}
        height={1254}
        sizes="(max-width: 640px) 384px, 480px"
        className={cn("absolute h-auto w-[300%] max-w-none", deity.position)}
      />
    </span>
  );
}

export function PlanetCard({
  planet,
  light = false,
  showDescription = false,
}: {
  planet: Planet;
  light?: boolean;
  showDescription?: boolean;
}) {
  return (
    <Link
      href={`/planets/${planet.id}`}
      className={cn(
        "group flex items-center gap-4 rounded-2xl border p-4 transition-all hover:border-gold/80 hover:shadow-lg hover:shadow-wine/5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary sm:p-5",
        light ? "border-gold/30 bg-wine-dark/65 hover:bg-wine-dark/90" : "border-gold/25 bg-card",
      )}
    >
      <PlanetIcon id={planet.id} className={showDescription ? "size-20 xl:size-24" : "size-28 xl:size-32"} />
      <div className="min-w-0 flex-1">
        <h3 className={cn("font-heading text-xl font-semibold", light ? "text-cream" : "text-wine")}>
          {planet.name}
        </h3>
        {showDescription && (
          <p className={cn("mt-2 text-sm leading-7", light ? "text-cream/80" : "text-muted-foreground")}>
            {planet.description}
          </p>
        )}
        <p className={cn("mt-2 text-xs leading-6", light ? "text-gold" : "text-muted-foreground")}>
          {planet.associations.slice(0, 2).join(" · ")}
        </p>
        <span className={cn("mt-3 inline-flex items-center gap-2 text-xs font-medium", light ? "text-saffron" : "text-primary")}>
          आराधना जानें
          <ArrowUpRight
            aria-hidden="true"
            className="size-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transform-none"
          />
        </span>
      </div>
    </Link>
  );
}
