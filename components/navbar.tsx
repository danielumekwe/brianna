"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, ChevronRight, Clock, Facebook, Mail, MapPin, Menu, Phone, Twitter, X, Youtube } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { clsx } from "clsx";
import { mainNavigation, type NavItem } from "@/lib/data/navigation";
import { siteConfig } from "@/lib/data/site-config";
import { MobileNav } from "./mobile-nav";

function useCloseOnOutsideOrEscape(ref: React.RefObject<HTMLElement | null>, onClose: () => void) {
  useEffect(() => {
    function handlePointer(event: PointerEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onClose();
      }
    }
    function handleKey(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }
    document.addEventListener("pointerdown", handlePointer);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("pointerdown", handlePointer);
      document.removeEventListener("keydown", handleKey);
    };
  }, [ref, onClose]);
}

function TopLevelLink({ item, active }: { item: NavItem; active: boolean }) {
  return (
    <Link
      href={item.href}
      className={clsx(
        "inline-flex items-center gap-1 px-4 py-4 text-sm font-bold uppercase text-white transition hover:text-brand-green focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green",
        active && "text-brand-green",
      )}
    >
      {item.label}
    </Link>
  );
}

function ServicesMenu({ item, active }: { item: NavItem; active: boolean }) {
  const [open, setOpen] = useState(false);
  const [openChild, setOpenChild] = useState<string | null>(null);
  const containerRef = useRef<HTMLLIElement>(null);

  const close = () => {
    setOpen(false);
    setOpenChild(null);
  };

  useCloseOnOutsideOrEscape(containerRef, close);

  return (
    <li
      ref={containerRef}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={close}
    >
      <button
        type="button"
        className={clsx(
          "inline-flex items-center gap-1 px-4 py-4 text-sm font-bold uppercase text-white transition hover:text-brand-green focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green",
          active && "text-brand-green",
        )}
        aria-expanded={open}
        aria-haspopup="true"
        aria-controls="services-menu-panel"
        onClick={() => setOpen((current) => !current)}
      >
        {item.label}
        <ChevronDown size={15} aria-hidden="true" className={clsx("transition-transform", open && "rotate-180")} />
      </button>

      {open ? (
        <ul
          id="services-menu-panel"
          className="absolute left-0 top-full w-96 border-t-2 border-brand-green bg-white py-2 shadow-card"
        >
          {item.children?.map((child) => {
            const hasGrandchildren = Boolean(child.children?.length);
            return (
              <li key={child.href} className="relative">
                {hasGrandchildren ? (
                  <div
                    onMouseEnter={() => setOpenChild(child.label)}
                    onMouseLeave={() => setOpenChild((current) => (current === child.label ? null : current))}
                  >
                    <button
                      type="button"
                      className="flex w-full items-center justify-between px-5 py-3 text-left text-sm font-semibold text-brand-ink hover:bg-brand-surface hover:text-brand-green-ink focus-visible:bg-brand-surface focus-visible:outline-none"
                      aria-expanded={openChild === child.label}
                      aria-haspopup="true"
                      onClick={() => setOpenChild((current) => (current === child.label ? null : child.label))}
                    >
                      <span>{child.label}</span>
                      <ChevronRight size={14} aria-hidden="true" />
                    </button>
                    {openChild === child.label ? (
                      <ul className="absolute left-full top-0 w-72 border-t-2 border-brand-green bg-white py-2 shadow-card">
                        <li>
                          <Link
                            href={child.href}
                            className="block px-5 py-2.5 text-sm font-bold text-brand-green-ink hover:bg-brand-surface"
                            onClick={close}
                          >
                            {child.label} overview
                          </Link>
                        </li>
                        {child.children?.map((grandchild) => (
                          <li key={grandchild.href}>
                            <Link
                              href={grandchild.href}
                              className="block px-5 py-2.5 text-sm text-brand-ink hover:bg-brand-surface hover:text-brand-green-ink focus-visible:bg-brand-surface focus-visible:outline-none"
                              onClick={close}
                            >
                              {grandchild.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                ) : (
                  <Link
                    href={child.href}
                    className="block px-5 py-3 text-sm font-semibold text-brand-ink hover:bg-brand-surface hover:text-brand-green-ink focus-visible:bg-brand-surface focus-visible:outline-none"
                    onClick={close}
                  >
                    {child.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      ) : null}
    </li>
  );
}

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 shadow-header">
      {/* Row 1: email + social — black */}
      <div className="hidden bg-brand-dark text-white lg:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 text-sm">
          <a className="inline-flex items-center gap-2 hover:text-brand-green" href={`mailto:${siteConfig.email}`}>
            <Mail size={15} aria-hidden="true" />
            {siteConfig.email}
          </a>
          <div className="flex items-center gap-4">
            <a
              href={siteConfig.social.facebook}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Brianna Integrated on Facebook"
              className="hover:text-brand-green"
            >
              <Facebook size={16} aria-hidden="true" />
            </a>
            <a
              href={siteConfig.social.twitter}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Brianna Integrated on Twitter"
              className="hover:text-brand-green"
            >
              <Twitter size={16} aria-hidden="true" />
            </a>
            <a
              href={siteConfig.social.youtube}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Brianna Integrated on YouTube"
              className="hover:text-brand-green"
            >
              <Youtube size={16} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>

      {/* Row 2: location / call / working time — white */}
      <div className="hidden bg-white lg:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-8 px-4 py-4">
          <div className="flex items-center gap-3">
            <MapPin className="shrink-0 text-brand-dark" size={26} aria-hidden="true" />
            <div className="text-sm">
              <p className="font-bold text-brand-dark">Location</p>
              <p className="text-brand-muted">{siteConfig.offices[0].address}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="shrink-0 text-brand-dark" size={22} aria-hidden="true" />
            <div className="text-sm">
              <p className="font-bold text-brand-dark">Call</p>
              <a className="text-brand-muted hover:text-brand-green-ink" href={`tel:${siteConfig.phoneHref}`}>
                {siteConfig.phone}
              </a>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Clock className="shrink-0 text-brand-dark" size={24} aria-hidden="true" />
            <div className="text-sm">
              <p className="font-bold text-brand-dark">Working time</p>
              <p className="text-brand-muted">{siteConfig.headerWorkingHours}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Row 3: logo + nav menu — black */}
      <div className="bg-brand-dark">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3" aria-label="Primary">
          <Link href="/" className="flex items-center gap-3" aria-label="Brianna Integrated Limited home">
            <Image src={siteConfig.logo} alt="" width={80} height={83} className="h-14 w-auto" />
            <span className="sr-only">{siteConfig.name}</span>
          </Link>

          <button
            className="inline-flex h-11 w-11 items-center justify-center rounded-sm border border-white/30 text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green lg:hidden"
            aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((current) => !current)}
            type="button"
          >
            {mobileOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>

          <ul className="hidden items-center gap-1 lg:flex">
            {mainNavigation.map((item) => {
              const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
              if (item.children) {
                return <ServicesMenu key={item.label} item={item} active={active} />;
              }
              return (
                <li key={item.label}>
                  <TopLevelLink item={item} active={active} />
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      {mobileOpen ? <MobileNav onNavigate={() => setMobileOpen(false)} /> : null}
    </header>
  );
}
