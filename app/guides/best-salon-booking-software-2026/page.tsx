import type { Metadata } from "next";
import Link from "next/link";
import { Star, Check, X, ExternalLink, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/marketing/Navbar";
import { Footer } from "@/components/marketing/Footer";
import { BreadcrumbSchema } from "@/components/schema/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Best Salon Booking Software 2026 — Top 5 Picks Compared | GlossyStack",
  description:
    "The best salon booking software for 2026. Vagaro is our top pick for most salons ($30/mo). Compare Vagaro, GlossGenius, Mangomint, Fresha, and Boulevard side-by-side.",
  alternates: { canonical: "https://glossystack.com/guides/best-salon-booking-software-2026" },
};

interface Pick {
  name: string;
  slug: string;
  rating: number;
  price: string;
  badge: string;
  affiliateUrl: string;
  bestFor: string;
  highlight: string;
  pros: string[];
  cons: string[];
  freeTrial: string;
}

const picks: Pick[] = [
  {
    name: "Vagaro",
    slug: "vagaro",
    rating: 4.7,
    price: "From $30/month",
    badge: "Editor's Choice",
    affiliateUrl: "https://www.vagaro.com/pro/pricing",
    bestFor: "Multi-staff salons wanting marketplace exposure and affordability",
    highlight: "Best overall — excellent marketplace reach with the most competitive pricing",
    pros: ["$30/month starting price", "Large consumer marketplace", "Payroll and HR tools", "30-day free trial"],
    cons: ["Less premium than Mangomint", "Interface can feel busy"],
    freeTrial: "30-day free trial",
  },
  {
    name: "GlossGenius",
    slug: "glossgenius",
    rating: 4.8,
    price: "From $24/month",
    badge: "Best for Solos",
    affiliateUrl: "https://glossgenius.com",
    bestFor: "Solo stylists and nail techs wanting a polished, easy experience",
    highlight: "Most beautiful interface with the lowest starting price",
    pros: ["$24/month starting price", "Stunning client-facing design", "Built-in payment processing", "14-day free trial"],
    cons: ["Limited multi-staff features", "Basic reporting"],
    freeTrial: "14-day free trial",
  },
  {
    name: "Mangomint",
    slug: "mangomint",
    rating: 4.9,
    price: "From $165/month",
    badge: "Best Premium",
    affiliateUrl: "https://mangomint.com",
    bestFor: "Established salons with 5+ staff seeking premium automation",
    highlight: "Highest-rated salon software — best automation and integrations",
    pros: ["Highest user satisfaction", "Advanced automation", "Modern API and integrations", "Intuitive design"],
    cons: ["Expensive for small salons", "No marketplace"],
    freeTrial: "Trial available",
  },
  {
    name: "Fresha",
    slug: "fresha",
    rating: 4.6,
    price: "Free + transaction fees",
    badge: "Best Free",
    affiliateUrl: "https://fresha.com",
    bestFor: "Budget-conscious salon owners wanting zero monthly fees",
    highlight: "Only salon platform with a genuinely free plan (pay-per-transaction)",
    pros: ["No monthly subscription", "Large marketplace", "Online booking included", "Payment processing included"],
    cons: ["Transaction fees add up", "Less control over branding", "Limited customization"],
    freeTrial: "Free plan",
  },
  {
    name: "Boulevard",
    slug: "boulevard",
    rating: 4.7,
    price: "From $176/month",
    badge: "Best for Luxury",
    affiliateUrl: "https://joinblvd.com",
    bestFor: "Upscale salons and med spas",
    highlight: "Purpose-built for luxury salon experiences with premium client journey",
    pros: ["Premium client experience", "Precision scheduling", "Self-checkout kiosks", "Med spa features"],
    cons: ["High starting price", "Complex for small salons"],
    freeTrial: "Demo available",
  },
];

const howToChoose = [
  {
    title: "Determine your team size",
    description:
      "Solo stylists can thrive on GlossGenius ($24/mo). Multi-staff salons need team scheduling, which Vagaro handles best at $30/mo. Large salons (5+ staff) benefit from Mangomint's advanced automation.",
  },
  {
    title: "Set your budget",
    description:
      "Free options exist (Fresha), but transaction fees add up at higher volumes. Mid-range platforms ($24-$30/mo) cover most needs. Premium tools ($165+/mo) are worth it only for established, high-volume salons.",
  },
  {
    title: "Evaluate your growth goals",
    description:
      "Need new clients? Vagaro and Fresha have large consumer marketplaces. Want to retain existing clients? GlossGenius and Mangomint excel at the client experience. Luxury positioning? Boulevard was built for that.",
  },
  {
    title: "Check integration needs",
    description:
      "If you need payroll, Vagaro has it built in. For advanced integrations with third-party tools, Mangomint has the most modern API. Boulevard integrates with med spa equipment and HIPAA-compliant systems.",
  },
];

