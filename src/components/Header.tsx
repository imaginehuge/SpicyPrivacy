// components/Header.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Logo } from "./Logo";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { MobileNav } from "./MobileNav";

export function Header() {
  const pathname = usePathname();
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    if (showMobileMenu) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [showMobileMenu]);

  const navLinks = [
    { href: "/services", label: "Services" },
    { href: "/research", label: "Research" },
    { href: "/contact", label: "Reach Out" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-border-color bg-background-light/80 backdrop-blur-lg">
      <div className="container mx-auto flex items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <Logo />
          <h2 className="text-xl font-bold text-text-dark">SpicyPrivacy</h2>
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm transition-colors",
                link.href === "/contact"
                  ? "btn-primary inline-flex h-10 items-center justify-center rounded-full px-6 text-sm font-bold transition-transform hover:scale-105"
                  : cn(
                      "hover:text-text-dark",
                      pathname === link.href
                        ? "font-bold text-text-dark"
                        : "font-medium text-text-muted"
                    )
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <button
          className="rounded-full p-2 text-text-muted md:hidden"
          onClick={() => setShowMobileMenu(!showMobileMenu)}
        >
          {showMobileMenu ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
        {showMobileMenu && (
          <MobileNav onLinkClick={() => setShowMobileMenu(false)} />
        )}
      </div>
    </header>
  );
}
