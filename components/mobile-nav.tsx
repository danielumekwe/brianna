"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { clsx } from "clsx";
import { mainNavigation, type NavItem } from "@/lib/data/navigation";

function AccordionItem({ item, onNavigate, depth = 0 }: { item: NavItem; onNavigate: () => void; depth?: number }) {
  const [open, setOpen] = useState(false);
  const hasChildren = Boolean(item.children?.length);

  if (!hasChildren) {
    return (
      <li>
        <Link
          href={item.href}
          className={clsx(
            "block py-2.5 text-sm text-brand-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green",
            depth === 0 ? "font-bold uppercase" : "font-medium",
          )}
          onClick={onNavigate}
        >
          {item.label}
        </Link>
      </li>
    );
  }

  return (
    <li>
      <div className="flex items-center justify-between">
        <Link
          href={item.href}
          className={clsx(
            "block flex-1 py-2.5 text-sm text-brand-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green",
            depth === 0 ? "font-bold uppercase" : "font-semibold",
          )}
          onClick={onNavigate}
        >
          {item.label}
        </Link>
        <button
          type="button"
          className="flex h-9 w-9 shrink-0 items-center justify-center text-brand-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green"
          aria-expanded={open}
          aria-label={`${open ? "Collapse" : "Expand"} ${item.label} submenu`}
          onClick={() => setOpen((current) => !current)}
        >
          <ChevronDown size={16} aria-hidden="true" className={clsx("transition-transform", open && "rotate-180")} />
        </button>
      </div>
      {open ? (
        <ul className="border-l-2 border-brand-green pl-4">
          {item.children?.map((child) => (
            <AccordionItem key={child.href} item={child} onNavigate={onNavigate} depth={depth + 1} />
          ))}
        </ul>
      ) : null}
    </li>
  );
}

export function MobileNav({ onNavigate }: { onNavigate: () => void }) {
  return (
    <div className="border-t border-brand-line bg-white px-4 pb-5 lg:hidden">
      <ul className="space-y-1">
        {mainNavigation.map((item) => (
          <AccordionItem key={item.label} item={item} onNavigate={onNavigate} />
        ))}
      </ul>
    </div>
  );
}
