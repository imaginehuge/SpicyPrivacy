// app/(site)/research/page.tsx
import { Metadata } from "next";
import { ResearchTabs } from "@/components/ResearchTabs";
import { Publication } from "@/components/ResearchCard";
import researchData from "@/data/research.json";

export const metadata: Metadata = {
  title: "SpicyPrivacy - Research",
  description:
    "Explore our latest publications on AI, privacy, and technology policy.",
};

const publications: Publication[] = researchData.map((item) => ({
  ...item,
  authors: "SpicyPrivacy Research Team",
  date: "October 11, 2025",
  link: "#",
}));

export default function ResearchPage() {
  return (
    <section className="container mx-auto px-4 py-16 sm:px-6 lg:py-24 lg:px-8">
      <div className="flex flex-col items-center justify-center space-y-12">
        <div className="text-center">
          <h1 className="text-4xl font-black tracking-tighter sm:text-5xl">
            Our Research
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-text-muted">
            Explore our latest publications on AI, privacy, and technology
            policy.
          </p>
        </div>
        <ResearchTabs publications={publications} />
      </div>
    </section>
  );
}
