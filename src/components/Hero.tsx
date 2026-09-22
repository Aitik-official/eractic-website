"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Button from "./Button";
import { PlusGrid } from "./Decor";
import { hero } from "@/data/site";

const AUTO_MS = 4200;

const slideLabels = [
  "Infrastructure setup",
  "Electrical & appliances",
  "Medical & lab supply",
  "Warehouse & assets",
] as const;

export default function Hero() {
  const slides = hero.images;
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const slide = slides[index];

  const prev = useCallback(() => {
    setIndex((i) => (i === 0 ? slides.length - 1 : i - 1));
  }, [slides.length]);

  const next = useCallback(() => {
    setIndex((i) => (i === slides.length - 1 ? 0 : i + 1));
  }, [slides.length]);

  useEffect(() => {
    if (paused) return;
    const timer = window.setInterval(() => {
      setIndex((i) => (i === slides.length - 1 ? 0 : i + 1));
    }, AUTO_MS);
    return () => window.clearInterval(timer);
  }, [paused, index, slides.length]);

  return (
    <section className="relative overflow-hidden bg-[#f0f7fc] lg:h-[calc(100svh-7.25rem)] lg:max-h-[560px] lg:min-h-[440px]">
      <PlusGrid
        cols={3}
        count={9}
        className="absolute bottom-16 right-[42%] z-20 hidden lg:grid"
      />

      {/* Desktop slider banner */}
      <div
        className="absolute inset-y-0 left-0 hidden w-[52%] lg:block"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {slides.map((item, i) => (
          <div
            key={item.src}
            className={`absolute inset-0 transition-opacity duration-700 ease-out ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              priority={i === 0}
              className="object-cover"
              sizes="52vw"
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(1,21,82,0.25)_0%,transparent_40%,transparent_65%,rgba(240,247,252,0.7)_100%)]" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-r from-transparent to-[#f0f7fc]" />

        <div className="absolute bottom-6 left-6 right-28 z-10 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-ems-green">
              EMS services
            </p>
            <p className="mt-1 text-sm font-semibold text-white drop-shadow">
              {slideLabels[index]}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              aria-label="Previous slide"
              onClick={prev}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-finbiz-navy shadow-sm transition hover:bg-white"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              aria-label="Next slide"
              onClick={next}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-finbiz-navy shadow-sm transition hover:bg-white"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-24 h-1 bg-black/15">
          <div
            key={index}
            className="h-full bg-ems-green/90"
            style={{
              animation: paused
                ? "none"
                : `progress ${AUTO_MS}ms linear forwards`,
            }}
          />
        </div>
      </div>

      {/* Mobile slider */}
      <div
        className="relative h-[200px] w-full sm:h-[220px] lg:hidden"
        onTouchStart={() => setPaused(true)}
        onTouchEnd={() => setPaused(false)}
      >
        {slides.map((item, i) => (
          <div
            key={item.src}
            className={`absolute inset-0 transition-opacity duration-700 ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              priority={i === 0}
              className="object-cover"
              sizes="100vw"
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-[#f0f7fc]" />
        <div className="absolute bottom-3 left-0 right-0 z-10 flex justify-center gap-1.5">
          {slides.map((item, i) => (
            <button
              key={item.src}
              type="button"
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-1.5 rounded-full transition-all ${
                i === index ? "w-6 bg-ems-green" : "w-1.5 bg-white/70"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="relative mx-auto flex h-full max-w-7xl items-center px-4 py-7 sm:px-6 sm:py-8 lg:justify-end lg:px-8 lg:py-10">
        <div className="relative w-full max-w-xl overflow-hidden lg:max-w-[480px]">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-6 top-0 hidden h-48 w-48 rounded-full bg-ems-cyan/15 sm:block sm:h-56 sm:w-56"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-4 right-6 hidden h-32 w-32 rounded-full border border-dashed border-white/90 sm:block sm:h-40 sm:w-40"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-14 -right-10 hidden h-0 w-0 border-b-[90px] border-l-[90px] border-b-ems-green border-l-transparent sm:block"
          />

          <div className="relative z-10">
            <p className="hero-animate hero-animate-delay-1 mb-3 text-[11px] font-bold uppercase tracking-[0.18em] sm:text-xs">
              <span className="text-ems-cyan">{hero.eyebrowRed}</span>
              <span className="mt-1 block text-[#6d6d6d] sm:mt-0 sm:inline">
                {" "}
                {hero.eyebrowRest}
              </span>
            </p>

            <h1 className="hero-animate hero-animate-delay-2 mb-4 text-[1.65rem] font-bold leading-[1.15] text-finbiz-navy sm:text-4xl lg:text-[2.65rem]">
              {hero.titleLine1}
              <br />
              {hero.titleLine2Before}{" "}
              <em className="font-serif font-semibold italic text-ems-green">
                {hero.titleAccent}
              </em>
              .
            </h1>

            <p className="hero-animate hero-animate-delay-3 mb-6 max-w-md text-[14px] leading-[1.7] text-[#7a7a7a] sm:text-[15px]">
              {hero.description}
            </p>

            <div className="hero-animate hero-animate-delay-4 flex flex-wrap items-center gap-3 sm:gap-4">
              <Button
                href={hero.ctaHref}
                className="w-full rounded-md px-7 py-3 sm:w-auto"
              >
                {hero.cta}
              </Button>
              <div className="hidden items-center gap-1.5 lg:flex">
                {slides.map((item, i) => (
                  <button
                    key={item.src}
                    type="button"
                    aria-label={`Go to slide ${i + 1}`}
                    onClick={() => setIndex(i)}
                    className={`h-2 rounded-full transition-all ${
                      i === index
                        ? "w-7 bg-ems-cyan"
                        : "w-2 bg-[#c5d5e4] hover:bg-ems-cyan/50"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
