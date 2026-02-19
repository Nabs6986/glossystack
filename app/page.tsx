import Link from "next/link";
import { ArrowRight, Check, Star, Users, Zap, Shield } from "lucide-react";
import { Navbar } from "@/components/marketing/Navbar";
import { Footer } from "@/components/marketing/Footer";

interface SoftwareItem {
  name: string;
  slug: string;
  description: string;
  price: string;
  rating: number;
  reviews: number;
  bestFor: string;
  highlighted: boolean;
}

const software: SoftwareItem[] = [
  {
    name: "Vagaro",
    slug: "vagaro",
    description: "All-in-one salon management with payroll, marketing, and a large consumer marketplace.",
    price: "From $30/mo",
    rating: 4.7,
    reviews: 3200,
    bestFor: "Multi-staff salons",
    highlighted: true,
  },
  {
    name: "Fresha",
    slug: "fresha",
    description: "Completely free subscription model — pay only small fees on new client bookings.",
    price: "Free + transaction fees",
    rating: 4.6,
    reviews: 2800,
    bestFor: "Budget-conscious owners",
    highlighted: false,
  },
  {
    name: "GlossGenius",
    slug: "glossgenius",
    description: "Beautiful, modern platform built specifically for beauty professionals with built-in card reader.",
    price: "From $24/mo",
    rating: 4.8,
    reviews: 1900,
    bestFor: "Solo nail techs & stylists",
    highlighted: false,
  },
  {
    name: "Booksy",
    slug: "booksy",
    description: "Large marketplace with strong booking features and built-in client discovery.",
    price: "From $29.99/mo",
    rating: 4.5,
    reviews: 2100,
    bestFor: "Building a new client base",
    highlighted: false,
  },
  {
    name: "Mangomint",
    slug: "mangomint",
    description: "Highest-rated salon software for established salons. Lightning-fast, beautiful UI.",
    price: "From $165/mo",
    rating: 4.9,
    reviews: 580,
    bestFor: "Established salons (5+ staff)",
    highlighted: false,
  },
  {
    name: "Boulevard",
    slug: "boulevard",
    description: "Premium salon management with smart scheduling and exceptional client experience tools.",
    price: "From $176/mo",
    rating: 4.7,
    reviews: 420,
    bestFor: "Upscale salons & spas",
    highlighted: false,
  },
  {
    name: "Square Appointments",
    slug: "square-appointments",
    description: "Free for solos, integrates with the full Square ecosystem for POS and payments.",
    price: "Free (solo) / $29/mo+",
    rating: 4.4,
    reviews: 1800,
    bestFor: "Businesses already on Square",
    highlighted: false,
  },
  {
    name: "Zenoti",
    slug: "zenoti",
    description: "Enterprise-grade platform for multi-location chains with advanced analytics and AI features.",
    price: "Custom pricing",
    rating: 4.5,
    reviews: 750,
    bestFor: "Large chains & med spas",
    highlighted: false,
  },
];

