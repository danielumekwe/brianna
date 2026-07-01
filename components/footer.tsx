import Image from "next/image";
import Link from "next/link";
import { Facebook, Mail, MapPin, Phone, Twitter, Youtube } from "lucide-react";
import { siteConfig } from "@/lib/data/site-config";
import { newsPosts } from "@/lib/data/news";
import { topLevelServices } from "@/lib/data/services";

export function Footer() {
  return (
    <footer className="bg-brand-dark text-white">
      {/* Centered logo + social */}
      <div className="flex flex-col items-center gap-5 px-4 py-10">
        <Image src={siteConfig.footerLogo} alt="Brianna Integrated Limited" width={200} height={134} className="h-auto w-28" />
        <div className="flex items-center gap-4">
          <a
            href={siteConfig.social.facebook}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Brianna Integrated on Facebook"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 hover:border-brand-green hover:text-brand-green"
          >
            <Facebook size={16} aria-hidden="true" />
          </a>
          <a
            href={siteConfig.social.twitter}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Brianna Integrated on Twitter"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 hover:border-brand-green hover:text-brand-green"
          >
            <Twitter size={16} aria-hidden="true" />
          </a>
          <a
            href={siteConfig.social.youtube}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Brianna Integrated on YouTube"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 hover:border-brand-green hover:text-brand-green"
          >
            <Youtube size={16} aria-hidden="true" />
          </a>
        </div>
      </div>

      {/* 3-column footer */}
      <div className="relative overflow-hidden">
        <Image
          src="/uploads/2023/10/environmental-pollution-factory-exterior.jpg"
          alt=""
          fill
          sizes="100vw"
          quality={40}
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/80" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-3">
          <div>
            <h2 className="font-heading text-lg font-bold uppercase">Our Company</h2>
            <p className="mt-4 text-sm leading-7 text-white/75">{siteConfig.tagline}</p>
            <h3 className="mt-8 font-heading text-lg font-bold uppercase">News</h3>
            <ul className="mt-4 space-y-4">
              {newsPosts.slice(0, 2).map((post) => (
                <li key={post.slug}>
                  <Link href={`/news/${post.slug}`} className="text-sm font-semibold text-white hover:text-brand-green">
                    {post.title}
                  </Link>
                  <p className="mt-1 text-xs text-white/60">
                    {new Date(post.date).toLocaleDateString("en", { month: "long", day: "numeric", year: "numeric" })}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-heading text-lg font-bold uppercase">Our Services</h2>
            <ul className="mt-4 space-y-3 text-sm">
              {topLevelServices.map((service) => (
                <li key={service.slug}>
                  <Link className="text-white/80 hover:text-brand-green" href={`/${service.slug}`}>
                    {service.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-heading text-lg font-bold uppercase">Contact Us</h2>
            <ul className="mt-4 space-y-4 text-sm">
              {siteConfig.offices.map((office) => (
                <li key={office.label} className="flex gap-3">
                  <MapPin className="mt-1 shrink-0 text-brand-green" size={18} aria-hidden="true" />
                  <span className="text-white/80">{office.address}</span>
                </li>
              ))}
              <li>
                <a className="flex gap-3 text-white/80 hover:text-brand-green" href={`tel:${siteConfig.phoneHref}`}>
                  <Phone className="shrink-0 text-brand-green" size={18} aria-hidden="true" />
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a className="flex gap-3 text-white/80 hover:text-brand-green" href={`mailto:${siteConfig.email}`}>
                  <Mail className="shrink-0 text-brand-green" size={18} aria-hidden="true" />
                  {siteConfig.email}
                </a>
              </li>
              {siteConfig.footerWorkingHours.map((line) => (
                <li key={line} className="text-white/60">
                  {line}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 px-4 py-5 text-center text-sm text-white/60">
        Copyright © <Link href="/" className="text-brand-green hover:underline">Brianna Integrated</Link> | All rights reserved.
      </div>
    </footer>
  );
}
