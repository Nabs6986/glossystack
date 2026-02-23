import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/marketing/Navbar";
import { Footer } from "@/components/marketing/Footer";
import { Mail, Clock, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us — GlossyStack",
  description:
    "Get in touch with the GlossyStack editorial team. Send corrections, ask questions about salon software, or inquire about partnerships.",
  alternates: { canonical: "https://glossystack.com/contact" },
  openGraph: {
    title: "Contact Us — GlossyStack",
    description:
      "Get in touch with the GlossyStack editorial team. Send corrections, ask questions about salon software, or inquire about partnerships.",
    url: "https://glossystack.com/contact",
    siteName: "GlossyStack",
    type: "website",
  },
};

const contacts = [
  {
    label: "Editorial Inquiries",
    email: "editorial@glossystack.com",
    description:
      "Questions about our reviews, methodology, or suggestions for salon software platforms we should cover.",
  },
  {
    label: "Corrections & Updates",
    email: "corrections@glossystack.com",
    description:
      "Found an error in a review or pricing that needs updating? Let us know and we\u2019ll fix it within 48 hours.",
  },
  {
    label: "Partnerships & Vendors",
    email: "partnerships@glossystack.com",
    description:
      "Software vendors, affiliate networks, or beauty industry organizations interested in working with us.",
  },
];

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="mx-auto max-w-3xl px-6">
          {/* Breadcrumb */}
          <nav className="text-sm text-slate-500 mb-6">
            <Link href="/" className="hover:text-brand-600">Home</Link>
            {" / "}<span className="text-slate-900">Contact</span>
          </nav>

          <h1 className="text-3xl font-bold text-slate-900 mb-3">
            Contact GlossyStack
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed mb-8">
            Have a question, correction, or partnership inquiry? We&apos;d love to hear from you.
          </p>

          {/* Response time */}
          <div className="flex items-center gap-3 bg-brand-50 border border-brand-200 rounded-xl p-4 mb-8">
            <Clock className="h-5 w-5 text-brand-600 flex-shrink-0" />
            <p className="text-sm text-slate-700">
              We respond to every email within <strong>48 hours</strong> during business days. Most messages get a reply the same day.
            </p>
          </div>

          {/* Contact cards */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-5">How to Reach Us</h2>
            <div className="space-y-4">
              {contacts.map((contact) => (
                <div key={contact.email} className="border border-slate-200 rounded-xl p-5 bg-white">
                  <h3 className="font-bold text-slate-900 mb-1">{contact.label}</h3>
                  <p className="text-sm text-slate-600 mb-3">{contact.description}</p>
                  <a
                    href={`mailto:${contact.email}`}
                    className="inline-flex items-center gap-2 text-sm font-medium text-brand-600 hover:text-brand-700"
                  >
                    <Mail className="h-4 w-4" />
                    {contact.email}
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 text-center mb-10">
            <h2 className="text-lg font-bold text-slate-900 mb-2">Not sure which email to use?</h2>
            <p className="text-sm text-slate-600 mb-4">
              Send your message to our general editorial inbox and we&apos;ll route it to the right person.
            </p>
            <a
              href="mailto:editorial@glossystack.com"
              className="inline-flex items-center gap-2 bg-brand-400 text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-brand-500 transition-colors"
            >
              Email Us
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          {/* Salon owners */}
          <section className="mb-10 bg-amber-50 border border-amber-200 rounded-xl p-6">
            <h2 className="text-xl font-bold text-amber-900 mb-3">Salon Owners & Beauty Pros</h2>
            <p className="text-amber-800 leading-relaxed text-sm">
              If you&apos;re a salon owner, nail tech, or stylist who wants to share your experience with a software platform &mdash; good or bad &mdash; we&apos;d love to hear from you. Owner interviews are a core part of our review process, and your real-world feedback helps other beauty professionals make better decisions.
            </p>
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
