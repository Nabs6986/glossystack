import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/marketing/Navbar";
import { Footer } from "@/components/marketing/Footer";
import { FAQSchema } from "@/components/schema/FAQSchema";

export const metadata: Metadata = {
  title: "Salon Software — Common Questions Answered",
  description:
    "Get direct answers to the most common questions about salon management software: pricing, features, online booking, inventory management, and choosing the right platform for your salon or spa.",
  alternates: { canonical: "https://glossystack.com/answers" },
};

const faqs = [
  {
    question: "What does salon software cost in 2026?",
    answer: "Salon software typically costs $25–$150 per month for solo stylists and $100–$500+ per month for full-service salons with multiple staff. Vagaro starts at $25/month (Solo plan). Square Appointments is free for basic scheduling with 2.6% + $0.10 per transaction. Fresha is free but charges 1.5% processing fees. Mindbody starts around $129/month. Premium platforms like Zenoti and Meevo start at $300–$500/month for multi-location salons. Most platforms offer 14–30 day free trials.",
  },
  {
    question: "Which salon software is best for solo stylists and small salons?",
    answer: "For solo stylists, Vagaro ($25/month) and Square Appointments (free) are the strongest options. Vagaro offers robust booking, payments, and marketing at the lowest cost. Square Appointments is free with pay-per-transaction pricing (2.6% + $0.10). Fresha is also free but takes 1.5% on all transactions. For small salons (2–5 stylists), Booksy, Vagaro, and Boulevard offer the best balance of features and affordability. The best choice depends on whether you prioritize cost (Square/Fresha), features (Vagaro), or client experience (Boulevard).",
  },
  {
    question: "Does salon software handle online booking and appointment scheduling?",
    answer: "Yes, online booking is a core feature of all modern salon software. Clients can book appointments 24/7 via your website, Instagram, Facebook, or Google Business Profile. Features include real-time availability, automated confirmations and reminders (SMS/email), recurring appointment booking, waitlist management, and calendar sync. Vagaro, Fresha, and Boulevard have the most intuitive client booking experiences. Most platforms also support walk-in management and manual appointment entry for phone bookings.",
  },
  {
    question: "Can salon software manage inventory and product sales?",
    answer: "Yes. Most salon software includes inventory management and retail point-of-sale (POS). Features include: product catalog with SKU tracking, low-stock alerts and automatic reorder points, barcode scanning for quick checkout, vendor and purchase order management, and profit margin tracking by product. Mindbody and Zenoti have the most robust inventory management. Square and Fresha offer solid POS with inventory tracking. Vagaro supports retail sales but inventory management is more basic.",
  },
  {
    question: "How does salon software handle payments and tips?",
    answer: "Salon software processes payments via integrated credit card readers, tap-to-pay, and contactless payments. Clients can pay in-person, online, or via mobile app. Tip management features include: suggested tip percentages (15%, 18%, 20%), custom tip amounts, tip splitting among multiple service providers, and separate tip payouts from service payments. Processing fees typically range from 1.5% to 2.9% + $0.10–$0.30 per transaction. Square and Fresha offer the lowest processing fees.",
  },
  {
    question: "What features should I look for in salon management software?",
    answer: "Essential features include: online booking (client self-service scheduling with real-time availability), calendar and appointment management (color-coded by service, staff view, drag-and-drop rescheduling), point-of-sale (accept payments for services and retail products), client management (profiles, service history, notes, preferences), staff management (schedules, commission tracking, performance reports), automated reminders (SMS/email confirmations and reminders), and marketing tools (email campaigns, loyalty programs, gift cards). Advanced features include inventory management, reporting and analytics, and multi-location support.",
  },
  {
    question: "Can salon software send automated appointment reminders?",
    answer: "Yes. Automated reminders reduce no-shows by 30–50%. All major platforms send SMS and email reminders 24–48 hours before appointments. Features include: customizable reminder timing (24 hours, 48 hours, same-day), two-way texting (clients can confirm, cancel, or reschedule via text), no-show tracking and automatic waitlist filling, and late cancellation fees. Vagaro, Fresha, and Boulevard have the most robust reminder systems. Check SMS pricing — some platforms charge per message, others include unlimited SMS.",
  },
  {
    question: "How long does it take to set up and learn salon software?",
    answer: "Most salon owners can set up and launch in 1–3 days. Initial setup includes: adding services and pricing (1–2 hours), importing or entering client contacts (1–2 hours if migrating), configuring staff schedules and availability (30 minutes), connecting payment processing (30 minutes), and customizing online booking widget (30 minutes). Staff training takes 2–4 hours for basics and 1–2 weeks for full proficiency. Vagaro, Square, and Fresha have the fastest setup. Start with a free trial to test the learning curve before committing.",
  },
  {
    question: "Can clients book appointments through Instagram and Facebook?",
    answer: "Yes. Most modern salon software integrates with Instagram and Facebook for direct booking. Clients can book appointments without leaving social media by clicking a 'Book Now' button on your profile. Integrations include: Instagram booking button linked to your calendar, Facebook Appointments integration, Google Business Profile booking, and embeddable booking widget for your website. Vagaro, Fresha, and Boulevard offer the best social media integrations. This makes booking frictionless and increases appointment bookings by 20–40%.",
  },
  {
    question: "Does salon software support commission-based and booth rental payment models?",
    answer: "Yes. Salon software supports multiple compensation models: commission-based (e.g., 50% of service revenue goes to stylist), hourly wage tracking, booth rental (flat monthly rent per stylist, stylist keeps 100% of earnings), and hybrid models. Features include automatic commission calculations, per-service or percentage-based splits, tip distribution separate from commission, and payroll reports for accountants. Mindbody, Zenoti, and Vagaro have the most flexible compensation management.",
  },
  {
    question: "Can I accept online payments and deposits?",
    answer: "Yes. Online payments and deposits reduce no-shows and streamline checkout. Features include: deposit requirements at booking (e.g., $20 deposit or 50% upfront), full prepayment for services, stored payment methods for repeat clients, and automatic charge for no-shows or late cancellations. Processing fees typically range from 1.5% to 2.9% + $0.10–$0.30 per transaction. Fresha charges 1.5%, Square charges 2.6% + $0.10, and Vagaro charges 2.2% + $0.30. All major platforms support tap-to-pay and contactless payments.",
  },
  {
    question: "Does salon software include marketing tools like email campaigns and loyalty programs?",
    answer: "Yes. Marketing automation features include: email campaigns (welcome series, birthday offers, re-engagement for inactive clients), SMS marketing (promotions, last-minute openings, flash sales), loyalty programs (points per visit, referral rewards, VIP tiers), gift cards and packages, and review request automation. Vagaro has the most comprehensive built-in marketing tools. Mindbody offers strong email and loyalty features. Fresha and Square have basic marketing automation. Marketing tools can increase repeat bookings by 15–30%.",
  },
  {
    question: "Can I manage multiple locations with one salon software account?",
    answer: "Yes. Multi-location features include: centralized calendar view across all locations, shared client database (clients can book at any location), location-specific services and pricing, per-location reporting and analytics, and staff assignment by location. Zenoti and Mindbody are built for multi-location salons and spas. Vagaro supports up to 5 locations on standard plans. Square and Fresha support multiple locations but features are more basic. Multi-location pricing typically starts at $200–$400/month.",
  },
  {
    question: "How does salon software help reduce no-shows and cancellations?",
    answer: "No-show reduction features include: automated SMS/email reminders 24–48 hours before appointments (reduces no-shows by 30–50%), deposit requirements at booking, late cancellation fees charged automatically, waitlist management to fill last-minute openings, and two-way texting for easy confirmation. Some platforms blacklist repeat no-show clients. Vagaro, Boulevard, and Fresha have the most effective no-show prevention tools. Implementing reminders and deposits can reduce no-shows from 15–20% to under 5%.",
  },
  {
    question: "Can salon software generate reports and analytics?",
    answer: "Yes. Key reports include: revenue by service, stylist, or time period, top-performing services and staff, client retention and visit frequency, product sales and inventory turnover, appointment utilization (% of available slots booked), and average ticket and client lifetime value. Mindbody and Zenoti have the most advanced reporting. Vagaro offers solid standard reports. Square and Fresha have basic reporting. Custom reports are often available on premium plans. Use reports to identify top revenue drivers and optimize pricing.",
  },
  {
    question: "Is salon software cloud-based or on-premise?",
    answer: "Almost all modern salon software is cloud-based (SaaS), meaning you access it through a web browser or mobile app and data is stored on the vendor's servers. Cloud-based platforms offer automatic updates, remote access from any device, lower upfront costs, and no IT maintenance. Vagaro, Square, Fresha, Boulevard, and Mindbody are all cloud-based. On-premise systems (installed on local computers) are mostly obsolete except for a few legacy platforms. Cloud-based is now the industry standard for convenience and reliability.",
  },
  {
    question: "Can clients download a mobile app to book and manage appointments?",
    answer: "Yes. Most platforms offer branded client mobile apps where clients can: book appointments 24/7, view appointment history, rebook favorite services or stylists, manage payment methods and loyalty points, and receive push notifications for reminders and promotions. Vagaro, Fresha, and Mindbody have the most polished client apps. Square uses the Square Appointments app. Client apps improve retention by making rebooking frictionless and increasing repeat visits by 20–30%.",
  },
  {
    question: "How does salon software handle gift cards and packages?",
    answer: "Gift card features include: digital and physical gift card sales, custom gift card amounts and designs, gift card balance tracking, and automated gift card delivery via email. Package features include: bundled services (e.g., 5 haircuts for $200), prepaid memberships (e.g., $99/month for unlimited blowouts), and package expiration dates and usage tracking. Vagaro, Mindbody, and Zenoti have robust gift card and package management. Gift cards and packages increase cash flow and client retention.",
  },
  {
    question: "What happens if I switch salon software? Can I migrate my data?",
    answer: "Yes. Most platforms allow you to export client data, appointment history, and service records as CSV files. Data migration typically takes 1–2 weeks and includes: exporting client contacts and service history from your old platform, importing data into the new platform (vendors often provide migration assistance), testing booking and payment flows, and training staff on the new system. Vagaro, Mindbody, and Boulevard offer migration support. Budget 1–2 weeks for a smooth transition. Download all data before canceling your old subscription.",
  },
  {
    question: "Does salon software integrate with accounting software like QuickBooks?",
    answer: "Yes. Most platforms integrate with QuickBooks, Xero, or other accounting software to sync: daily sales and revenue, expense tracking (product purchases, payroll), tax reporting, and invoice management. Mindbody and Zenoti have the deepest accounting integrations. Square syncs seamlessly with QuickBooks. Vagaro offers basic accounting exports. Integrations save hours per week on manual bookkeeping and ensure accurate financial records for tax filing and business planning.",
  },
  {
    question: "Can salon software handle waitlists and last-minute openings?",
    answer: "Yes. Waitlist features include: automatic waitlist for fully booked slots, SMS alerts when a slot opens due to cancellation, priority booking for waitlisted clients, and last-minute opening promotions (e.g., 'Book now for 20% off this afternoon'). Vagaro and Boulevard have the most robust waitlist management. Waitlists can fill 80–90% of last-minute openings and increase revenue by 10–15%. Clients love the convenience of automatic notifications when their preferred time becomes available.",
  },
  {
    question: "How secure is client data in salon software?",
    answer: "Reputable salon software uses bank-level security measures including: 256-bit AES encryption for data at rest, TLS encryption for payment transactions, PCI DSS compliance for credit card processing, SOC 2 Type II audits, and multi-factor authentication for staff logins. Vagaro, Mindbody, Square, and Fresha all maintain SOC 2 compliance. Your data in a well-maintained cloud platform is typically more secure than data stored on a local computer. Always use strong passwords and enable two-factor authentication.",
  },
  {
    question: "Can I customize my online booking page to match my brand?",
    answer: "Yes. Customization options include: custom logo and brand colors, service descriptions and photos, staff bios and headshots, custom booking policies and cancellation terms, and embeddable booking widget for your website. Vagaro, Boulevard, and Fresha offer the most design flexibility. Some platforms offer fully branded client apps. A professional booking experience increases client trust and conversion rates. Most platforms also support custom domain names for your booking page (e.g., book.yoursalon.com).",
  },
  {
    question: "Does salon software support service add-ons and upsells?",
    answer: "Yes. Upsell features include: suggested add-ons during booking (e.g., 'Add a deep conditioning treatment for $15'), product recommendations based on service history, package and membership offers, and automatic upsell prompts at checkout. Boulevard and Vagaro have the most advanced upsell features. Add-ons can increase average ticket value by 15–25%. Examples include: hair treatments, scalp massages, extended blowouts, premium product upgrades, and retail product bundles.",
  },
  {
    question: "Can salon software help with staff scheduling and time-off requests?",
    answer: "Yes. Staff management features include: drag-and-drop shift scheduling, time-off request and approval workflow, break scheduling and enforcement, shift swapping and coverage requests, and overtime tracking. Mindbody, Zenoti, and Vagaro have the most robust staff scheduling. Staff can view schedules, request time off, and clock in/out via mobile app. Automated scheduling reduces conflicts, ensures adequate coverage, and saves managers 3–5 hours per week on scheduling tasks.",
  },
];

