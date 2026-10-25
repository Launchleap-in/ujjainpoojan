import { WhatsAppIcon } from "@/app/components/shared/whatsapp-icon";
import { whatsappHref } from "@/lib/contact";

export function WhatsAppButton() {
  return (
    <a
      href={whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp पर पंडित जी से बात करें (नई टैब में खुलेगा)"
      className="fixed right-5 bottom-[max(1.25rem,env(safe-area-inset-bottom))] z-40 inline-flex size-14 items-center justify-center rounded-full border-2 border-white bg-[#25D366] text-[#073b20] shadow-xl transition-transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-wine motion-reduce:transform-none sm:right-7 sm:size-16"
    >
      <WhatsAppIcon className="size-7 text-white sm:size-8" />
    </a>
  );
}
