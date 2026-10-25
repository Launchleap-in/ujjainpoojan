import { ArrowRight } from "lucide-react";
import { ActionLink, container, Mandala } from "@/app/components/shared/design";

export default function NotFound() {
  return (
    <div
      className={`${container} relative isolate overflow-hidden py-28 text-center`}
    >
      <Mandala className="absolute -top-50 left-1/2 -z-10 w-140 -translate-x-1/2 text-gold/20" />
      <p className="mb-4 text-sm text-primary">पृष्ठ उपलब्ध नहीं है</p>
      <h1 className="font-heading text-4xl leading-[1.7] font-semibold text-wine">
        आइए, सही पृष्ठ पर चलें।
      </h1>
      <p className="mx-auto mt-5 max-w-md text-sm leading-8 text-muted-foreground">
        आप जिस पृष्ठ को खोज रहे हैं, वह यहाँ उपलब्ध नहीं है। पूजा सेवाओं की सूची
        या मुख्य पृष्ठ से आगे बढ़ें।
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <ActionLink href="/">
          मुख्य पृष्ठ
          <ArrowRight className="size-4" />
        </ActionLink>
        <ActionLink href="/services" variant="outline">
          पूजा सेवाएँ देखें
        </ActionLink>
      </div>
    </div>
  );
}
