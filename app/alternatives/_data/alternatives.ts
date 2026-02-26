export interface Alternative {
  name: string;
  slug: string;
  tagline: string;
  rating: number;
  priceRange: string;
  keyDifferentiator: string;
  pros: string[];
  cons: string[];
  website: string;
}

export interface AlternativesPage {
  slug: string;
  productName: string;
  metaTitle: string;
  metaDescription: string;
  heroTitle: string;
  heroDescription: string;
  whySwitch: string[];
  alternatives: Alternative[];
  comparisonHeaders: string[];
  comparisonRows: { feature: string; values: (string | boolean)[] }[];
  faqs: { question: string; answer: string }[];
}

const alternativesPages: Record<string, AlternativesPage> = {
  "vagaro-alternatives": {
    slug: "vagaro-alternatives",
    productName: "Vagaro",
    metaTitle: "5 Best Vagaro Alternatives in 2026 | Salon Software Compared",
    metaDescription:
      "Looking for a Vagaro alternative? We compare GlossGenius, Fresha, Square Appointments, Boulevard, and Booksy on pricing, features, and ease of use for salons.",
    heroTitle: "Best Vagaro Alternatives for Salons in 2026",
    heroDescription:
      "Vagaro is one of the most popular salon platforms, but it is not the only option. Whether you need simpler pricing, better marketing tools, or a more modern client experience, these five alternatives are worth a close look.",
    whySwitch: [
      "Vagaro charges add-on fees for features like automated marketing, branded apps, and advanced reporting that other platforms include in their base plans.",
      "The booking interface can feel cluttered for salons that only need core scheduling and payments without the fitness and spa modules bundled in.",
      "Client-facing design and branding options are limited compared to newer platforms like GlossGenius and Boulevard.",
      "Customer support wait times have increased as Vagaro has scaled, and some salon owners report slow resolution on billing disputes.",
      "Salon owners who want commission-free payment processing often find better deals with Fresha or Square Appointments.",
    ],
    alternatives: [
      {
        name: "GlossGenius",
        slug: "glossgenius",
        tagline: "Beautiful, all-in-one salon management built for independents",
        rating: 4.8,
        priceRange: "$24 - $48/month",
        keyDifferentiator:
          "Stunning branded booking pages and a no-add-on pricing model that includes website, payments, and marketing in every plan.",
        pros: [
          "Gorgeous client booking experience with custom branding",
          "Flat monthly pricing with no hidden add-on fees",
          "Built-in marketing with automated campaigns",
          "Instant payouts available for a small fee",
          "Extremely easy onboarding for solo stylists",
        ],
        cons: [
          "Limited multi-location support for larger salons",
          "No marketplace for client discovery like Vagaro offers",
          "Inventory management features are basic",
        ],
        website: "https://www.glossgenius.com",
      },
      {
        name: "Fresha",
        slug: "fresha",
        tagline: "Commission-free salon software with built-in marketplace",
        rating: 4.7,
        priceRange: "Free (pay per feature)",
        keyDifferentiator:
          "Zero monthly subscription fee with a pay-per-use model for optional features like no-show protection and marketing blasts.",
        pros: [
          "No monthly subscription fee for core scheduling and POS",
          "Built-in marketplace drives new client discovery",
          "Modern, intuitive interface for staff and clients",
          "Integrated payment processing at competitive rates",
          "Automatic appointment reminders included free",
        ],
        cons: [
          "Transaction fees can add up for high-volume salons",
          "Limited customization on booking page branding",
          "Customer support is email-only with no phone option",
        ],
        website: "https://www.fresha.com",
      },
      {
        name: "Square Appointments",
        slug: "square-appointments",
        tagline: "Simple scheduling backed by the Square payments ecosystem",
        rating: 4.5,
        priceRange: "Free - $69/month",
        keyDifferentiator:
          "Free tier for solo stylists with seamless integration into Square's POS, invoicing, and banking products.",
        pros: [
          "Free plan for individuals with unlimited bookings",
          "Seamless integration with Square POS hardware and banking",
          "Easy-to-use interface with minimal learning curve",
          "Built-in invoicing and contract management",
          "Strong reporting through the Square Dashboard",
        ],
        cons: [
          "Salon-specific features like color formulas are missing",
          "Limited marketing automation compared to dedicated salon tools",
          "Multi-location management requires the Plus plan",
        ],
        website: "https://squareup.com/appointments",
      },
      {
        name: "Boulevard",
        slug: "boulevard",
        tagline: "Premium client experience platform for upscale salons",
        rating: 4.6,
        priceRange: "$175 - $410/month",
        keyDifferentiator:
          "Enterprise-grade client experience tools including precision scheduling, duo bookings, and a concierge-level front desk interface.",
        pros: [
          "Best-in-class front desk and check-in experience",
          "Precision scheduling reduces gaps and maximizes revenue",
          "Built-in two-way texting and client messaging",
          "Robust reporting with real-time dashboards",
          "Excellent multi-location and franchise support",
        ],
        cons: [
          "Significantly higher price point than most competitors",
          "Overkill for solo stylists or small independent salons",
          "Onboarding can take several weeks for complex setups",
        ],
        website: "https://www.joinblvd.com",
      },
      {
        name: "Booksy",
        slug: "booksy",
        tagline: "Mobile-first booking platform popular with barbers and stylists",
        rating: 4.4,
        priceRange: "$29.99 - $49.99/month",
        keyDifferentiator:
          "A strong consumer-facing marketplace app that drives organic client discovery, especially popular in barbering and men's grooming.",
        pros: [
          "Large consumer marketplace for new client acquisition",
          "Mobile-first design that works well on phones",
          "Built-in boost feature for paid promotion to local clients",
          "Simple pricing with no long-term contracts",
          "Easy social media booking link integration",
        ],
        cons: [
          "Reporting and analytics are relatively basic",
          "Less suited for full-service salons with complex menus",
          "Inventory tracking is limited compared to Vagaro",
        ],
        website: "https://www.booksy.com",
      },
    ],
    comparisonHeaders: ["Feature", "GlossGenius", "Fresha", "Square", "Boulevard", "Booksy"],
    comparisonRows: [
      { feature: "Starting Price", values: ["$24/mo", "Free", "Free", "$175/mo", "$29.99/mo"] },
      { feature: "Online Booking", values: [true, true, true, true, true] },
      { feature: "Client Marketplace", values: [false, true, false, false, true] },
      { feature: "Marketing Automation", values: [true, true, false, true, false] },
      { feature: "Commission-Free Processing", values: [false, true, false, false, false] },
      { feature: "Multi-Location Support", values: [false, true, true, true, false] },
      { feature: "Branded Booking Page", values: [true, false, true, true, false] },
      { feature: "Inventory Management", values: [false, true, true, true, false] },
    ],
    faqs: [
      {
        question: "What is the best free alternative to Vagaro?",
        answer:
          "Fresha and Square Appointments both offer free tiers. Fresha provides free scheduling and POS with pay-per-use add-ons, while Square Appointments is completely free for solo practitioners with unlimited bookings included.",
      },
      {
        question: "Which Vagaro alternative has the best client booking experience?",
        answer:
          "GlossGenius is widely regarded as having the most visually appealing and seamless client booking experience. Boulevard also offers a premium, concierge-style booking flow that appeals to upscale salons.",
      },
      {
        question: "Can I migrate my client data from Vagaro to another platform?",
        answer:
          "Yes, most alternatives offer data migration assistance. Vagaro allows you to export client data as a CSV file, and platforms like GlossGenius and Boulevard have dedicated onboarding teams that handle the import process for you.",
      },
      {
        question: "Which alternative is best for a multi-location salon?",
        answer:
          "Boulevard is the strongest choice for multi-location salons, offering centralized reporting, location-level permissions, and franchise management tools. Square Appointments also supports multiple locations on its Plus and Premium plans.",
      },
      {
        question: "Is Booksy better than Vagaro for barbers?",
        answer:
          "Booksy has a larger consumer marketplace specifically popular in the barbering community, which can drive more organic client discovery. However, Vagaro offers deeper feature depth for shops that also offer spa or beauty services beyond barbering.",
      },
    ],
  },
  "glossgenius-alternatives": {
    slug: "glossgenius-alternatives",
    productName: "GlossGenius",
    metaTitle: "5 Best GlossGenius Alternatives in 2026 | Salon Software Compared",
    metaDescription:
      "Exploring GlossGenius alternatives? We compare Vagaro, Fresha, Square Appointments, Boulevard, and Booksy on features, pricing, and scalability for salons.",
    heroTitle: "Best GlossGenius Alternatives for Salons in 2026",
    heroDescription:
      "GlossGenius is loved for its beautiful design and simplicity, but it may not scale with every salon. If you need multi-location support, a client marketplace, or more advanced reporting, these five alternatives deserve consideration.",
    whySwitch: [
      "GlossGenius lacks multi-location management, making it a poor fit for salon owners expanding to two or more locations.",
      "There is no built-in client marketplace, so you miss out on the organic discovery that platforms like Fresha and Booksy provide.",
      "Inventory management is minimal, which creates problems for product-heavy salons that retail significant volumes.",
      "Advanced reporting and analytics are limited compared to platforms like Boulevard and Vagaro.",
      "The platform is optimized for solo stylists and small teams, so larger salons may outgrow it quickly.",
    ],
    alternatives: [
      {
        name: "Vagaro",
        slug: "vagaro",
        tagline: "Feature-rich salon and spa platform with a built-in marketplace",
        rating: 4.5,
        priceRange: "$25 - $85/month",
        keyDifferentiator:
          "A massive feature set covering scheduling, POS, payroll, marketing, and a consumer marketplace all in one platform.",
        pros: [
          "Built-in marketplace with millions of active consumers",
          "Comprehensive payroll and team management tools",
          "Robust inventory tracking and purchase orders",
          "Custom branded app available as an add-on",
          "Wide range of integrations including QuickBooks",
        ],
        cons: [
          "Add-on fees can inflate the monthly cost significantly",
          "Interface can feel overwhelming for simple salon needs",
          "Booking page design is less polished than GlossGenius",
        ],
        website: "https://www.vagaro.com",
      },
      {
        name: "Fresha",
        slug: "fresha",
        tagline: "No-subscription salon software with a global marketplace",
        rating: 4.7,
        priceRange: "Free (pay per feature)",
        keyDifferentiator:
          "Zero monthly subscription with a massive international marketplace that drives new client bookings organically.",
        pros: [
          "No monthly fee for core scheduling and payments",
          "Global marketplace with high client discovery potential",
          "Clean, modern interface that clients love",
          "Integrated payment terminal with competitive rates",
          "Automated reminders and review collection included",
        ],
        cons: [
          "Per-transaction fees can exceed subscription costs for busy salons",
          "Booking page customization is more limited than GlossGenius",
          "Phone support is not available",
        ],
        website: "https://www.fresha.com",
      },
      {
        name: "Square Appointments",
        slug: "square-appointments",
        tagline: "Free scheduling with the power of Square's payment ecosystem",
        rating: 4.5,
        priceRange: "Free - $69/month",
        keyDifferentiator:
          "Free for individuals with deep integration into Square's POS, banking, loans, and invoicing ecosystem.",
        pros: [
          "Completely free for solo practitioners",
          "Tight integration with Square POS and hardware",
          "Simple, clean scheduling interface",
          "Built-in contracts and intake forms",
          "Access to Square Capital business loans",
        ],
        cons: [
          "No salon-specific features like formula tracking",
          "Marketing tools are minimal",
          "Design and branding options are limited versus GlossGenius",
        ],
        website: "https://squareup.com/appointments",
      },
      {
        name: "Boulevard",
        slug: "boulevard",
        tagline: "Luxury-grade salon management for high-end brands",
        rating: 4.6,
        priceRange: "$175 - $410/month",
        keyDifferentiator:
          "Enterprise features like precision scheduling, duo bookings, and a best-in-class front desk experience for premium salons.",
        pros: [
          "Premium front desk and check-in workflows",
          "Precision scheduling minimizes appointment gaps",
          "Advanced client segmentation and targeting",
          "Two-way SMS messaging built in",
          "Multi-location and franchise-ready from day one",
        ],
        cons: [
          "Price is 4-8x higher than GlossGenius",
          "Complex setup requires dedicated onboarding",
          "Overpowered for solo stylists and micro-salons",
        ],
        website: "https://www.joinblvd.com",
      },
      {
        name: "Booksy",
        slug: "booksy",
        tagline: "Marketplace-driven booking for stylists and barbers",
        rating: 4.4,
        priceRange: "$29.99 - $49.99/month",
        keyDifferentiator:
          "One of the largest consumer-facing booking marketplaces, driving organic traffic and new client acquisition without ad spend.",
        pros: [
          "Millions of consumers actively browsing the Booksy app",
          "Boost feature for paid local promotion",
          "Mobile-first design works great on phones",
          "Simple setup with no long-term contracts",
          "Social media booking integration built in",
        ],
        cons: [
          "Reporting capabilities are basic",
          "Less suitable for full-service or luxury salons",
          "Branding customization is limited compared to GlossGenius",
        ],
        website: "https://www.booksy.com",
      },
    ],
    comparisonHeaders: ["Feature", "Vagaro", "Fresha", "Square", "Boulevard", "Booksy"],
    comparisonRows: [
      { feature: "Starting Price", values: ["$25/mo", "Free", "Free", "$175/mo", "$29.99/mo"] },
      { feature: "Online Booking", values: [true, true, true, true, true] },
      { feature: "Client Marketplace", values: [true, true, false, false, true] },
      { feature: "Marketing Automation", values: [true, true, false, true, false] },
      { feature: "Multi-Location Support", values: [true, true, true, true, false] },
      { feature: "Inventory Management", values: [true, true, true, true, false] },
      { feature: "Payroll Management", values: [true, false, false, true, false] },
      { feature: "Custom Branded App", values: [true, false, false, true, false] },
    ],
    faqs: [
      {
        question: "Why would I switch from GlossGenius to another platform?",
        answer:
          "The most common reasons are needing multi-location support, wanting a client discovery marketplace, requiring deeper inventory management, or outgrowing the reporting capabilities that GlossGenius provides.",
      },
      {
        question: "Which GlossGenius alternative is best for a growing salon team?",
        answer:
          "Vagaro is the strongest option for growing teams because it includes payroll, team scheduling, commission tracking, and role-based permissions all in one platform at a reasonable price point.",
      },
      {
        question: "Is Fresha really free compared to GlossGenius?",
        answer:
          "Fresha has no monthly subscription, but it charges per-transaction fees and optional feature fees. For busy salons processing many transactions, the total cost can approach or exceed what GlossGenius charges monthly.",
      },
      {
        question: "Which alternative offers the best design and branding?",
        answer:
          "Boulevard comes closest to GlossGenius in design quality, particularly for the client-facing booking experience. However, Boulevard is significantly more expensive and is designed for larger, premium salons.",
      },
      {
        question: "Can I export my data from GlossGenius?",
        answer:
          "GlossGenius allows you to export client lists and appointment history. Most competing platforms offer migration support, and some like Boulevard provide white-glove onboarding that includes full data transfer assistance.",
      },
    ],
  },
};

export function getAllAlternativesPages(): AlternativesPage[] {
  return Object.values(alternativesPages);
}

export function getAlternativesPage(slug: string): AlternativesPage | undefined {
  return alternativesPages[slug];
}

export function getAllAlternativesSlugs(): string[] {
  return Object.keys(alternativesPages);
}
