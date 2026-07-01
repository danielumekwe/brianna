"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

type StatCounterProps = {
  value: number;
  label: string;
};

export function StatCounter({ value, label }: StatCounterProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;

    const duration = 1200;
    const start = performance.now();

    let frame: number;
    function tick(now: number) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - (1 - progress) ** 3;
      setDisplay(Math.round(eased * value));
      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    }
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, value]);

  return (
    <div className="border-white/25 px-3 py-4 md:border-r last:border-r-0">
      <p ref={ref} className="font-heading text-4xl font-bold text-white md:text-6xl" aria-hidden="true">
        {display}
      </p>
      <p className="mt-2 text-sm font-bold uppercase text-brand-dark">
        <span className="sr-only">{value} </span>
        {label}
      </p>
    </div>
  );
}
