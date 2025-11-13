// Root layout for the entire SpicyPrivacy application
import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Script from "next/script";
import "./globals.css";

// Font configuration
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: "700",
  variable: "--font-playfair-display",
  display: "swap",
});

// Metadata configuration
export const metadata: Metadata = {
  title: "SpicyPrivacy — Privacy Research & AI Governance",
  description:
    "Spicy Privacy is a platform dedicated to privacy research, awareness, and digital protection services. Explore insights, reports, and tools advancing AI governance and data privacy.",
  keywords: [
    "privacy",
    "data protection",
    "cybersecurity",
    "AI governance",
    "research",
    "digital rights",
    "Spicy Privacy",
  ],
  authors: [{ name: "SpicyPrivacy", url: "https://www.spicyprivacy.com" }],
  openGraph: {
    title: "SpicyPrivacy — Privacy Research & AI Governance",
    description:
      "Explore research, policies, and services advancing AI governance and digital privacy.",
    url: "https://www.spicyprivacy.com",
    siteName: "SpicyPrivacy",
    images: [
      {
        url: "https://www.spicyprivacy.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SpicyPrivacy Website Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SpicyPrivacy — Privacy Research & AI Governance",
    description:
      "Privacy research, awareness, and data protection by SpicyPrivacy.",
    images: ["https://www.spicyprivacy.com/og-image.jpg"],
    creator: "@SpicyPrivacy", // optional, replace with your X handle if available
  },
  metadataBase: new URL("https://www.spicyprivacy.com"),
  alternates: {
    canonical: "https://www.spicyprivacy.com",
  },
};

// Layout component
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=5"
        />
        <link rel="icon" href="/SPR2.png" />
      </head>
      <Script
        id="ld-json-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "SpicyPrivacy",
            url: "https://www.spicyprivacy.com",
            description:
              "SpicyPrivacy is dedicated to AI governance, privacy research, and data protection.",
            publisher: {
              "@type": "Organization",
              name: "SpicyPrivacy",
            },
            potentialAction: {
              "@type": "SearchAction",
              target:
                "https://www.spicyprivacy.com/search?q={search_term_string}",
              "query-input": "required name=search_term_string",
            },
          }),
        }}
      />
      <body
        className={`${inter.variable} ${playfairDisplay.variable} bg-background-light font-sans text-text-dark`}
      >
        {children}
      </body>
    </html>
  );
}
