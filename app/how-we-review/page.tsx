import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/marketing/Navbar";
import { Footer } from "@/components/marketing/Footer";
import { BreadcrumbSchema } from "@/components/schema/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "How We Review Salon Software | GlossyStack",
  description:
    "Our review methodology: how GlossyStack tests, scores, and compares salon and beauty software across six weighted criteria — from booking to POS to client management.",
  alternates: { canonical: "https://glossystack.com/how-we-review" },
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "How We Review Salon Software",
  description:
    "Our review methodology: how GlossyStack tests, scores, and compares salon and beauty software across six weighted criteria.",
  url: "https://glossystack.com/how-we-review",
  isPartOf: {
    "@type": "WebSite",
    name: "GlossyStack",
    url: "https://glossystack.com",
  },
};

const steps = [
  {
    number: "01",
    title: "Sign Up & Configure",
    description:
      "We create a real account on every platform and go through the full setup process — building a service menu, adding staff profiles, configuring booking pages, and connecting payment processing. We set up a realistic salon with multiple providers, service categories, and pricing tiers to mirror how a working salon operates.",
  },
  {
    number: "02",
    title: "Run Core Salon Workflows",
    description:
      "We test the workflows salon owners use daily: booking appointments, processing checkouts, managing walk-ins, running the cash register, sending client reminders, handling cancellations, and generating end-of-day reports. Every feature is tested from both the admin and client perspective.",
  },
  {
    number: "03",
    title: "Test the Client Booking Experience",
    description:
      "We book appointments as a client — through the platform's website widget, marketplace, social media links, and mobile browser. We evaluate booking speed, availability clarity, confirmation flow, and reminder quality. If clients find booking confusing, salon adoption will suffer regardless of back-end capabilities.",
  },
  {
    number: "04",
    title: "Interview Working Salon Owners",
    description:
      "For every major platform, we interview salon owners, nail techs, and stylists who have used the software in daily operations for 12+ months. Their real-world experience with reliability, support, billing accuracy, and hidden limitations shapes our reviews beyond what a 30-day trial can reveal.",
  },
  {
    number: "05",
    title: "Score, Write & Publish",
    description:
      "We score each platform against our six weighted criteria, write the review with honest pros and cons, and publish. No vendor sees or approves reviews before publication. We stand behind every score and update reviews when platforms make material changes.",
  },
];

const criteria = [
  {
    name: "Ease of Use",
    weight: "20%",
    description:
      "Setup time, learning curve, daily workflow efficiency, and interface clarity. We measure how quickly a salon owner or front desk staff member can become productive without outside help or extensive training.",
  },
  {
    name: "Appointment & Booking",
    weight: "20%",
    description:
      "Online booking quality, calendar management, walk-in handling, waitlist support, no-show protection, rebooking prompts, and multi-provider scheduling. This is the core function that every salon depends on daily.",
  },
  {
    name: "POS & Payment Processing",
    weight: "20%",
    description:
      "Checkout speed, card reader quality, split payments, tipping flow, gift card support, product sales, processing fees, and end-of-day reconciliation. The POS experience directly impacts client satisfaction and staff efficiency.",
  },
  {
    name: "Client Management & Marketing",
    weight: "15%",
    description:
      "Client profiles, visit history, formula/notes storage, automated rebooking reminders, birthday messages, email/SMS campaigns, review generation, and marketplace visibility. Retention and acquisition tools that drive long-term revenue.",
  },
  {
    name: "Support & Reliability",
    weight: "15%",
    description:
      "Support channel availability (phone, email, chat), response times, onboarding assistance, platform uptime, and data security. When the booking system goes down on a Saturday morning or a payment fails mid-checkout, support quality becomes critical.",
  },
  {
    name: "Value for Money",
    weight: "10%",
    description:
      "Total cost of ownership (subscription + processing fees + hardware + add-ons) relative to the feature set and salon size sweet spot. The cheapest option is rarely the best value, and the most expensive often includes capabilities small salons will never use.",
  },
];

