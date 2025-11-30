// This component renders the footer section of the application.
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border-color">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-6 sm:flex-row sm:px-6 lg:px-8">
        {/* Copyright information */}
        <p className="text-sm text-text-muted">
          © 2025 SpicyPrivacy. All rights reserved.
        </p>
        {/* Navigation links within the footer */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          <Link
            href="/terms"
            className="text-sm text-text-muted transition-colors hover:text-text-dark"
          >
            Terms of Service
          </Link>
          <Link
            href="/privacy"
            className="text-sm text-text-muted transition-colors hover:text-text-dark"
          >
            Privacy Policy
          </Link>
          <Link
            href="/cookies"
            className="text-sm text-text-muted transition-colors hover:text-text-dark"
          >
            Cookie Policy
          </Link>
          <Link
            href="/about"
            className="text-sm text-text-muted transition-colors hover:text-text-dark"
          >
            About
          </Link>
        </div>
      </div>
    </footer>
  );
}
