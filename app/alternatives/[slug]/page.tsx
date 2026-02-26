import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Star, Check, X, ChevronDown, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/marketing/Navbar";
import { Footer } from "@/components/marketing/Footer";
import { BreadcrumbSchema } from "@/components/schema/BreadcrumbSchema";
import { ItemListSchema } from "@/components/schema/ItemListSchema";
import { FAQSchema } from "@/components/schema/FAQSchema";
import {
  getAlternativesPage,
  getAllAlternativesSlugs,
} from "../_data/alternatives";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllAlternativesSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = getAlternativesPage(slug);
  if (!page) return { title: "Not Found" };

  return {
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: { canonical: `https://glossystack.com/alternatives/${slug}` },
    openGraph: {
      title: page.metaTitle,
      description: page.metaDescription,
      url: `https://glossystack.com/alternatives/${slug}`,
    },
  };
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`h-4 w-4 ${
            star <= Math.round(rating)
              ? "fill-yellow-400 text-yellow-400"
              : "fill-slate-200 text-slate-200"
          }`}
        />
      ))}
      <span className="ml-1 text-sm font-medium text-slate-600">{rating.toFixed(1)}</span>
    </div>
  );
}

function FeatureIcon({ value }: { value: string | boolean }) {
  if (value === true) return <Check className="h-5 w-5 text-green-500 mx-auto" />;
  if (value === false) return <X className="h-5 w-5 text-red-400 mx-auto" />;
  return <span className="text-sm text-slate-600">{value}</span>;
}

export default async function AlternativesSlugPage({ params }: Props) {
  const { slug } = await params;
  const page = getAlternativesPage(slug);

  if (!page) notFound();

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://glossystack.com" },
          { name: "Alternatives", url: "https://glossystack.com/alternatives" },
          { name: page.heroTitle, url: `https://glossystack.com/alternatives/${slug}` },
        ]}
      />
      <ItemListSchema
        name={page.heroTitle}
        url={`https://glossystack.com/alternatives/${slug}`}
        items={page.alternatives.map((alt) => ({
          name: alt.name,
          url: alt.website,
          description: alt.tagline,
        }))}
      />
      <FAQSchema faqs={page.faqs} />

      <Navbar />

      <main className="pt-16">
        {/* Hero */}
        <section className="bg-gradient-to-b from-brand-50 to-white pt-12 pb-8">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <nav className="mb-6 text-sm text-slate-500">
              <Link href="/" className="hover:text-brand-600">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/alternatives" className="hover:text-brand-600">Alternatives</Link>
              <span className="mx-2">/</span>
              <span className="text-slate-700">{page.productName} Alternatives</span>
            </nav>
            <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              {page.heroTitle}
            </h1>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              {page.heroDescription}
            </p>
          </div>
        </section>

        {/* Why Switch */}
        <section className="py-12">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Why People Switch from {page.productName}
            </h2>
            <div className="space-y-4">
              {page.whySwitch.map((reason, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-100 shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-brand-600">{i + 1}</span>
                  </div>
                  <p className="text-slate-700 leading-relaxed">{reason}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Alternatives Cards */}
        <section className="py-12 bg-slate-50">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">
              Top {page.alternatives.length} {page.productName} Alternatives
            </h2>
            <div className="space-y-6">
              {page.alternatives.map((alt, index) => (
                <div
                  key={alt.slug}
                  className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition-shadow"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-600 text-white text-xs font-bold">
                          {index + 1}
                        </span>
                        <h3 className="text-xl font-bold text-slate-900">{alt.name}</h3>
                      </div>
                      <p className="text-slate-500 text-sm mt-1">{alt.tagline}</p>
                    </div>
                    <div className="text-right shrink-0">
                      <StarRating rating={alt.rating} />
                      <p className="text-sm font-semibold text-brand-600 mt-1">{alt.priceRange}</p>
                    </div>
                  </div>

                  <div className="bg-brand-50 border border-brand-100 rounded-lg p-4 mb-4">
                    <p className="text-sm font-medium text-brand-800">
                      <strong>Key Differentiator:</strong> {alt.keyDifferentiator}
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <h4 className="text-sm font-semibold text-green-700 mb-2">Pros</h4>
                      <ul className="space-y-1.5">
                        {alt.pros.map((pro, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                            <Check className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                            {pro}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-red-700 mb-2">Cons</h4>
                      <ul className="space-y-1.5">
                        {alt.cons.map((con, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                            <X className="h-4 w-4 text-red-400 mt-0.5 shrink-0" />
                            {con}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <a
                    href={alt.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-brand-600 hover:text-brand-700 transition-colors"
                  >
                    Visit {alt.name} <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-12">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Feature Comparison
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-xl shadow-sm border border-slate-200">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50">
                    {page.comparisonHeaders.map((header) => (
                      <th
                        key={header}
                        className="py-4 px-4 text-left text-sm font-medium text-slate-600 first:text-slate-700"
                      >
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {page.comparisonRows.map((row) => (
                    <tr key={row.feature}>
                      <td className="py-4 px-4 text-sm font-medium text-slate-700">
                        {row.feature}
                      </td>
                      {row.values.map((val, i) => (
                        <td key={i} className="py-4 px-4 text-center">
                          <FeatureIcon value={val} />
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-12 bg-slate-50">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {page.faqs.map((faq, i) => (
                <details
                  key={i}
                  className="group bg-white rounded-lg border border-slate-200 shadow-sm"
                >
                  <summary className="flex items-center justify-between cursor-pointer p-5">
                    <h3 className="font-semibold text-slate-900 pr-4">{faq.question}</h3>
                    <ChevronDown className="h-5 w-5 text-slate-400 group-open:rotate-180 transition-transform shrink-0" />
                  </summary>
                  <div className="px-5 pb-5">
                    <p className="text-slate-600 text-sm leading-relaxed">{faq.answer}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Other Alternatives */}
        <section className="py-12">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              More Salon Software Alternatives
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              {getAllAlternativesSlugs()
                .filter((s) => s !== slug)
                .map((s) => {
                  const otherPage = getAlternativesPage(s);
                  if (!otherPage) return null;
                  return (
                    <Link
                      key={s}
                      href={`/alternatives/${s}`}
                      className="flex items-center justify-between bg-white rounded-lg p-4 border border-slate-200 hover:border-brand-300 hover:shadow-sm transition-all"
                    >
                      <span className="font-medium text-slate-900">{otherPage.productName} Alternatives</span>
                      <ArrowRight className="h-4 w-4 text-slate-400" />
                    </Link>
                  );
                })}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
