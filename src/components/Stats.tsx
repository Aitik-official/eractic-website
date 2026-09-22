import { Building2, Globe2, Layers3, Users } from "lucide-react";
import Reveal from "./Reveal";
import { stats } from "@/data/site";

const icons = [Building2, Layers3, Globe2, Users];

export default function Stats() {
  return (
    <section className="relative overflow-hidden bg-[#0a0c12] py-12 sm:py-16">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 hidden w-48 skew-x-[-18deg] bg-[#12141a] sm:block"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 hidden w-48 skew-x-[-18deg] bg-[#12141a] sm:block"
      />

      <div className="relative mx-auto grid max-w-7xl gap-8 px-4 sm:grid-cols-2 sm:gap-10 sm:px-6 lg:grid-cols-4 lg:gap-6 lg:px-8">
        {stats.map((stat, index) => {
          const Icon = icons[index];
          return (
            <Reveal
              key={stat.label}
              delay={index * 90}
              variant="up"
              className="flex items-center gap-3 sm:gap-4"
            >
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full ems-grad text-white transition duration-300 hover:scale-105 sm:h-[70px] sm:w-[70px]">
                <Icon className="h-6 w-6 sm:h-7 sm:w-7" strokeWidth={1.5} />
              </span>
              <div>
                <p className="text-[1.85rem] font-bold leading-none text-white sm:text-[2rem]">
                  {stat.value}
                </p>
                <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-white">
                  {stat.label}
                </p>
              </div>
            </Reveal>
          );
        })}
      </div>
      <div className="absolute inset-x-0 bottom-0 h-px bg-white/25" />
    </section>
  );
}
