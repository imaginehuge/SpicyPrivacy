// This component renders the inquiry form, dynamically adjusting based on the user type.
import { useEffect, useRef, useState } from "react";
import { ChevronLeft } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select } from "@/components/ui/select";

// Defines the possible types of users for the inquiry form.
export type UserType = "corporate" | "scholar" | "other";

// Interface for the props of the InquiryForm component.
interface InquiryFormProps {
  userType: UserType;
  onBack: () => void;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

// Maps user types to their respective form titles.
const formTitles: Record<UserType, string> = {
  corporate: "Corporate Inquiry",
  scholar: "Academic Inquiry",
  other: "General Inquiry",
};

export function InquiryForm({ userType, onBack, onSubmit }: InquiryFormProps) {
  // Ref for the Zoho iframe to control its properties.
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  // State to manage the height of the Zoho iframe.
  const [iframeHeight, setIframeHeight] = useState<number>(900); // initial height
  // Zoho form permanent ID.
  const zfPerma = "6R8NQ6NzcBtbgXJUbt7VdYroU9Ye_-tUsi6NfvKloL4";
  // Constructed Zoho form source URL.
  const zohoSrc = `https://forms.zohopublic.in/sarthakgoyal3505gm1/form/ClientDetails/formperma/${zfPerma}?zf_rszfm=1`;

  // Effect hook to handle messages from the Zoho iframe, primarily for resizing.
  useEffect(() => {
    if (userType !== "scholar") return;

    const handler = (event: MessageEvent) => {
      // only process string messages in form "perma|height" or "perma|height|flag"
      try {
        const data = event.data;
        if (typeof data !== "string") return;
        const parts = data.split("|");
        if (parts.length < 2) return;
        const perma = parts[0];
        if (!perma || perma.indexOf(zfPerma) === -1) return;
        const heightNum = parseInt(parts[1], 10);
        if (!Number.isNaN(heightNum) && iframeRef.current) {
          // add a small buffer so nothing gets clipped
          const newH = Math.max(300, heightNum + 15);
          setIframeHeight(newH);
          iframeRef.current.style.height = `${newH}px`;
          if (parts.length === 3)
            iframeRef.current.scrollIntoView({ behavior: "smooth" });
        }
      } catch (e) {
        console.error(e);
      }
    };

    window.addEventListener("message", handler, false);
    return () => window.removeEventListener("message", handler);
  }, [userType, zfPerma]);

  // Render embedded Zoho iframe for 'scholar' user type.
  if (userType === "scholar") {
    return (
      <div className="mx-auto w-full max-w-4xl text-left">
        {/* Back button to return to user type selection */}
        <button
          onClick={onBack}
          className="mb-6 flex items-center text-sm font-medium text-text-muted transition-colors hover:text-text-dark"
        >
          <ChevronLeft className="mr-2 h-4 w-4" />
          Back
        </button>

        <h2 className="mb-3 text-3xl font-bold tracking-tight text-text-dark">
          {formTitles[userType]}
        </h2>
        <p className="mb-6 text-base text-text-muted">
          Embedded contact form. Complete and submit the form below.
        </p>

        {/* Zoho form iframe container */}
        <div className="mx-auto mb-8 w-full rounded-lg bg-background-card p-4 shadow-sm">
          <div
            id={`zf_div_${zfPerma}`}
            className="flex items-center justify-center"
            style={{ width: "100%" }}
          >
            <iframe
              ref={iframeRef}
              title="Contact Us"
              src={zohoSrc}
              style={{
                border: "none",
                width: "100%",
                height: `${iframeHeight}px`,
                transition: "height 0.25s ease",
              }}
              aria-label="Contact Us"
              sandbox="allow-forms allow-scripts allow-same-origin allow-popups"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    );
  }

  // Render internal form fields for 'corporate' and 'other' user types.
  return (
    <div className="mx-auto w-full max-w-xl">
      {/* Back button to return to user type selection */}
      <button
        onClick={onBack}
        className="mb-8 flex items-center text-sm font-medium text-text-muted transition-colors hover:text-text-dark"
      >
        <ChevronLeft className="mr-2 h-4 w-4" />
        Back
      </button>
      <h2 className="text-3xl font-bold tracking-tight text-text-dark">
        {formTitles[userType]}
      </h2>
      <p className="mb-8 mt-3 text-base text-text-muted">
        Please provide some details about your query.
      </p>

      <form onSubmit={onSubmit} className="space-y-6 text-left">
        {/* Conditional fields for 'corporate' user type */}
        {userType === "corporate" && (
          <div className="space-y-6">
            <div>
              <label
                htmlFor="company-name"
                className="block text-sm font-medium text-text-dark"
              >
                Company / Startup / Organization
              </label>
              <Input
                required
                type="text"
                name="company-name"
                id="company-name"
              />
            </div>
            <div>
              <label
                htmlFor="corporate-email"
                className="block text-sm font-medium text-text-dark"
              >
                Work Email
              </label>
              <Input
                required
                type="email"
                name="corporate-email"
                id="corporate-email"
              />
            </div>
            <div>
              <label
                htmlFor="company-size"
                className="block text-sm font-medium text-text-dark"
              >
                Company Size
              </label>
              <Select required name="company-size" id="company-size">
                <option value="">Select an option</option>
                <option value="1-10">1-10 employees</option>
                <option value="11-50">11-50 employees</option>
                <option value="51-200">51-200 employees</option>
                <option value="201-1000">201-1000 employees</option>
                <option value="1000+">1000+ employees</option>
              </Select>
            </div>
          </div>
        )}

        {/* Conditional fields for 'other' user type */}
        {userType === "other" && (
          <div className="space-y-6">
            <div>
              <label
                htmlFor="other-name"
                className="block text-sm font-medium text-text-dark"
              >
                Name
              </label>
              <Input type="text" name="other-name" id="other-name" required />
            </div>
            <div>
              <label
                htmlFor="other-email"
                className="block text-sm font-medium text-text-dark"
              >
                Email
              </label>
              <Input
                type="email"
                name="other-email"
                id="other-email"
                required
              />
            </div>
          </div>
        )}

        {/* Common fields for all non-scholar inquiries */}
        <div>
          <label
            htmlFor="subject"
            className="block text-sm font-medium text-text-dark"
          >
            Subject
          </label>
          <Input type="text" name="subject" id="subject" required />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-text-dark"
          >
            How can we help?
          </label>
          <Textarea required name="message" id="message" rows={4} />
        </div>

        <div>
          <label
            htmlFor="referral-source"
            className="block text-sm font-medium text-text-dark"
          >
            How did you hear about us?
          </label>
          <Select required name="referral-source" id="referral-source">
            <option value="">Select an option</option>
            <option value="search">Search Engine (Google, etc.)</option>
            <option value="social-media">Social Media</option>
            <option value="word-of-mouth">Word of Mouth</option>
            <option value="advertisement">Advertisement</option>
            <option value="other">Other</option>
          </Select>
        </div>

        {/* Submit button */}
        <div className="pt-4 text-center">
          <button
            type="submit"
            className="btn-primary inline-flex w-full justify-center rounded-full px-12 py-3 text-base font-bold transition-transform hover:scale-105 sm:w-auto"
          >
            Send Query
          </button>
        </div>
      </form>
    </div>
  );
}
