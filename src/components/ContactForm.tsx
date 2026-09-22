"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { contactNeeds, site } from "@/data/site";
import Reveal from "./Reveal";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );
  const [errorMessage, setErrorMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const form = event.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          phone: data.get("phone"),
          need: data.get("need"),
          message: data.get("message"),
        }),
      });

      const result = (await response.json()) as {
        ok?: boolean;
        error?: string;
      };

      if (!response.ok || !result.ok) {
        setStatus("error");
        setErrorMessage(result.error || "Could not send enquiry.");
        return;
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Please try again.");
    }
  }

  return (
    <section className="relative overflow-hidden bg-[#f4f8fc] py-8 sm:py-12 lg:py-20">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(125deg,transparent_48%,#e8f1f8_48%,#e8f1f8_62%,transparent_62%)] opacity-70"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-8">
          <div className="mb-3 flex flex-wrap items-center gap-2 text-[13px] text-[#8a9bb0]">
            <Link href="/" className="transition hover:text-ems-navy">
              Home
            </Link>
            <span>/</span>
            <span className="text-ems-navy">Contact</span>
          </div>
        </Reveal>

        <div className="grid overflow-hidden rounded-2xl border border-[#d5e2f0] bg-white shadow-[0_20px_50px_rgba(1,21,82,0.06)] lg:grid-cols-2">
          <Reveal
            variant="left"
            className="bg-[#011552] p-5 text-white sm:p-10 lg:p-12"
          >
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-ems-green">
              Contact
            </p>
            <h1 className="mb-4 text-[1.65rem] font-bold leading-tight sm:text-4xl">
              Tell us the facility.
              <br />
              We&apos;ll outline the next step.
            </h1>
            <p className="mb-10 text-[15px] leading-relaxed text-white/65">
              Infrastructure, co-working, or a complete supply list — write to
              us or call. A specialist will respond with a clear path forward.
            </p>
            <div className="space-y-6 text-[15px]">
              <div>
                <p className="mb-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-ems-green">
                  Office
                </p>
                <a
                  href={site.address.maps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="leading-snug text-white/90 transition hover:text-ems-cyan"
                >
                  {site.address.full}
                </a>
              </div>
              <div>
                <p className="mb-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-ems-green">
                  Email
                </p>
                <a
                  href={`mailto:${site.email}`}
                  className="text-white/90 transition hover:text-ems-cyan"
                >
                  {site.email}
                </a>
              </div>
              <div>
                <p className="mb-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-ems-green">
                  Phone
                </p>
                <a
                  href={site.phoneHref}
                  className="text-white/90 transition hover:text-ems-cyan"
                >
                  {site.phone}
                </a>
              </div>
              <div>
                <p className="mb-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-ems-green">
                  WhatsApp
                </p>
                <a
                  href={site.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/90 transition hover:text-ems-cyan"
                >
                  Message the team
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal variant="right" delay={100} className="p-5 sm:p-10 lg:p-12">
            <form onSubmit={onSubmit}>
              <label className="mb-2 block text-xs font-bold uppercase tracking-[0.1em] text-[#1A2432]">
                Name
              </label>
              <input
                name="name"
                required
                placeholder="Full name"
                className="mb-6 w-full border-0 border-b border-[#d5e2f0] bg-transparent py-3 text-[15px] outline-none transition focus:border-ems-cyan"
              />

              <label className="mb-2 block text-xs font-bold uppercase tracking-[0.1em] text-[#1A2432]">
                Email
              </label>
              <input
                name="email"
                type="email"
                required
                placeholder="work email"
                className="mb-6 w-full border-0 border-b border-[#d5e2f0] bg-transparent py-3 text-[15px] outline-none transition focus:border-ems-cyan"
              />

              <label className="mb-2 block text-xs font-bold uppercase tracking-[0.1em] text-[#1A2432]">
                Mobile number
              </label>
              <input
                name="phone"
                type="tel"
                required
                inputMode="tel"
                placeholder="10-digit mobile number"
                pattern="[0-9+\-\s]{8,15}"
                className="mb-6 w-full border-0 border-b border-[#d5e2f0] bg-transparent py-3 text-[15px] outline-none transition focus:border-ems-cyan"
              />

              <label className="mb-2 block text-xs font-bold uppercase tracking-[0.1em] text-[#1A2432]">
                Requirement
              </label>
              <select
                name="need"
                required
                className="mb-6 w-full border-0 border-b border-[#d5e2f0] bg-transparent py-3 text-[15px] outline-none transition focus:border-ems-cyan"
              >
                {contactNeeds.map((need) => (
                  <option key={need} value={need}>
                    {need}
                  </option>
                ))}
              </select>

              <label className="mb-2 block text-xs font-bold uppercase tracking-[0.1em] text-[#1A2432]">
                Project note
              </label>
              <textarea
                name="message"
                placeholder="City, timeline, and what you need operational."
                className="mb-8 min-h-[100px] w-full resize-y border-0 border-b border-[#d5e2f0] bg-transparent py-3 text-[15px] outline-none transition focus:border-ems-cyan"
              />

              <button
                type="submit"
                disabled={status === "loading"}
                className="inline-flex w-full items-center justify-center rounded-md ems-grad px-7 py-3.5 text-sm font-bold uppercase tracking-wider text-white transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
              >
                {status === "loading" ? "Sending…" : "Send enquiry"}
              </button>

              {status === "success" ? (
                <p className="mt-4 text-sm font-medium text-ems-green">
                  Enquiry sent to {site.email}. We&apos;ll get back to you soon.
                </p>
              ) : null}
              {status === "error" ? (
                <p className="mt-4 text-sm font-medium text-red-600">
                  {errorMessage}
                </p>
              ) : null}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
