// This component renders the Privacy Policy page for SpicyPrivacy.
import { Metadata } from "next";

// Metadata for the Privacy Policy page, used for SEO and browser tab titles.
export const metadata: Metadata = {
  title: "SpicyPrivacy - Privacy Policy",
  description: "Read our privacy policy.",
};

export default function PrivacyPage() {
  return (
    <section className="container mx-auto min-h-screen px-4 py-16 sm:px-6 lg:py-24 lg:px-8">
      <div className="mx-auto max-w-3xl space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-black tracking-tighter sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="text-lg text-text-muted">
            Last Updated: 12 November 2025
          </p>
        </div>

        <div className="space-y-10 text-text-muted">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-text">1. Introduction</h2>
            <p>
              <strong>SpicyPrivacy</strong> (referred to as &quot;we&quot;,
              &quot;us&quot;, or &quot;our&quot;) is a data privacy consultancy
              and training provider operated by Imagine Huge Private Limited.
              This Privacy Policy explains how we collect, use, disclose, store,
              and protect personal data when you visit our website (the
              &quot;Site&quot;) or engage with our services. By accessing the
              Site or using our services, you consent to the practices described
              in this Policy. If you do not agree with this Policy, do not use
              the Site or provide personal data to us.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-text">
              2. Scope and Applicability
            </h2>
            <p>
              This Policy applies to individuals who interact with SpicyPrivacy
              from within India. For residents of the European Union, processing
              of personal data will be carried out in accordance with the
              General Data Protection Regulation (GDPR). For residents of India,
              processing will be governed by the Digital Personal Data
              Protection Act, 2023 (DPDP Act). Where local law affords greater
              protection, the higher standard will apply.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-text">
              3. Controller and Contact Details
            </h2>
            <p>
              <strong>Data Controller:</strong> Imagine Huge Private Limited,
              trading as SpicyPrivacy.
              <br />
              <strong>
                Primary contact for privacy inquiries and rights requests:
              </strong>{" "}
              <a
                href="mailto:team@spicyprivacy.com"
                className="text-accent-gold hover:underline"
              >
                team@spicyprivacy.com
              </a>
              .
              <br />
              <strong>Grievance Officer:</strong> SpicyPrivacy, email:{" "}
              <a
                href="mailto:team@spicyprivacy.com"
                className="text-accent-gold hover:underline"
              >
                team@spicyprivacy.com
              </a>
              .
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-text">
              4. Information We Collect
            </h2>
            <p>We collect the following categories of personal data:</p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong>Personal Data you provide directly</strong>:
                <ul className="mt-2 list-disc space-y-1 pl-6">
                  <li>Name</li>
                  <li>Email address</li>
                  <li>Telephone number</li>
                  <li>Job title and employer</li>
                  <li>Company name</li>
                  <li>
                    Information submitted through contact forms, consultation
                    requests, registrations, or correspondence
                  </li>
                  <li>
                    Materials or content shared during consultancy, training, or
                    research engagements
                  </li>
                </ul>
              </li>
              <li>
                <strong>
                  Usage and Technical Data collected automatically
                </strong>
                : tracking and cookie-related disclosures are governed by a
                separate Cookie Policy.
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-text">
              5. Purposes of Processing
            </h2>
            <p>We process personal data for the following purposes:</p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                responding to enquiries and delivering consulting, advisory,
                training, and certification services;
              </li>
              <li>
                administering registrations, subscriptions, invoicing, and
                contractual obligations;
              </li>
              <li>
                sending service updates, newsletters, and promotional materials
                where you have opted in;
              </li>
              <li>
                conducting research and analysis relating to regulatory
                developments;
              </li>
              <li>monitoring and improving the Site and our services;</li>
              <li>maintaining the security of systems and preventing fraud;</li>
              <li>complying with legal and regulatory requirements;</li>
              <li>any purpose for which you provide explicit consent.</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-text">
              6. Legal Bases for Processing
            </h2>
            <p>Processing is undertaken only where a lawful basis exists:</p>
            <ul className="list-disc space-y-2 pl-6">
              <li>consent;</li>
              <li>performance of a contract or steps preceding a contract;</li>
              <li>compliance with legal obligations;</li>
              <li>
                legitimate interests pursued by us, provided such interests are
                not overridden by your rights.
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-text">
              7. Disclosure and Sharing of Personal Data
            </h2>
            <p>We do not sell personal data. Data may be shared with:</p>
            <ul className="list-disc space-y-2 pl-6">
              <li>internal employees and authorised contract personnel;</li>
              <li>
                third-party service providers supporting hosting, communication,
                analytics, or operational functions, subject to confidentiality
                obligations;
              </li>
              <li>
                regulators, law enforcement, or authorities where legally
                required;
              </li>
              <li>
                entities involved in a merger, acquisition, financing, or
                transfer of assets, subject to safeguards;
              </li>
              <li>
                any party where you have expressly consented to disclosure.
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-text">
              8. International Transfers
            </h2>
            <p>
              Although primary processing occurs in India, certain service
              providers may operate outside India. Where transfers occur,
              appropriate safeguards and legally compliant transfer mechanisms
              will be applied.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-text">9. Data Retention</h2>
            <p>
              Personal data is retained only for the duration necessary to
              fulfil the purposes described in this Policy, to meet legal
              obligations, or to establish or defend legal claims. Data that is
              no longer required will be securely deleted or anonymised.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-text">
              10. Security Measures
            </h2>
            <p>
              We implement administrative, technical, and organisational
              safeguards to protect personal data from unauthorised access,
              alteration, disclosure, or destruction. While reasonable steps are
              taken to secure data, no system can be guaranteed completely
              secure.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-text">11. Your Rights</h2>
            <p>Depending on the jurisdiction, you may have the right to:</p>
            <ul className="list-disc space-y-2 pl-6">
              <li>access;</li>
              <li>rectification;</li>
              <li>erasure;</li>
              <li>restriction of processing;</li>
              <li>
                objection to processing based on legitimate interests or direct
                marketing;
              </li>
              <li>data portability where applicable;</li>
              <li>withdrawal of consent at any time.</li>
            </ul>
            <p>Rights requests may be submitted to team@spicyprivacy.com.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-text">
              12. Children&apos;s Data
            </h2>
            <p>
              The Site and services are not intended for individuals under 18.
              We do not knowingly collect personal data from minors. If such
              data is identified, it will be deleted.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-text">
              13. Third-Party Websites
            </h2>
            <p>
              The Site may contain links to external websites. This Policy does
              not govern those sites, and we are not responsible for their data
              handling practices. Users should review third-party privacy
              notices before interacting with such sites.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-text">
              14. Changes to this Policy
            </h2>
            <p>
              We may amend this Policy to align with legal developments or
              business needs. The updated version will be published with a
              revised &quot;Last Updated&quot; date. Continued use of the Site
              constitutes acceptance of the updated Policy.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-text">
              15. Complaints and Grievance Redressal
            </h2>
            <p>
              For complaints, questions, or to exercise data rights, contact
              <a
                href="mailto:team@spicyprivacy.com"
                className="ml-1 text-accent-gold hover:underline"
              >
                team@spicyprivacy.com
              </a>
              . If you remain dissatisfied, you may escalate your complaint to
              the relevant supervisory authority under applicable law.
            </p>
          </div>

          <p>
            <em>Effective Date: 12 November 2025.</em>
          </p>
        </div>

        <div className="rounded-3xl border border-border-color/60 bg-background-card/70 p-8 shadow-sm">
          <p className="text-sm uppercase tracking-[0.3em] text-text-muted">
            Need help?
          </p>
          <h2 className="mt-2 text-3xl font-bold text-text">
            Contact Our Privacy Team
          </h2>
          <p className="mt-4 text-text-muted">
            Prefer email? Reach out any time at
            <a
              href="mailto:team@spicyprivacy.com"
              className="ml-1 text-accent-gold hover:underline"
            >
              team@spicyprivacy.com
            </a>
            . We aim to respond to every request within two business days.
          </p>
          <div className="mt-6 grid gap-4 text-sm text-text">
            <div className="flex items-center justify-between rounded-2xl bg-background-card px-4 py-3">
              <span className="font-medium">General enquiries</span>
              <a
                href="mailto:team@spicyprivacy.com"
                className="font-semibold text-accent-gold hover:underline"
              >
                team@spicyprivacy.com
              </a>
            </div>
            <div className="flex items-center justify-between rounded-2xl bg-background-card px-4 py-3">
              <span className="font-medium">Grievance officer</span>
              <a
                href="mailto:team@spicyprivacy.com"
                className="font-semibold text-accent-gold hover:underline"
              >
                team@spicyprivacy.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
