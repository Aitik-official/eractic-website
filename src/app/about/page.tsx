import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import About from "@/components/About";
import Stats from "@/components/Stats";
import Team from "@/components/Team";
import CtaBanner from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "About",
  description:
    "Who we are at Eratic Multi Solution LLP — one-click infrastructure setup since 2023.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Who we are"
        title="About Eratic Multi Solution"
        description="Purpose and quality drive everything we do. Since 2023, our mission has been simple: provide a one-click solution to set up infrastructure."
        image="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1800&q=80"
        cta={{ label: "View Our Services", href: "/services" }}
        ctaSecondary={{ label: "Contact Us", href: "/contact" }}
      />
      <About />
      <Stats />
      <Team />
      <CtaBanner />
    </>
  );
}
