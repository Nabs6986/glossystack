import type { Metadata } from "next";
import Link from "next/link";
import { Shield, Star, Users, Zap } from "lucide-react";
import { Navbar } from "@/components/marketing/Navbar";
import { Footer } from "@/components/marketing/Footer";
import { BreadcrumbSchema } from "@/components/schema/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "About This Site — GlossyStack",
  description:
    "GlossyStack is an independent salon software review site. Learn about our editorial process, how we test software, and our commitment to unbiased recommendations.",
  alternates: { canonical: "https://glossystack.com/about-this-site" },
};

const principles = [
  {
    icon: Shield,
    title: "Independent Reviews",
    description:
      "No software company pays for placement or influences our editorial scores. Our rankings are based on hands-on testing, feature analysis, and real user feedback.",
  },
  {
    icon: Star,
    title: "Real Pricing Data",
    description:
      "We verify all pricing directly from vendor websites and update monthly. No hidden fees or surprises — we report exactly what you will pay.",
  },
  {
    icon: Users,
    title: "Salon-Specific Focus",
    description:
      "We review software specifically for beauty professionals — not generic scheduling tools. Every recommendation considers salon workflows, client management, and industry needs.",
  },
  {
    icon: Zap,
    title: "Updated Monthly",
    description:
      "Software changes fast. We re-test platforms, update pricing, and revise our rankings every month to keep our recommendations current.",
  },
];

export default function AboutThisSitePage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://glossystack.com" },
          { name: "About This Site", url: "https://glossystack.com/about-this-site" },
        ]}
      />
      <Navbar />
      <main className="py-16">
        <div className="mx-auto max-w-3xl px-6">
          <header className="text-center mb-12">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">
              About GlossyStack
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              An independent review site helping salon owners and beauty
              professionals find the best software for their business.
            </p>
          </header>

          <section className="prose prose-slate max-w-none mb-12">
            <h2>What is GlossyStack?</h2>
            <p>
              GlossyStack is a focused review and comparison site for salon
              booking and management software. We help nail technicians, hair
              stylists, spa owners, and beauty professionals make informed
              software decisions by providing unbiased reviews, transparent
              pricing, and honest recommendations.
            </p>
            <p>
              Our content includes in-depth software reviews, head-to-head
              comparisons, best-of guides, and audience-specific
              recommendations. Whether you are a solo nail tech or managing a
              multi-location salon chain, we have a recommendation for you.
            </p>

            <h2>Our Editorial Process</h2>
            <p>
              Every review on GlossyStack is based on hands-on testing. We sign
              up for each platform, explore the features, test the booking
              flow, and evaluate the client experience. We also analyze real
              user reviews from G2, Capterra, and Trustpilot to validate our
              findings.
            </p>
            <p>
              Software companies do not pay for placement, nor do they
              influence our editorial scores or rankings. Our goal is to be the
              most trustworthy source of salon software information on the
              internet.
            </p>

            <h2>How We Make Money</h2>
            <p>
              GlossyStack may earn affiliate commissions when you sign up for
              software through links on our site. This means if you click a
              link to a software provider and make a purchase, we may receive a
              small commission at no extra cost to you.
            </p>
            <p>
              Importantly, affiliate relationships never influence our
              editorial content, scores, or rankings. We recommend software
              because it is genuinely good — not because it pays us the most.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Our Principles
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {principles.map(({ icon: Icon, title, description }) => (
                <div
                  key={title}
                  className="rounded-xl border border-slate-200 p-5"
                >
                  <div className="rounded-lg bg-brand-50 p-2 w-fit mb-3">
                    <Icon className="h-5 w-5 text-brand-600" />
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-1">
                    {title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-xl bg-slate-50 border border-slate-200 p-6 text-center">
            <h2 className="text-xl font-bold text-slate-900 mb-2">
              Have questions or feedback?
            </h2>
            <p className="text-slate-600 mb-4">
              We would love to hear from salon owners and beauty professionals.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-brand-400 px-5 py-2.5 text-sm font-medium text-white hover:bg-brand-500 transition-colors"
            >
              Get in Touch
            </Link>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
