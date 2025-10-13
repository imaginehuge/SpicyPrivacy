// components/ResearchCard.tsx
import Link from "next/link";
import { ArrowRight, ArrowDown, Link as LinkIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export interface Publication {
  id: number;
  title: string;
  description: string;
  tags: string[];
  authors?: string;
  date?: string;
  link?: string;
  source?: string;
  category?: "White Papers" | "Policy Analysis" | "Research & Commentary";
}

interface ResearchCardProps {
  publication: Publication;
}

export function ResearchCard({ publication }: ResearchCardProps) {
  const { title, description, authors, date, link, source } = publication;
  const isExternal = link && link.startsWith("http");
  const isPdf = source === "PDF Download";

  const CardContent = () => (
    <div className="flex flex-col overflow-hidden rounded-lg border border-border-color bg-background-card shadow-lg transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-xl h-full">
      <div className="flex-grow p-6">
        <h3 className="text-xl font-bold text-text-dark">{title}</h3>
        {source && (
          <div className="flex items-center text-sm text-text-muted mt-2">
            {isExternal && <LinkIcon className="mr-1 h-4 w-4" />}
            {source}
          </div>
        )}
        <p className="mt-3 text-base text-text-muted">{description}</p>
      </div>
      <div className="border-t border-border-color p-6">
        <div className="flex items-center justify-between">
          <div>
            {authors && <p className="text-sm font-medium text-text-muted">By {authors}</p>}
            {date && <p className="text-sm text-text-muted">{date}</p>}
          </div>
          <Button variant="secondary" size="sm" className="shadow-md">
            {isPdf ? "Download PDF" : "Read More"}
            {isPdf ? (
              <ArrowDown className="ml-1 h-4 w-4" />
            ) : (
              <ArrowRight className="ml-1 h-4 w-4" />
            )}
          </Button>
        </div>
      </div>
    </div>
  );

  if (isExternal) {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer" className="group">
        <CardContent />
      </a>
    );
  }

  return (
    <Link href={link || '#'} className="group">
      <CardContent />
    </Link>
  );
}
