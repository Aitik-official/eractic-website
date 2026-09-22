import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Eratic Multi Solution LLP for infrastructure, co-working rental, or asset supply.",
};

export default function ContactPage() {
  return <ContactForm />;
}
