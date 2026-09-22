import { clients } from "@/data/site";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { PlusGrid } from "./Decor";

type ClientsProps = {
  showHeading?: boolean;
};

export default function Clients({ showHeading = false }: ClientsProps) {
  return (
    <section
      id="clients"
      className="relative overflow-hidden bg-[#f4f8fc] py-16 lg:py-24"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(125deg,transparent_48%,#e8f1f8_48%,#e8f1f8_62%,transparent_62%)] opacity-80"
      />
      <PlusGrid
        cols={3}
        count={9}
        className="absolute right-6 top-16 hidden md:grid lg:right-10"
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

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 xl:grid-cols-7">
          {clients.map((client, i) => (
            <Reveal
              key={client.name}
              delay={i * 50}
              variant="scale"
              className="card-lift flex min-h-[100px] flex-col items-center justify-center gap-1.5 rounded-xl border border-white bg-white px-2 py-4 text-center shadow-[0_10px_35px_rgba(1,21,82,0.06)] sm:min-h-[120px] sm:px-3 sm:py-5"
            >
              <span
                className="text-[10px] font-bold uppercase tracking-[0.14em]"
                style={{ color: client.color }}
              >
                {client.category}
              </span>
              <span className="text-[13px] font-bold leading-snug tracking-tight text-[#1A2432]">
                {client.name}
              </span>
              {"note" in client && client.note ? (
                <span className="text-[11px] text-[#666]">{client.note}</span>
              ) : null}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
