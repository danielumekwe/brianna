"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { clsx } from "clsx";
import { heroSlides } from "@/lib/data/home";
import { ButtonLink } from "./button-link";

const AUTOPLAY_MS = 6000;

export function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % heroSlides.length);
    }, AUTOPLAY_MS);
    return () => window.clearInterval(timer);
  }, []);

  function goTo(next: number) {
    setIndex((next + heroSlides.length) % heroSlides.length);
  }

  return (
    <section
      className="relative min-h-[560px] overflow-hidden bg-brand-dark text-white"
      aria-roledescription="carousel"
      aria-label="Featured highlights"
    >
      {heroSlides.map((slide, slideIndex) => (
        <div
          key={slide.heading}
          className={clsx(
            "absolute inset-0 transition-opacity duration-700",
            slideIndex === index ? "opacity-100" : "pointer-events-none opacity-0",
          )}
          aria-hidden={slideIndex !== index}
          role="group"
          aria-roledescription="slide"
          aria-label={`${slideIndex + 1} of ${heroSlides.length}`}
        >
          <Image
            src={slide.image}
            alt=""
            fill
            priority={slideIndex === 0}
            fetchPriority={slideIndex === 0 ? "high" : undefined}
            sizes="100vw"
            quality={55}
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/35" />
          <div className="relative mx-auto flex min-h-[560px] max-w-7xl flex-col justify-center px-4 py-24">
            <div className="max-w-3xl">
              <h1 className="font-heading text-4xl font-bold uppercase leading-tight md:text-6xl">
                {slide.heading}
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-white/90">{slide.body}</p>
              <div className="mt-8">
                <ButtonLink href={slide.buttonHref}>{slide.buttonText}</ButtonLink>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* spacer to size the section, since slides are absolutely positioned */}
      <div className="min-h-[560px]" aria-hidden="true" />

      <button
        type="button"
        onClick={() => goTo(index - 1)}
        aria-label="Previous slide"
        className="absolute left-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center border border-white/40 bg-black/30 text-white transition hover:bg-black/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green"
      >
        <ChevronLeft aria-hidden="true" />
      </button>
      <button
        type="button"
        onClick={() => goTo(index + 1)}
        aria-label="Next slide"
        className="absolute right-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center border border-white/40 bg-black/30 text-white transition hover:bg-black/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green"
      >
        <ChevronRight aria-hidden="true" />
      </button>

      <div className="absolute bottom-5 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {heroSlides.map((slide, slideIndex) => (
          <button
            key={slide.heading}
            type="button"
            onClick={() => goTo(slideIndex)}
            aria-label={`Go to slide ${slideIndex + 1}`}
            aria-current={slideIndex === index}
            className={clsx(
              "h-2.5 w-2.5 rounded-full border border-white/70 transition",
              slideIndex === index ? "bg-brand-green" : "bg-transparent",
            )}
          />
        ))}
      </div>
    </section>
  );
}
