// components/ResearchTabs.tsx
"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Publication, ResearchCard } from "./ResearchCard";

interface ResearchTabsProps {
  publications: Publication[];
}

const TABS = [
  "All",
  "White Papers",
  "Policy Analysis",
  "Research & Commentary",
];

export function ResearchTabs({ publications }: ResearchTabsProps) {
  const [activeTab, setActiveTab] = useState("All");

  const filteredPublications =
    activeTab === "All"
      ? publications
      : publications.filter((p) => p.category === activeTab);

  return (
    <div className="flex w-full max-w-6xl flex-col items-center space-y-12">
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
      <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {filteredPublications.map((pub) => (
          <ResearchCard key={pub.title} publication={pub} />
        ))}
      </div>
    </div>
  );
}