const faqs = [
  {
    question: "What is the best salon booking software in 2026?",
    answer:
      "Vagaro is the best salon booking software for most salons in 2026. At $30/month, it offers the best balance of features, marketplace exposure, and affordability. For solo stylists, GlossGenius ($24/mo) is the top pick. For established salons with 5+ staff, Mangomint ($165/mo) has the highest user satisfaction.",
  },
  {
    question: "Is there free salon booking software?",
    answer:
      "Yes. Fresha offers a genuinely free plan with no monthly subscription — you only pay transaction fees when clients book. Square Appointments also has a free tier for solo professionals. Both are viable for getting started, though paid platforms offer more features as you grow.",
  },
  {
    question: "How much does salon software cost per month?",
    answer:
      "Salon software ranges from $0 (Fresha free plan) to $176+/month (Boulevard). Most salon owners spend $24-$30/month. GlossGenius starts at $24/month, Vagaro at $30/month. Premium platforms like Mangomint ($165/mo) and Boulevard ($176/mo) are designed for established, high-volume salons.",
  },
  {
    question: "Can I switch salon software without losing client data?",
    answer:
      "Yes. All major salon platforms support data migration via CSV import or direct transfer. GlossGenius offers free white-glove data migration. Vagaro and Mangomint both have migration support teams. Plan for 1-2 weeks of transition time to fully settle in.",
  },
  {
    question: "What features should salon booking software have?",
    answer:
      "Essential features include online booking, automated reminders (SMS/email), payment processing, client management, and a booking website. For multi-staff salons, add team scheduling, payroll, and commission tracking. Marketing tools (email campaigns, reviews management) and a consumer marketplace are valuable bonuses.",
  },
];

const citations = [
  { label: "Vagaro Pricing", url: "https://www.vagaro.com/pro/pricing" },
  { label: "GlossGenius Plans", url: "https://glossgenius.com" },
  { label: "Mangomint Pricing", url: "https://mangomint.com/pricing" },
  { label: "Fresha Partner Page", url: "https://fresha.com/for-business" },
  { label: "Boulevard Pricing", url: "https://joinblvd.com/pricing" },
  { label: "G2 Salon Software Reviews", url: "https://www.g2.com/categories/salon-management" },
  { label: "Capterra Salon Software", url: "https://www.capterra.com/salon-software/" },
];

const jsonLd = {
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

function StarDisplay({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`h-4 w-4 ${
            star <= Math.floor(rating)
              ? "text-amber-400 fill-amber-400"
              : star <= rating
                ? "text-amber-400 fill-amber-200"
                : "text-slate-200"
          }`}
        />
      ))}
      <span className="ml-1 text-sm font-semibold text-slate-700">{rating}</span>
    </div>
  );
}

