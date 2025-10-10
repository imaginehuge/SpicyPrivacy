// components/Header.tsx
import Link from "next/link";
import { Logo } from "./Logo";
import { Menu } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-10 border-b border-border-color bg-background-light/80 backdrop-blur-lg">
      <div className="container mx-auto flex items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <Logo />
          <h2 className="text-xl font-bold text-text-dark">SpicyPrivacy</h2>
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="#"
            className="text-sm font-medium text-text-muted transition-colors hover:text-text-dark"
          >
            Services
          </Link>
          <Link
            href="#"
            className="text-sm font-medium text-text-muted transition-colors hover:text-text-dark"
          >
            Research
          </Link>
          <Link
            href="#"
            className="btn-primary inline-flex h-10 items-center justify-center rounded-full px-6 text-sm font-bold transition-transform hover:scale-105"
          >
            Reach Out
          </Link>
        </nav>
        <button className="rounded-full p-2 text-text-muted md:hidden">
          <Menu className="h-6 w-6" />
        </button>
      </div>
    </header>
  );
}
