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
            Last Updated: 12.11.2025
          </p>
        </div>

        {/* Introduction */}
        <div className="space-y-4">
          <p className="text-text-muted">
            By choosing to use the Site, you are agreeing to abide by all of the
            terms and conditions of these Terms between you and SpicyPrivacy
            (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;).
          </p>
        </div>

        {/* General Terms and Modifications */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">
            1. General Terms and Modifications
          </h2>
          <h3 className="text-xl font-semibold mt-4">1.1. Acceptance</h3>
          <p className="text-text-muted">
            By accessing or using the Site, you acknowledge that you have read,
            understood, and agree to be bound by these Terms. If you do not
            agree to these terms, please do not use this Site.
          </p>
          <h3 className="text-xl font-semibold mt-4">1.2. Modifications</h3>
          <p className="text-text-muted">
            We may change, add, or remove portions of these Terms at any time,
            which shall become effective immediately upon posting. It is your
            responsibility to review these Terms prior to each use of the Site.
            By continuing to use this Site, you agree to any changes.
          </p>
        </div>

        {/* Services and Content */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">2. Services and Content</h2>
          <h3 className="text-xl font-semibold mt-4">
            2.1. For Informational Purposes Only
          </h3>
          <p className="text-text-muted">
            The contents of the Site, including but not limited to articles,
            blog posts, white papers, and guides (the &quot;Content&quot;), are
            intended for your personal, non-commercial, informational use only.
          </p>
          <h3 className="text-xl font-semibold mt-4">
            2.2. No Legal or Professional Advice
          </h3>
          <p className="text-text-muted">
            The Content does not constitute legal, financial, or professional
            advice. It is not a substitute for professional consultation.
            SpicyPrivacy does not represent or endorse the accuracy or
            reliability of any advice, opinion, statement, or other information
            displayed or distributed through the Site. You acknowledge that any
            reliance upon any such Content shall be at your sole risk.
          </p>
          <h3 className="text-xl font-semibold mt-4">
            2.3. Separate Service Agreement
          </h3>
          <p className="text-text-muted">
            All professional consulting services, including but not limited to
            the development of privacy frameworks, consent management, risk
            assessments, and impact assessments, are governed by a separate,
            written Master Services Agreement or Engagement Letter
            (&quot;Service Agreement&quot;). These Terms do not govern the
            delivery of such paid professional services.
          </p>
        </div>

        {/* Intellectual Property Rights */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">
            3. Intellectual Property Rights
          </h2>
          <h3 className="text-xl font-semibold mt-4">3.1. Ownership</h3>
          <p className="text-text-muted">
            All Content published on the Site is protected by copyright and is
            owned or controlled by SpicyPrivacy or the party credited as the
            provider of the Content. You shall abide by all additional copyright
            notices, information, or restrictions contained in any Content
            accessed through the Site.
          </p>
          <h3 className="text-xl font-semibold mt-4">3.2. Limited License</h3>
          <p className="text-text-muted">
            We grant you a non-exclusive, non-transferable, limited permission
            to access and display the Content on this Site for personal,
            non-commercial use only, provided that you maintain all copyright
            and other proprietary notices contained therein.
          </p>
          <h3 className="text-xl font-semibold mt-4">3.3. Restrictions</h3>
          <p className="text-text-muted">
            Except for the limited permission in the preceding paragraph,
            SpicyPrivacy does not grant you any express or implied rights or
            licenses under any patents, trademarks, copyrights, or other
            proprietary or intellectual property rights. You may not mirror any
            of the Content from this Site on another website or in any other
            media. All other use of this Site is prohibited.
          </p>
        </div>

        {/* User Rules of Conduct */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">4. User Rules of Conduct</h2>
          <p className="text-text-muted">
            By using this Site, you agree not to:
          </p>
          <ul className="list-none space-y-2 text-text-muted ml-4">
            <li>
              (i) Post or transmit any material that is unlawful, threatening,
              abusive, defamatory, invasive of privacy, vulgar, obscene, or
              otherwise objectionable.
            </li>
            <li>
              (ii) Engage in any activity that restricts or inhibits any other
              user from using or enjoying the Site, including
              &quot;hacking,&quot; &quot;cracking,&quot; or defacing any portion
              of the Site.
            </li>
            <li>
              (iii) Post or transmit any software or other materials that
              contain viruses, worms, Trojan horses, or other harmful or
              disruptive components.
            </li>
            <li>
              (iv) Use any robot, spider, site search/retrieval application, or
              other manual or automatic device or process to retrieve, index,
              &quot;data mine,&quot; or in any way reproduce or circumvent the
              navigational structure or presentation of the Site.
            </li>
            <li>
              (v) Impersonate another user or entity or forge headers or
              otherwise manipulate identifiers to disguise the origin of any
              content.
            </li>
            <li>
              (vi) Harvest or collect information about Site visitors without
              their express written consent.
            </li>
          </ul>
        </div>

        {/* Privacy Policy */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">5. Privacy Policy</h2>
          <p className="text-text-muted">
            Our data collection and use practices are set forth in our Privacy
            Policy. Please review this policy to understand how we handle your
            information. By using this Site, you agree to the terms of our
            Privacy Policy.
          </p>
        </div>

        {/* Third-Party Links and Resources */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">
            6. Third-Party Links and Resources
          </h2>
          <p className="text-text-muted">
            The Site may contain links to third-party websites, resources, and
            advertisers (&quot;Linked Content&quot;). SpicyPrivacy does not
            control, endorse, sponsor, recommend, or otherwise accept liability
            for any of this Linked Content. We are not responsible for the
            availability of these outside resources or their contents, services,
            or privacy practices.
          </p>
        </div>

        {/* Disclaimer of Warranties */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">7. Disclaimer of Warranties</h2>
          <p className="text-text-muted font-semibold">
            USE OF THIS SITE IS AT YOUR SOLE RISK. ALL MATERIALS, INFORMATION,
            AND CONTENT ARE PROVIDED &quot;AS IS,&quot; WITH NO WARRANTIES OR
            GUARANTEES WHATSOEVER.
          </p>
          <p className="text-text-muted">
            SpicyPrivacy EXPRESSLY DISCLAIMS TO THE FULLEST EXTENT PERMITTED BY
            LAW ALL EXPRESS, IMPLIED, STATUTORY, AND OTHER WARRANTIES,
            GUARANTEES, OR REPRESENTATIONS, INCLUDING, WITHOUT LIMITATION, THE
            WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND
            NON-INFRINGEMENT OF PROPRIETARY AND INTELLECTUAL PROPERTY RIGHTS.
          </p>
          <p className="text-text-muted">
            WITHOUT LIMITATION, SpicyPrivacy MAKES NO WARRANTY OR GUARANTEE THAT
            THIS SITE WILL BE UNINTERRUPTED, TIMELY, SECURE, OR ERROR-FREE, OR
            THAT THE CONTENT IS ACCURATE OR RELIABLE.
          </p>
        </div>

        {/* Limitation of Liability */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">8. Limitation of Liability</h2>
          <p className="text-text-muted font-semibold">
            TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT WILL
            SpicyPrivacy BE LIABLE TO ANY PARTY FOR ANY DIRECT, INDIRECT,
            INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES OF ANY TYPE
            WHATSOEVER RELATED TO OR ARISING FROM THIS SITE OR ANY USE OF THIS
            SITE, OR OF ANY SITE OR RESOURCE LINKED TO OR ACCESSED THROUGH THIS
            SITE.
          </p>
          <p className="text-text-muted">
            THIS EXCLUSION INCLUDES, WITHOUT LIMITATION, ANY LOST PROFITS,
            BUSINESS INTERRUPTION, LOST SAVINGS, OR LOSS OF DATA, EVEN IF
            SpicyPrivacy IS EXPRESSLY ADVISED OF THE POSSIBILITY OF SUCH
            DAMAGES. THIS EXCLUSION AND WAIVER OF LIABILITY APPLIES TO ALL
            CAUSES OF ACTION, WHETHER BASED ON CONTRACT, WARRANTY, TORT, OR ANY
            OTHER LEGAL THEORIES.
          </p>
        </div>

        {/* Confidential Information */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">9. Confidential Information</h2>
          <p className="text-text-muted">
            Please note that any information or material sent to SpicyPrivacy
            through this Site (such as via a contact form) will be deemed NOT to
            be confidential, unless it is sent pursuant to a fully executed
            Service Agreement and/or Non-Disclosure Agreement (NDA). By sending
            SpicyPrivacy any information or material (absent such an agreement),
            you grant SpicyPrivacy an unrestricted, irrevocable license to use,
            reproduce, and distribute those materials or information.
          </p>
        </div>

        {/* Governing Law and Jurisdiction */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">
            10. Governing Law and Jurisdiction
          </h2>
          <p className="text-text-muted">
            These Terms shall be governed by and construed in accordance with
            the laws of India, without regard to its conflict of law provisions.
            You agree to submit to the exclusive jurisdiction of the courts
            located in Lucknow, Uttar Pradesh to resolve any legal matter
            arising from these Terms.
          </p>
        </div>

        {/* Contact Information */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">11. Contact Information</h2>
          <p className="text-text-muted">
            If you have any questions about these Terms, please contact us at:{" "}
            <a
              href="mailto:legal@spicyprivacy.com"
              className="text-accent-gold hover:underline"
            >
              legal@spicyprivacy.com
            </a>{" "}
            or{" "}
            <a
              href="mailto:contact@spicyprivacy.com"
              className="text-accent-gold hover:underline"
            >
              contact@spicyprivacy.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
