// app/(site)/research/page.tsx
import { Metadata } from "next";
import { ResearchTabs } from "@/components/ResearchTabs";
import { Publication } from "@/components/ResearchCard";

export const metadata: Metadata = {
  title: "SpicyPrivacy - Research",
  description:
    "Explore our latest publications on AI, privacy, and technology policy.",
};

// In a real application, this data would come from a CMS or database.
const publicationsData: Publication[] = [
  {
    title: "The Ethics of AI in Hiring",
    description:
      "An in-depth analysis of algorithmic bias in recruitment and strategies for mitigation.",
    authors: "Dr. Evelyn Reed",
    date: "October 15, 2023",
    link: "#",
    category: "White Papers",
  },
  {
    title: "Navigating Global Data Privacy Laws",
    description:
      "A comparative study of GDPR, CCPA, and other emerging data protection regulations.",
    authors: "Jamal Khan & Priya Sharma",
    date: "September 5, 2023",
    link: "#",
    category: "White Papers",
  },
  {
    title: "AI and Intellectual Property Rights",
    description:
      "Examining the challenges generative AI poses to existing copyright and patent frameworks.",
    authors: "SpicyPrivacy Research Team",
    date: "August 21, 2023",
    link: "#",
    category: "Policy Analysis",
    isPdf: true,
  },
  {
    title: "The Future of Digital Identity",
    description:
      "Exploring decentralized identity solutions and their privacy implications.",
    authors: "Dr. Alex Chen",
    date: "July 30, 2023",
    link: "#",
    category: "Research & Commentary",
  },
  {
    title: "Policy Brief: Regulating Facial Recognition",
    description:
      "Recommendations for a balanced legislative approach to facial recognition technology.",
    authors: "Maria Rodriguez",
    date: "June 12, 2023",
    link: "#",
    category: "Policy Analysis",
    isPdf: true,
  },
  {
    title: "Commentary: The AI Executive Order",
    description:
      "A quick-take on the implications of the latest government directive on artificial intelligence.",
    authors: "David Lee",
    date: "May 19, 2023",
    link: "#",
    category: "Research & Commentary",
  },
];

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
        <ResearchTabs publications={publicationsData} />
      </div>
    </section>
  );
}
