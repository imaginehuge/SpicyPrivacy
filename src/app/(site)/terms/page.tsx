// This component renders the Terms of Service page for SpicyPrivacy.
import { Metadata } from "next";

// Metadata for the Terms of Service page, used for SEO and browser tab titles.
export const metadata: Metadata = {
  title: "SpicyPrivacy - Terms of Service",
  description: "Read our terms of service.",
};

export default function TermsPage() {
  return (
    <section className="container mx-auto min-h-screen px-4 py-16 sm:px-6 lg:py-24 lg:px-8">
      <div className="mx-auto max-w-3xl space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-black tracking-tighter text-text sm:text-5xl">
            Terms of Service
          </h1>
          <p className="text-lg text-text-muted">
            Last Updated: 12 November 2025
          </p>
        </div>

        <div className="space-y-10 text-text-muted">
          <div className="space-y-4">
            <p>
              By choosing to use this website (the &quot;Site&quot;), you are
              agreeing to abide by all of the terms and conditions (the
              &quot;Terms&quot;) set out between you and SpicyPrivacy, operated
              by Imagine Huge Private Limited (&quot;we&quot;, &quot;us&quot;,
              or &quot;our&quot;). If you do not agree to these Terms, please do
              not use the Site.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-text">
              1. General Terms and Modifications
            </h2>
            <h3 className="text-xl font-semibold text-text">1.1 Acceptance</h3>
            <p>
              By accessing or using the Site, you acknowledge that you have
              read, understood, and agree to be bound by these Terms.
            </p>
            <h3 className="text-xl font-semibold text-text">
              1.2 Modifications
            </h3>
            <p>
              We may change, add, or remove portions of these Terms at any time.
              Changes become effective immediately upon posting. It is your
              responsibility to review these Terms before each use of the Site.
              Continued use of the Site constitutes acceptance of the updated
              Terms.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-text">
              2. Services and Content
            </h2>
            <h3 className="text-xl font-semibold text-text">
              2.1 Informational Purpose Only
            </h3>
            <p>
              The Site may include articles, research content, insights,
              templates, papers, commentary, and other materials (collectively,
              the &quot;Content&quot;) made available for personal and
              informational use.
            </p>
            <h3 className="text-xl font-semibold text-text">
              2.2 No Legal or Professional Advice
            </h3>
            <p>
              The Content does not constitute legal, financial, or professional
              advice. Reliance on any Content is at your sole risk.
            </p>
            <h3 className="text-xl font-semibold text-text">
              2.3 Separate Service Agreement
            </h3>
            <p>
              Professional consulting, advisory services, customised frameworks,
              assessments, or any paid engagement are governed exclusively by a
              separate written Service Agreement or Engagement Letter. These
              Terms do not apply to those services.
            </p>
            <h3 className="text-xl font-semibold text-text">
              2.4 Additional Resources
            </h3>
            <p>
              Any digital products, templates, downloadable items, or community
              knowledge sessions offered on the Site fall within these Terms
              unless governed by a separate policy.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-text">3. Eligibility</h2>
            <p>Use of the Site is restricted to:</p>
            <ul className="list-disc space-y-2 pl-6">
              <li>individuals who are 18 years of age or older;</li>
              <li>
                minors who access free learning materials with parental or
                guardian consent.
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-text">
              4. User Rules of Conduct
            </h2>
            <p>By using this Site, you agree that you will not:</p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                post or transmit unlawful, defamatory, invasive, obscene, or
                otherwise objectionable material;
              </li>
              <li>interfere with or inhibit another user’s use of the Site;</li>
              <li>upload or transmit viruses, malware, or harmful code;</li>
              <li>
                use automated tools to access, copy, index, or scrape the Site;
              </li>
              <li>impersonate another person or misrepresent your identity;</li>
              <li>
                collect information about visitors without their express
                consent;
              </li>
              <li>
                misuse, alter, reproduce, or redistribute Site Content without
                written permission.
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-text">
              5. Intellectual Property Rights
            </h2>
            <h3 className="text-xl font-semibold text-text">
              5.1 Ownership of Website Content
            </h3>
            <p>
              All Content published on the Site is owned by SpicyPrivacy or the
              respective content provider and is protected by applicable
              copyright and intellectual property laws.
            </p>
            <h3 className="text-xl font-semibold text-text">
              5.2 Limited License
            </h3>
            <p>
              We grant you a non-exclusive, non-transferable licence to access
              and display the Content for personal, non-commercial use only. All
              proprietary notices must be retained.
            </p>
            <h3 className="text-xl font-semibold text-text">
              5.3 Restrictions
            </h3>
            <p>
              Other than the limited licence above, no rights are granted. You
              may not copy, mirror, reproduce, modify, distribute, or
              commercially exploit the Content without our written consent.
            </p>
            <h3 className="text-xl font-semibold text-text">
              5.4 Joint Intellectual Property
            </h3>
            <p>
              Any documents, assessments, or outputs produced under a paid
              engagement are treated as joint intellectual property of
              SpicyPrivacy and the client, subject to the relevant Service
              Agreement.
            </p>
            <h3 className="text-xl font-semibold text-text">
              5.5 Joint IP for Research
            </h3>
            <p>
              Research publications or papers authored jointly with contributors
              constitute joint intellectual property of SpicyPrivacy and the
              author(s). Commercial use requires mutual agreement.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-text">
              6. Confidential Information
            </h2>
            <p>
              Information submitted through the Site (such as via forms or
              emails) is not considered confidential unless submitted pursuant
              to a valid Service Agreement or a Non-Disclosure Agreement.
            </p>
            <p>
              Absent such an agreement, you grant SpicyPrivacy an unrestricted
              licence to use, reproduce, and distribute such submissions.
              Information exchanged during consulting interactions, early-stage
              discussions, advisory calls, or community sessions under an active
              engagement is subject to mutual confidentiality obligations under
              the relevant contract.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-text">
              7. Payments and Refunds
            </h2>
            <p>
              Any fee-based service, subscription, or paid offering—including
              refunds, cancellations, and service suspension terms—is governed
              exclusively by the applicable Service Agreement.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-text">
              8. Disclaimer of Warranties
            </h2>
            <p className="font-semibold text-text">
              USE OF THIS SITE IS AT YOUR SOLE RISK. ALL CONTENT IS PROVIDED
              &quot;AS IS,&quot; WITHOUT WARRANTIES OF ANY KIND.
            </p>
            <p>
              To the fullest extent permitted by law, we disclaim all express,
              implied, statutory, or other warranties, including:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>merchantability;</li>
              <li>fitness for a particular purpose;</li>
              <li>accuracy, reliability, or completeness of Content;</li>
              <li>non-infringement;</li>
              <li>uninterrupted or error-free access to the Site.</li>
            </ul>
            <p>
              We do not guarantee outcomes, compliance results, or success from
              using any Content on the Site.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-text">
              9. Limitation of Liability
            </h2>
            <p>
              To the fullest extent permitted by law, SpicyPrivacy shall not be
              liable for any direct, indirect, incidental, special, exemplary,
              punitive, or consequential damages of any kind arising from:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>use or inability to use the Site;</li>
              <li>reliance on Site Content;</li>
              <li>loss of data, profits, or business;</li>
              <li>any security breach or system failure.</li>
            </ul>
            <p>
              Liability for direct damages, if any, is limited to the amount
              paid (if any) for access to the specific service giving rise to
              the claim.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-text">
              10. Suspension or Restriction of Access
            </h2>
            <p>We may suspend or restrict Site access at our discretion if:</p>
            <ul className="list-disc space-y-2 pl-6">
              <li>a user violates these Terms;</li>
              <li>unlawful or harmful activity is detected;</li>
              <li>technical or security concerns arise.</li>
            </ul>
            <p>
              Suspension or termination for paid services is governed by its own
              separate agreement.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-text">
              11. Governing Law and Jurisdiction
            </h2>
            <p>
              These Terms are governed by the laws of India. Any dispute shall
              first be submitted to arbitration seated in Lucknow, Uttar
              Pradesh. If arbitration does not resolve the matter, the courts in
              Lucknow, Uttar Pradesh shall have exclusive jurisdiction.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-text">
              12. Contact Information
            </h2>
            <p>
              For queries related to these Terms, email
              <a
                href="mailto:team@spicyprivacy.com"
                className="ml-1 text-accent-gold hover:underline"
              >
                team@spicyprivacy.com
              </a>
              .
            </p>
            <p>Designation: Grievance Officer, SpicyPrivacy.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-text">13. Modifications</h2>
            <p>
              We may revise these Terms at any time. Updated Terms will be
              posted with a revised effective date. Continued use of the Site
              constitutes acceptance of the modified Terms.
            </p>
          </div>
        </div>

        <div className="rounded-3xl border border-border-color/60 bg-background-card/70 p-8 shadow-sm">
          <p className="text-sm uppercase tracking-[0.3em] text-text-muted">
            Need help?
          </p>
          <h2 className="mt-2 text-3xl font-bold text-text">
            Contact Our Legal Team
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
