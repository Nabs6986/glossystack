import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/marketing/Navbar";
import { Footer } from "@/components/marketing/Footer";
import { Star, ArrowRight, Check, X } from "lucide-react";

export const metadata: Metadata = {
  title: "Salon Software Pricing Comparison 2026 — GlossyStack",
  description:
    "Compare 2026 pricing for GlossGenius, Vagaro, Fresha, Booksy, Boulevard, and Square Appointments. Real monthly costs, transaction fees, and hidden charges for salon owners.",
  alternates: { canonical: "https://glossystack.com/pricing" },
  openGraph: {
    title: "Salon Software Pricing Comparison 2026 — GlossyStack",
    description:
      "Compare 2026 pricing for GlossGenius, Vagaro, Fresha, Booksy, Boulevard, and Square Appointments side by side.",
    url: "https://glossystack.com/pricing",
    siteName: "GlossyStack",
    type: "website",
  },
};

interface Platform {
  name: string;
  slug: string;
  startingPrice: string;
  priceNote: string;
  perStaff: string;
  cardRate: string;
  freeOption: boolean;
  freeTrial: string;
  bestFor: string;
  plans: { name: string; price: string }[];
}

const platforms: Platform[] = [
  {
    name: "GlossGenius",
    slug: "glossgenius",
    startingPrice: "$24/mo",
    priceNote: "Standard plan",
    perStaff: "Included in plan tier",
    cardRate: "2.6%",
    freeOption: false,
    freeTrial: "14 days",
    bestFor: "Solo nail techs & stylists",
    plans: [
      { name: "Standard", price: "$24/mo" },
      { name: "Gold", price: "$48/mo" },
      { name: "Platinum", price: "$148/mo" },
    ],
  },
  {
    name: "Vagaro",
    slug: "vagaro",
    startingPrice: "$30/mo",
    priceNote: "1 bookable calendar",
    perStaff: "+$10/mo per calendar",
    cardRate: "2.75%",
    freeOption: false,
    freeTrial: "30 days",
    bestFor: "Multi-staff salons",
    plans: [
      { name: "1 calendar", price: "$30/mo" },
      { name: "2 calendars", price: "$40/mo" },
      { name: "3 calendars", price: "$50/mo" },
      { name: "7+ calendars", price: "$84/mo" },
    ],
  },
  {
    name: "Fresha",
    slug: "fresha",
    startingPrice: "Free*",
    priceNote: "*Transaction fees apply",
    perStaff: "Subscription-based tiers",
    cardRate: "2.29% + $0.20",
    freeOption: true,
    freeTrial: "N/A (free tier available)",
    bestFor: "Budget-conscious owners",
    plans: [
      { name: "Starter", price: "Free*" },
      { name: "Individual", price: "$19.95/mo" },
      { name: "Team", price: "Per-member pricing" },
    ],
  },
  {
    name: "Booksy",
    slug: "booksy",
    startingPrice: "$29.99/mo",
    priceNote: "Full features included",
    perStaff: "+$20/mo per staff",
    cardRate: "2.6% + $0.30",
    freeOption: false,
    freeTrial: "14 days",
    bestFor: "Building a new client base",
    plans: [
      { name: "Main", price: "$29.99/mo" },
      { name: "+1-9 staff", price: "+$10/mo each" },
      { name: "Unlimited staff", price: "$119.99/mo" },
    ],
  },
  {
    name: "Boulevard",
    slug: "boulevard",
    startingPrice: "$176/mo",
    priceNote: "Essentials plan, per location",
    perStaff: "Included in plan tier",
    cardRate: "Custom",
    freeOption: false,
    freeTrial: "Demo only",
    bestFor: "Upscale salons & spas",
    plans: [
      { name: "Essentials", price: "$176/mo" },
      { name: "Premier", price: "$293/mo" },
      { name: "Prestige", price: "$410/mo" },
    ],
  },
  {
    name: "Square Appointments",
    slug: "square-appointments",
    startingPrice: "Free",
    priceNote: "For solo providers",
    perStaff: "Unlimited staff on paid plans",
    cardRate: "2.6% + $0.15",
    freeOption: true,
    freeTrial: "N/A (free tier available)",
    bestFor: "Businesses already on Square",
    plans: [
      { name: "Free", price: "$0/mo" },
      { name: "Plus", price: "$29/mo" },
      { name: "Premium", price: "$69/mo" },
    ],
  },
];

