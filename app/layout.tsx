import type { Metadata } from "next";
import { sans, heading } from "@/lib/fonts";
import { siteInfo } from "@/app/data/data";
import { Header } from "@/app/components/layout/header";
import { Footer } from "@/app/components/layout/footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: siteInfo.title,
    template: "%s | पंडित पूजा उज्जैन",
  },
  description: siteInfo.description,
  applicationName: siteInfo.name,
  icons: { icon: "/icon.svg", apple: "/apple-icon.png" },
  openGraph: {
    title: siteInfo.title,
    description: siteInfo.description,
    locale: "hi_IN",
    type: "website",
    siteName: siteInfo.name,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="hi" data-scroll-behavior="smooth" className={`${sans.variable} ${heading.variable}`}>
      <body className="flex min-h-dvh flex-col">
        <a
          href="#main-content"
          className="sr-only fixed left-4 top-4 z-60 rounded-lg bg-wine px-5 py-3 text-sm text-cream focus:not-sr-only"
        >
          मुख्य सामग्री पर जाएँ
        </a>
        <Header />
        <main id="main-content" tabIndex={-1} className="flex-1 outline-none">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
