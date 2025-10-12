import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-grow">
        <section className="container mx-auto px-4 py-20 sm:px-6 lg:py-40 lg:px-8">
          <div className="mx-auto max-w-5xl text-center">
            <div className="space-y-4">
              <h1 className="font-serif text-5xl font-black tracking-tighter text-gradient sm:text-6xl md:text-7xl">
                404 - Page Not Found
              </h1>
              <p className="mx-auto max-w-3xl pt-2 text-lg text-text-muted">
                The page you are looking for does not exist.
              </p>
              <Link
                href="/"
                className="btn-primary mt-8 inline-flex h-12 items-center justify-center rounded-full px-8 text-base font-bold transition-transform hover:scale-105"
              >
                Go back home
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
