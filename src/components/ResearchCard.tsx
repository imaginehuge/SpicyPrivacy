// components/ResearchCard.tsx
import Link from "next/link";
import { ArrowRight, ArrowDown } from "lucide-react";

export interface Publication {
  id: number;
  title: string;
  description: string;
  tags: string[];
  authors?: string;
  date?: string;
  link?: string;
  category?: "White Papers" | "Policy Analysis" | "Research & Commentary";
  isPdf?: boolean;
}

interface ResearchCardProps {
  publication: Publication;
}

export function ResearchCard({ publication }: ResearchCardProps) {
  const { title, description, authors, date, link, isPdf } = publication;

  return (
    <div className="flex flex-col overflow-hidden rounded-lg border border-border-color bg-background-card shadow-lg">
      <div className="flex-grow p-6">
        <h3 className="text-xl font-bold text-text-dark">{title}</h3>
        <p className="mt-3 text-base text-text-muted">{description}</p>
      </div>
      <div className="border-t border-border-color p-6">
        {authors && <p className="text-sm font-medium text-text-muted">By {authors}</p>}
        {date && <p className="text-sm text-text-muted">{date}</p>}
        <Link
          href={link || '#'}
          className="group mt-4 inline-flex items-center text-sm font-bold text-brand-secondary transition-colors hover:text-brand-primary"
        >
          {isPdf ? "Download PDF" : "Read More"}
          {isPdf ? (
            <ArrowDown className="ml-1 h-4 w-4 transition-transform group-hover:translate-y-0.5" />
          ) : (
            <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          )}
        </Link>
      </div>
    </div>
  );
}
