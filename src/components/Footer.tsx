// components/Footer.tsx
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border-color">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-6 sm:flex-row sm:px-6 lg:px-8">
        <p className="text-sm text-text-muted">
          © 2024 SpicyPrivacy. All rights reserved.
        </p>
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          <Link
            href="#"
            className="text-sm text-text-muted transition-colors hover:text-text-dark"
          >
            Terms of Service
          </Link>
          <Link
            href="#"
            className="text-sm text-text-muted transition-colors hover:text-text-dark"
          >
            Privacy Policy
          </Link>
          <Link
            href="#"
            className="text-sm text-text-muted transition-colors hover:text-text-dark"
          >
            About
          </Link>
        </div>
      </div>
    </footer>
  );
}
