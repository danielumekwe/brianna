import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { PageBanner } from "@/components/page-banner";
import { getNewsPost, newsPosts } from "@/lib/data/news";
import { siteConfig } from "@/lib/data/site-config";

type NewsRouteProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return newsPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: NewsRouteProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getNewsPost(slug);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/news/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      url: `${siteConfig.url}/news/${post.slug}`,
      images: [{ url: post.image }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

export default async function NewsDetailPage({ params }: NewsRouteProps) {
  const { slug } = await params;
  const post = getNewsPost(slug);

  if (!post) {
    notFound();
  }

  const schema = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: post.title,
    datePublished: post.date,
    image: `${siteConfig.url}${post.image}`,
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}${siteConfig.logo}`,
      },
    },
  };

  return (
    <>
      <PageBanner title={post.title} image={post.image} />
      <article className="px-4 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="relative mb-10 aspect-[16/9] overflow-hidden bg-brand-surface">
            <Image src={post.image} alt="" fill sizes="(min-width: 1024px) 800px, 100vw" className="object-cover" priority />
          </div>
          <p className="text-sm font-bold uppercase text-brand-green-ink">{post.category}</p>
          <p className="mt-3 text-sm text-brand-muted">
            {new Date(post.date).toLocaleDateString("en", { month: "long", day: "numeric", year: "numeric" })}
          </p>
          <div className="mt-8 space-y-5 text-base leading-8 text-brand-muted">
            {post.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </>
  );
}
