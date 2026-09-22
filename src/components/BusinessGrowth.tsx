import Image from "next/image";
import { Handshake, Headset, Play } from "lucide-react";
import Button from "./Button";
import Reveal from "./Reveal";
import { PlusGrid, PlusScatter } from "./Decor";
import { growth } from "@/data/site";

const iconMap = {
  handshake: Handshake,
  headset: Headset,
};

export default function BusinessGrowth() {
  return (
    <section id="growth" className="relative overflow-hidden bg-white py-14 sm:py-20 lg:py-28">
      <PlusGrid
        cols={3}
        count={12}
        className="absolute left-4 top-24 hidden md:grid lg:left-8"
      />

      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:gap-14 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <Reveal variant="left" className="relative mx-auto w-full max-w-[420px] sm:max-w-[520px] lg:mx-0 lg:max-w-none">
          <div className="relative aspect-[3/4] w-[82%] overflow-hidden rounded-[18px] sm:w-[78%] sm:rounded-[28px]">
            <Image
              src={growth.images.main}
              alt="Co-working office space"
              fill
              className="object-cover transition duration-700 hover:scale-[1.04]"
              sizes="(max-width: 1024px) 70vw, 35vw"
            />
          </div>

          <div className="absolute bottom-[4%] right-0 z-10 w-[58%] overflow-hidden rounded-[18px] border-[10px] border-white shadow-[0_22px_50px_rgba(0,0,0,0.16)] sm:rounded-[22px] sm:border-[12px]">
            <div className="relative aspect-[5/4]">
              <Image
                src={growth.images.overlay}
                alt="Furnished workspace"
                fill
                className="object-cover"
                sizes="280px"
              />
            </div>
          </div>

          <PlusScatter className="absolute -left-2 bottom-[30%] hidden sm:block" />
        </Reveal>

        <Reveal variant="right" delay={120} className="relative">
          <span
            aria-hidden
            className="outline-text pointer-events-none absolute -right-2 -top-12 select-none text-[4.5rem] font-bold uppercase leading-none sm:text-[6rem] lg:-top-16 lg:text-[7rem]"
          >
            {growth.watermark}
          </span>

          <p className="relative mb-3 text-xs font-bold uppercase tracking-[0.2em] text-finbiz-red">
            {growth.eyebrow}
          </p>
          <h2 className="relative mb-9 max-w-lg text-[1.85rem] font-bold leading-[1.28] text-[#1A2432] sm:text-[2.35rem]">
            {growth.title}
          </h2>

          <div className="mb-10 space-y-7">
            {growth.features.map((feature, i) => {
              const Icon = iconMap[feature.icon];
              return (
                <Reveal key={feature.title} delay={160 + i * 100} variant="up" className="flex gap-4">
                  <span className="flex h-[58px] w-[58px] shrink-0 items-center justify-center rounded-full bg-finbiz-pink text-ems-cyan transition duration-300 hover:scale-105">
                    <Icon className="h-6 w-6" strokeWidth={1.6} />
                  </span>
                  <div>
                    <h3 className="mb-1.5 text-lg font-bold text-[#1A2432]">
                      {feature.title}
                    </h3>
                    <p className="max-w-md text-[15px] leading-[1.7] text-[#666666]">
                      {feature.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:gap-6">
            <Button href="/contact" className="w-full rounded-md px-8 sm:w-auto">
              {growth.primaryCta}
            </Button>
            <a
              href="/services?tab=supply"
              className="inline-flex items-center gap-3 text-sm font-semibold text-ems-cyan transition hover:opacity-80"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-finbiz-pink transition hover:scale-105">
                <Play className="ml-0.5 h-4 w-4 fill-ems-cyan text-ems-cyan" />
              </span>
              {growth.secondaryCta}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
