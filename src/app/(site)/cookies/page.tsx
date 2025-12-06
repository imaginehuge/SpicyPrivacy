// This component renders the Cookie Policy page for SpicyPrivacy.
import { Metadata } from "next";

// Metadata for the Cookie Policy page, used for SEO and browser tab titles.
export const metadata: Metadata = {
  title: "SpicyPrivacy - Cookie Policy",
  description: "Learn about how we use cookies on our website.",
};

export default function CookiePolicyPage() {
  return (
    <section className="container mx-auto min-h-screen px-4 py-16 sm:px-6 lg:py-24 lg:px-8">
      <div className="mx-auto max-w-3xl space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-black tracking-tighter text-text sm:text-5xl">
            Cookie Policy
          </h1>
          <p className="text-lg text-text-muted">
            Last Updated: November 18, 2025
          </p>
        </div>

        <div className="space-y-10 text-text-muted">
          <div className="space-y-4">
            <p>
              This Cookie Policy explains how SpicyPrivacy (&quot;we&quot;,
              &quot;us&quot;, or &quot;our&quot;) uses cookies and similar
              tracking technologies when you visit our website,
              www.spicyprivacy.com (the &quot;Site&quot;). It covers what these
              technologies are, why we use them, and your rights to control our
              use of them.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-text">
              1. What is a Cookie?
            </h2>
            <p>
              Cookies are small text files that a website asks your browser to
              store on your device (computer, smartphone, or tablet) when you
              visit the site. These files allow the website to remember your
              device and preferences—such as login data or language
              selection—over a period of time.
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong>First-party cookies</strong> are cookies set by the
                domain you are visiting (in this case, cookies set by
                SpicyPrivacy).
              </li>
              <li>
                <strong>Third-party cookies</strong> are cookies set by domains
                other than the one you are visiting. These are typically used
                for cross-site tracking, retargeting, and ad-serving functions.
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-text">
              2. Purpose of Using Cookies
            </h2>
            <p>
              We use cookies and other tracking technologies for specific,
              limited purposes to ensure our Site functions correctly and to
              enhance your experience:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong>Essential Operations:</strong> Enable you to navigate
                the Site and use secure features, such as booking a
                consultation.
              </li>
              <li>
                <strong>Security:</strong> Detect and prevent fraudulent
                activity and protect your data.
              </li>
              <li>
                <strong>Performance &amp; Analytics:</strong> Help us understand
                how visitors interact with the Site so we can improve content
                and structure.
              </li>
              <li>
                <strong>Preference Management:</strong> Remember your settings,
                including consent preferences.
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-text">
              3. Types of Cookies We Use
            </h2>
            <p>We categorise the cookies used on the Site as follows:</p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong>Strictly Necessary (Essential) Cookies:</strong>{" "}
                Required for the operation of our Site, such as logging into
                secure areas or using booking forms. These cannot be switched
                off in our systems.
              </li>
              <li>
                <strong>Analytical/Performance Cookies:</strong> Allow us to
                recognise and count visitors and understand how they move around
                the Site so we can improve it.
              </li>
              <li>
                <strong>Functionality Cookies:</strong> Used to recognise you
                when you return to the Site so we can personalise content and
                remember your preferences.
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-text">4. Cookie List</h2>
            <p>
              For transparency, you can view a detailed list of the specific
              cookies we use, their providers, and their duration within our
              Cookie Preference Center. Access it via the cookie icon or the
              &quot;Cookie Settings&quot; link located at the bottom left of
              every page.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-text">
              5. How Can I Control My Cookie Preferences?
            </h2>
            <p>
              You have the right to decide whether to accept or reject cookies.
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong>Cookie Preference Center:</strong> Set your preferences
                on our Site to choose which categories of cookies you accept or
                reject (apart from &quot;Strictly Necessary&quot; cookies that
                keep the Site functioning).
              </li>
              <li>
                <strong>Browser Controls:</strong> Adjust your browser settings
                to accept or refuse cookies. Rejecting cookies may restrict
                access to certain Site features or areas.
              </li>
            </ul>
            <p>
              For any queries regarding our use of cookies or this policy,
              contact our privacy team at
              <a
                href="mailto:privacy@spicyprivacy.com"
                className="ml-1 text-accent-gold hover:underline"
              >
                privacy@spicyprivacy.com
              </a>
              .
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-text">
              6. Review and Update
            </h2>
            <p>
              We may update this Cookie Policy from time to time to reflect
              changes to the cookies we use or for other operational, legal, or
              regulatory reasons. Revisit this page regularly to stay informed.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-text">
              7. Booking Terms and Conditions
            </h2>
            <p>
              Consultations booked through the Site are professional sessions.
              Any advice shared during a meeting is informational and does not
              constitute a formal legal opinion unless a separate Service
              Agreement is executed.
            </p>
            <p>
              <strong>Confidentiality:</strong> Information shared during the
              consultation is treated as confidential.
            </p>
            <p>
              <strong>Cancellation Policy:</strong> If you need to cancel or
              reschedule your appointment, please provide at least 24 hours
              notice via the confirmation email link or by contacting us
              directly.
            </p>
            <p>
              <strong>Consent:</strong> By booking, you acknowledge the Booking
              Terms and Conditions and Privacy Policy. You consent to
              SpicyPrivacy using your name and contact details to manage the
              appointment, send reminders, and conduct the consultation. You may
              exercise data rights, including deletion requests, by emailing
              <a
                href="mailto:info@spicyprivacy.com"
                className="ml-1 text-accent-gold hover:underline"
              >
                info@spicyprivacy.com
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
