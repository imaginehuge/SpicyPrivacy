// This component renders the Cookie Policy page for SpicyPrivacy.
import { Metadata } from "next";

// Metadata for the Cookie Policy page, used for SEO and browser tab titles.
export const metadata: Metadata = {
  title: "SpicyPrivacy - Cookie Policy",
  description: "Learn about how we use cookies on our website.",
};

export default function CookiePolicyPage() {
  return (
    <section className="container mx-auto px-4 py-16 sm:px-6 lg:py-24 lg:px-8">
      <div className="mx-auto max-w-3xl space-y-8">
        {/* Page title and last updated date */}
        <div className="text-center">
          <h1 className="text-4xl font-black tracking-tighter sm:text-5xl">
            Cookie Policy
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-text-muted">
            Last Updated: November 18, 2025
          </p>
        </div>

        {/* Introduction */}
        <div className="space-y-4">
          <p className="text-text-muted">
            This Cookie Policy explains how SpicyPrivacy (&quot;we,&quot;
            &quot;us,&quot; or &quot;our&quot;) uses cookies and similar
            tracking technologies when you visit our website,
            www.spicyprivacy.com (the &quot;Site&quot;). It explains what these
            technologies are, why we use them, and your rights to control our
            use of them.
          </p>
        </div>

        {/* What is a Cookie */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">1. What is a Cookie?</h2>
          <p className="text-text-muted">
            Cookies are small text files that a website asks your browser to
            store on your device (computer, smartphone, or tablet) when you
            visit the website. These files allow the website to
            &quot;remember&quot; your device and your preferences (such as login
            data or language selection) over a period of time.
          </p>
          <ul className="list-disc list-inside space-y-2 text-text-muted ml-4">
            <li>
              <strong>First-party cookies</strong> are cookies set by the domain
              you are visiting (in this case, cookies set by SpicyPrivacy).
            </li>
            <li>
              <strong>Third-party cookies</strong> are cookies set by domains
              other than the one you are visiting. These are typically used for
              cross-site tracking, retargeting, and ad-serving functions.
            </li>
          </ul>
        </div>

        {/* Purpose of Using Cookies */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">2. Purpose of Using Cookies</h2>
          <p className="text-text-muted">
            We use cookies and other tracking technologies for specific, limited
            purposes to ensure our Site functions correctly and to improve your
            user experience. These purposes include:
          </p>
          <ul className="list-disc list-inside space-y-2 text-text-muted ml-4">
            <li>
              <strong>Essential Operations:</strong> To enable you to navigate
              the Site and use its features, such as accessing secure areas
              (e.g., booking a consultation).
            </li>
            <li>
              <strong>Security:</strong> To detect and prevent fraudulent
              activity and protect your data.
            </li>
            <li>
              <strong>Performance &amp; Analytics:</strong> To help us
              understand how visitors interact with our Site (e.g., which pages
              are visited most often) so we can improve our content and
              structure.
            </li>
            <li>
              <strong>Preference Management:</strong> To remember your settings,
              such as your consent preferences regarding these very cookies.
            </li>
          </ul>
        </div>

        {/* Types of Cookies We Use */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">3. Types of Cookies We Use</h2>
          <p className="text-text-muted">
            We categorize the cookies used on the SpicyPrivacy Site as follows:
          </p>
          <ul className="list-disc list-inside space-y-2 text-text-muted ml-4">
            <li>
              <strong>Strictly Necessary (Essential) Cookies:</strong> These are
              required for the operation of our Site. They include, for example,
              cookies that enable you to log into secure areas of our website or
              use the booking forms. These cannot be switched off in our
              systems.
            </li>
            <li>
              <strong>Analytical/Performance Cookies:</strong> These allow us to
              recognize and count the number of visitors and see how visitors
              move around our website when they are using it. This helps us
              improve the way our website works.
            </li>
            <li>
              <strong>Functionality Cookies:</strong> These are used to
              recognize you when you return to our website. This enables us to
              personalize our content for you and remember your preferences.
            </li>
          </ul>
        </div>

        {/* Cookie List */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">4. Cookie List</h2>
          <p className="text-text-muted">
            We believe in transparency. You can view a detailed list of the
            specific cookies we use, their providers, and their duration within
            our Cookie Preference Center, which can be accessed by clicking the
            cookie icon or &quot;Cookie Settings&quot; link located at the
            bottom left of all web pages.
          </p>
        </div>

        {/* How Can I Control My Cookie Preferences */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">
            5. How Can I Control My Cookie Preferences?
          </h2>
          <p className="text-text-muted">
            You have the right to decide whether to accept or reject cookies.
          </p>
          <ul className="list-disc list-inside space-y-2 text-text-muted ml-4">
            <li>
              <strong>Cookie Preference Center:</strong> You can exercise your
              cookie rights by setting your preferences in the Cookie Preference
              Center on our Site. You can select which categories of cookies you
              wish to accept or reject (apart from &quot;Strictly
              Necessary&quot; cookies, which are required for the Site to
              function).
            </li>
            <li>
              <strong>Browser Controls:</strong> You can also set or amend your
              web browser controls to accept or refuse cookies. If you choose to
              reject cookies via your browser, you may still use our website,
              though your access to some functionality and areas of our website
              may be restricted.
            </li>
          </ul>
          <p className="text-text-muted">
            For any queries regarding our use of cookies or this policy, please
            reach out to our privacy team at:{" "}
            <a
              href="mailto:privacy@spicyprivacy.com"
              className="text-accent-gold hover:underline"
            >
              privacy@spicyprivacy.com
            </a>
          </p>
        </div>

        {/* Review and Update */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">6. Review and Update</h2>
          <p className="text-text-muted">
            We may update this Cookie Policy from time to time in order to
            reflect, for example, changes to the cookies we use or for other
            operational, legal, or regulatory reasons. Please re-visit this
            Cookie Policy regularly to stay informed about our use of cookies
            and related technologies.
          </p>
        </div>
      </div>
    </section>
  );
}
