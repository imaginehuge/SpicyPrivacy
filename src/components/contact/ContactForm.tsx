// This component implements a multi-step contact form, guiding users to the appropriate inquiry form based on their type.
"use client";

import { useState } from "react";
import { InquiryForm, UserType } from "./InquiryForm";
import { SubmissionSuccess } from "./SubmissionSuccess";

// Defines the types of users who can submit an inquiry.
const userTypes: { id: UserType; title: string; description: string }[] = [
  {
    id: "corporate",
    title: "Corporate",
    description: "For companies, startups, and organizations.",
  },
  {
    id: "scholar",
    title: "Scholar",
    description: "For researchers, academics, and students.",
  },
  { id: "other", title: "Other", description: "For all other inquiries." },
];

export function ContactForm() {
  // State to manage the current step of the form (1: user type selection, 2: inquiry form).
  const [step, setStep] = useState(1);
  // State to store the selected user type.
  const [userType, setUserType] = useState<UserType | null>(null);
  // State to track if the form has been successfully submitted.
  const [submitted, setSubmitted] = useState(false);

  // Handles the selection of a user type, redirecting corporate users or advancing to the next step.
  const handleSelectUserType = (type: UserType) => {
    if (type === "corporate") {
      // Open Zoho form directly in same window
      window.location.href =
        "https://forms.zohopublic.com/imaginehuge1/form/Contact1/formperma/vNuzFLPIYhNIVzpv3ohQu1Ngo9WMy6qOUnx5JKZxp5M";
      return;
    }
    if (type === "scholar") {
      // Open Zoho form directly in same window
      window.location.href =
        "https://forms.zohopublic.com/imaginehuge1/form/ScholarForm/formperma/OLyOvUgm-RwNOQVVqUvpf49EoqnG-PhvbNVYyoBp6tk";
      return;
    }
    if (type === "other") {
      // Open Zoho form directly in same window
      window.location.href =
        "https://forms.zohopublic.com/imaginehuge1/form/Other/formperma/b8LKdFlS9-d-vayNs3vkHS_s96YLtT2JcS7Dq1wue8Q";
      return;
    }
    setUserType(type);
    setStep(2);
  };

  // Handles navigating back to the user type selection step.
  const handleBack = () => {
    setStep(1);
    setUserType(null);
  };

  // If the form has been submitted, display the success message.
  if (submitted) {
    return <SubmissionSuccess />;
  }

  return (
    <div className="w-full max-w-2xl text-center">
      {/* Step 1: User type selection */}
      {step === 1 && (
        <div>
          <h1 className="text-4xl font-black tracking-tighter sm:text-5xl">
            Reach Out
          </h1>
          <p className="mx-auto mb-12 mt-4 max-w-xl text-lg text-text-muted">
            First, let us know who you are. This helps us tailor our response to
            your needs.
          </p>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {/* Map through userTypes to display selection buttons */}
            {userTypes.map((type) => (
              <button
                key={type.id}
                onClick={() => handleSelectUserType(type.id)}
                className="group flex flex-col items-center justify-center rounded-lg border border-border-color bg-background-card p-8 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                <h3 className="text-2xl font-bold text-text-dark">
                  {type.title}
                </h3>
                <p className="mt-2 text-sm text-text-muted">
                  {type.description}
                </p>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
