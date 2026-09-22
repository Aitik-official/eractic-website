"use client";

import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Reveal from "./Reveal";
import { testimonials } from "@/data/site";

const AUTO_MS = 4500;

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const prev = useCallback(() => {
    setIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1));
  }, []);

  const next = useCallback(() => {
    setIndex((i) => (i === testimonials.length - 1 ? 0 : i + 1));
  }, []);

  useEffect(() => {
    if (paused) return;
    const timer = window.setInterval(() => {
      setIndex((i) => (i === testimonials.length - 1 ? 0 : i + 1));
    }, AUTO_MS);
    return () => window.clearInterval(timer);
  }, [paused, index]);

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-white py-14 sm:py-20 lg:py-28"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-12 text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-ems-cyan">
            Our Testimonials
          </p>
          <h2 className="text-[1.85rem] font-bold leading-tight text-finbiz-navy sm:text-[2.45rem]">
            Client&apos;s Feedbacks
          </h2>
        </Reveal>

        <Reveal className="mx-auto max-w-2xl">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {testimonials.map((item) => (
                <article
                  key={item.name}
                  className="w-full shrink-0 px-1"
                >
                  <div className="relative overflow-hidden rounded-2xl bg-[#011552] px-5 py-9 text-center sm:px-12 sm:py-14">
                    <div
                      aria-hidden
                      className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-ems-cyan/15"
                    />
                    <div
                      aria-hidden
                      className="pointer-events-none absolute -bottom-16 -left-10 h-48 w-48 rounded-full bg-ems-green/10"
                    />

                    <p className="relative mb-2 font-serif text-5xl leading-none text-ems-cyan/40">
                      “
                    </p>
                    <p className="relative mx-auto max-w-lg text-[15px] leading-[1.9] text-white/85 sm:text-[16px]">
                      {item.quote}
                    </p>

                    <div className="relative mx-auto mt-8 h-px w-10 bg-gradient-to-r from-transparent via-ems-cyan to-transparent" />

                    <p className="relative mt-6 text-[14px] font-semibold tracking-wide text-white">
                      {item.name}
                    </p>
                    <p className="relative mt-1.5 text-[12px] font-medium uppercase tracking-[0.14em] text-ems-cyan">
                      {item.role}
                    </p>

                    <div className="absolute inset-x-0 bottom-0 h-[3px] bg-gradient-to-r from-ems-blue via-ems-cyan to-ems-green" />
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-1 h-0.5 overflow-hidden rounded-full bg-[#e8eef5]">
            <div
              key={`progress-${index}-${paused}`}
              className={`h-full bg-ems-cyan ${
                paused ? "w-full opacity-40" : "animate-[progress_4.5s_linear]"
              }`}
            />
          </div>
        </Reveal>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <button
            type="button"
            onClick={prev}
            aria-label="Previous testimonial"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d5e2f0] bg-white text-finbiz-navy transition hover:border-ems-cyan hover:text-ems-cyan"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>

          <div className="flex gap-1.5">
            {testimonials.map((t, i) => (
              <button
                key={t.name}
                type="button"
                aria-label={`Show testimonial ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`h-1.5 rounded-full transition-all ${
                  i === index ? "w-7 bg-ems-cyan" : "w-1.5 bg-[#c5d5e4]"
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={next}
            aria-label="Next testimonial"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d5e2f0] bg-white text-finbiz-navy transition hover:border-ems-cyan hover:text-ems-cyan"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
