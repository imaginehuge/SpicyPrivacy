// This component renders the main header of the application, including navigation and mobile menu toggle.
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { MobileNav } from "./MobileNav";
import Image from "next/image";

export function Header() {
  const pathname = usePathname();
  // State to control the visibility of the mobile menu.
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  // Effect to manage body overflow when mobile menu is open.
  useEffect(() => {
    if (showMobileMenu) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [showMobileMenu]);

  // Navigation links for the header.
  const navLinks = [
    { href: "/services", label: "Services" },
    { href: "/research", label: "Research" },
    { href: "/contact", label: "Reach Out" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-border-color bg-background-light/80 backdrop-blur-lg">
      <div className="container mx-auto flex items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo and site title */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/logo-dark.png"
            alt="Company Logo"
            width={100}
            height={60}
          />
          {/* <h2 className="text-xl font-bold text-text-dark">SpicyPrivacy</h2> */}
        </Link>
        {/* Desktop navigation */}
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
        {/* Mobile menu toggle button */}
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
        {/* Mobile navigation component, visible when showMobileMenu is true */}
        {showMobileMenu && (
          <MobileNav onLinkClick={() => setShowMobileMenu(false)} />
        )}
      </div>
    </header>
  );
}
