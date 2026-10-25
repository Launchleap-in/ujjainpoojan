import { Suspense } from "react";
import { ArrowUpRight, Flower2 } from "lucide-react";
import {
  Brand,
  container,
  LocationLabel,
  ActionLink,
} from "@/app/components/shared/design";
import { MobileNavigation } from "./mobile-navigation";
import { NavigationLinks } from "./navigation-links";

export function Header() {
  return (
    <>
      <div className="bg-wine-dark py-2.5 text-cream">
        <div className={`${container} flex items-center justify-between gap-4`}>
          <LocationLabel light />
          <p className="flex items-center gap-2 text-[11px] text-cream/75">
            <Flower2 aria-hidden="true" className="size-3 text-saffron" />
            <span className="hidden sm:inline">शुभ संकल्प की शुरुआत,</span>{" "}
            श्रद्धा के साथ
          </p>
        </div>
      </div>
      <header className="sticky top-0 z-40 border-b border-border/80 bg-background/95 backdrop-blur-xl">
        <div
          className={`${container} flex min-h-22 items-center justify-between gap-5 py-4`}
        >
          <Brand />
          <nav
            aria-label="मुख्य नेविगेशन"
            className="hidden items-center gap-5 xl:flex"
          >
            <Suspense><NavigationLinks /></Suspense>
          </nav>
          <ActionLink
            href="/contact"
            className="hidden px-5 text-xs sm:inline-flex"
          >
            संपर्क करें
            <ArrowUpRight className="size-4" />
          </ActionLink>
          <Suspense fallback={<span className="size-11 xl:hidden" />}><MobileNavigation /></Suspense>
        </div>
      </header>
    </>
  );
}
