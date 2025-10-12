// app/(site)/about/page.tsx
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SpicyPrivacy - About Us",
  description: "Learn more about the SpicyPrivacy team and our mission.",
};

export default function AboutPage() {
  return (
    <section className="container mx-auto px-4 py-16 sm:px-6 lg:py-24 lg:px-8">
      <div className="space-y-12">
        <div className="text-center">
          <h1 className="text-4xl font-black tracking-tighter sm:text-5xl">
            About SpicyPrivacy
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-text-muted">
            Our mission is to empower organizations with the tools and expertise
            to build and maintain ethical and compliant AI systems.
          </p>
        </div>
        <div className="mx-auto max-w-3xl space-y-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Our Story</h2>
            <p className="text-text-muted">
              SpicyPrivacy was founded by a team of legal experts, data
              scientists, and policy analysts who saw the growing need for
              specialized guidance in the rapidly evolving landscape of AI
              governance and data privacy. We believe that innovation and
              compliance can and should go hand-in-hand.
            </p>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Our Team</h2>
            <p className="text-text-muted">
              Our interdisciplinary team brings together decades of experience
              from the legal, technology, and policy sectors. We are passionate
              about helping our clients navigate the complexities of AI ethics
              and data protection.
            </p>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Our Values</h2>
            <ul className="list-disc space-y-2 pl-6 text-text-muted">
              <li>
                <strong>Integrity:</strong> We are committed to the highest
                ethical standards in everything we do.
              </li>
              <li>
                <strong>Expertise:</strong> We are dedicated to providing our
                clients with the most up-to-date and accurate guidance.
              </li>
              <li>
                <strong>Collaboration:</strong> We work closely with our
                clients to develop tailored solutions that meet their unique
                needs.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
