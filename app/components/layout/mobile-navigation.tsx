"use client";

import { useState } from "react";
import { Menu } from "lucide-react";
import { NavigationLinks } from "./navigation-links";
import { Button } from "@/app/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetTrigger,
} from "@/app/components/ui/sheet";

export function MobileNavigation() {
  const [open, setOpen] = useState(false);
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        render={
          <Button
            variant="outline"
            size="icon"
            className="size-11 shrink-0 rounded-full xl:hidden"
          />
        }
        aria-label="नेविगेशन खोलें"
      >
        <Menu />
      </SheetTrigger>
      <SheetContent className="w-[min(90vw,24rem)]! gap-6 overflow-y-auto px-5 py-8">
        <SheetHeader className="p-0">
          <SheetTitle className="text-2xl text-wine">उज्जैन पूजन</SheetTitle>
          <SheetDescription className="mt-2 leading-7">
            श्रद्धा, संकल्प और वैदिक परंपरा का संगम
          </SheetDescription>
        </SheetHeader>
        <nav aria-label="मोबाइल नेविगेशन" className="flex flex-col gap-1">
          <NavigationLinks mobile onNavigate={() => setOpen(false)} />
        </nav>
        <p className="mt-auto text-xs text-muted-foreground">
          पंडित दीपक शर्मा · १५ वर्षों का अनुभव<br />अंगारेश्वर महादेव मंदिर, उज्जैन, मध्य प्रदेश
        </p>
      </SheetContent>
    </Sheet>
  );
}
