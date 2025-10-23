"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export function MobileNav({ onLinkClick }: { onLinkClick: () => void }) {
  const pathname = usePathname();

  const navLinks = [
    { href: "/services", label: "Services" },
    { href: "/research", label: "Research" },
    { href: "/contact", label: "Reach Out" },
  ];

  return (
    <div className="fixed inset-0 top-16 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto p-6 pb-32 shadow-2xl animate-in slide-in-from-bottom-80 md:hidden">
      <div className="relative z-20 grid gap-6 rounded-md border border-border-color bg-background-light p-4 shadow-md">
        <nav className="grid grid-flow-row auto-rows-max text-sm">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={onLinkClick}
              className={cn(
                "flex w-full items-center rounded-md p-2 text-sm font-medium hover:underline",
                pathname === link.href ? "font-bold" : ""
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}
