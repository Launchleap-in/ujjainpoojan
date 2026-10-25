import { Suspense } from "react";
import { ArticleLoading } from "@/app/components/shared/article-loading";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { services } from "@/app/data/data";
import { PageHeading } from "@/app/components/shared/page-heading";
import { ServiceDetails } from "@/app/components/shared/service-details";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  return service
    ? {
        title: `${service.title} — विधि एवं तैयारी`,
        description: service.description,
      }
    : { title: "पूजा उपलब्ध नहीं" };
}
async function ServicePageContent({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();
  return (
    <>
      <PageHeading
        eyebrow={service.subtitle}
        title={service.title}
        description={service.description}
        parent={{ label: "पूजा सेवाएँ", href: "/services" }}
        primaryAction={{ label: "इस पूजा की पूछताछ करें", href: `/contact?service=${service.slug}` }}
        secondaryAction={{ label: "विधि और तैयारी पढ़ें", href: "#overview" }}
      />
      <ServiceDetails service={service} />
    </>
  );
}

export default function ServicePage(props: {
  params: Promise<{ slug: string }>;
}) {
  return (
    <Suspense fallback={<ArticleLoading />}>
      <ServicePageContent {...props} />
    </Suspense>
  );
}
