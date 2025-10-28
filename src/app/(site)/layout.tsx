// This component defines the layout for pages within the (site) group.
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Renders the main header of the page */}
      <Header />
      {/* Main content area where child pages will be rendered */}
      <main className="flex-grow">{children}</main>
      {/* Renders the main footer of the page */}
      <Footer />
    </div>
  );
}
