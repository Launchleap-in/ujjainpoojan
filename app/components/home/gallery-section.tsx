"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Expand, X } from "lucide-react";
import { galleryImages, homeContent } from "@/app/data/content";
import {
  container,
  sectionSpace,
  SectionHeading,
} from "@/app/components/shared/design";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/app/components/ui/dialog";
import { Button } from "@/app/components/ui/button";

export function GallerySection() {
  const [selected, setSelected] = useState<number | null>(null);
  const image = selected !== null ? galleryImages[selected] : null;
  const move = (direction: number) =>
    setSelected((current) =>
      current === null
        ? 0
        : (current + direction + galleryImages.length) % galleryImages.length,
    );
  return (
    <section id="gallery" className={`${sectionSpace} sacred-section relative isolate overflow-hidden text-cream`}>
      <div className={container}>
        <div className="mb-11">
          <SectionHeading {...homeContent.gallery} light />
        </div>
        <div className="grid items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {galleryImages.map((item, i) => (
            <button
              key={item.src}
              type="button"
              aria-label={`${item.caption} — बड़ा चित्र खोलें`}
              onClick={() => setSelected(i)}
              className="group flex h-full min-w-0 flex-col rounded-2xl border border-gold/60 bg-cream p-3 text-left shadow-lg shadow-black/15 transition-transform duration-300 hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-saffron motion-reduce:transform-none sm:p-4"
            >
              <span className="relative block aspect-square w-full overflow-hidden rounded-lg border border-gold/40 bg-secondary p-3 sm:p-4">
                <span className="relative block h-full w-full">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 640px) 85vw, (max-width: 1024px) 42vw, 350px"
                    className="object-contain drop-shadow-md"
                  />
                </span>
                <span className="absolute right-3 bottom-3 flex size-9 items-center justify-center rounded-full border border-gold/40 bg-cream/95 text-wine shadow-sm transition-colors group-hover:bg-wine group-hover:text-cream group-focus-visible:bg-wine group-focus-visible:text-cream">
                  <Expand aria-hidden="true" className="size-4" />
                </span>
              </span>
              <span className="flex flex-1 items-center gap-3 px-1 pt-4 pb-2 sm:pt-5">
                <span aria-hidden="true" className="flex size-8 shrink-0 items-center justify-center rounded-full border border-gold/40 text-[11px] font-medium text-primary">
                  {new Intl.NumberFormat("hi-IN-u-nu-deva", { minimumIntegerDigits: 2 }).format(i + 1)}
                </span>
                <span className="font-heading text-sm leading-7 font-medium text-wine">{item.caption}</span>
              </span>
            </button>
          ))}
        </div>
        <p className="mt-8 text-center text-xs leading-7 text-cream/65">हर तस्वीर में एक शुभ संकल्प। बड़े आकार में देखने के लिए चित्र चुनें।</p>
        <Dialog
          open={selected !== null}
          onOpenChange={(open) => {
            if (!open) setSelected(null);
          }}
        >
          <DialogContent
            showCloseButton={false}
            className="max-h-[95dvh] max-w-[calc(100%-1.5rem)] gap-3 overflow-y-auto border border-border bg-background p-3 sm:max-w-4xl sm:p-5"
            onKeyDown={(event) => {
              if (event.key === "ArrowRight") move(1);
              if (event.key === "ArrowLeft") move(-1);
            }}
          >
            <div className="flex items-center justify-between gap-3">
              <DialogTitle className="text-sm leading-7 text-wine">
                {image?.caption ?? "पूजा की तस्वीर"}
              </DialogTitle>
              <DialogClose
                render={<Button variant="ghost" size="icon" />}
                aria-label="चित्र बंद करें"
              >
                <X />
              </DialogClose>
            </div>
            {image && (
              <div className="relative h-[60dvh] w-full overflow-hidden rounded-xl border border-gold/30 bg-secondary/60">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="90vw"
                  className="object-contain"
                />
              </div>
            )}
            <div className="flex items-center justify-between gap-4">
              <Button
                variant="outline"
                onClick={() => move(-1)}
                aria-label="पिछला चित्र"
                className="size-11 rounded-full"
              >
                <ArrowLeft />
              </Button>
              <DialogDescription className="text-center text-xs">
                {selected !== null ? selected + 1 : 0} / {galleryImages.length}{" "}
                · {image?.alt}
              </DialogDescription>
              <Button
                variant="outline"
                onClick={() => move(1)}
                aria-label="अगला चित्र"
                className="size-11 rounded-full"
              >
                <ArrowRight />
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
