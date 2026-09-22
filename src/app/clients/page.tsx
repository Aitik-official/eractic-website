import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Clients from "@/components/Clients";
import Testimonials from "@/components/Testimonials";
import CtaBanner from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "Clients",
  description:
    "Teams and brands Eratic Multi Solution has worked with across healthcare, consulting, hospitality, food, and marketing.",
};

export default function ClientsPage() {
  return (
    <>
      <PageHero
        eyebrow="Partnerships"
        title="Our valuable clients"
        description="Teams and brands we have worked with across healthcare, consulting, hospitality, food, and marketing."
        image="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1800&q=80"
        cta={{ label: "Start a Project", href: "/contact" }}
        ctaSecondary={{ label: "Our Services", href: "/services" }}
      />
      <Clients showHeading />
      <Testimonials />
      <CtaBanner />
    </>
  );
}
