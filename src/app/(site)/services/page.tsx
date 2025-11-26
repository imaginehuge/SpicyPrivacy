// This component renders the Services page, detailing the offerings of SpicyPrivacy.
import { Metadata } from "next";
import { ServiceCard } from "@/components/ServiceCard";
import { CalBookingButton } from "@/components/CalBookingButton";

// Metadata for the Services page, used for SEO and browser tab titles.
export const metadata: Metadata = {
  title: "SpicyPrivacy - Services",
  description:
    "Expert guidance and comprehensive solutions for AI and data privacy regulations.",
};

// Data for the services offered, structured for display in ServiceCard components.
const servicesData = [
  {
    title: "Policy & Program Development",
    services: [
      "AI Governance Frameworks",
      "Data Privacy Policies (GDPR, CCPA)",
      "Internal Data Handling Protocols",
      "Public-facing Privacy Notices",
    ],
  },
  {
    title: "Expert Consultation",
    services: [
      "On-demand AI Ethics Advice",
      "Data Privacy Officer (DPO) as a Service",
      "Regulatory Inquiry Support",
      "Product Development Guidance",
    ],
  },
  {
    title: "Audits & Assessments",
    services: [
      "AI Impact Assessments",
      "Data Protection Impact Assessments (DPIA)",
      "Third-party Vendor Risk Audits",
      "Bias and Fairness Audits",
    ],
  },
  {
    title: "Compliance Management",
    services: [
      "Regulatory Gap Analysis",
      "Compliance Monitoring & Reporting",
      "Data Breach Response Planning",
      "Cross-border Data Transfer Solutions",
    ],
  },
  {
    title: "Contract & Vendor Review",
    services: [
      "Data Processing Agreements (DPA)",
      "AI Vendor Contract Review",
      "Terms of Service & EULAs",
      "Technology Licensing Agreements",
    ],
  },
  {
    title: "Training & Workshops",
    services: [
      "Employee Data Privacy Training",
      "Executive Briefings on AI Risks",
      "Customized Workshops",
      "Developing Ethical AI Champions",
    ],
  },
];

export default function ServicesPage() {
  return (
    <section className="container mx-auto px-4 py-20 sm:px-6 lg:py-32 lg:px-8">
      <div className="space-y-16">
        {/* Page title and description */}
        <div className="text-center">
          <h1 className="text-5xl font-black tracking-tighter sm:text-6xl md:text-7xl">
            <span className="text-gradient pr-2">Our Services</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-text-muted">
            We provide expert guidance and comprehensive solutions to help you
            navigate the complexities of AI and data privacy regulations.
          </p>
        </div>

        {/* Grid display of ServiceCard components, populated from servicesData */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {servicesData.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              services={service.services}
            />
          ))}
        </div>

        {/* Call to action section for tailored solutions and consultation booking */}
        <div className="rounded-2xl border border-border-color bg-background-card p-10 shadow-lg">
          <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
            <div className="text-center md:text-left">
              <h3 className="text-3xl font-bold text-text-dark">
                Need a Tailored Solution?
              </h3>
              <p className="mt-2 max-w-2xl text-lg text-text-muted">
                Our expertise is your asset. Let&apos;s discuss your unique
                challenges and build a custom solution that fits your
                organization&apos;s needs.
              </p>
            </div>
            <div className="flex-shrink-0">
              <CalBookingButton />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
