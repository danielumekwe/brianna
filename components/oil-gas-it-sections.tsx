import { Check } from "lucide-react";
import Image from "next/image";
import { SectionHeading } from "@/components/section-heading";
import { itCapabilities, itEcosystem, itIndustries, itProcessSteps, itProcurement } from "@/lib/data/oil-gas-it";

export function ItCapabilitiesGrid() {
  return (
    <>
      <SectionHeading
        title="Complete IT Solutions for the Oil & Gas Industry"
        text="The oil and gas industry depends on reliable technology for communication, engineering, data management, security, and day-to-day operations. Our solutions cover the technology lifecycle — from sourcing and deployment to support and maintenance."
      />
      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {itCapabilities.map(({ title, description, icon: Icon, items }) => (
          <article key={title} className="border border-brand-line bg-white p-6 md:p-8">
            <div className="flex h-12 w-12 items-center justify-center bg-brand-green text-brand-dark">
              <Icon size={22} aria-hidden="true" />
            </div>
            <h3 className="mt-5 font-heading text-lg font-bold uppercase text-brand-dark">{title}</h3>
            <p className="mt-2 text-sm leading-6 text-brand-muted">{description}</p>
            <ul className="mt-5 space-y-2.5">
              {items.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm leading-6 text-brand-muted">
                  <Check className="mt-0.5 shrink-0 text-brand-green-ink" size={16} aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}

        <article className="border border-brand-line bg-white p-6 md:p-8">
          <div className="flex h-12 w-12 items-center justify-center bg-brand-green text-brand-dark">
            <itProcurement.icon size={22} aria-hidden="true" />
          </div>
          <h3 className="mt-5 font-heading text-lg font-bold uppercase text-brand-dark">{itProcurement.title}</h3>
          <p className="mt-2 text-sm leading-6 text-brand-muted">{itProcurement.description}</p>
          <dl className="mt-5 space-y-3">
            {itProcurement.groups.map((group) => (
              <div key={group.label}>
                <dt className="text-xs font-bold uppercase tracking-wide text-brand-dark">{group.label}</dt>
                <dd className="text-sm text-brand-muted">{group.vendors}</dd>
              </div>
            ))}
          </dl>
        </article>
      </div>
      <p className="mt-6 text-sm italic text-brand-muted">{itProcurement.disclaimer}</p>
    </>
  );
}

export function ItProcessTimeline() {
  return (
    <>
      <SectionHeading
        title="Technology Built Around Your Business"
        text="We don't believe in a one-size-fits-all approach. Our team works with your organization to understand your infrastructure, operational requirements, security needs, budget, and growth plans before recommending a solution."
      />
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {itProcessSteps.map((step) => (
          <div key={step.number} className="border-t-4 border-brand-green bg-white p-6 shadow-card">
            <p className="font-heading text-3xl font-bold text-brand-green-ink">{step.number}</p>
            <h3 className="mt-3 font-heading text-lg font-bold uppercase text-brand-dark">{step.title}</h3>
            <p className="mt-2 text-sm leading-6 text-brand-muted">{step.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export function ItIndustriesGrid() {
  return (
    <>
      <SectionHeading title="Built for Demanding Business Environments" />
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {itIndustries.map(({ title, description, icon: Icon }) => (
          <div key={title} className="border border-brand-line bg-white p-6">
            <div className="flex h-12 w-12 items-center justify-center bg-brand-green text-brand-dark">
              <Icon size={22} aria-hidden="true" />
            </div>
            <h3 className="mt-4 font-heading text-base font-bold uppercase text-brand-dark">{title}</h3>
            <p className="mt-2 text-sm leading-6 text-brand-muted">{description}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export function ItEcosystemGrid() {
  return (
    <>
      <SectionHeading
        title="Technology Ecosystem"
        text="Products and platforms we source, deploy and support as part of your IT environment."
      />
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {itEcosystem.map((vendor) => (
          <div
            key={vendor.name}
            className="flex flex-col items-center gap-3 border border-brand-line bg-brand-surface px-5 py-6 text-center"
          >
            <div className="flex h-12 w-full items-center justify-center">
              <Image
                src={vendor.logo}
                alt={vendor.name}
                width={vendor.logoWidth}
                height={vendor.logoHeight}
                className="max-h-12 w-auto object-contain"
              />
            </div>
            <p className="text-xs text-brand-muted">{vendor.focus}</p>
          </div>
        ))}
      </div>
    </>
  );
}
