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
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
        <div className="lg:py-12">
          <h2 className="text-3xl font-bold tracking-tight text-text-dark sm:text-4xl">
            Get in Touch
          </h2>
          <p className="mt-4 text-lg text-text-muted">
            We’d love to hear from you. Whether you have a question about our services, research, or anything else, our team is ready to answer all your questions.
          </p>
          <div className="mt-8 space-y-4">
            <p className="flex items-center">
              <svg className="h-6 w-6 text-text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              <span className="ml-3 text-text-dark">contact@spicyprivacy.com</span>
            </p>
            <p className="flex items-center">
              <svg className="h-6 w-6 text-text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
              <span className="ml-3 text-text-dark">+1 (555) 123-4567</span>
            </p>
            <p className="flex items-center">
              <svg className="h-6 w-6 text-text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              <span className="ml-3 text-text-dark">123 Privacy Lane, Suite 100, Data City, DC 54321</span>
            </p>
          </div>
        </div>
        <div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
