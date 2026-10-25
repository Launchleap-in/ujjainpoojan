"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Expand, X, Play } from "lucide-react";
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
  const [video, setVideo] = useState(false);
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
        <div className="mb-11 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading {...homeContent.gallery} light />
          <Button
            variant="outline"
            onClick={() => setVideo(true)}
            className="h-12 w-fit gap-3 rounded-full border-gold/50 bg-transparent px-5 text-cream hover:bg-cream/10 hover:text-cream"
          >
            <Play className="size-4 text-saffron" />
            पूजन की वीडियो झलक
          </Button>
        </div>
        <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
          {galleryImages.map((item, i) => (
            <button
              key={item.src}
              type="button"
              aria-label={`${item.caption} — बड़ा चित्र खोलें`}
              onClick={() => setSelected(i)}
              className="group relative mb-5 block w-full break-inside-avoid overflow-hidden rounded-xl text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={item.width}
                height={item.height}
                sizes={
                  i === 0
                    ? "(max-width: 1024px) 90vw, 560px"
                    : "(max-width: 640px) 45vw, 300px"
                }
                className="h-auto w-full"
              />
              <span className="absolute inset-0 bg-linear-to-t from-wine-dark/75 via-transparent to-transparent" />
              <span className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3 text-xs leading-6 text-cream sm:bottom-5 sm:left-5">
                {item.caption}
                <Expand
                  aria-hidden="true"
                  className="mb-1 size-4 shrink-0 opacity-75"
                />
              </span>
            </button>
          ))}
        </div>
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
              <div className="relative h-[60dvh] w-full">
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
        <Dialog open={video} onOpenChange={setVideo}>
          <DialogContent className="sm:max-w-3xl">
            <DialogTitle className="pr-8 text-base leading-8 text-wine">
              पूजन की वीडियो झलक
            </DialogTitle>
            <DialogDescription>
              अनुष्ठान और सहभागिता का एक वास्तविक क्षण।
            </DialogDescription>
            {video && (
              <video
                controls
                playsInline
                preload="metadata"
                className="max-h-[65dvh] w-full rounded-lg bg-wine-dark"
              >
                <source
                  src="/pujan/WhatsApp Video 2026-10-18 at 9.21.32 PM.mp4"
                  type="video/mp4"
                />
                आपका ब्राउज़र इस वीडियो को नहीं चला सकता।
              </video>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
