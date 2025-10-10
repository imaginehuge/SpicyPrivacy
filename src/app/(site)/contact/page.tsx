// app/(site)/contact/page.tsx
import { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "SpicyPrivacy - Reach Out",
  description: "Contact us for your AI governance and data privacy needs.",
};

export default function ContactPage() {
  return (
    <section className="container mx-auto px-4 py-16 sm:px-6 lg:py-24 lg:px-8">
      <div className="flex min-h-[60vh] flex-col items-center justify-center">
        <ContactForm />
      </div>
    </section>
  );
}
