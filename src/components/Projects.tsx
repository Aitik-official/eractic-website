"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, LineChart } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { PlusGrid, RedDots } from "./Decor";
import { projects } from "@/data/site";

const AUTO_MS = 4500;

export default function Projects() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const project = projects[index];

  const prev = useCallback(() => {
    setIndex((i) => (i === 0 ? projects.length - 1 : i - 1));
  }, []);

  const next = useCallback(() => {
    setIndex((i) => (i === projects.length - 1 ? 0 : i + 1));
  }, []);

  useEffect(() => {
    if (paused) return;
    const timer = window.setInterval(() => {
      setIndex((i) => (i === projects.length - 1 ? 0 : i + 1));
    }, AUTO_MS);
    return () => window.clearInterval(timer);
  }, [paused, index]);

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-white py-14 sm:py-20 lg:py-28"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,transparent_40%,#f3f3f3_40%,#f3f3f3_55%,transparent_55%)]"
      />
      <PlusGrid
        cols={3}
        count={9}
        className="absolute right-6 top-20 hidden md:grid lg:right-10"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Asset Supply & Projects"
            title="Spaces & Supply We Deliver"
            watermark="Gallery"
            align="left"
          />
          <div className="flex items-center gap-3 self-end">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous project"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#1A2432] shadow-[0_8px_20px_rgba(0,0,0,0.08)] transition hover:text-finbiz-red"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <p className="min-w-[3.25rem] text-center text-sm font-semibold">
              <span className="text-finbiz-red">{index + 1}</span>
              <span className="text-[#1A2432]"> / {projects.length}</span>
            </p>
            <button
              type="button"
              onClick={next}
              aria-label="Next project"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#1A2432] shadow-[0_8px_20px_rgba(0,0,0,0.08)] transition hover:text-finbiz-red"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <Reveal variant="up" delay={100}>
          <div
            className="grid gap-6 lg:grid-cols-2 lg:gap-7"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
          <div
            key={`img-${index}`}
            className="relative min-h-[240px] animate-[fadeSlide_0.5s_ease] overflow-hidden rounded-[18px] sm:min-h-[340px] sm:rounded-[22px] lg:min-h-[440px]"
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority={index === 0}
            />
            <div className="absolute inset-x-0 bottom-0 h-1 bg-black/20">
              <div
                key={`progress-${index}-${paused}`}
                className={`h-full bg-finbiz-red ${
                  paused ? "w-full opacity-40" : "animate-[progress_4.5s_linear]"
                }`}
              />
            </div>
          </div>

          <div
            key={`txt-${index}`}
            className="relative flex min-h-[280px] animate-[fadeSlide_0.5s_ease] flex-col justify-center overflow-hidden rounded-[18px] bg-[#151515] p-6 text-white sm:min-h-[340px] sm:rounded-[22px] sm:p-10 lg:min-h-[440px] lg:p-12"
          >
            <RedDots className="absolute right-8 top-8" />
            <LineChart
              className="mb-8 h-11 w-11 text-white/90"
              strokeWidth={1.4}
            />
            <h3 className="mb-2 text-2xl font-bold sm:text-[1.75rem]">
              {project.title}
            </h3>
            <p className="mb-5 text-sm font-medium text-white/75">
              {project.category}
            </p>
            <p className="mb-8 max-w-md text-[15px] leading-[1.8] text-white/85">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {projects.map((item, i) => (
                <button
                  key={item.title}
                  type="button"
                  aria-label={`Show ${item.title}`}
                  onClick={() => setIndex(i)}
                  className={`h-2.5 rounded-full transition-all ${
                    i === index
                      ? "w-8 bg-finbiz-red"
                      : "w-2.5 bg-white/30 hover:bg-white/55"
                  }`}
                />
              ))}
            </div>
          </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
