import { NextResponse } from "next/server";
import { softwareReviews } from "@/app/software/_data/software";

export async function GET() {
  const software = Object.values(softwareReviews).map((review) => ({
    name: review.name,
    slug: review.slug,
    pricing: {
      range: review.priceRange,
      tiers: review.pricingTiers.map((tier) => ({
        tier: tier.tier,
        price: tier.price,
        description: tier.description,
      })),
    },
    features: review.features.map((cat) => ({
      category: cat.category,
      count: cat.items.filter((item) => item.included === true || typeof item.included === "string").length,
    })),
    bestFor: review.bestFor,
    rating: review.rating,
    founded: review.founded,
    website: review.website,
  }));

  const response = {
    category: "salon-spa-software",
    lastUpdated: new Date().toISOString().split("T")[0],
    software,
    metadata: {
      totalSoftware: software.length,
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
