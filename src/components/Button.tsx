import Link from "next/link";
import { type ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "white" | "ghost";
  className?: string;
  type?: "button" | "submit";
};

const variants = {
  primary:
    "ems-grad text-white hover:brightness-110 shadow-sm shadow-ems-blue/25",
  white: "bg-white text-ems-navy hover:bg-ems-soft",
  ghost:
    "bg-transparent text-finbiz-navy border border-finbiz-navy/15 hover:border-ems-cyan hover:text-ems-cyan",
};

export default function Button({
  children,
  href,
  variant = "primary",
  className = "",
  type = "button",
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center rounded-md px-7 py-3.5 text-sm font-semibold transition duration-200 ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes}>
      {children}
    </button>
  );
}
