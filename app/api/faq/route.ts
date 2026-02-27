import { NextResponse } from "next/server";

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
    ],
  },
];

export async function GET() {
  const questions = faqSections.flatMap((section) =>
    section.questions.map((q) => ({
      question: q.q,
      answer: q.a,
      category: section.id,
    }))
  );

  const response = {
    category: "salon-spa-software",
    lastUpdated: new Date().toISOString().split("T")[0],
    questions,
    metadata: {
      totalQuestions: questions.length,
      categories: faqSections.map((section) => section.title),
      source: "GlossyStack",
      url: "https://glossystack.com/faq",
    },
  };

  return NextResponse.json(response, {
    headers: {
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
      "Content-Type": "application/json",
    },
  });
}
