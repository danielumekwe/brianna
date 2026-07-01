import type { Metadata } from "next";
import { AnimatedSection } from "@/components/animated-section";
import { PageBanner } from "@/components/page-banner";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import { topLevelServices } from "@/lib/data/services";

export const metadata: Metadata = {
  title: "Services",
  description: "Brianna Integrated Limited services across EPCIC, IMR, subsea, MRO and oil and gas operations.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageBanner title="Services" />
      <AnimatedSection className="px-4 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            title="Services"
            text="Led by a dynamic team, Brianna Integrated has been strategically positioned to attain a sustainable competitive advantage to achieve its vision."
          />
          <div className="mt-12 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {topLevelServices.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}
