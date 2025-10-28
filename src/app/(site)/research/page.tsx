// This component renders the Research page, displaying a list of publications.
import { Metadata } from "next";
import { ResearchTabs } from "@/components/ResearchTabs";
import { Publication } from "@/components/ResearchCard";
import researchData from "@/data/research.json";

// Metadata for the Research page, used for SEO and browser tab titles.
export const metadata: Metadata = {
  title: "SpicyPrivacy - Research",
  description:
    "Explore our latest publications on AI, privacy, and technology policy.",
};

// Maps the raw research data to the Publication type.
const publications: Publication[] = researchData.map((item) => ({
  ...item,
}));

export default function ResearchPage() {
  return (
    <section className="container mx-auto px-4 py-16 sm:px-6 lg:py-24 lg:px-8">
      <div className="flex flex-col items-center justify-center space-y-12">
        {/* Page title and description */}
        <div className="text-center">
          <h1 className="text-4xl font-black tracking-tighter sm:text-5xl">
            Our Research
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-text-muted">
            Explore our latest publications on AI, privacy, and technology
            policy.
          </p>
        </div>
        {/* Research tabs component displaying publications */}
        <ResearchTabs publications={publications} />
      </div>
    </section>
  );
}