const faqs = [
  {
    question: "What is the cheapest salon software in 2026?",
    answer:
      "Fresha and Square Appointments both offer free tiers. Square Appointments is completely free for solo providers with no subscription fees \u2014 you only pay card processing fees (2.6% + $0.15). Fresha\u2019s free tier charges a 20% commission on new marketplace bookings plus payment processing fees. For a paid plan, GlossGenius at $24/month is the most affordable full-featured option.",
  },
  {
    question: "How much does salon software cost per month on average?",
    answer:
      "For a solo provider, expect to pay $0\u2013$30/month. For a small salon with 2\u20134 staff, costs typically range from $40\u2013$80/month. Mid-size salons (5\u201310 staff) typically pay $80\u2013$200/month. Premium platforms like Boulevard start at $176/month per location regardless of team size.",
  },
  {
    question: "Do salon software platforms charge transaction fees?",
    answer:
      "Yes, virtually all salon software platforms charge payment processing fees when you accept card payments. Typical rates range from 2.29% (Fresha) to 2.75% (Vagaro) per card-present transaction. GlossGenius charges a flat 2.6%. Some platforms like Fresha also charge a 20% commission on new clients who book through their marketplace.",
  },
  {
    question: "Is Vagaro or GlossGenius more affordable for a small salon?",
    answer:
      "For a solo provider, GlossGenius ($24/mo) is cheaper than Vagaro ($30/mo). For a 3-person team, Vagaro costs about $50/month (base + 2 extra calendars at $10 each), while GlossGenius Gold at $48/month includes team management features. GlossGenius also has lower card processing fees (2.6% vs. 2.75%), which adds up for high-volume salons.",
  },
  {
    question: "Does Boulevard offer a free trial?",
    answer:
      "Boulevard does not offer a free trial. Instead, they provide a personalized demo with their sales team. Boulevard\u2019s Essentials plan starts at $176/month ($159/month if paid annually). They also offer a 10% discount on all plans when you pay annually.",
  },
  {
    question: "What hidden fees should I watch for with salon software?",
    answer:
      "Common hidden costs include: per-staff or per-calendar surcharges (Vagaro charges $10/month per extra calendar), marketplace commissions on new client bookings (Fresha charges 20%), add-on costs for payroll (GlossGenius charges $40 + $6/employee), text message marketing credits, premium support tiers, and hardware costs for POS card readers.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />

        {/* Hero */}
        <section className="bg-gradient-to-b from-pink-50 to-white pb-12">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-brand-100 px-4 py-1.5 text-sm font-medium text-brand-700 mb-6">
              Updated February 2026
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Salon Software Pricing Comparison 2026
            </h1>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              Real monthly costs, transaction fees, and per-staff pricing for the top salon platforms. No marketing fluff &mdash; just the numbers you need.
            </p>
          </div>
        </section>

        {/* Quick comparison table */}
        <section className="py-12">
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="text-2xl font-bold text-slate-900 text-center mb-8">
              Side-by-Side Pricing
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-xl shadow-sm border border-slate-200">
                <thead>
                  <tr className="border-b border-slate-200">
                    <th className="py-4 px-4 text-left text-sm font-medium text-slate-600">Platform</th>
                    <th className="py-4 px-4 text-left text-sm font-medium text-slate-600">Starting Price</th>
                    <th className="py-4 px-4 text-left text-sm font-medium text-slate-600">Per-Staff Cost</th>
                    <th className="py-4 px-4 text-left text-sm font-medium text-slate-600">Card Rate</th>
                    <th className="py-4 px-4 text-center text-sm font-medium text-slate-600">Free Tier</th>
                    <th className="py-4 px-4 text-left text-sm font-medium text-slate-600">Free Trial</th>
                    <th className="py-4 px-4 text-left text-sm font-medium text-slate-600">Best For</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {platforms.map((p) => (
                    <tr key={p.slug} className="hover:bg-slate-50 transition-colors">
                      <td className="py-4 px-4">
                        <Link href={`/software/${p.slug}`} className="font-medium text-slate-900 hover:text-brand-600">
                          {p.name}
                        </Link>
                      </td>
                      <td className="py-4 px-4">
                        <div className="text-sm font-semibold text-slate-900">{p.startingPrice}</div>
                        <div className="text-xs text-slate-500">{p.priceNote}</div>
                      </td>
                      <td className="py-4 px-4 text-sm text-slate-600">{p.perStaff}</td>
                      <td className="py-4 px-4 text-sm text-slate-600">{p.cardRate}</td>
                      <td className="py-4 px-4 text-center">
                        {p.freeOption ? (
                          <Check className="h-5 w-5 text-green-600 mx-auto" />
                        ) : (
                          <X className="h-5 w-5 text-slate-300 mx-auto" />
                        )}
                      </td>
                      <td className="py-4 px-4 text-sm text-slate-600">{p.freeTrial}</td>
                      <td className="py-4 px-4 text-sm text-slate-600">{p.bestFor}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-slate-400 mt-3 text-center">
              Pricing verified February 2026. Always confirm current pricing on the vendor&apos;s website before purchasing.
            </p>
          </div>
        </section>

        {/* Platform detail cards */}
        <section className="py-12 bg-slate-50">
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="text-2xl font-bold text-slate-900 text-center mb-8">
              Detailed Plan Breakdowns
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {platforms.map((p) => (
                <div key={p.slug} className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-slate-900 mb-1">{p.name}</h3>
                  <p className="text-sm text-slate-500 mb-4">{p.bestFor}</p>
                  <div className="space-y-2 mb-4">
                    {p.plans.map((plan) => (
                      <div key={plan.name} className="flex items-center justify-between text-sm">
                        <span className="text-slate-700">{plan.name}</span>
                        <span className="font-semibold text-slate-900">{plan.price}</span>
                      </div>
                    ))}
                  </div>
                  <div className="border-t border-slate-100 pt-3 mb-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-500">Card processing</span>
                      <span className="text-slate-700">{p.cardRate}</span>
                    </div>
                  </div>
                  <Link
                    href={`/software/${p.slug}`}
                    className="flex items-center justify-center gap-2 w-full rounded-lg border border-brand-200 bg-brand-50 px-4 py-2 text-sm font-medium text-brand-700 hover:bg-brand-100 transition-colors"
                  >
                    Full Review
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cost scenarios */}
        <section className="py-12">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="text-2xl font-bold text-slate-900 text-center mb-3">
              What Will You Actually Pay?
            </h2>
            <p className="text-center text-slate-600 mb-8 max-w-2xl mx-auto">
              Monthly costs vary dramatically based on your team size. Here&apos;s what each platform costs for common salon setups.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-xl shadow-sm border border-slate-200">
                <thead>
                  <tr className="border-b border-slate-200">
                    <th className="py-4 px-4 text-left text-sm font-medium text-slate-600">Platform</th>
                    <th className="py-4 px-4 text-center text-sm font-medium text-slate-600">Solo Provider</th>
                    <th className="py-4 px-4 text-center text-sm font-medium text-slate-600">3-Person Team</th>
                    <th className="py-4 px-4 text-center text-sm font-medium text-slate-600">6-Person Team</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {[
                    { name: "GlossGenius", solo: "$24/mo", three: "$48/mo", six: "$148/mo" },
                    { name: "Vagaro", solo: "$30/mo", three: "$50/mo", six: "$80/mo" },
                    { name: "Fresha", solo: "Free*", three: "~$40/mo*", six: "~$70/mo*" },
                    { name: "Booksy", solo: "$29.99/mo", three: "$49.99/mo", six: "$79.99/mo" },
                    { name: "Boulevard", solo: "$176/mo", three: "$176/mo", six: "$176/mo" },
                    { name: "Square Appointments", solo: "Free", three: "$29/mo", six: "$29/mo" },
                  ].map((row) => (
                    <tr key={row.name} className="hover:bg-slate-50 transition-colors">
                      <td className="py-4 px-4 font-medium text-slate-900 text-sm">{row.name}</td>
                      <td className="py-4 px-4 text-center text-sm text-slate-700">{row.solo}</td>
                      <td className="py-4 px-4 text-center text-sm text-slate-700">{row.three}</td>
                      <td className="py-4 px-4 text-center text-sm text-slate-700">{row.six}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-slate-400 mt-3 text-center">
              *Fresha estimates exclude marketplace commission fees on new client bookings. Actual costs depend on booking volume and new client acquisition.
            </p>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-12 bg-slate-50">
          <div className="mx-auto max-w-3xl px-6">
            <h2 className="text-2xl font-bold text-slate-900 text-center mb-8">
              Salon Software Pricing FAQs
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <details
                  key={i}
                  className="group bg-white border border-slate-200 rounded-xl"
                >
                  <summary className="flex items-center justify-between cursor-pointer p-5 text-slate-900 font-semibold text-sm">
                    {faq.question}
                    <span className="ml-4 flex-shrink-0 text-slate-400 group-open:rotate-45 transition-transform text-lg">+</span>
                  </summary>
                  <div className="px-5 pb-5 text-sm text-slate-700 leading-relaxed">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 bg-brand-400">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">
              Not sure which platform fits your budget?
            </h2>
            <p className="text-pink-100 mb-8 max-w-xl mx-auto">
              Use our head-to-head comparisons to see detailed feature breakdowns alongside real pricing.
            </p>
            <Link
              href="/vs/vagaro-vs-fresha"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-base font-medium text-brand-600 shadow-sm transition-all hover:bg-pink-50"
            >
              Compare Platforms
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
