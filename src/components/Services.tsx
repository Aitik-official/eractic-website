import {
  ArrowRight,
  ClipboardList,
  Lightbulb,
  MessagesSquare,
  Network,
  TrendingUp,
  Users,
} from "lucide-react";
import Link from "next/link";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { AccentBars, PlusGrid } from "./Decor";
import { services } from "@/data/site";

const iconMap = {
  trending: TrendingUp,
  lightbulb: Lightbulb,
  network: Network,
  clipboard: ClipboardList,
  users: Users,
  messages: MessagesSquare,
};

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-white py-14 sm:py-20 lg:py-28"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(125deg,transparent_48%,#f3f3f3_48%,#f3f3f3_62%,transparent_62%)] opacity-70"
      />
      <PlusGrid
        cols={4}
        count={16}
        className="absolute left-4 top-16 hidden md:grid lg:left-8"
      />
      <AccentBars className="absolute bottom-20 right-8 hidden h-12 lg:flex" />
      <AccentBars className="absolute right-24 top-24 hidden h-10 opacity-70 lg:flex" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Infrastructure Setup"
          title="High Quality Services"
          watermark="Services"
          className="mb-14"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon];
            const isLastCol = (index + 1) % 3 === 0;
            const isBottomRow = index >= 3;

            return (
              <Reveal
                key={service.title}
                as="article"
                delay={index * 70}
                className={`group px-4 py-8 transition duration-300 hover:bg-[#f8fbfd] sm:px-8 sm:py-12 lg:px-10 ${
                  !isLastCol ? "lg:border-r lg:border-[#ececec]" : ""
                } ${!isBottomRow ? "border-b border-[#ececec]" : ""} ${
                  index % 2 === 0
                    ? "md:border-r md:border-[#ececec] lg:border-r-0"
                    : ""
                } ${
                  index < 4
                    ? "md:border-b md:border-[#ececec] lg:border-b-0"
                    : ""
                } ${!isBottomRow ? "lg:border-b lg:border-[#ececec]" : ""}`}
              >
                <div className="mb-5 flex items-center gap-4">
                  <Icon
                    className="h-11 w-11 shrink-0 text-finbiz-red transition duration-300 group-hover:scale-110"
                    strokeWidth={1.4}
                  />
                  <h3 className="text-[1.35rem] font-bold leading-tight text-[#1A2432]">
                    {service.title}
                  </h3>
                </div>
                <p className="mb-7 max-w-sm text-[15px] leading-[1.75] text-[#666666]">
                  {service.description}
                </p>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-3 text-sm font-bold text-[#1A2432] transition group-hover:text-finbiz-red"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#e5e5e5] bg-white transition group-hover:border-finbiz-red group-hover:bg-finbiz-red group-hover:text-white">
                    <ArrowRight className="h-4 w-4" />
                  </span>
                  Enquire
                </Link>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-12 text-center" delay={200}>
          <Link
            href="/services"
            className="inline-flex rounded-md ems-grad px-7 py-3.5 text-sm font-bold text-white transition hover:brightness-110"
          >
            Browse All Services
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