function SoftwareCard({ software }: { software: SoftwareItem }) {
  return (
    <div className={`bg-white rounded-xl p-6 shadow-sm border transition-all hover:shadow-md hover:-translate-y-1 ${software.highlighted ? 'border-brand-300 ring-1 ring-brand-100' : 'border-slate-200'}`}>
      {software.highlighted && (
        <span className="inline-block px-2 py-1 text-xs font-medium text-brand-700 bg-brand-50 rounded-full mb-3">
          Most Popular
        </span>
      )}
      <h3 className="text-lg font-semibold text-slate-900">{software.name}</h3>
      <div className="flex items-center gap-1 mt-1 mb-3">
        <Star className="h-4 w-4 text-amber-400 fill-amber-400" />
        <span className="text-sm font-medium text-slate-700">{software.rating}</span>
        <span className="text-sm text-slate-500">({software.reviews.toLocaleString()} reviews)</span>
      </div>
      <p className="text-sm text-slate-600 mb-4">{software.description}</p>
      <div className="flex items-center justify-between">
        <span className="text-sm font-semibold text-slate-900">{software.price}</span>
        <span className="text-xs text-slate-500">Best for: {software.bestFor}</span>
      </div>
      <Link
        href={`/software/${software.slug}`}
        className="mt-4 flex items-center justify-center gap-2 w-full rounded-lg border border-brand-200 bg-brand-50 px-4 py-2 text-sm font-medium text-brand-700 hover:bg-brand-100 transition-colors"
      >
        Read Review
        <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-pink-50 to-white pt-28 pb-16">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-brand-100 px-4 py-1.5 text-sm font-medium text-brand-700 mb-6">
              ✨ 2026 Salon Software Guide — Updated Monthly
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Find the Best Nail & Beauty Salon Software
            </h1>
            <p className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto">
              Independent, unbiased comparisons to help you choose the right software for your salon. 
              From solo nail techs to multi-location spas — we cover them all.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/vs/vagaro-vs-fresha"
                className="inline-flex items-center gap-2 rounded-lg bg-brand-400 px-6 py-3 text-base font-medium text-white shadow-sm transition-all hover:bg-brand-500 hover:shadow-md"
              >
                Compare Top Platforms
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/for/nail-salons"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-6 py-3 text-base font-medium text-slate-700 hover:bg-slate-50 transition-colors"
              >
                Find My Salon Type
              </Link>
            </div>
          </div>
        </section>

        {/* Trust Badges */}
        <section className="py-8 border-y border-slate-100 bg-white">
          <div className="mx-auto max-w-4xl px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="flex flex-col items-center">
                <Check className="h-6 w-6 text-brand-400 mb-2" />
                <span className="text-sm font-medium text-slate-900">Independent Reviews</span>
              </div>
              <div className="flex flex-col items-center">
                <Shield className="h-6 w-6 text-brand-400 mb-2" />
                <span className="text-sm font-medium text-slate-900">No Bias Guarantee</span>
              </div>
              <div className="flex flex-col items-center">
                <Users className="h-6 w-6 text-brand-400 mb-2" />
                <span className="text-sm font-medium text-slate-900">Real Salon Owner Data</span>
              </div>
              <div className="flex flex-col items-center">
                <Zap className="h-6 w-6 text-brand-400 mb-2" />
                <span className="text-sm font-medium text-slate-900">Updated Monthly</span>
              </div>
            </div>
          </div>
        </section>

        {/* Software Grid */}
        <section className="py-16">
          <div className="mx-auto max-w-6xl px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900">Top Nail & Beauty Salon Platforms</h2>
              <p className="mt-3 text-lg text-slate-600">Compare features, pricing, and reviews across the leading solutions</p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {software.map((s) => (
                <SoftwareCard key={s.slug} software={s} />
              ))}
            </div>
          </div>
        </section>

        {/* Quick Comparison Table */}
        <section className="py-16 bg-slate-50">
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="text-2xl font-bold text-slate-900 text-center mb-8">Quick Pricing Comparison</h2>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-xl shadow-sm border border-slate-200">
                <thead>
                  <tr className="border-b border-slate-200">
                    <th className="py-4 px-4 text-left text-sm font-medium text-slate-600">Platform</th>
                    <th className="py-4 px-4 text-left text-sm font-medium text-slate-600">Starting Price</th>
                    <th className="py-4 px-4 text-left text-sm font-medium text-slate-600">Best For</th>
                    <th className="py-4 px-4 text-center text-sm font-medium text-slate-600">Rating</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {software.map((s) => (
                    <tr key={s.slug} className="hover:bg-slate-50 transition-colors">
                      <td className="py-4 px-4">
                        <Link href={`/software/${s.slug}`} className="font-medium text-slate-900 hover:text-brand-600">{s.name}</Link>
                      </td>
                      <td className="py-4 px-4 text-sm text-slate-600">{s.price}</td>
                      <td className="py-4 px-4 text-sm text-slate-600">{s.bestFor}</td>
                      <td className="py-4 px-4 text-center">
                        <div className="flex items-center justify-center gap-1">
                          <Star className="h-4 w-4 text-amber-400 fill-amber-400" />
                          <span className="text-sm font-medium text-slate-700">{s.rating}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Popular Comparisons */}
        <section className="py-16">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="text-2xl font-bold text-slate-900 text-center mb-3">Popular Comparisons</h2>
            <p className="text-center text-slate-600 mb-8">See how the top platforms stack up head-to-head</p>
            <div className="grid gap-4 md:grid-cols-3">
              {[
                { href: "/vs/vagaro-vs-fresha", label: "Vagaro vs Fresha" },
                { href: "/vs/vagaro-vs-glossgenius", label: "Vagaro vs GlossGenius" },
                { href: "/vs/glossgenius-vs-mangomint", label: "GlossGenius vs Mangomint" },
                { href: "/vs/fresha-vs-booksy", label: "Fresha vs Booksy" },
                { href: "/vs/boulevard-vs-zenoti", label: "Boulevard vs Zenoti" },
                { href: "/vs/booksy-vs-square-appointments", label: "Booksy vs Square" },
              ].map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="flex items-center justify-between bg-white rounded-lg p-4 border border-slate-200 hover:border-brand-300 hover:shadow-sm transition-all"
                >
                  <span className="font-medium text-slate-900">{label}</span>
                  <ArrowRight className="h-4 w-4 text-slate-400" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* By Salon Type */}
        <section className="py-16 bg-pink-50">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="text-2xl font-bold text-slate-900 text-center mb-3">Find Software by Salon Type</h2>
            <p className="text-center text-slate-600 mb-8">Get personalized recommendations for your specific salon</p>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {[
                { href: "/for/nail-salons", icon: "💅", label: "Nail Salons" },
                { href: "/for/hair-salons", icon: "✂️", label: "Hair Salons" },
                { href: "/for/spas", icon: "🧖", label: "Day Spas" },
                { href: "/for/solo-nail-techs", icon: "🎨", label: "Solo Nail Techs" },
                { href: "/for/booth-renters", icon: "🏪", label: "Booth Renters" },
                { href: "/for/multi-location-salons", icon: "🏢", label: "Multi-Location" },
                { href: "/for/med-spas", icon: "💉", label: "Med Spas" },
                { href: "/for/barbershops", icon: "💈", label: "Barbershops" },
              ].map(({ href, icon, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="flex flex-col items-center gap-2 bg-white rounded-xl p-5 border border-slate-200 hover:border-brand-300 hover:shadow-sm transition-all text-center"
                >
                  <span className="text-2xl">{icon}</span>
                  <span className="text-sm font-medium text-slate-900">{label}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-brand-400">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to find your perfect salon software?
            </h2>
            <p className="text-pink-100 mb-8 max-w-xl mx-auto">
              Use our comparison tool to see detailed feature breakdowns, honest pricing, and real reviews.
            </p>
            <Link
              href="/vs/vagaro-vs-fresha"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-base font-medium text-brand-600 shadow-sm transition-all hover:bg-pink-50"
            >
              Start Comparing
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
