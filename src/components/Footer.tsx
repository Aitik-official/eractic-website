import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { footerLinks, site } from "@/data/site";

const serviceLinks = [
  { label: "Infrastructure Setup", href: "/services?tab=infrastructure" },
  { label: "Rental Services", href: "/services?tab=rental" },
  { label: "Asset Supply", href: "/services?tab=supply" },
  { label: "Get a Quote", href: "/contact" },
];

function FooterHeading({ children }: { children: ReactNode }) {
  return (
    <div className="mb-5">
      <h3 className="mb-2.5 text-[14px] font-semibold uppercase tracking-[0.14em] text-white">
        {children}
      </h3>
      <span className="block h-px w-10 bg-gradient-to-r from-ems-green to-ems-cyan" />
    </div>
  );
}

export default function Footer() {
  const pageLinks = footerLinks.filter(
    (link) =>
      !["Infrastructure", "Rental", "Asset Supply"].includes(link.label),
  );

  return (
    <footer className="relative overflow-hidden bg-[#010d38] text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(0,109,194,0.18),transparent_50%),radial-gradient(ellipse_at_bottom_right,rgba(78,163,42,0.12),transparent_45%)]"
      />
      <div className="h-px w-full bg-gradient-to-r from-ems-blue via-ems-cyan to-ems-green" />

      <div className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-10">
          <div className="sm:col-span-2 lg:col-span-6">
            <Link
              href="/"
              className="mb-5 inline-flex items-center rounded-xl bg-white px-3 py-2.5 shadow-[0_8px_30px_rgba(0,0,0,0.2)] sm:px-4 sm:py-3"
            >
              <Image
                src={site.logo}
                alt={site.name}
                width={260}
                height={94}
                className="h-[64px] w-auto object-contain sm:h-[80px] lg:h-[88px]"
              />
            </Link>
            <p className="mb-1.5 text-lg font-semibold tracking-tight text-white">
              {site.brandName}
            </p>
            <p className="mb-4 text-[12px] font-medium uppercase tracking-[0.12em] text-ems-cyan">
              {site.tagline}
            </p>
            <p className="mb-6 max-w-md text-[14px] leading-[1.7] text-white/55">
              {site.description}
            </p>
            <div className="space-y-3">
              <a
                href={`mailto:${site.email}`}
                className="flex items-center gap-3 break-all text-[14px] text-white/65 transition hover:text-white"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10">
                  <Mail className="h-3.5 w-3.5 text-ems-cyan" />
                </span>
                {site.email}
              </a>
              <a
                href={site.phoneHref}
                className="flex items-center gap-3 text-[14px] text-white/65 transition hover:text-white"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10">
                  <Phone className="h-3.5 w-3.5 text-ems-cyan" />
                </span>
                {site.phone}
              </a>
              <div className="flex items-start gap-3 text-[14px] text-white/65">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10">
                  <MapPin className="h-3.5 w-3.5 text-ems-cyan" />
                </span>
                <span className="pt-2 leading-relaxed">{site.address.full}</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <FooterHeading>Explore</FooterHeading>
            <ul className="space-y-2.5">
              {pageLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[14px] text-white/55 transition hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <FooterHeading>Services</FooterHeading>
            <ul className="space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[14px] text-white/55 transition hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="mt-6 inline-flex w-full items-center justify-center rounded-md bg-gradient-to-r from-ems-blue via-ems-cyan to-ems-green px-6 py-3 text-sm font-semibold text-white transition hover:brightness-110 sm:w-auto"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      <div className="relative border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-4 pb-[calc(1rem+env(safe-area-inset-bottom))] text-center text-[12px] text-white/40 sm:flex-row sm:px-6 sm:text-[13px] lg:px-8">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p>
            Powered by{" "}
            <a
              href="https://www.pranaviinfotech.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-white/70 transition hover:text-ems-cyan"
            >
              Pranavi Infotech
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
