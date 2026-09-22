"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { assetCategories } from "@/data/site";

const AUTO_MS = 4500;

type AssetSupplyPanelProps = {
  autoRotate?: boolean;
};

export default function AssetSupplyPanel({
  autoRotate = true,
}: AssetSupplyPanelProps) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (!autoRotate || paused) return;
    const timer = window.setInterval(() => {
      setActive((i) => (i === assetCategories.length - 1 ? 0 : i + 1));
    }, AUTO_MS);
    return () => window.clearInterval(timer);
  }, [autoRotate, paused, active]);

  return (
    <div
      className="grid gap-8 lg:grid-cols-[260px_1fr]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="flex snap-x snap-mandatory flex-row gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] lg:flex-col lg:overflow-visible lg:pb-0 [&::-webkit-scrollbar]:hidden">
        {assetCategories.map((item, i) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setActive(i)}
            className={`snap-start shrink-0 whitespace-nowrap border-b-2 px-4 py-3 text-left text-sm font-semibold transition lg:border-b-0 lg:border-l-2 ${
              i === active
                ? "border-ems-cyan bg-ems-soft text-[#1A2432]"
                : "border-transparent text-[#666] hover:bg-[#f7f7f7] hover:text-[#1A2432]"
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>

      <div className="relative overflow-hidden rounded-2xl border border-[#ececec] bg-white shadow-[0_12px_36px_rgba(1,21,82,0.05)]">
        <div
          className="flex transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{ transform: `translateX(-${active * 100}%)` }}
        >
          {assetCategories.map((category) => (
            <div
              key={category.id}
              className="grid w-full shrink-0 md:grid-cols-2"
            >
              <div className="relative min-h-[200px] overflow-hidden md:min-h-[340px]">
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
              </div>
              <div className="flex flex-col justify-center p-5 pb-16 sm:p-9 sm:pb-16">
                <h3 className="mb-3 text-xl font-bold text-[#1A2432] sm:text-2xl">
                  {category.title}
                </h3>
                <p className="mb-6 text-[15px] leading-relaxed text-[#666]">
                  {category.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((chip) => (
                    <span
                      key={chip}
                      className="rounded-md border border-[#e5e5e5] bg-[#fafafa] px-3 py-2 text-sm text-[#1A2432]"
                    >
                      {chip}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-4 bg-white/90 px-5 py-3 backdrop-blur-sm">
          <div className="flex gap-1.5">
            {assetCategories.map((item, i) => (
              <button
                key={item.id}
                type="button"
                aria-label={`Show ${item.label}`}
                onClick={() => setActive(i)}
                className={`h-1.5 rounded-full transition-all ${
                  i === active ? "w-7 bg-ems-cyan" : "w-1.5 bg-[#d5e2f0]"
                }`}
              />
            ))}
          </div>
          <p className="text-xs font-semibold text-[#8a8a8a]">
            <span className="text-ems-cyan">{active + 1}</span> /{" "}
            {assetCategories.length}
          </p>
        </div>

        <div className="absolute inset-x-0 bottom-0 h-1 bg-black/10">
          <div
            key={`progress-${active}-${paused}`}
            className={`h-full bg-ems-cyan ${
              paused || !autoRotate
                ? "w-full opacity-30"
                : "animate-[progress_4.5s_linear]"
            }`}
          />
        </div>
      </div>
    </div>
  );
}