export default function AnswersPage() {
  return (
    <>
      <Navbar />
      <FAQSchema faqs={faqs} />
      <main className="min-h-screen">
        {/* Hero */}
        <section className="bg-gradient-to-b from-slate-50 to-white pt-16 pb-12">
          <div className="mx-auto max-w-4xl px-6">
            <nav className="text-sm text-slate-500 mb-6" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-brand-600">Home</Link>
              <span className="mx-2">/</span>
              <span className="text-slate-800 font-medium">Answers</span>
            </nav>
            <h1 className="text-4xl font-bold text-slate-900 mb-4">
              Salon Software — Questions Answered
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              Direct, detailed answers to the most common questions about choosing, using, and switching salon management software. Updated for 2026.
            </p>
          </div>
        </section>

        {/* Category navigation */}
        <section className="py-8">
          <div className="mx-auto max-w-4xl px-6">
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-3">
                Browse by Topic
              </h2>
              <div className="flex flex-wrap gap-2">
                <span className="rounded-lg bg-slate-100 px-3 py-1.5 text-sm font-medium text-slate-700">
                  Pricing & Costs
                </span>
                <span className="rounded-lg bg-slate-100 px-3 py-1.5 text-sm font-medium text-slate-700">
                  Online Booking & Scheduling
                </span>
                <span className="rounded-lg bg-slate-100 px-3 py-1.5 text-sm font-medium text-slate-700">
                  Payments & POS
                </span>
                <span className="rounded-lg bg-slate-100 px-3 py-1.5 text-sm font-medium text-slate-700">
                  Marketing & Retention
                </span>
                <span className="rounded-lg bg-slate-100 px-3 py-1.5 text-sm font-medium text-slate-700">
                  Multi-Location Management
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Answers grid */}
        <section className="pb-16">
          <div className="mx-auto max-w-4xl px-6">
            <div className="space-y-6">
              {faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <h2 className="text-xl font-semibold text-slate-900 mb-3">
                    {faq.question}
                  </h2>
                  <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="bg-slate-50 border-t border-slate-200 py-12">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Need help choosing the right salon software?
            </h2>
            <p className="text-slate-600 mb-6">
              Read our detailed comparisons or see our top picks for salon and spa management software.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/software"
                className="inline-flex items-center rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow hover:bg-brand-700 transition-colors"
              >
                Browse Salon Software
              </Link>
              <Link
                href="/guides"
                className="inline-flex items-center rounded-lg border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 shadow-sm hover:bg-slate-50 transition-colors"
              >
                Read Our Guides
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
