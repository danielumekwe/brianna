import type { Metadata } from "next";
import { NewsCard } from "@/components/news-card";
import { PageBanner } from "@/components/page-banner";
import { SectionHeading } from "@/components/section-heading";
import { newsPosts } from "@/lib/data/news";

export const metadata: Metadata = {
  title: "News",
  description: "News and updates from Brianna Integrated Limited.",
  alternates: { canonical: "/news" },
};

export default function NewsPage() {
  return (
    <>
      <PageBanner title="News" image="/uploads/2023/10/Crude-oil-prices.webp" />
      <section className="px-4 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading title="Latest News" />
          <div className="mt-12 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {newsPosts.map((post) => (
              <NewsCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
