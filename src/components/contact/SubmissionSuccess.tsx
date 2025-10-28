// This component displays a success message after a form submission.
import { Check } from "lucide-react";

export function SubmissionSuccess() {
  return (
    <div className="text-center">
      {/* Success icon */}
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
        <Check className="h-10 w-10 text-green-600" />
      </div>
      {/* Success message title */}
      <h2 className="mt-6 text-3xl font-bold tracking-tight text-text-dark">
        Thank You!
      </h2>
      {/* Success message description */}
      <p className="mt-4 text-lg text-text-muted">
        Your query has been sent. We&apos;ll get back to you shortly.
      </p>
    </div>
  );
}
