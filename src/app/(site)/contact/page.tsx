// This component renders the Contact Us page, displaying a contact form.
import { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";

// Metadata for the Contact Us page, used for SEO and browser tab titles.
export const metadata: Metadata = {
  title: "SpicyPrivacy - Reach Out",
  description: "Contact us for your AI governance and data privacy needs.",
};

export default function ContactPage() {
  return (
    <section className="container mx-auto px-4 py-16 sm:px-6 lg:py-24 lg:px-8">
      <div className="flex min-h-[60vh] flex-col items-center justify-center">
        {/* Renders the contact form component */}
        <ContactForm />
      </div>
    </section>
  );
}
