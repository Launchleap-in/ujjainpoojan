import { MessageCircle, BookOpen, CalendarCheck, Flower2 } from "lucide-react";
import { bookingProcessData } from "@/app/data/data";
import { homeContent } from "@/app/data/content";
import {
  container,
  sectionSpace,
  SectionHeading,
} from "@/app/components/shared/design";

const icons = [MessageCircle, BookOpen, CalendarCheck, Flower2];
export function ProcessSection() {
  return (
    <section className={`${sectionSpace} border-y bg-secondary/35`}>
      <div className={container}>
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading {...homeContent.process} />
          <p className="max-w-sm text-sm leading-8 text-muted-foreground">
            अपनी आवश्यकता साझा करें और पूजा की विधि व व्यवस्था समझकर आगे बढ़ें।
          </p>
        </div>
        <div className="relative mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div
            aria-hidden="true"
            className="absolute left-6 right-6 top-7 hidden border-t border-dashed border-gold/60 lg:block"
          />
          {bookingProcessData.steps.map((step, i) => {
            const Icon = icons[i];
            return (
              <div key={step.step} className="relative">
                <div className="relative flex size-15 items-center justify-center rounded-full border border-gold/50 bg-background">
                  <Icon
                    aria-hidden="true"
                    className="size-6 text-primary"
                    strokeWidth={1.4}
                  />
                  <span className="absolute -right-2 -top-2 flex size-6 items-center justify-center rounded-full bg-wine text-[10px] text-cream">
                    {step.step}
                  </span>
                </div>
                <h3 className="mt-6 font-heading text-lg leading-8 font-semibold text-wine">
                  {step.title}
                </h3>
                <p className="mt-3 max-w-xs text-sm leading-8 text-muted-foreground">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
