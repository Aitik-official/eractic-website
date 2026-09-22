import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import CtaBanner from "@/components/CtaBanner";
import BusinessGrowth from "@/components/BusinessGrowth";
import Stats from "@/components/Stats";
import Projects from "@/components/Projects";
import Clients from "@/components/Clients";
import Testimonials from "@/components/Testimonials";
import Team from "@/components/Team";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <CtaBanner />
      <BusinessGrowth />
      <Stats />
      <Projects />
      <Clients />
      <Testimonials />
      <Team />
    </>
  );
}
