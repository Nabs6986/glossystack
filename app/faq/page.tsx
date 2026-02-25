import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/marketing/Navbar";
import { Footer } from "@/components/marketing/Footer";
import { BreadcrumbSchema } from "@/components/schema/BreadcrumbSchema";
import { FAQSchema } from "@/components/schema/FAQSchema";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | GlossyStack",
  description:
    "Answers to common questions about salon and beauty software — appointment booking, POS systems, client management, stylist commissions, and choosing the right platform for your salon.",
  alternates: { canonical: "https://glossystack.com/faq" },
};

const faqSections = [
  {
    id: "general",
    title: "General",
    questions: [
      {
        q: "What is salon management software?",
        a: "Salon management software is a platform that handles the day-to-day operations of hair salons, nail salons, and beauty businesses — appointment scheduling, point-of-sale transactions, client management, staff scheduling, inventory tracking, and marketing. It replaces the patchwork of paper appointment books, separate card readers, and spreadsheet-based client lists with a single integrated system.",
      },
      {
        q: "Who needs salon software?",
        a: "Any salon with 2 or more service providers will benefit significantly. Solo operators can start with free tools like Fresha or Square Appointments, but once you're managing multiple stylists, service menus, and inventory, purpose-built salon software saves hours every week. The ROI is clearest for salons with 3–20 staff members.",
      },
      {
        q: "Is salon software different for nail salons vs. hair salons?",
        a: "The core features overlap (booking, payments, client management), but there are differences in what matters most. Nail salons prioritize service duration accuracy, walk-in management, and retail/product sales. Hair salons need stronger stylist commission tracking, color formula storage, and rebooking automation. Most platforms like Vagaro and GlossGenius handle both, but some excel in one area over the other. We flag these differences in every review.",
      },
      {
        q: "Does GlossyStack review software or sell software?",
        a: "Both, in a way. GlossyStack is primarily an independent review and comparison site for salon software — we evaluate platforms like Vagaro, Fresha, GlossGenius, Booksy, Boulevard, and more. We also provide tools and guides to help salon owners make better software decisions. Our reviews are editorially independent, and affiliate relationships never influence our scores.",
      },
    ],
  },
  {
    id: "pricing",
    title: "Pricing & Costs",
    questions: [
      {
        q: "How much does salon software cost in 2026?",
        a: "Salon software ranges from free (Fresha, Square Appointments for solos) to $400+/month for enterprise platforms. GlossGenius starts at $24/month, Booksy at $29.99/month, Vagaro at $30/month, Mangomint at $165/month, Boulevard at $176/month, and Zenoti at custom pricing for large chains. Most charge monthly with no long-term contracts.",
      },
      {
        q: "Is there free salon software that's actually good?",
        a: "Yes. Fresha is genuinely free for businesses — they monetize through a small fee on new client bookings (2.19% + $0.20 per new client only). Square Appointments is free for individual providers. Both are legitimate starting points for new salons or solo operators. You'll outgrow free tiers once you need multi-staff scheduling, advanced reporting, or marketing automation.",
      },
      {
        q: "Does salon software handle service menus and pricing tiers?",
        a: "Yes. All major salon platforms let you create detailed service menus with categories, durations, pricing, and staff assignments. Most support pricing tiers (junior stylist vs. senior stylist rates for the same service), add-on services, and package deals. Platforms like Boulevard and Mangomint excel at complex multi-tier pricing.",
      },
      {
        q: "Are payment processing fees included or extra?",
        a: "It varies by platform. Some (like GlossGenius) include processing in higher plan tiers. Others charge standard rates (typically 2.5–3.5% + $0.20–$0.30 per transaction) on top of the subscription. Fresha charges no subscription but takes a per-transaction cut on new clients. Always calculate total cost including processing fees — not just the monthly subscription.",
      },
    ],
  },
  {
    id: "features",
    title: "Features & Capabilities",
    questions: [
      {
        q: "Can salon software manage stylist commissions?",
        a: "Yes. Most mid-tier and enterprise salon platforms include commission tracking. You can configure percentage-based or tiered commission structures per service provider, track product sales commissions separately, and run payroll-ready commission reports. Vagaro, Boulevard, and Mangomint are particularly strong in this area. Simpler platforms like GlossGenius handle it at a basic level.",
      },
      {
        q: "Does salon software support online booking?",
        a: "Yes — this is a core feature of every modern salon platform. Clients can book appointments 24/7 from your website, social media profiles, or a dedicated booking page. The best platforms (Fresha, GlossGenius, Vagaro) also appear in marketplace searches where new clients discover your salon. Look for features like real-time availability, automated confirmations, and waitlist management.",
      },
      {
        q: "Can it handle walk-ins alongside scheduled appointments?",
        a: "Yes. Most salon software includes a walk-in mode that lets front desk staff quickly add a client to the schedule without going through the full online booking flow. Platforms like Booksy and Vagaro handle this smoothly. The software adjusts provider availability in real time so walk-ins don't conflict with pre-booked appointments.",
      },
      {
        q: "Does salon software include POS and card processing?",
        a: "Yes. Most platforms either include built-in POS with their own card readers (GlossGenius, Boulevard, Square Appointments) or integrate with third-party payment processors. Features typically include split payments, tipping, gift cards, product sales, and end-of-day reconciliation. POS quality varies significantly — we evaluate checkout experience in every review.",
      },
      {
        q: "Can it track client history, preferences, and formulas?",
        a: "Yes. Client management is a core feature. You can store visit history, service notes, color formulas, product preferences, allergies, and communication preferences per client. Platforms like Mangomint and Boulevard offer especially detailed client profiles. This data powers rebooking reminders and personalized marketing.",
      },
      {
        q: "Does salon software include marketing tools?",
        a: "Most platforms include some marketing capabilities — automated rebooking reminders, birthday messages, and review requests are standard. Vagaro leads with built-in email and SMS campaigns, social media tools, and a client marketplace. GlossGenius offers branded website builders. For advanced marketing automation, Boulevard and Zenoti provide the deepest toolsets.",
      },
    ],
  },
  {
    id: "switching",
    title: "Switching & Migration",
    questions: [
      {
        q: "How hard is it to switch salon software?",
        a: "The difficulty depends on how much data you need to migrate. Client records and contact information typically transfer via CSV export/import. Appointment history, color formulas, and gift card balances are harder to move — some platforms offer migration assistance, others require manual re-entry. Plan for 2–3 weeks of overlap during transition.",
      },
      {
        q: "Can I import my client list from another platform?",
        a: "Yes. All major salon platforms support CSV import for client records. Export your client list from your current platform (names, emails, phone numbers, notes), then import it into the new system. Some platforms like Vagaro and Fresha offer direct migration tools from specific competitors. Your new vendor's onboarding team can usually assist.",
      },
      {
        q: "When is the best time to switch salon software?",
        a: "A slower business period (typically January or a seasonal lull for your area) is ideal. Avoid switching during your busiest season — the risk of booking disruptions and client confusion is highest when volume is peak. Give yourself at least 2 weeks of parallel operation before fully cutting over.",
      },
    ],
  },
  {
    id: "choosing",
    title: "Choosing the Right Software",
    questions: [
      {
        q: "What should I look for in salon software?",
        a: "Prioritize these areas based on your salon's needs: (1) booking and scheduling flexibility, (2) POS and payment processing quality, (3) client management depth, (4) staff management and commission tracking, (5) marketing and retention tools, and (6) total cost including processing fees. A solo nail tech and a 15-chair hair salon will weight these very differently.",
      },
      {
        q: "Which salon software is best for solo operators and booth renters?",
        a: "GlossGenius ($24/month) is our top pick for solo operators — beautiful client-facing experience, simple setup, and all-in-one pricing. Fresha (free) is excellent for cost-conscious solos. Square Appointments (free for one person) works well if you're already in the Square ecosystem. All three let you get up and running in under an hour.",
      },
      {
        q: "Which salon software is best for multi-staff salons?",
        a: "Vagaro is the strongest all-around choice for salons with 3–15 staff — it balances features, pricing, and usability well. Mangomint ($165/month) is rated highest by established salons that want premium UX and deep automation. Boulevard ($176/month) excels for upscale salons and spas with complex service menus and commission structures.",
      },
      {
        q: "How important are client reviews and marketplace features?",
        a: "Very important for client acquisition. Platforms like Fresha, Vagaro, and Booksy include marketplace directories where potential clients discover and book salons. If new client acquisition is a priority, factor marketplace visibility into your evaluation. Platforms without marketplaces (Mangomint, Boulevard) rely on you driving your own traffic.",
      },
    ],
  },
  {
    id: "support",
    title: "Support & Updates",
    questions: [
      {
        q: "What kind of support do salon software platforms offer?",
        a: "Support varies widely. Vagaro offers phone, email, and chat support. GlossGenius provides in-app chat and email support. Mangomint is known for exceptionally fast and personal support. Fresha support is email-only and can be slow. Boulevard and Zenoti offer dedicated account managers for larger salons. We rate support quality in every review.",
      },
      {
        q: "How often do salon platforms release updates?",
        a: "Cloud-based salon software (which covers all major platforms) pushes updates continuously — typically weekly for bug fixes and monthly for new features. Updates are automatic and require no action from salon owners. Major platforms publish changelogs and announce significant updates via email or in-app notifications.",
      },
    ],
  },
];

