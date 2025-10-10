// components/contact/ContactForm.tsx
"use client";

import { useState } from "react";
import { InquiryForm, UserType } from "./InquiryForm";
import { SubmissionSuccess } from "./SubmissionSuccess";

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
  const [step, setStep] = useState(1);
  const [userType, setUserType] = useState<UserType | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSelectUserType = (type: UserType) => {
    setUserType(type);
    setStep(2);
  };

  const handleBack = () => {
    setStep(1);
    setUserType(null);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Here you would typically handle form submission, e.g., send data to an API
    console.log("Form submitted");
    setSubmitted(true);
  };

  if (submitted) {
    return <SubmissionSuccess />;
  }

  return (
    <div className="w-full max-w-2xl text-center">
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

      {step === 2 && userType && (
        <InquiryForm
          userType={userType}
          onBack={handleBack}
          onSubmit={handleSubmit}
        />
      )}
    </div>
  );
}
