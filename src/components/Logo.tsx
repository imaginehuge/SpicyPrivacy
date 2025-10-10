// components/Logo.tsx
import React from "react";

export function Logo() {
  return (
    <svg
      className="h-8 w-8"
      fill="none"
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="logo-gradient" x1="0%" x2="100%" y1="0%" y2="100%">
          <stop
            offset="0%"
            style={{ stopColor: "var(--color-brand-primary)" }}
          />
          <stop
            offset="100%"
            style={{ stopColor: "var(--color-brand-secondary)" }}
          />
        </linearGradient>
      </defs>
      <path
        d="M4.99841 8.00037H43.0016C43.5539 8.00037 44.0016 8.44812 44.0016 9.00037V15.0004C44.0016 15.5526 43.5539 16.0004 43.0016 16.0004H4.99841C4.44616 16.0004 3.99841 15.5526 3.99841 15.0004V9.00037C3.99841 8.44812 4.44616 8.00037 4.99841 8.00037Z"
        stroke="url(#logo-gradient)"
        strokeLinejoin="round"
        strokeWidth="3"
      />
      <path
        d="M4.99841 24.0004H43.0016C43.5539 24.0004 44.0016 24.4481 44.0016 25.0004V31.0004C44.0016 31.5526 43.5539 32.0004 43.0016 32.0004H4.99841C4.44616 32.0004 3.99841 31.5526 3.99841 31.0004V25.0004C3.99841 24.4481 4.44616 24.0004 4.99841 24.0004Z"
        stroke="url(#logo-gradient)"
        strokeLinejoin="round"
        strokeWidth="3"
      />
      <path
        d="M14 40H34"
        stroke="url(#logo-gradient)"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
      />
    </svg>
  );
}
