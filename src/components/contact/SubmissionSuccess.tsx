// components/contact/SubmissionSuccess.tsx
import { Check } from "lucide-react";

export function SubmissionSuccess() {
  return (
    <div className="text-center">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
        <Check className="h-10 w-10 text-green-600" />
      </div>
      <h2 className="mt-6 text-3xl font-bold tracking-tight text-text-dark">
        Thank You!
      </h2>
      <p className="mt-4 text-lg text-text-muted">
        Your query has been sent. We&apos;ll get back to you shortly.
      </p>
    </div>
  );
}
