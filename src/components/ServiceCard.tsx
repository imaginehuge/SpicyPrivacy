// This component displays a single service category with its list of offerings.
import React from "react";

// Interface for the props of the ServiceCard component.
interface ServiceCardProps {
  title: string;
  services: string[];
}

export function ServiceCard({ title, services }: ServiceCardProps) {
  return (
    <div className="transform-gpu rounded-2xl border border-border-color bg-background-card p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <h3 className="mb-4 text-2xl font-bold text-text-dark">{title}</h3>
      {/* List of individual services within this card */}
      <ul className="space-y-2 text-text-muted list-disc list-inside">
        {services.map((service, index) => (
          <li key={index}>{service}</li>
        ))}
      </ul>
    </div>
  );
}
