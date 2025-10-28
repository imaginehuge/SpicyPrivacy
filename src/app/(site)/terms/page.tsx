// This component renders the Terms of Service page for SpicyPrivacy.
import { Metadata } from "next";

// Metadata for the Terms of Service page, used for SEO and browser tab titles.
export const metadata: Metadata = {
  title: "SpicyPrivacy - Terms of Service",
  description: "Read our terms of service.",
};

export default function TermsPage() {
  return (
    <section className="container mx-auto px-4 py-16 sm:px-6 lg:py-24 lg:px-8">
      <div className="mx-auto max-w-3xl space-y-8">
        {/* Page title and last updated date */}
        <div className="text-center">
          <h1 className="text-4xl font-black tracking-tighter sm:text-5xl">
            Terms of Service
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-text-muted">
            Last updated: October 12, 2025
          </p>
        </div>
        {/* Introduction section */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">1. Introduction</h2>
          <p className="text-text-muted">
            Welcome to SpicyPrivacy! These Terms of Service (&quot;Terms&quot;) govern
            your use of our website and services. By accessing or using our
            services, you agree to be bound by these Terms.
          </p>
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">2. Our Services</h2>
          <p className="text-text-muted">
            SpicyPrivacy provides AI governance and data privacy consulting
            services. Our services are for informational purposes only and do
            not constitute legal advice.
          </p>
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">3. Limitation of Liability</h2>
          <p className="text-text-muted">
            To the fullest extent permitted by law, SpicyPrivacy shall not be
            liable for any indirect, incidental, special, consequential, or
            punitive damages, or any loss of profits or revenues, whether
            incurred directly or indirectly, or any loss of data, use,
            goodwill, or other intangible losses, resulting from your access to
            or use of or inability to access or use the services.
          </p>
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">4. Governing Law</h2>
          <p className="text-text-muted">
            These Terms shall be governed by the laws of the State of
            California, without respect to its conflict of laws principles.
          </p>
        </div>
      </div>
    </section>
  );
}
