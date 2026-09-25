import { clients } from "@/data/site";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

type ClientsProps = {
  showHeading?: boolean;
};

export default function Clients({ showHeading = false }: ClientsProps) {
  const track = [...clients, ...clients];

  return (
    <section
      id="clients"
      className="relative overflow-hidden bg-[#f4f8fc] py-16 lg:py-24"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(125deg,transparent_48%,#e8f1f8_48%,#e8f1f8_62%,transparent_62%)] opacity-80"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {showHeading ? (
          <SectionHeading
            eyebrow="Partnerships"
            title="Our Valuable Clients"
            watermark="Clients"
            className="mb-14"
          />
        ) : (
          <Reveal className="mb-8 flex items-center gap-3 sm:mb-12 sm:gap-5">
            <span className="h-px flex-1 bg-[#c9c9c9]" />
            <h2 className="shrink-0 text-center text-[11px] font-bold uppercase tracking-[0.14em] text-[#3d3d3d] sm:text-sm sm:tracking-[0.18em]">
              Our Valuable Clients
            </h2>
            <span className="h-px flex-1 bg-[#c9c9c9]" />
          </Reveal>
        )}
      </div>

      <div className="relative">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-[#f4f8fc] to-transparent sm:w-16"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-[#f4f8fc] to-transparent sm:w-16"
        />

        <div className="logo-marquee flex w-max gap-4 px-4">
          {track.map((client, i) => (
            <article
              key={`${client.name}-${i}`}
              className={`flex h-[112px] w-[210px] shrink-0 items-center justify-center overflow-hidden rounded-xl border border-white px-5 shadow-[0_10px_35px_rgba(1,21,82,0.06)] sm:h-[124px] sm:w-[230px] ${
                "dark" in client && client.dark ? "bg-[#111]" : "bg-white"
              }`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={client.logo}
                alt={client.name}
                className={
                  "round" in client && client.round
                    ? "h-[96px] w-[96px] rounded-full object-cover sm:h-[104px] sm:w-[104px]"
                    : `w-auto object-contain ${
                        "zoom" in client && client.zoom === "md"
                          ? "h-[108px] max-w-[210px]"
                          : "max-h-[68px] max-w-[170px]"
                      }`
                }
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
