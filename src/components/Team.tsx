import Image from "next/image";
import { Plus } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { PlusGrid, PlusScatter } from "./Decor";
import { team } from "@/data/site";

export default function Team() {
  return (
    <section
      id="team"
      className="relative overflow-hidden bg-[#f4f4f4] py-14 sm:py-20 lg:py-28"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,transparent_42%,rgba(255,255,255,0.55)_42%,rgba(255,255,255,0.55)_58%,transparent_58%)]"
      />
      <PlusGrid
        cols={3}
        count={9}
        className="absolute right-6 top-20 hidden md:grid lg:right-10"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-8 left-6 h-36 w-36 rounded-full border border-finbiz-red/25"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-14 left-12 h-24 w-24 rounded-full border border-finbiz-red/20"
      />
      <PlusScatter className="absolute bottom-10 left-40 hidden lg:block" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="How We Work"
          title="One Accountable Partner"
          watermark="Members"
          className="mb-14"
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-7">
          {team.map((member, i) => (
            <Reveal
              key={member.name}
              as="article"
              delay={i * 80}
              className="group overflow-hidden rounded-[18px] bg-transparent p-0 transition duration-300 hover:-translate-y-1.5 hover:bg-[#eaf2fb] hover:shadow-[0_18px_40px_rgba(15,40,80,0.08)]"
            >
              <div className="relative aspect-[3/3.6] overflow-hidden rounded-t-[18px]">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-[1.03]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <button
                  type="button"
                  aria-label={`More about ${member.name}`}
                  className="absolute bottom-4 right-4 flex h-11 w-11 items-center justify-center rounded-full bg-white text-finbiz-red shadow-md transition hover:bg-finbiz-red hover:text-white"
                >
                  <Plus className="h-5 w-5" strokeWidth={2.5} />
                </button>
              </div>
              <div className="px-3 py-5 text-center">
                <h3 className="mb-1 text-lg font-bold text-[#1A2432]">
                  {member.name}
                </h3>
                <p className="text-sm text-finbiz-red">{member.role}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
