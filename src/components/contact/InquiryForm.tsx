// components/contact/InquiryForm.tsx
import { ChevronLeft } from "lucide-react";

export type UserType = "corporate" | "scholar" | "other";

interface InquiryFormProps {
  userType: UserType;
  onBack: () => void;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

const formTitles: Record<UserType, string> = {
  corporate: "Corporate Inquiry",
  scholar: "Academic Inquiry",
  other: "General Inquiry",
};

export function InquiryForm({ userType, onBack, onSubmit }: InquiryFormProps) {
  return (
    <div className="mx-auto w-full max-w-xl">
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
        {userType === "corporate" && (
          <div className="space-y-6">
            <div>
              <label
                htmlFor="company-name"
                className="block text-sm font-medium text-text-dark"
              >
                Company / Startup / Organization
              </label>
              <input
                required
                type="text"
                name="company-name"
                id="company-name"
                className="mt-1 block w-full rounded-md border-border-color shadow-sm focus:border-brand-secondary focus:ring-brand-secondary sm:text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="corporate-email"
                className="block text-sm font-medium text-text-dark"
              >
                Work Email
              </label>
              <input
                required
                type="email"
                name="corporate-email"
                id="corporate-email"
                className="mt-1 block w-full rounded-md border-border-color shadow-sm focus:border-brand-secondary focus:ring-brand-secondary sm:text-sm"
              />
            </div>
          </div>
        )}

        {userType === "scholar" && (
          <div className="space-y-6">
            <div>
              <label
                htmlFor="scholar-name"
                className="block text-sm font-medium text-text-dark"
              >
                Name
              </label>
              <input
                type="text"
                name="scholar-name"
                id="scholar-name"
                required
                className="mt-1 block w-full rounded-md border-border-color shadow-sm focus:border-brand-secondary focus:ring-brand-secondary sm:text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="scholar-role"
                className="block text-sm font-medium text-text-dark"
              >
                Researcher / Scholar / Student
              </label>
              <input
                type="text"
                name="scholar-role"
                id="scholar-role"
                required
                className="mt-1 block w-full rounded-md border-border-color shadow-sm focus:border-brand-secondary focus:ring-brand-secondary sm:text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="scholar-email"
                className="block text-sm font-medium text-text-dark"
              >
                Email Address
              </label>
              <input
                type="email"
                name="scholar-email"
                id="scholar-email"
                required
                className="mt-1 block w-full rounded-md border-border-color shadow-sm focus:border-brand-secondary focus:ring-brand-secondary sm:text-sm"
              />
            </div>
          </div>
        )}

        {userType === "other" && (
          <div className="space-y-6">
            <div>
              <label
                htmlFor="other-name"
                className="block text-sm font-medium text-text-dark"
              >
                Name
              </label>
              <input
                type="text"
                name="other-name"
                id="other-name"
                required
                className="mt-1 block w-full rounded-md border-border-color shadow-sm focus:border-brand-secondary focus:ring-brand-secondary sm:text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="other-email"
                className="block text-sm font-medium text-text-dark"
              >
                Email
              </label>
              <input
                type="email"
                name="other-email"
                id="other-email"
                required
                className="mt-1 block w-full rounded-md border-border-color shadow-sm focus:border-brand-secondary focus:ring-brand-secondary sm:text-sm"
              />
            </div>
          </div>
        )}

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-text-dark"
          >
            How can we help?
          </label>
          <textarea
            required
            name="message"
            id="message"
            rows={4}
            className="mt-1 block w-full rounded-md border-border-color shadow-sm focus:border-brand-secondary focus:ring-brand-secondary sm:text-sm"
          />
        </div>

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
