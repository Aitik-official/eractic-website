import Reveal from "./Reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  watermark?: string;
  align?: "left" | "center";
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  watermark,
  align = "center",
  className = "",
}: SectionHeadingProps) {
  const alignment =
    align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <Reveal
      className={`relative flex flex-col ${alignment} ${className}`}
      variant="up"
    >
      {watermark ? (
        <span
          aria-hidden
          className={`outline-text pointer-events-none absolute top-1/2 -z-0 max-w-full -translate-y-1/2 select-none truncate text-[2.75rem] font-bold leading-none sm:text-[6.5rem] lg:text-[8.5rem] ${
            align === "center" ? "left-1/2 -translate-x-1/2" : "left-0"
          }`}
        >
          {watermark}
        </span>
      ) : null}
      <p className="relative z-10 mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-finbiz-red sm:text-xs">
        {eyebrow}
      </p>
      <h2 className="relative z-10 text-[1.55rem] font-bold leading-tight text-finbiz-navy sm:text-[2.35rem] lg:text-[2.65rem]">
        {title}
      </h2>
    </Reveal>
  );
}
