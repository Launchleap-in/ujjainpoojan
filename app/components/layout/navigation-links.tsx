"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { navigation } from "@/app/data/data";
import { cn } from "@/lib/utils";

export function NavigationLinks({ mobile = false, onNavigate }: { mobile?: boolean; onNavigate?: () => void }) {
  const pathname = usePathname();
  const links = mobile ? navigation : navigation.filter(link => link.href !== "/contact" && link.href !== "/preparation");
  return links.map(link => {
    const active = link.href === "/" ? pathname === "/" : pathname === link.href || pathname.startsWith(`${link.href}/`);
    return (
      <Link key={link.href} href={link.href} onClick={onNavigate} aria-current={active ? "page" : undefined}
        className={cn(
          mobile
            ? "flex min-h-12 items-center justify-between gap-3 rounded-lg px-3 py-3 text-sm"
            : "border-b-2 py-3 text-xs font-medium transition-colors xl:text-sm",
          active
            ? mobile ? "bg-secondary font-semibold text-primary" : "border-primary text-primary"
            : mobile ? "text-wine hover:bg-secondary/60" : "border-transparent text-foreground/80 hover:border-gold/50 hover:text-primary",
        )}>
        {link.label}
        {mobile && <ArrowUpRight aria-hidden="true" className="size-4 shrink-0" />}
      </Link>
    );
  });
}
