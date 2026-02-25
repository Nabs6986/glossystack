import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import { Navbar } from "@/components/marketing/Navbar";
import { Footer } from "@/components/marketing/Footer";
import { BreadcrumbSchema } from "@/components/schema/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Salon Software Guides — GlossyStack",
  description:
    "In-depth guides to help you choose the best salon booking and management software. Expert picks, pricing breakdowns, and honest recommendations.",
  alternates: { canonical: "https://glossystack.com/guides" },
};

const guides = [
  {
    title: "Best Salon Booking Software 2026",
    description:
      "Our top 5 picks for salon booking software — compared by pricing, features, and who each platform is best for. Updated for 2026.",
    href: "/guides/best-salon-booking-software-2026",
    badge: "Answer Hub",
    date: "February 2026",
  },
];

export default function GuidesIndexPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://glossystack.com" },
          { name: "Guides", url: "https://glossystack.com/guides" },
        ]}
      />
      <Navbar />
      <main className="py-16">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 rounded-full bg-brand-100 px-4 py-1.5 text-sm font-medium text-brand-700 mb-4">
              <BookOpen className="h-4 w-4" />
              Expert Guides
            </div>
            <h1 className="text-4xl font-bold text-slate-900 mb-4">
              Salon Software Guides
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              In-depth guides to help you choose the right software for your
              salon. Expert picks, real pricing, and honest recommendations.
            </p>
          </div>

          <div className="space-y-4">
            {guides.map((guide) => (
              <Link
                key={guide.href}
                href={guide.href}
                className="group block rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md hover:border-brand-300 transition-all"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="inline-block rounded-full bg-brand-100 px-2.5 py-0.5 text-xs font-semibold text-brand-700">
                        {guide.badge}
                      </span>
                      <span className="text-xs text-slate-500">
                        {guide.date}
                      </span>
                    </div>
                    <h2 className="text-xl font-bold text-slate-900 group-hover:text-brand-600 transition-colors mb-2">
                      {guide.title}
                    </h2>
                    <p className="text-sm text-slate-600">
                      {guide.description}
                    </p>
                  </div>
                  <ArrowRight className="h-5 w-5 text-slate-400 group-hover:text-brand-500 group-hover:translate-x-1 transition-all shrink-0 ml-4 mt-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