export default function HowWeReviewPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://glossystack.com" },
          { name: "How We Review", url: "https://glossystack.com/how-we-review" },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <Navbar />

      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          {/* Breadcrumb */}
          <nav className="text-sm text-slate-500 mb-6">
            <Link href="/" className="hover:text-brand-600">
              Home
            </Link>
            {" / "}
            <span className="text-slate-900">How We Review</span>
          </nav>

          <h1 className="text-3xl font-bold text-slate-900 mb-3">
            How We Review Salon Software
          </h1>
          <p className="text-lg text-slate-600 mb-10 leading-relaxed">
            Every review on GlossyStack follows the same rigorous process. No
            vendor pays for placement. No review is published without hands-on
            testing. Here&apos;s exactly how we evaluate each platform.
          </p>

          {/* Testing Process */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Our 5-Step Testing Process
            </h2>
            <div className="space-y-4">
              {steps.map((step) => (
                <div
                  key={step.number}
                  className="bg-white border border-slate-200 rounded-xl p-5 flex gap-4"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-brand-100 text-brand-700 rounded-lg flex items-center justify-center font-bold text-sm">
                    {step.number}
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">
                      {step.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Scoring Criteria */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Scoring Criteria
            </h2>
            <p className="text-slate-600 mb-5">
              Each platform is scored on six dimensions. The weighted average
              produces the final rating you see in our reviews and comparison
              tables.
            </p>
            <div className="space-y-4">
              {criteria.map((c) => (
                <div
                  key={c.name}
                  className="bg-white border border-slate-200 rounded-xl p-5"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className="bg-brand-100 text-brand-700 text-xs font-bold px-2.5 py-1 rounded-md">
                      {c.weight}
                    </span>
                    <h3 className="font-semibold text-slate-900">{c.name}</h3>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {c.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Update Cadence */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Review Updates
            </h2>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-3 text-slate-600 text-sm leading-relaxed">
              <p>
                <strong className="text-slate-900">
                  Quarterly check-ins:
                </strong>{" "}
                We revisit each reviewed platform every quarter to check for
                pricing changes, major feature updates, and shifts in support
                quality. If anything material has changed, we update the review
                and note the revision date.
              </p>
              <p>
                <strong className="text-slate-900">
                  Annual re-evaluation:
                </strong>{" "}
                Once per year, we re-run the full evaluation process for our
                top-rated platforms to ensure scores still reflect reality.
                Salon software evolves quickly — our reviews must keep pace.
              </p>
              <p>
                <strong className="text-slate-900">
                  Reader-triggered updates:
                </strong>{" "}
                When a salon owner alerts us to a significant platform change
                (pricing increase, feature removal, support degradation), we
                investigate and update the review within two weeks.
              </p>
            </div>
          </section>

          {/* Editorial Independence */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Editorial Independence
            </h2>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 space-y-3 text-amber-800 text-sm leading-relaxed">
              <p>
                Some links on this site are affiliate links. When you sign up
                for a platform through our links, we may earn a referral
                commission at no extra cost to you. This is how we fund our
                independent research.
              </p>
              <p>However:</p>
              <ul className="space-y-1.5 ml-4">
                <li>
                  &bull; Affiliate relationships never influence ratings or
                  rankings.
                </li>
                <li>
                  &bull; We review and recommend platforms we have no affiliate
                  relationship with when they&apos;re the best fit.
                </li>
                <li>
                  &bull; We publish honest cons for every platform, including
                  our top-rated picks.
                </li>
                <li>
                  &bull; No vendor sees or approves reviews before publication.
                </li>
              </ul>
            </div>
          </section>

          {/* Corrections */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Corrections & Feedback
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Found a factual error in one of our reviews? Noticed a pricing
              change we haven&apos;t caught yet? We take accuracy seriously.
              Reach us at{" "}
              <a
                href="mailto:corrections@glossystack.com"
                className="text-brand-600 hover:underline"
              >
                corrections@glossystack.com
              </a>{" "}
              or use our{" "}
              <Link
                href="/contact"
                className="text-brand-600 hover:underline"
              >
                contact form
              </Link>
              . We investigate and respond to every correction request within
              48 hours.
            </p>
          </section>

          {/* Bottom CTA */}
          <div className="bg-brand-50 border border-brand-200 rounded-xl p-6 text-center">
            <h2 className="text-xl font-bold text-slate-900 mb-2">
              See our reviews in action
            </h2>
            <p className="text-slate-600 mb-4">
              Now that you know how we evaluate, browse our latest salon
              software reviews and comparisons.
            </p>
            <Link
              href="/software"
              className="inline-block bg-brand-500 text-white px-5 py-2.5 rounded-lg font-medium hover:bg-brand-600 transition-colors"
            >
              Browse All Reviews
            </Link>
          </div>

          {/* Bottom nav */}
          <div className="mt-8 pt-6 border-t border-slate-200 flex flex-wrap gap-4 text-sm">
            <Link href="/" className="text-brand-600 hover:underline">
              Home
            </Link>
            <Link href="/software" className="text-brand-600 hover:underline">
              Software Reviews
            </Link>
            <Link href="/about" className="text-brand-600 hover:underline">
              About
            </Link>
            <Link href="/faq" className="text-brand-600 hover:underline">
              FAQ
            </Link>
            <Link href="/contact" className="text-brand-600 hover:underline">
              Contact
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
