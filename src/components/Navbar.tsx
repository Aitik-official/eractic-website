"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import Logo from "./Logo";
import Button from "./Button";
import { navItems } from "@/data/site";

type NavChild = { label: string; href: string };
type NavItem = {
  label: string;
  href: string;
  children?: readonly NavChild[];
};

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (!dropdownRef.current?.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    }
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  useEffect(() => {
    setOpen(false);
    setServicesOpen(false);
    setMobileServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-black/[0.04] bg-white">
      <div className="relative mx-auto flex max-w-7xl items-center gap-3 px-3 py-1 sm:gap-5 sm:px-6 sm:py-1.5 lg:px-8">
        <div className="min-w-0 flex-1 shrink">
          <Logo />
        </div>

        <nav className="hidden flex-1 items-center justify-center gap-8 xl:flex">
          {(navItems as readonly NavItem[]).map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            if (item.children?.length) {
              return (
                <div key={item.label} className="relative" ref={dropdownRef}>
                  <button
                    type="button"
                    onClick={() => setServicesOpen((v) => !v)}
                    className={`inline-flex items-center gap-1 text-[15px] font-semibold tracking-wide transition ${
                      active || pathname.startsWith("/services")
                        ? "text-ems-cyan"
                        : "text-finbiz-navy hover:text-ems-cyan"
                    }`}
                  >
                    {item.label}
                    <ChevronDown
                      className={`h-4 w-4 transition ${
                        servicesOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {servicesOpen ? (
                    <div className="absolute left-1/2 top-full z-50 mt-3 min-w-[240px] -translate-x-1/2 rounded-xl border border-black/5 bg-white py-2 shadow-[0_16px_40px_rgba(0,0,0,0.1)]">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setServicesOpen(false)}
                          className="block px-4 py-2.5 text-sm text-[#555] transition hover:bg-ems-soft hover:text-ems-cyan"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  ) : null}
                </div>
              );
            }

            return (
              <Link
                key={item.label}
                href={item.href}
                className={`text-[15px] font-semibold tracking-wide transition ${
                  active
                    ? "text-ems-cyan"
                    : "text-finbiz-navy hover:text-ems-cyan"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex shrink-0 items-center gap-2.5">
          <div className="hidden xl:block">
            <Button
              href="/contact"
              className="rounded-md px-6 py-3 text-[15px]"
            >
              Get Quote
            </Button>
          </div>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => {
              setOpen((v) => !v);
              setMobileServicesOpen(false);
            }}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-[#e8f6f6] text-finbiz-navy transition hover:bg-ems-cyan hover:text-white xl:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Floating mobile menu — overlays content, does not push hero */}
      {open ? (
        <>
          <button
            type="button"
            aria-label="Close menu"
            className="fixed inset-0 z-40 bg-black/25 xl:hidden"
            onClick={() => setOpen(false)}
          />
          <div
            ref={menuRef}
            className="absolute left-3 right-3 top-full z-50 mt-2 max-h-[min(70vh,480px)] overflow-y-auto rounded-2xl border border-black/5 bg-white px-3 py-3 shadow-[0_20px_50px_rgba(1,21,82,0.18)] sm:left-6 sm:right-6 sm:px-4 sm:py-4 xl:hidden"
          >
            <nav className="flex flex-col gap-0.5">
              {(navItems as readonly NavItem[]).map((item) => {
                if (item.children?.length) {
                  return (
                    <div key={item.label}>
                      <button
                        type="button"
                        onClick={() => setMobileServicesOpen((v) => !v)}
                        className="flex w-full items-center justify-between rounded-md px-3 py-3 text-left text-[15px] font-semibold text-finbiz-navy hover:bg-ems-soft hover:text-ems-cyan"
                      >
                        {item.label}
                        <ChevronDown
                          className={`h-4 w-4 transition ${
                            mobileServicesOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {mobileServicesOpen ? (
                        <div className="pb-1">
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              onClick={() => setOpen(false)}
                              className="block rounded-md py-2.5 pl-6 pr-3 text-sm text-[#666] hover:bg-ems-soft hover:text-ems-cyan"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      ) : null}
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-md px-3 py-3 text-[15px] font-semibold text-finbiz-navy hover:bg-ems-soft hover:text-ems-cyan"
                  >
                    {item.label}
                  </Link>
                );
              })}
              <Button href="/contact" className="mt-3 w-full">
                Get Quote
              </Button>
            </nav>
          </div>
        </>
      ) : null}
    </header>
  );
}
