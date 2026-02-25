import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/marketing/Navbar";
import { Footer } from "@/components/marketing/Footer";
import { Shield, BarChart3, Users, BookOpen } from "lucide-react";
import { BreadcrumbSchema } from "@/components/schema/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "About GlossyStack — Who We Are and How We Review Salon Software",
  description:
    "GlossyStack is an independent review site for nail and beauty salon software. Learn about our editorial standards, scoring framework, and commitment to unbiased salon software reviews.",
  alternates: { canonical: "https://glossystack.com/about" },
  openGraph: {
    title: "About GlossyStack — Who We Are and How We Review Salon Software",
    description:
      "GlossyStack is an independent review site for nail and beauty salon software. Learn about our editorial standards, scoring framework, and commitment to unbiased salon software reviews.",
    url: "https://glossystack.com/about",
    siteName: "GlossyStack",
    type: "website",
  },
};

const standards = [
  {
    icon: BookOpen,
    title: "Hands-On Testing",
    description:
      "Every platform we review gets a minimum 30-day trial with real salon workflows — appointment booking, client management, payments, and team scheduling. No review written from a press release.",
  },
  {
    icon: Shield,
    title: "Editorial Independence",
    description:
      "Affiliate relationships never influence our rankings or scores. We publish honest cons for every platform, including our top-rated picks. No vendor reviews or approves our content before publication.",
  },
  {
    icon: Users,
    title: "Real Salon Owner Feedback",
    description:
      "For every major platform, we interview salon owners, nail techs, and stylists who use the software daily. Their real-world experience shapes our pros, cons, and recommendations.",
  },
  {
    icon: BarChart3,
    title: "Transparent Scoring",
    description:
      "Our ratings follow a public rubric: Ease of Use (25%), Booking & Scheduling (25%), Value for Money (20%), Client Management (15%), and Payments & POS (15%).",
  },
];

export default function AboutPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://glossystack.com" },
          { name: "About", url: "https://glossystack.com/about" },
        ]}
      />
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="mx-auto max-w-3xl px-6">
          {/* Breadcrumb */}
          <nav className="text-sm text-slate-500 mb-6">
            <Link href="/" className="hover:text-brand-600">Home</Link>
            {" / "}<span className="text-slate-900">About</span>
          </nav>

          <h1 className="text-3xl font-bold text-slate-900 mb-3">
            About GlossyStack
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed mb-8">
            Independent, unbiased reviews of salon and beauty software &mdash; written for the salon owners and nail techs who actually have to use it.
          </p>

          {/* Mission */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Choosing salon software shouldn&apos;t require sitting through five sales demos and decoding vague pricing pages. GlossyStack exists to give salon owners and beauty professionals clear, honest answers about which platforms actually deliver on their promises &mdash; and which ones don&apos;t.
            </p>
            <p className="text-slate-700 leading-relaxed">
              We review platforms like GlossGenius, Vagaro, Fresha, Booksy, Boulevard, and Square Appointments from the perspective of a working salon owner &mdash; not a software analyst reading feature lists.
            </p>
          </section>

          {/* Editorial Standards */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-5">Editorial Standards</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {standards.map((standard) => (
                <div
                  key={standard.title}
                  className="border border-slate-200 rounded-xl p-5 bg-white"
                >
                  <standard.icon className="h-6 w-6 text-brand-500 mb-3" />
                  <h3 className="font-bold text-slate-900 mb-2">{standard.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {standard.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Affiliate Disclosure */}
          <section className="mb-10 bg-amber-50 border border-amber-200 rounded-xl p-6">
            <h2 className="text-xl font-bold text-amber-900 mb-3">Affiliate Disclosure</h2>
            <p className="text-amber-800 leading-relaxed mb-4">
              Some links on this site are affiliate links. When you sign up for a platform through our links, we may earn a referral commission at no extra cost to you. This is how we fund independent research. However:
            </p>
            <ul className="space-y-2 text-amber-800">
              {[
                "Affiliate relationships never influence our rankings or review scores.",
                "We review and recommend platforms we have no affiliate relationship with when they\u2019re the best fit.",
                "We publish honest cons for every platform, including our top-ranked picks.",
                "No software vendor pays us for positive coverage. Ever.",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm">
                  <span className="font-bold mt-0.5">&#10003;</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* How We Evaluate */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">How We Evaluate Software</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Every salon software review follows a consistent scoring framework so you can compare platforms fairly:
            </p>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
              <div className="space-y-3">
                {[
                  { label: "Ease of Use", weight: "25%", desc: "Setup time, learning curve, and daily workflow efficiency" },
                  { label: "Booking & Scheduling", weight: "25%", desc: "Online booking, calendar management, waitlists, and no-show protection" },
                  { label: "Value for Money", weight: "20%", desc: "Total cost including transaction fees vs. feature value delivered" },
                  { label: "Client Management", weight: "15%", desc: "Client profiles, notes, history, marketing tools, and retention features" },
                  { label: "Payments & POS", weight: "15%", desc: "Payment processing, card readers, tipping, and checkout experience" },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-3">
                    <span className="bg-brand-100 text-brand-700 text-xs font-bold px-2 py-1 rounded-md whitespace-nowrap mt-0.5">{item.weight}</span>
                    <div>
                      <span className="font-semibold text-slate-900">{item.label}</span>
                      <span className="text-sm text-slate-600"> &mdash; {item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Contact */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Get in Touch</h2>
            <p className="text-slate-700 mb-4">
              Have a question, correction, or partnership inquiry? We respond to every email within 48 hours.
            </p>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-2">
              <p className="text-sm text-slate-600">Editorial inquiries: <span className="font-medium text-slate-900">editorial@glossystack.com</span></p>
              <p className="text-sm text-slate-600">Corrections: <span className="font-medium text-slate-900">corrections@glossystack.com</span></p>
              <p className="text-sm text-slate-600">Partnerships: <span className="font-medium text-slate-900">partnerships@glossystack.com</span></p>
            </div>
          </section>

          <div className="pt-6 border-t border-slate-200">
            <Link href="/" className="text-brand-600 hover:underline text-sm">&larr; Back to Home</Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
