import { Check, ClipboardList } from "lucide-react";
import { preparationData } from "@/app/data/data";
import {
  container,
  sectionSpace,
  SectionHeading,
  TextLink,
} from "@/app/components/shared/design";

export function PreparationSection() {
  return (
    <section className={`${sectionSpace} bg-secondary/40`}>
      <div
        className={`${container} grid items-start gap-10 lg:grid-cols-2 lg:gap-20`}
      >
        <div>
          <span className="mb-5 flex size-12 items-center justify-center rounded-full border border-gold/50">
            <ClipboardList className="size-5 text-primary" />
          </span>
          <SectionHeading
            eyebrow="थोड़ी तैयारी, सहज पूजन"
            title={"उज्जैन आने से पहले,\nये बातें जान लें।"}
            description="पूजा की तिथि के साथ यात्रा और सामग्री की तैयारी भी करें। छोटी-सी स्पष्टता, आपकी सहभागिता को सहज बनाती है।"
          />
          <TextLink href="/preparation" className="mt-5">
            पूरी तैयारी सूची देखें
          </TextLink>
        </div>
        <div className="divide-y rounded-2xl border bg-card px-6">
          {preparationData.items.slice(0, 5).map((item, i) => (
            <div key={item} className="flex items-start gap-4 py-5">
              <span className="mt-1 flex size-6 shrink-0 items-center justify-center rounded-full bg-sage/10 text-sage">
                <Check className="size-3.5" />
              </span>
              <p className="text-sm leading-8 text-muted-foreground">
                <span className="sr-only">{i + 1}. </span>
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
