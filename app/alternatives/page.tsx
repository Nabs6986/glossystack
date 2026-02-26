import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Navbar } from "@/components/marketing/Navbar";
import { Footer } from "@/components/marketing/Footer";
import { getAllAlternativesPages } from "./_data/alternatives";

export const metadata: Metadata = {
  title: "Salon Software Alternatives 2026 | GlossyStack",
  description:
    "Compare the best salon software alternatives in 2026. Find detailed comparisons of Vagaro, GlossGenius, Fresha, Square Appointments, Boulevard, and Booksy alternatives.",
  alternates: { canonical: "https://glossystack.com/alternatives" },
};

export default function AlternativesIndexPage() {
  const pages = getAllAlternativesPages();

  return (
    <>
      <Navbar />
      <main className="pt-16">
        <section className="bg-gradient-to-b from-brand-50 to-white pt-12 pb-8">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Salon Software Alternatives 2026
            </h1>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              Thinking about switching your salon software? Browse our detailed
              alternatives guides to find the best platform for your business.
            </p>
          </div>
        </section>

        <section className="py-12">
          <div className="mx-auto max-w-4xl px-6">
            <div className="grid gap-6 sm:grid-cols-2">
              {pages.map((page) => (
                <Link
                  key={page.slug}
                  href={`/alternatives/${page.slug}`}
                  className="group bg-white rounded-xl border border-slate-200 p-6 shadow-sm hover:shadow-md hover:border-brand-300 transition-all"
                >
                  <h2 className="text-lg font-bold text-slate-900 group-hover:text-brand-600 transition-colors">
                    {page.productName} Alternatives
                  </h2>
                  <p className="mt-2 text-sm text-slate-500 line-clamp-2">
                    {page.metaDescription}
                  </p>
                  <div className="mt-4 flex items-center gap-1 text-sm font-medium text-brand-600">
                    View {page.alternatives.length} alternatives
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
