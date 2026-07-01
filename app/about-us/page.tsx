import type { Metadata } from "next";
import Image from "next/image";
import { AnimatedSection } from "@/components/animated-section";
import { CtaBand } from "@/components/cta-band";
import { PageBanner } from "@/components/page-banner";
import { SectionHeading } from "@/components/section-heading";
import { companyProfile } from "@/lib/data/company-profile";

export const metadata: Metadata = {
  title: "About Us",
  description: "About Brianna Integrated Limited and its mission, vision, values and ethics.",
  alternates: { canonical: "/about-us" },
};

export default function AboutPage() {
  return (
    <>
      <PageBanner title="About Us" image="/uploads/2023/10/about-energy-min.8d89ba5-1.jpg" />
      <AnimatedSection className="px-4 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="relative aspect-[4/5] overflow-hidden bg-brand-surface">
            <Image
              src="/uploads/2023/10/african-american-worker-standing-uniform-wearing-safety-hat-factory-1000x600.jpg"
              alt=""
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <SectionHeading title="About us" align="left" />
            <div className="mt-6 space-y-5 text-base leading-8 text-brand-muted">
              {companyProfile.aboutParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <blockquote className="mt-8 border-l-4 border-brand-green bg-brand-surface px-6 py-5 text-lg font-medium italic leading-8 text-brand-dark">
              &ldquo;{companyProfile.goal}&rdquo;
            </blockquote>
          </div>
        </div>
      </AnimatedSection>

      <section className="bg-brand-surface px-4 py-20">
        <div className="mx-auto grid max-w-7xl gap-7 md:grid-cols-2">
          <article className="border-l-4 border-brand-green bg-white p-8 shadow-sm">
            <h2 className="font-heading text-2xl font-bold uppercase text-brand-dark">Our Vision</h2>
            <p className="mt-4 leading-8 text-brand-muted">{companyProfile.vision}</p>
          </article>
          <article className="border-l-4 border-brand-green bg-white p-8 shadow-sm">
            <h2 className="font-heading text-2xl font-bold uppercase text-brand-dark">Our Mission</h2>
            <div className="mt-4 space-y-4 leading-8 text-brand-muted">
              {companyProfile.mission.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </article>
        </div>
      </section>

      <AnimatedSection className="px-4 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading title="Our Values and Ethics" text={companyProfile.valuesIntro} />
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
            {companyProfile.values.map((value) => (
              <article key={value.title} className="border border-brand-line p-6">
                <h3 className="font-heading text-lg font-bold uppercase text-brand-dark">{value.title}</h3>
                <p className="mt-3 text-sm leading-7 text-brand-muted">{value.text}</p>
              </article>
            ))}
          </div>
        </div>
      </AnimatedSection>
      <CtaBand
        heading="Looking For Quality Oil and Gas Company?"
        body="Do you want a cost-effective solution, state-of-the-art and up to date technology."
      />
    </>
  );
}
