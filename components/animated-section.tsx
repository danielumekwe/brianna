"use client";

import { m } from "framer-motion";
import type { PropsWithChildren } from "react";

type AnimatedSectionProps = PropsWithChildren<{
  className?: string;
}>;

export function AnimatedSection({ children, className }: AnimatedSectionProps) {
  return (
    <m.section
      className={className}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      {children}
    </m.section>
  );
}
