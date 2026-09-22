import Image from "next/image";
import { Check } from "lucide-react";
import Reveal from "./Reveal";
import { about } from "@/data/site";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden border-b-[3px] border-ems-green bg-white py-14 sm:py-20 lg:py-28"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute left-6 top-10 hidden gap-1.5 md:flex lg:left-10"
      >
        {[28, 40, 22, 34].map((h, i) => (
          <span
            key={i}
            className="w-[2px] rounded-full bg-ems-cyan/80"
            style={{ height: h }}
          />
        ))}
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 sm:gap-12 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <Reveal variant="left" className="relative mx-auto aspect-square w-full max-w-[380px] sm:max-w-[520px] lg:mx-0 lg:max-w-none">
          <div
            aria-hidden
            className="absolute -left-[6%] top-[8%] h-[72%] w-[72%] rounded-[42%_58%_48%_52%] bg-[linear-gradient(135deg,#006dc2_0%,#03abab_55%,#4ea32a_100%)]"
          />
          <div
            aria-hidden
            className="absolute left-[8%] top-[18%] h-[55%] w-[55%] overflow-hidden rounded-full opacity-40"
          >
            <Image
              src={about.accentImage}
              alt=""
              fill
              className="object-cover"
              sizes="280px"
            />
          </div>

          <div
            className="absolute bottom-0 right-0 h-[88%] w-[88%] overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.12)]"
            style={{
              borderRadius: "48% 52% 42% 58% / 42% 38% 62% 58%",
            }}
          >
            <Image
              src={about.image}
              alt="EMS team collaborating"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 90vw, 45vw"
            />
          </div>
        </Reveal>

        <Reveal variant="right" delay={120} className="relative">
          <span
            aria-hidden
            className="outline-text pointer-events-none absolute -left-2 -top-8 select-none text-[3.25rem] font-bold leading-none sm:-top-10 sm:text-[6.5rem] lg:-top-14 lg:text-[7.5rem]"
          >
            {about.watermark}
          </span>

          <p className="relative mb-3 text-xs font-bold uppercase tracking-[0.2em] text-finbiz-red">
            {about.eyebrow}
          </p>
          <h2 className="relative mb-5 max-w-lg text-[1.85rem] font-bold leading-[1.25] text-[#1A2432] sm:text-[2.35rem]">
            {about.title}
          </h2>
          <p className="relative mb-8 max-w-xl text-[15px] leading-[1.8] text-[#666666]">
            {about.description}
          </p>

          <div className="relative grid gap-4 sm:grid-cols-2">
            {about.featureCards.map((item, i) => (
              <Reveal
                key={item}
                delay={180 + i * 80}
                variant="up"
                className="card-lift flex items-center gap-3 rounded-xl border border-[#eee] bg-white px-4 py-4 shadow-[0_8px_24px_rgba(0,0,0,0.04)]"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ems-green text-white">
                  <Check className="h-4 w-4" strokeWidth={3} />
                </span>
                <p className="text-[14px] font-semibold text-[#1A2432]">
                  {item}
                </p>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
