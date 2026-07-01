import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ButtonLink } from "@/components/button-link";
import { CtaBand } from "@/components/cta-band";
import { MroCategorySection } from "@/components/mro-category-section";
import { PageBanner } from "@/components/page-banner";
import { mroCategories } from "@/lib/data/mro-categories";
import { getRelatedServices, getService, services } from "@/lib/data/services";
import { siteConfig } from "@/lib/data/site-config";

type ServiceRouteProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: ServiceRouteProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    return {};
  }

  return {
    title: service.title,
    description: service.summary,
    alternates: { canonical: `/${service.slug}` },
    openGraph: {
      title: service.title,
      description: service.summary,
      url: `${siteConfig.url}/${service.slug}`,
      images: [{ url: service.image }],
    },
    twitter: {
      card: "summary_large_image",
      title: service.title,
      description: service.summary,
      images: [service.image],
    },
  };
}

export default async function ServiceDetailPage({ params }: ServiceRouteProps) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    notFound();
  }

  const Icon = service.icon;
  const relatedServices = getRelatedServices(service);
  const isMro = service.slug === "mro-materials-supplies";

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.summary,
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    areaServed: "Oil and gas industry",
  };

  const breadcrumbSchema = relatedServices.length && service.slug !== "epcic"
    ? {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Services", item: `${siteConfig.url}/services` },
          { "@type": "ListItem", position: 2, name: "EPCIC", item: `${siteConfig.url}/epcic` },
          { "@type": "ListItem", position: 3, name: service.title, item: `${siteConfig.url}/${service.slug}` },
        ],
      }
    : null;

  return (
    <>
      <PageBanner title={service.title} image={service.image} />
      <article className="px-4 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div className="relative aspect-[4/3] overflow-hidden bg-brand-surface lg:sticky lg:top-24">
            <Image
              src={service.image}
              alt=""
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
              priority
            />
          </div>
          <div>
            <div className="mb-5 flex h-14 w-14 items-center justify-center bg-brand-green text-brand-dark">
              <Icon size={28} aria-hidden="true" />
            </div>
            <div className="space-y-5 text-base leading-8 text-brand-muted">
              {service.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            {service.bullets ? (
              <ul className="mt-8 grid gap-3 md:grid-cols-2">
                {service.bullets.map((item) => (
                  <li
                    key={item}
                    className="border-l-4 border-brand-green bg-brand-surface px-4 py-3 text-sm font-semibold text-brand-dark"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            ) : null}

            {relatedServices.length ? (
              <div className="mt-10">
                <h2 className="font-heading text-lg font-bold uppercase text-brand-dark">EPCIC Phases</h2>
                <ul className="mt-4 flex flex-wrap gap-3">
                  {relatedServices.map((related) => (
                    <li key={related.slug}>
                      <Link
                        href={`/${related.slug}`}
                        className={
                          related.slug === service.slug
                            ? "inline-flex items-center gap-1 bg-brand-dark px-4 py-2 text-sm font-semibold text-white"
                            : "inline-flex items-center gap-1 border border-brand-line px-4 py-2 text-sm font-semibold text-brand-dark hover:border-brand-green hover:text-brand-green-ink"
                        }
                      >
                        {related.shortTitle}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            <ButtonLink href="/contact-us" className="mt-8">
              Contact Us
            </ButtonLink>
          </div>
        </div>

        {isMro ? (
          <div className="mx-auto mt-16 max-w-7xl">
            <h2 className="font-heading text-2xl font-bold uppercase text-brand-dark">Our MRO Product Range</h2>
            <div className="mt-8 grid gap-6 lg:grid-cols-2">
              {mroCategories.map((category) => (
                <MroCategorySection key={category.id} category={category} />
              ))}
            </div>
          </div>
        ) : null}
      </article>
      <CtaBand
        heading="Your closest partner in Petroleum, Oil & Gas services."
        body="Upstream | Downstream | Exploration & production"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      {breadcrumbSchema ? (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      ) : null}
    </>
  );
}
