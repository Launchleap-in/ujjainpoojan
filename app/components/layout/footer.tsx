import Link from "next/link";
import { ArrowUpRight, MapPin, Flower2 } from "lucide-react";
import { footerData, navigation, services } from "@/app/data/data";
import { Brand, container } from "@/app/components/shared/design";

export function Footer() {
  return (
    <footer className="bg-wine-dark text-cream">
      <div
        className={`${container} grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.1fr] lg:gap-10`}
      >
        <div>
          <Brand light />
          <p className="mt-6 max-w-xs text-sm leading-8 text-cream/65">
            {footerData.description}
          </p>
          <span className="mt-6 flex items-center gap-3 text-xs text-gold">
            <Flower2 className="size-4" />
            श्रद्धा से आरंभ, संकल्प से जुड़ाव।
          </span>
        </div>
        <div>
          <h2 className="mb-6 font-heading text-lg">उपयोगी पृष्ठ</h2>
          <ul className="space-y-3">
            {navigation.filter(link => link.href !== "/contact" && link.href !== "/preparation").map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-cream/65 hover:text-saffron"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="mb-6 font-heading text-lg">प्रमुख पूजन</h2>
          <ul className="space-y-3">
            {services.slice(0, 5).map((service) => (
              <li key={service.id}>
                <Link
                  href={`/services/${service.slug}`}
                  className="text-sm text-cream/65 hover:text-saffron"
                >
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="mb-6 font-heading text-lg">तैयारी एवं संपर्क</h2>
          <p className="flex items-start gap-2 text-sm leading-7 text-cream/65">
            <MapPin className="mt-1 size-4 shrink-0 text-saffron" />
            मंगलनाथ, उज्जैन
            <br />
            मध्य प्रदेश, भारत
          </p>
          <Link
            href="/preparation"
            className="mt-5 block text-sm text-cream/65 hover:text-saffron"
          >
            पूजा की तैयारी सूची
          </Link>
          <Link
            href="/contact"
            className="mt-5 inline-flex items-center gap-2 text-sm text-saffron"
          >
            अपना संकल्प साझा करें
            <ArrowUpRight className="size-4" />
          </Link>
        </div>
      </div>
      <div className="border-t border-cream/10">
        <div
          className={`${container} flex flex-col gap-3 py-6 text-[11px] leading-6 text-cream/50 md:flex-row md:justify-between`}
        >
          <p>© पंडित पूजा उज्जैन। सर्वाधिकार सुरक्षित।</p>
          <p>{footerData.faithNote}</p>
        </div>
      </div>
    </footer>
  );
}