export default function BestSalonBookingSoftware2026() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://glossystack.com" },
          { name: "Guides", url: "https://glossystack.com/guides" },
          {
            name: "Best Salon Booking Software 2026",
            url: "https://glossystack.com/guides/best-salon-booking-software-2026",
          },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main className="py-12">
        <article className="mx-auto max-w-4xl px-6">
          {/* Header */}
          <header className="mb-10">
            <div className="flex items-center gap-2 mb-4">
              <Link
                href="/guides"
                className="text-sm text-brand-600 hover:text-brand-700 font-medium"
              >
                Guides
              </Link>
              <span className="text-slate-300">/</span>
              <span className="text-sm text-slate-500">Answer Hub</span>
            </div>
            <h1 className="text-4xl font-bold text-slate-900 mb-4">
              Best Salon Booking Software 2026
            </h1>
            <p className="text-lg text-slate-600 mb-6">
              We tested and compared the top salon booking platforms. Here are
              our 5 picks for every salon type and budget.
            </p>
            <div className="flex items-center gap-4 text-sm text-slate-500">
              <span>Updated February 2026</span>
              <span className="text-slate-300">|</span>
              <span>5 platforms compared</span>
            </div>
          </header>

          {/* Affiliate Disclosure - Inline since GlossyStack has no component */}
          <div className="rounded-lg border border-amber-200 bg-amber-50 p-4 mb-8">
            <p className="text-sm text-amber-800">
              <strong>Affiliate Disclosure:</strong> GlossyStack may earn a
              commission when you purchase software through links on this page.
              This doesn&apos;t affect our editorial scores or rankings.
            </p>
          </div>

          {/* TL;DR */}
          <section className="rounded-xl border border-brand-200 bg-brand-50 p-6 mb-10">
            <h2 className="text-lg font-bold text-slate-900 mb-3">
              TL;DR — Our Top Picks
            </h2>
            <p className="text-slate-700 leading-relaxed">
              For most salons in 2026, <strong>Vagaro ($30/mo)</strong> is the
              best booking software — offering marketplace reach, scheduling,
              payments, and marketing at the most competitive price with a
              30-day trial. <strong>GlossGenius ($24/mo)</strong> is the top
              pick for solo stylists. <strong>Mangomint ($165/mo)</strong> has
              the highest user satisfaction ratings for established salons.{" "}
              <strong>Fresha</strong> offers the only free plan
              (transaction-fee model). <strong>Boulevard ($176/mo)</strong> is
              purpose-built for luxury salons and med spas.
            </p>
          </section>

          {/* Picks */}
          <section className="space-y-8 mb-12">
            {picks.map((pick, index) => (
              <div
                key={pick.slug}
                id={pick.slug}
                className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-sm font-bold text-slate-500">
                        #{index + 1}
                      </span>
                      <span className="rounded-full bg-brand-100 px-2.5 py-0.5 text-xs font-semibold text-brand-700">
                        {pick.badge}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900">
                      {pick.name}
                    </h3>
                    <p className="text-sm text-slate-600 mt-1">
                      {pick.highlight}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-slate-900">
                      {pick.price}
                    </div>
                    <StarDisplay rating={pick.rating} />
                  </div>
                </div>

                <div className="rounded-lg bg-slate-50 p-4 mb-4">
                  <p className="text-sm text-slate-700">
                    <strong>Best for:</strong> {pick.bestFor}
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <h4 className="text-sm font-semibold text-slate-900 mb-2">
                      Pros
                    </h4>
                    <ul className="space-y-1.5">
                      {pick.pros.map((pro) => (
                        <li
                          key={pro}
                          className="flex items-start gap-2 text-sm text-slate-600"
                        >
                          <Check className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-900 mb-2">
                      Cons
                    </h4>
                    <ul className="space-y-1.5">
                      {pick.cons.map((con) => (
                        <li
                          key={con}
                          className="flex items-start gap-2 text-sm text-slate-600"
                        >
                          <X className="h-4 w-4 text-red-400 shrink-0 mt-0.5" />
                          {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-100">
                  <a
                    href={pick.affiliateUrl}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="inline-flex items-center gap-2 rounded-lg bg-brand-400 px-4 py-2 text-sm font-medium text-white hover:bg-brand-500 transition-colors"
                  >
                    Try {pick.name}
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                  <span className="text-xs text-slate-500">
                    {pick.freeTrial}
                  </span>
                </div>
              </div>
            ))}
          </section>

          {/* How to Choose */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              How to Choose the Right Salon Software
            </h2>
            <div className="space-y-4">
              {howToChoose.map((item, idx) => (
                <div
                  key={item.title}
                  className="flex gap-4 rounded-lg border border-slate-100 p-5"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-100 text-sm font-bold text-brand-700 shrink-0">
                    {idx + 1}
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Comparison Table */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Quick Comparison
            </h2>
            <div className="overflow-x-auto rounded-xl border border-slate-200">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50">
                    <th className="text-left px-4 py-3 font-semibold text-slate-700">
                      Software
                    </th>
                    <th className="text-left px-4 py-3 font-semibold text-slate-700">
                      Price
                    </th>
                    <th className="text-left px-4 py-3 font-semibold text-slate-700">
                      Rating
                    </th>
                    <th className="text-left px-4 py-3 font-semibold text-slate-700">
                      Best For
                    </th>
                    <th className="text-left px-4 py-3 font-semibold text-slate-700">
                      Free Trial
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {picks.map((pick) => (
                    <tr key={pick.slug} className="hover:bg-slate-50">
                      <td className="px-4 py-3 font-medium text-slate-900">
                        {pick.name}
                      </td>
                      <td className="px-4 py-3 text-slate-600">
                        {pick.price}
                      </td>
                      <td className="px-4 py-3 text-slate-600">
                        {pick.rating}/5
                      </td>
                      <td className="px-4 py-3 text-slate-600">
                        {pick.bestFor.split(" ").slice(0, 5).join(" ")}
                      </td>
                      <td className="px-4 py-3 text-slate-600">
                        {pick.freeTrial}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* FAQs */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <div
                  key={faq.question}
                  className="rounded-xl border border-slate-100 p-5"
                >
                  <h3 className="font-semibold text-slate-900 mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Citations */}
          <section className="mb-12">
            <h2 className="text-lg font-bold text-slate-900 mb-4">
              Sources &amp; Citations
            </h2>
            <ul className="space-y-2">
              {citations.map((cite) => (
                <li key={cite.url}>
                  <a
                    href={cite.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-brand-600 hover:text-brand-700 underline"
                  >
                    {cite.label}
                  </a>
                </li>
              ))}
            </ul>
          </section>

          {/* CTA */}
          <section className="rounded-xl bg-gradient-to-r from-brand-400 to-pink-500 p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-3">
              Ready to pick your salon software?
            </h2>
            <p className="text-pink-100 mb-6 max-w-lg mx-auto">
              Start a free trial with our top pick and see the difference in
              your first week.
            </p>
            <a
              href="https://www.vagaro.com/pro/pricing"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 font-semibold text-brand-600 hover:bg-pink-50 transition-colors"
            >
              Try Vagaro Free for 30 Days
              <ArrowRight className="h-4 w-4" />
            </a>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}
