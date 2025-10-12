// components/contact/InquiryForm.tsx
import { ChevronLeft } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select } from "@/components/ui/select";

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
              <Select
                required
                name="company-size"
                id="company-size"
              >
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

        {userType === "scholar" && (
          <div className="space-y-6">
            <div>
              <label
                htmlFor="scholar-name"
                className="block text-sm font-medium text-text-dark"
              >
                Name
              </label>
              <Input
                type="text"
                name="scholar-name"
                id="scholar-name"
                required
              />
            </div>
            <div>
              <label
                htmlFor="scholar-role"
                className="block text-sm font-medium text-text-dark"
              >
                Researcher / Scholar / Student
              </label>
              <Input
                type="text"
                name="scholar-role"
                id="scholar-role"
                required
              />
            </div>
            <div>
              <label
                htmlFor="scholar-email"
                className="block text-sm font-medium text-text-dark"
              >
                Email Address
              </label>
              <Input
                type="email"
                name="scholar-email"
                id="scholar-email"
                required
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
              <Input
                type="text"
                name="other-name"
                id="other-name"
                required
              />
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

        <div>
          <label
            htmlFor="subject"
            className="block text-sm font-medium text-text-dark"
          >
            Subject
          </label>
          <Input
            type="text"
            name="subject"
            id="subject"
            required
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-text-dark"
          >
            How can we help?
          </label>
          <Textarea
            required
            name="message"
            id="message"
            rows={4}
          />
        </div>

        <div>
          <label
            htmlFor="referral-source"
            className="block text-sm font-medium text-text-dark"
          >
            How did you hear about us?
          </label>
          <Select
            required
            name="referral-source"
            id="referral-source"
          >
            <option value="">Select an option</option>
            <option value="search">Search Engine (Google, etc.)</option>
            <option value="social-media">Social Media</option>
            <option value="word-of-mouth">Word of Mouth</option>
            <option value="advertisement">Advertisement</option>
            <option value="other">Other</option>
          </Select>
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
