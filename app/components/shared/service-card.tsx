import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Service, ServiceId } from "@/app/data/data";
import { serviceMedia } from "@/app/data/content";
import { Card, CardContent } from "@/app/components/ui/card";

export function ServiceCard({
  service,
}: {
  service: Service & { id: ServiceId };
}) {
  const media = serviceMedia[service.id];
  return (
    <Card className="group break-inside-avoid gap-0 overflow-hidden rounded-2xl border border-border bg-card py-0 shadow-none ring-0 transition-all duration-300 hover:-translate-y-1 hover:border-gold/70 hover:shadow-xl hover:shadow-wine/5 motion-reduce:transform-none motion-reduce:transition-none">
      <Link href={`/services/${service.slug}`} className="flex h-full flex-col">
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={media.image}
            alt={media.alt}
            width={media.width}
            height={media.height}
            sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 370px"
            className="h-full w-full object-cover"
          />
          <span className="absolute bottom-4 left-4 rounded-full bg-card/95 px-3 py-1.5 text-[10px] font-medium text-wine">
            {media.label}
          </span>
        </div>
        <CardContent className="flex flex-1 flex-col px-6 py-6">
          <h3 className="font-heading text-xl leading-9 font-semibold text-wine">
            {service.title}
          </h3>
          <p className="mt-3 text-sm leading-8 text-muted-foreground">
            {service.description}
          </p>
          <span className="mt-auto flex items-center justify-between pt-5 text-xs font-semibold text-primary">
            विधि एवं तैयारी जानें
            <span className="flex size-8 items-center justify-center rounded-full border border-primary/20 transition-colors group-hover:bg-primary group-hover:text-cream">
              <ArrowUpRight aria-hidden="true" className="size-4" />
            </span>
          </span>
        </CardContent>
      </Link>
    </Card>
  );
}
