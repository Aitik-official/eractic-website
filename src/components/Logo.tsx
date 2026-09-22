import Image from "next/image";
import Link from "next/link";
import { site } from "@/data/site";

type LogoProps = {
  compact?: boolean;
  light?: boolean;
};

export default function Logo({ compact = false, light = false }: LogoProps) {
  return (
    <Link href="/" className="flex items-center gap-2.5">
      <span className="relative block h-[56px] w-[56px] shrink-0 sm:h-[72px] sm:w-[72px] lg:h-[80px] lg:w-[80px]">
        <Image
          src={site.logo}
          alt={site.name}
          width={280}
          height={280}
          className={`h-full w-full object-contain object-center ${
            light ? "brightness-0 invert" : ""
          }`}
          priority
        />
      </span>

      {!compact ? (
        <span
          className={`flex min-w-0 items-center gap-2.5 border-l pl-2.5 ${
            light ? "border-white/25" : "border-[#d5e2f0]"
          }`}
        >
          <span className="min-w-0 leading-none">
            <span className="flex flex-col gap-0.5 sm:flex-row sm:flex-wrap sm:items-baseline sm:gap-x-1.5">
              <span
                className={`font-brand text-[12px] font-bold lowercase tracking-[0.06em] sm:text-[14px] ${
                  light ? "text-white" : "text-finbiz-navy"
                }`}
              >
                eratic
              </span>
              <span
                className={`text-[10px] font-semibold uppercase tracking-[0.1em] sm:text-[12px] sm:tracking-[0.12em] ${
                  light
                    ? "text-white/80"
                    : "ems-grad-text text-transparent"
                }`}
              >
                MULTISOLUTIONS
              </span>
            </span>
            <span
              className={`mt-1 hidden text-[8px] font-semibold uppercase tracking-[0.16em] sm:block ${
                light ? "text-white/65" : "text-ems-cyan"
              }`}
            >
              {site.tagline}
            </span>
          </span>
        </span>
      ) : null}
    </Link>
  );
}
