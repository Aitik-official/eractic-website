import type { Metadata } from "next";
import { Suspense } from "react";
import PageHero from "@/components/PageHero";
import ServicesHub from "@/components/ServicesHub";
import Stats from "@/components/Stats";
import CtaBanner from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Eratic Multi Solution services — Infrastructure Setup, Rental Services (Co-Working), and Asset Supply & Services.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Infrastructure, Rental & Asset Supply"
        description="One professional hub for all EMS services — explore Infrastructure Setup, Co-Working Rental, or Asset Supply & Services."
        image="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1800&q=80"
        cta={{ label: "Get a Quote", href: "/contact" }}
        ctaSecondary={{ label: "See Clients", href: "/clients" }}
      />
      <Suspense
        fallback={
          <div className="px-4 py-20 text-center text-sm text-[#666]">
            Loading services…
          </div>
        }
      >
        <ServicesHub />
      </Suspense>
      <Stats />
      <CtaBanner />
    </>
  );
}
