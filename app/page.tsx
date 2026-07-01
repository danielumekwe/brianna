import type { Metadata } from "next";
import { AnimatedSection } from "@/components/animated-section";
import { ButtonLink } from "@/components/button-link";
import { ClientLogos } from "@/components/client-logos";
import { CtaBand } from "@/components/cta-band";
import { Hero } from "@/components/hero";
import { NewsCard } from "@/components/news-card";
import { NewsletterForm } from "@/components/newsletter-form";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import { StatCounter } from "@/components/stat-counter";
import { companyProfile } from "@/lib/data/company-profile";
import { newsPosts } from "@/lib/data/news";
import { topLevelServices } from "@/lib/data/services";
import { siteConfig } from "@/lib/data/site-config";

export const metadata: Metadata = {
  title: "BIL: Providing innovative solutions to the oil and gas industry",
  description:
    "BIL is an international company with indigenous roots, born out of the passion for providing innovative solutions to the oil and gas industry.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <section
        aria-label="Company highlights"
        className="relative z-10 mx-auto -mt-16 grid max-w-6xl grid-cols-2 bg-brand-green px-4 py-8 text-center shadow-card md:grid-cols-4"
      >
        {companyProfile.stats.map((stat) => (
          <StatCounter key={stat.label} value={stat.value} label={stat.label} />
        ))}
      </section>

      <AnimatedSection className="bg-brand-surface px-4 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-heading text-3xl font-bold uppercase leading-tight text-brand-dark md:text-4xl">
            Welcome <span className="text-brand-green-ink">to Brianna</span> | Integrated
          </h2>
          <p className="mt-6 text-base leading-8 text-brand-muted">{siteConfig.tagline}</p>
        </div>

        <div className="mx-auto mt-12 grid max-w-6xl gap-4 md:grid-cols-3">
          <article className="rounded-[40px] bg-brand-dark px-8 py-10 text-center text-white shadow-card">
            <h2 className="font-heading text-xl font-bold uppercase">Our Vision</h2>
            <p className="mt-4 text-sm leading-7 text-white/85">{companyProfile.vision}</p>
          </article>
          <article className="rounded-[40px] bg-brand-green px-8 py-10 text-center text-white shadow-card">
            <h2 className="font-heading text-xl font-bold uppercase">Our Mission</h2>
            <p className="mt-4 text-sm leading-7 text-white/95">{companyProfile.mission[0]}</p>
          </article>
          <article className="rounded-[40px] bg-brand-dark px-8 py-10 text-center text-white shadow-card">
            <h2 className="font-heading text-xl font-bold uppercase">Our Values &amp; Ethics</h2>
            <p className="mt-4 text-sm leading-7 text-white/85">{companyProfile.valuesIntro}</p>
          </article>
        </div>

        <div className="mt-12 text-center">
          <ButtonLink href="/about-us">
            Learn More
            <span className="sr-only"> about our vision, mission and values</span>
          </ButtonLink>
        </div>
      </AnimatedSection>

      <AnimatedSection className="px-4 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Our"
            title="Services"
            text="Led by a dynamic team, Brianna Integrated has been strategically positioned to attain a sustainable competitive advantage to achieve its vision."
          />
          <div className="mt-12 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {topLevelServices.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <ButtonLink href="/services">More Services</ButtonLink>
          </div>
        </div>
      </AnimatedSection>

      <CtaBand
        heading="Your closest partner in Petroleum, Oil & Gas services."
        body="Upstream | Downstream | Exploration & production"
      />

      <AnimatedSection className="px-4 py-16">
        <div className="mx-auto max-w-7xl">
          <ClientLogos />
        </div>
      </AnimatedSection>

      <AnimatedSection className="px-4 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Latest" title="News" />
          <div className="mt-10 grid gap-7 md:grid-cols-3">
            {newsPosts.slice(0, 3).map((post) => (
              <NewsCard key={post.slug} post={post} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <ButtonLink href="/news">
              See More
              <span className="sr-only"> news articles</span>
            </ButtonLink>
          </div>
        </div>
      </AnimatedSection>

      <section className="bg-brand-green px-4 py-12">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">
          <div className="text-center md:text-left">
            <h2 className="font-heading text-2xl font-bold text-white">Newsletter Sign Up</h2>
            <p className="mt-1 text-white/90">Subscribe now and receive the latest news and updates!</p>
          </div>
          <div className="w-full md:w-auto">
            <NewsletterForm />
          </div>
        </div>
      </section>
    </>
  );
}
