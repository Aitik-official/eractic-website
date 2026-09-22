import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description?: string;
  image?: string;
  cta?: { label: string; href: string };
  ctaSecondary?: { label: string; href: string };
};

export default function PageHero({
  eyebrow,
  title,
  description,
  image = "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1800&q=80",
  cta,
  ctaSecondary,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden lg:min-h-[420px] lg:max-h-[480px]">
      <div className="absolute inset-0">
        <Image
          src={image}
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(1,13,56,0.94)_0%,rgba(1,21,82,0.82)_48%,rgba(0,109,194,0.55)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(78,163,42,0.22),transparent_45%)]" />
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute -right-10 bottom-0 hidden h-0 w-0 border-b-[100px] border-l-[100px] border-b-ems-green/90 border-l-transparent sm:block"
      />
      <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-ems-blue via-ems-cyan to-ems-green" />

      <div className="relative mx-auto flex max-w-7xl flex-col justify-center px-4 py-12 sm:px-6 sm:py-16 lg:min-h-[420px] lg:px-8 lg:py-20">
        <div className="hero-animate mb-4 flex flex-wrap items-center gap-2 text-[12px] text-white/50 sm:mb-5 sm:text-[13px]">
          <Link href="/" className="transition hover:text-white">
            Home
          </Link>
          <span className="text-white/30">/</span>
          <span className="text-white/80">{eyebrow}</span>
        </div>

        <p className="hero-animate hero-animate-delay-1 mb-3 text-[11px] font-bold uppercase tracking-[0.2em] text-ems-green sm:text-xs">
          {eyebrow}
        </p>
        <h1 className="hero-animate hero-animate-delay-2 max-w-3xl text-[1.75rem] font-bold leading-[1.15] text-white sm:text-4xl lg:text-[2.85rem]">
          {title}
        </h1>
        {description ? (
          <p className="hero-animate hero-animate-delay-3 mt-3 max-w-xl text-[14px] leading-[1.75] text-white/70 sm:mt-4 sm:text-[15px]">
            {description}
          </p>
        ) : null}

        {(cta || ctaSecondary) && (
          <div className="hero-animate hero-animate-delay-4 mt-6 flex w-full flex-col gap-3 sm:mt-8 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center">
            {cta ? (
              <Button href={cta.href} className="w-full rounded-md px-7 py-3 sm:w-auto">
                {cta.label}
              </Button>
            ) : null}
            {ctaSecondary ? (
              <Link
                href={ctaSecondary.href}
                className="inline-flex w-full items-center justify-center rounded-md border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10 sm:w-auto"
              >
                {ctaSecondary.label}
              </Link>
            ) : null}
          </div>
        )}
      </div>
    </section>
  );
}
