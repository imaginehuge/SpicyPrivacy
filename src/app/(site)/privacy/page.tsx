// This component renders the Privacy Policy page for SpicyPrivacy.
import { Metadata } from "next";

// Metadata for the Privacy Policy page, used for SEO and browser tab titles.
export const metadata: Metadata = {
  title: "SpicyPrivacy - Privacy Policy",
  description: "Read our privacy policy.",
};

export default function PrivacyPage() {
  return (
    <section className="container mx-auto px-4 py-16 sm:px-6 lg:py-24 lg:px-8">
      <div className="mx-auto max-w-3xl space-y-8">
        {/* Page title and last updated date */}
        <div className="text-center">
          <h1 className="text-4xl font-black tracking-tighter sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-text-muted">
            Last Updated: 12.11.2025
          </p>
        </div>

        {/* Introduction section */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">1. Introduction</h2>
          <p className="text-text-muted">
            Welcome to SpicyPrivacy (&quot;we,&quot; &quot;us,&quot; or
            &quot;our&quot;). We provide expert guidance and comprehensive
            solutions to help you navigate the complexities of AI and data
            privacy regulations.
          </p>
          <p className="text-text-muted">
            This Privacy Policy explains how we collect, use, disclose, and
            safeguard your information when you visit our website,
            SpicyPrivacy.com (the &quot;Site&quot;) and engage with our
            services. We are committed to protecting your personal data and
            respecting your privacy.
          </p>
          <p className="text-text-muted">
            Please read this policy carefully. If you do not agree with the
            terms of this Privacy Policy, please do not access the Site.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold">2. Information We Collect</h2>
          <p className="text-text-muted">
            We may collect information about you in a variety of ways. The
            information we may collect on the Site includes:
          </p>
          <h3 className="text-xl font-semibold mt-4">A. Personal Data</h3>
          <p className="text-text-muted">
            Personally identifiable information, such as your name, email
            address, phone number, job title, and company name, that you
            voluntarily give to us when you:
          </p>
          <ul className="list-decimal list-inside space-y-2 text-text-muted ml-4">
            <li>
              Fill out a &quot;Contact Us&quot; or consultation request form.
            </li>
            <li>Subscribe to our newsletter or blog.</li>
            <li>Download resources (like white papers or guides).</li>
            <li>Otherwise correspond with us.</li>
          </ul>
          <h3 className="text-xl font-semibold mt-4">B. Usage Data</h3>
          <p className="text-text-muted">
            Information our servers automatically collect when you access the
            Site, such as your IP address, browser type, operating system,
            access times, and the pages you have viewed directly before and
            after accessing the Site.
          </p>
          <h3 className="text-xl font-semibold mt-4">
            C. Cookies and Tracking Technologies
          </h3>
          <p className="text-text-muted">
            We may use cookies, web beacons, and other tracking technologies on
            the Site to help customize the Site and improve your experience.
            When you access the Site, your personal information is not collected
            through the use of tracking technology. Most browsers are set to
            accept cookies by default. You can remove or reject cookies, but be
            aware that such action could affect the availability and
            functionality of the Site.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold">3. How We Use Your Information</h2>
          <p className="text-text-muted">
            Having accurate information about you permits us to provide you with
            a smooth, efficient, and customized experience. Specifically, we may
            use information collected about you to:
          </p>
          <ul className="list-decimal list-inside space-y-2 text-text-muted ml-4">
            <li>Respond to your inquiries and consultation requests.</li>
            <li>
              Provide our Services and fulfill our contractual obligations.
            </li>
            <li>
              Send you our newsletter, marketing materials, and other
              information about our services, provided you have opted-in to
              receive such communications.
            </li>
            <li>
              Monitor and analyze usage and trends to improve the Site and our
              service offerings.
            </li>
            <li>Maintain the security and integrity of our Site.</li>
            <li>Comply with legal and regulatory obligations.</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold">4. Legal Basis for Processing</h2>
          <p className="text-text-muted">
            We will only process your personal data when we have a valid legal
            basis to do so. This may include:
          </p>
          <ul className="list-decimal list-inside space-y-2 text-text-muted ml-4">
            <li>
              <strong>Consent:</strong> You have given us clear consent to
              process your personal data for a specific purpose (e.g.,
              subscribing to our newsletter).
            </li>
            <li>
              <strong>Contract:</strong> Processing is necessary for a contract
              we have with you, or because you have asked us to take specific
              steps before entering into a contract (e.g., providing a quote for
              services).
            </li>
            <li>
              <strong>Legitimate Interests:</strong> Processing is necessary for
              our legitimate interests (e.g., to improve our services and for
              administrative purposes), provided those interests are not
              overridden by your rights.
            </li>
            <li>
              <strong>Legal Obligation:</strong> Processing is necessary for us
              to comply with the law.
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold">
            5. Disclosure of Your Information
          </h2>
          <p className="text-text-muted">
            We do not sell your personal information. We may share information
            we have collected about you in certain situations:
          </p>
          <ul className="list-decimal list-inside space-y-2 text-text-muted ml-4">
            <li>
              <strong>By Law or to Protect Rights:</strong> If we believe the
              release of information about you is necessary to respond to legal
              process, to investigate or remedy potential violations of our
              policies, or to protect the rights, property, and safety of
              others.
            </li>
            <li>
              <strong>Third-Party Service Providers:</strong> With vendors,
              consultants, and other third-party service providers who perform
              services for us (e.g., website hosting, email delivery, analytics)
              and require access to such information to do that work. They are
              obligated to protect your data and use it only for the purposes
              for which it was disclosed.
            </li>
            <li>
              <strong>Business Transfers:</strong> In connection with any
              merger, sale of company assets, financing, or acquisition of all
              or a portion of our business by another company.
            </li>
            <li>
              <strong>With Your Consent:</strong> We may disclose your personal
              information for any other purpose with your consent.
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold">6. Data Security</h2>
          <p className="text-text-muted">
            We use administrative, technical, and physical security measures to
            help protect your personal information. While we have taken
            reasonable steps to secure the personal information you provide to
            us, please be aware that despite our efforts, no security measures
            are perfect or impenetrable, and no method of data transmission can
            be guaranteed against any interception or other type of misuse.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold">7. Data Retention</h2>
          <p className="text-text-muted">
            We will only retain your personal data for as long as is necessary
            to fulfill the purposes for which it was collected, including for
            the purposes of satisfying any legal, accounting, or reporting
            requirements.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold">8. Your Data Protection Rights</h2>
          <p className="text-text-muted">
            Depending on your jurisdiction (e.g., India under the DPDPA, Europe
            under the GDPR), you may have specific rights regarding your
            personal data. These rights may include:
          </p>
          <ul className="list-decimal list-inside space-y-2 text-text-muted ml-4">
            <li>
              <strong>The right to access:</strong> You have the right to
              request copies of your personal data.
            </li>
            <li>
              <strong>The right to rectification:</strong> You have the right to
              request that we correct any information you believe is inaccurate
              or complete information you believe is incomplete.
            </li>
            <li>
              <strong>The right to erasure:</strong> You have the right to
              request that we erase your personal data, under certain
              conditions.
            </li>
            <li>
              <strong>The right to withdraw consent:</strong> You have the right
              to withdraw your consent at any time where we relied on your
              consent to process your information.
            </li>
            <li>
              <strong>The right to lodge a complaint:</strong> You have the
              right to lodge a complaint with a supervisory authority.
            </li>
          </ul>
          <p className="text-text-muted">
            To exercise any of these rights, please contact us using the details
            below.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold">9. Third-Party Websites</h2>
          <p className="text-text-muted">
            The Site may contain links to third-party websites. This Privacy
            Policy does not apply to those third-party sites. We are not
            responsible for the privacy and data collection practices of such
            sites.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold">10. Children&apos;s Privacy</h2>
          <p className="text-text-muted">
            Our Site is not intended for use by children under the age of 18. We
            do not knowingly collect personal information from children under
            18.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold">
            11. Changes to This Privacy Policy
          </h2>
          <p className="text-text-muted">
            We may update this Privacy Policy from time to time. The updated
            version will be indicated by a &quot;Last Updated&quot; date. We
            encourage you to review this Privacy Policy frequently to be
            informed of how we are protecting your information.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold">12. Contact Us</h2>
          <p className="text-text-muted">
            If you have questions or comments about this Privacy Policy, please
            contact us at:{" "}
            <a
              href="mailto:privacy@spicyprivacy.com"
              className="text-accent-gold hover:underline"
            >
              privacy@spicyprivacy.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