// Build flat list for JSON-LD
const allQAs = faqSections.flatMap((s) => s.questions);


export default function FAQPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://glossystack.com" },
          { name: "FAQ", url: "https://glossystack.com/faq" },
        ]}
      />
      <FAQSchema
        faqs={allQAs.map((qa) => ({ question: qa.q, answer: qa.a }))}
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
            <span className="text-slate-900">FAQ</span>
          </nav>

          <h1 className="text-3xl font-bold text-slate-900 mb-3">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-slate-600 mb-8 leading-relaxed">
            Common questions about salon and beauty software — from pricing and
            features to switching platforms and finding the right fit for your
            salon.
          </p>

          {/* Jump-to-section nav */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-10">
            <h2 className="text-sm font-semibold text-slate-900 mb-3 uppercase tracking-wide">
              Jump to Section
            </h2>
            <div className="flex flex-wrap gap-2">
              {faqSections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="text-sm bg-white border border-slate-200 rounded-lg px-3 py-1.5 text-brand-600 hover:bg-brand-50 hover:border-brand-200 transition-colors"
                >
                  {section.title}
                </a>
              ))}
            </div>
          </div>

          {/* FAQ Sections */}
          {faqSections.map((section) => (
            <section key={section.id} id={section.id} className="mb-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-5">
                {section.title}
              </h2>
              <div className="space-y-4">
                {section.questions.map((qa) => (
                  <div
                    key={qa.q}
                    className="bg-white border border-slate-200 rounded-xl p-5"
                  >
                    <h3 className="font-semibold text-slate-900 mb-2">
                      {qa.q}
                    </h3>
                    <p className="text-slate-600 leading-relaxed text-sm">
                      {qa.a}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          ))}

          {/* Bottom CTA */}
          <div className="bg-brand-50 border border-brand-200 rounded-xl p-6 text-center mt-12">
            <h2 className="text-xl font-bold text-slate-900 mb-2">
              Ready to find the right software for your salon?
            </h2>
            <p className="text-slate-600 mb-4">
              Browse our in-depth reviews or learn how we evaluate each platform.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href="/software"
                className="inline-block bg-brand-500 text-white px-5 py-2.5 rounded-lg font-medium hover:bg-brand-600 transition-colors"
              >
                Browse Software Reviews
              </Link>
              <Link
                href="/how-we-review"
                className="inline-block bg-white text-brand-600 border border-brand-200 px-5 py-2.5 rounded-lg font-medium hover:bg-brand-50 transition-colors"
              >
                How We Review
              </Link>
            </div>
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
            <Link
              href="/how-we-review"
              className="text-brand-600 hover:underline"
            >
              How We Review
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
