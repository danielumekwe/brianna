import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { PageBanner } from "@/components/page-banner";
import { SectionHeading } from "@/components/section-heading";
import { siteConfig } from "@/lib/data/site-config";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Contact Brianna Integrated Limited in Nigeria or the United States.",
  alternates: { canonical: "/contact-us" },
};

export default function ContactPage() {
  return (
    <>
      <PageBanner title="Contact Us" image="/uploads/2023/10/beautiful-shot-pier-with-cloudy-gray-sky.jpg" />
      <section className="px-4 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeading eyebrow="Visit Us" title="Address" align="left" />
            <div className="mt-8 space-y-6">
              {siteConfig.offices.map((office) => (
                <article key={office.label} className="flex gap-4 border border-brand-line p-6">
                  <MapPin className="mt-1 shrink-0 text-brand-green-ink" aria-hidden="true" />
                  <div>
                    <h2 className="font-heading text-lg font-bold uppercase text-brand-dark">{office.label}</h2>
                    <p className="mt-2 text-brand-muted">{office.address}</p>
                  </div>
                </article>
              ))}
              <article className="flex gap-4 border border-brand-line p-6">
                <Phone className="mt-1 shrink-0 text-brand-green-ink" aria-hidden="true" />
                <div>
                  <h2 className="font-heading text-lg font-bold uppercase text-brand-dark">Phone</h2>
                  <a className="mt-2 block text-brand-muted hover:text-brand-green-ink" href={`tel:${siteConfig.phoneHref}`}>
                    {siteConfig.phone}
                  </a>
                </div>
              </article>
              <article className="flex gap-4 border border-brand-line p-6">
                <Mail className="mt-1 shrink-0 text-brand-green-ink" aria-hidden="true" />
                <div>
                  <h2 className="font-heading text-lg font-bold uppercase text-brand-dark">Email</h2>
                  <a className="mt-2 block text-brand-muted hover:text-brand-green-ink" href={`mailto:${siteConfig.email}`}>
                    {siteConfig.email}
                  </a>
                </div>
              </article>
            </div>
            <div className="mt-6 aspect-video overflow-hidden border border-brand-line">
              <iframe
                src={siteConfig.mapEmbedSrc}
                title="Map showing Brianna Integrated Limited office location"
                loading="lazy"
                className="h-full w-full border-0"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
          <div className="border border-brand-line p-6 shadow-sm md:p-8">
            <SectionHeading title="Contact Us" align="left" />
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
