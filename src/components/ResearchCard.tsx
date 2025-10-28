// This component displays a single research publication as a card.
import Link from "next/link";
import { Link as LinkIcon } from "lucide-react";

// Interface defining the structure of a research publication.
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

// Interface for the props of the ResearchCard component.
interface ResearchCardProps {
  publication: Publication;
}

export function ResearchCard({ publication }: ResearchCardProps) {
  const { title, description, authors, date, link, source } = publication;
  // Determine if the link is external to apply appropriate target and rel attributes.
  const isExternal = link?.startsWith("http");

  // Inner content of the card, wrapped in a Link or an anchor tag conditionally.
  const CardInner = (
    <article
      className="flex flex-col justify-between h-[340px] rounded-xl border border-border-color bg-background-card shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-[2px] focus-visible:ring-2 focus-visible:ring-primary/50"
      aria-label={title}
    >
      {/* top content */}
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold text-text-dark line-clamp-2">
          {title}
        </h3>

        {source && (
          <div className="flex items-center text-sm text-text-muted mt-1">
            {isExternal && <LinkIcon className="mr-1 h-4 w-4" />}
            <span>{source}</span>
          </div>
        )}

        {(authors || date) && (
          <div className="mt-2 text-sm text-text-muted italic">
            {authors && <span>{authors}</span>}
            {authors && date && <span> • </span>}
            {date && <time>{date}</time>}
          </div>
        )}

        <hr className="border-border-color/50 my-4" />

        <p className="text-base text-text-muted line-clamp-4 flex-grow">
          {description}
        </p>
      </div>
    </article>
  );

  // Conditionally render a Next.js Link or a standard anchor tag based on whether the link is external.
  if (link) {
    return isExternal ? (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="group block focus:outline-none"
      >
        {CardInner}
      </a>
    ) : (
      <Link href={link} className="group block focus:outline-none">
        {CardInner}
      </Link>
    );
  }

  // If no link is provided, render the card as a div.
  return <div className="group block">{CardInner}</div>;
}
