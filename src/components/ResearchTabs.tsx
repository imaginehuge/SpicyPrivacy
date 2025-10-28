// This component provides a tabbed interface for filtering and displaying research publications.
"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Publication, ResearchCard } from "./ResearchCard";

// Interface for the props of the ResearchTabs component.
interface ResearchTabsProps {
  publications: Publication[];
}

export function ResearchTabs({ publications }: ResearchTabsProps) {
  // State to manage the currently active tab.
  const [activeTab, setActiveTab] = useState("All");

  // Dynamically generate tab names from publication tags, including an 'All' tab.
  const TABS = [
    "All",
    ...Array.from(new Set(publications.flatMap((p) => p.tags))),
  ];

  // Filter publications based on the active tab.
  const filteredPublications =
    activeTab === "All"
      ? publications
      : publications.filter((p) => p.tags.includes(activeTab));

  return (
    <div className="flex w-full max-w-6xl flex-col items-center space-y-12">
      {/* Tab navigation buttons */}
      <div className="flex space-x-2 rounded-full border border-border-color bg-background-card p-2 shadow-sm sm:space-x-4">
        {TABS.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={cn(
              "rounded-full px-4 py-2 text-sm font-semibold transition-colors sm:px-6 sm:py-2.5",
              activeTab === tab ? "tab-active" : "tab-inactive"
            )}
          >
            {tab}
          </button>
        ))}
      </div>
      {/* Grid display of filtered ResearchCard components */}
      <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {filteredPublications.map((pub) => (
          <ResearchCard key={pub.id} publication={pub} />
        ))}
      </div>
    </div>
  );
}
