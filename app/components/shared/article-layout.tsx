import Link from "next/link";
import { ArrowUpRight, Flower2, List } from "lucide-react";
import { container, sectionSpace, ActionLink } from "./design";

export function ArticleLayout({
  children,
  sections,
  contactHref = "/contact",
}: {
  children: React.ReactNode;
  sections: readonly { id: string; title: string }[];
  contactHref?: string;
}) {
  return (
    <div
      className={`${container} ${sectionSpace} grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_280px] lg:gap-10`}
    >
      <aside className="order-first space-y-6 lg:sticky lg:top-30 lg:order-last">
        <details className="rounded-xl border bg-card px-5 py-4 lg:hidden">
          <summary className="min-h-7 cursor-pointer text-sm font-semibold leading-7 text-wine">
            इस पृष्ठ के विषय देखें
          </summary>
          <nav aria-label="इस पृष्ठ के विषय" className="mt-4">
            <ol className="space-y-3">
              {sections.map((section) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="flex min-h-11 items-center rounded-lg px-3 py-2 text-sm leading-7 text-wine hover:bg-secondary hover:text-primary"
                  >
                    {section.title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        </details>
        <nav
          aria-label="इस पृष्ठ पर"
          className="hidden rounded-2xl border bg-card p-6 lg:block"
        >
          <h2 className="mb-4 flex items-center gap-2 text-sm font-semibold text-wine">
            <List className="size-4" />
            इस पृष्ठ पर
          </h2>
          <ol className="space-y-3">
            {sections.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className="flex min-h-10 items-center rounded-lg px-3 py-2 text-xs leading-6 text-muted-foreground transition-colors hover:bg-secondary hover:text-primary"
                >
                  {section.title}
                </a>
              </li>
            ))}
          </ol>
        </nav>
        <div className="sacred-section relative isolate hidden overflow-hidden rounded-2xl border border-gold/30 p-6 text-cream lg:block">
          <Flower2 className="mb-4 size-6 text-saffron" />
          <h2 className="font-heading text-xl leading-9">
            अगला कदम: पूछताछ
          </h2>
          <p className="mt-3 text-xs leading-7 text-cream/70">
            अपने प्रश्नों के साथ पूजा की तैयारी और व्यवस्था की जानकारी लें।
          </p>
          <ActionLink
            href={contactHref}
            variant="secondary"
            className="mt-5 w-full px-3 text-xs"
          >
            पूछताछ तैयार करें
            <ArrowUpRight className="size-4" />
          </ActionLink>
          <Link
            href="/preparation"
            className="mt-4 block text-center text-xs text-cream/70 underline underline-offset-4"
          >
            पूजा से पहले की तैयारी
          </Link>
        </div>
      </aside>
      <article className="reading-content min-w-0 space-y-6 text-sm leading-9 text-muted-foreground sm:text-base sm:leading-9 [&_h2]:mb-5 [&_h2]:font-heading [&_h2]:text-2xl [&_h2]:leading-[1.7] [&_h2]:font-semibold [&_h2]:text-wine sm:[&_h2]:text-3xl [&_h3]:font-heading [&_h3]:text-lg [&_h3]:leading-8 [&_h3]:font-semibold [&_h3]:text-wine [&_p+p]:mt-4 [&_section]:scroll-mt-32">
        {children}
      </article>
    </div>
  );
}
