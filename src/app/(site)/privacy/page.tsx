// app/(site)/privacy/page.tsx
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SpicyPrivacy - Privacy Policy",
  description: "Read our privacy policy.",
};

export default function PrivacyPage() {
  return (
    <section className="container mx-auto px-4 py-16 sm:px-6 lg:py-24 lg:px-8">
      <div className="mx-auto max-w-3xl space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-black tracking-tighter sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-text-muted">
            Last updated: October 12, 2025
          </p>
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">1. Introduction</h2>
          <p className="text-text-muted">
            SpicyPrivacy ("we," "us," or "our") is committed to protecting
            your privacy. This Privacy Policy explains how we collect, use,
            disclose, and safeguard your information when you visit our
            website.
          </p>
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">2. Information We Collect</h2>
          <p className="text-text-muted">
            We may collect personal information from you, such as your name and
            email address, when you contact us or sign up for our newsletter.
            We may also collect non-personal information, such as browser type
            and operating system, to improve our website.
          </p>
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">3. Use of Your Information</h2>
          <p className="text-text-muted">
            We may use the information we collect from you to provide and
            improve our services, to send you marketing communications, and to
            respond to your inquiries.
          </p>
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">4. Contact Us</h2>
          <p className="text-text-muted">
            If you have any questions about this Privacy Policy, please contact
            us at privacy@spicyprivacy.com.
          </p>
        </div>
      </div>
    </section>
  );
}
