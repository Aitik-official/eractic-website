import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";

type CtaBannerProps = {
  title?: string;
  buttonLabel?: string;
  href?: string;
  image?: string;
};

export default function CtaBanner({
  title = "Let's discuss how we can help make your business better",
  buttonLabel = "Let's Work Together",
  href = "/contact",
  image = "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1800&q=80",
}: CtaBannerProps) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={image}
          alt=""
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Strong brand tint — same layout as Finbiz CTA, EMS cyan */}
        <div className="absolute inset-0 bg-[#03abab]/88" />
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col items-stretch justify-between gap-6 px-4 py-12 sm:items-start sm:gap-8 sm:px-6 sm:py-16 lg:flex-row lg:items-center lg:gap-12 lg:px-8 lg:py-[4.75rem]">
        <Reveal variant="left" className="max-w-2xl">
          <h2 className="text-[1.5rem] font-bold leading-[1.35] text-white sm:text-[2.15rem] lg:text-[2.45rem]">
            {title}
          </h2>
        </Reveal>

        <Reveal variant="right" delay={120} className="w-full shrink-0 sm:w-auto">
          <Link
            href={href}
            className="inline-flex w-full items-center justify-center rounded-full bg-white px-9 py-3.5 text-[15px] font-bold text-[#03abab] shadow-[0_10px_30px_rgba(0,0,0,0.12)] transition hover:-translate-y-0.5 hover:bg-[#f4fbfb] hover:shadow-[0_14px_36px_rgba(0,0,0,0.16)] sm:w-auto"
          >
            {buttonLabel}
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
