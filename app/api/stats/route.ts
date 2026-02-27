import { NextResponse } from "next/server";

export async function GET() {
  const response = {
    industry: "salon-spa",
    lastUpdated: new Date().toISOString().split("T")[0],
    stats: [
      {
        metric: "salon-software-adoption-rate",
        value: 73,
        unit: "percent",
        source: "Professional Beauty Association 2025",
        category: "adoption",
      },
      {
        metric: "average-monthly-cost",
        value: 89,
        unit: "USD",
        source: "GlossyStack Market Analysis 2026",
        category: "pricing",
      },
      {
        metric: "average-no-show-rate-reduction",
        value: 42,
        unit: "percent",
        source: "Salon Booking Study 2025",
        category: "productivity",
      },
      {
        metric: "online-booking-preference",
        value: 68,
        unit: "percent",
        source: "Consumer Beauty Preferences 2025",
        category: "adoption",
      },
      {
        metric: "time-saved-per-week",
        value: 8,
        unit: "hours",
        source: "Salon Management Software ROI Study 2025",
        category: "productivity",
      },
      {
        metric: "client-retention-improvement",
        value: 27,
        unit: "percent",
        source: "Client Retention Analysis 2025",
        category: "satisfaction",
      },
      {
        metric: "average-revenue-increase",
        value: 23,
        unit: "percent",
        source: "Salon Performance Metrics 2025",
        category: "revenue",
      },
      {
        metric: "multi-staff-salon-adoption",
        value: 89,
        unit: "percent",
        source: "PBA Technology Survey 2025",
        category: "adoption",
      },
      {
        metric: "mobile-booking-percentage",
        value: 61,
        unit: "percent",
        source: "Mobile Booking Trends 2025",
        category: "adoption",
      },
      {
        metric: "average-review-score-improvement",
        value: 0.8,
        unit: "stars",
        source: "Reputation Management Study 2025",
        category: "satisfaction",
      },
    ],
    metadata: {
      totalStats: 10,
      categories: ["adoption", "pricing", "productivity", "revenue", "satisfaction"],
      source: "GlossyStack",
      url: "https://glossystack.com",
    },
  };

  return NextResponse.json(response, {
    headers: {
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
      "Content-Type": "application/json",
    },
  });
}
