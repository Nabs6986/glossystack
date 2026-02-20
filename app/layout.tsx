import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ReactNode } from "react";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://glossystack.com"),
  title: "GlossyStack - Compare Nail & Beauty Salon Software",
  description: "Independent, unbiased comparisons of nail salon and beauty salon software. Find the best solution for your salon: Vagaro, Fresha, GlossGenius, Booksy, Boulevard, and more.",
  keywords: ["nail salon software", "beauty salon software", "salon booking software", "Vagaro", "Fresha", "GlossGenius", "Booksy", "Boulevard", "Mangomint", "salon management software"],
  authors: [{ name: "GlossyStack" }],
  creator: "GlossyStack",
  publisher: "GlossyStack",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://glossystack.com",
    siteName: "GlossyStack",
    title: "GlossyStack - Compare Nail & Beauty Salon Software",
    description: "Independent, unbiased comparisons of nail and beauty salon software. Find the best solution for your salon.",
  },
  twitter: {
    card: "summary_large_image",
    title: "GlossyStack - Compare Nail & Beauty Salon Software",
    description: "Independent, unbiased comparisons of nail and beauty salon software.",
  },
  alternates: {
    canonical: "https://glossystack.com"
  },
  category: "Software"
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://glossystack.com/#organization",
      "name": "GlossyStack",
      "url": "https://glossystack.com",
      "description": "GlossyStack provides independent, unbiased reviews and comparisons of nail salon and beauty salon software to help salon owners make informed decisions.",
      "sameAs": []
    },
    {
      "@type": "WebSite",
      "@id": "https://glossystack.com/#website",
      "url": "https://glossystack.com",
      "name": "GlossyStack",
      "publisher": { "@id": "https://glossystack.com/#organization" },
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://glossystack.com/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://glossystack.com/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is the best nail salon software in 2026?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The best nail salon software depends on your business size and needs. GlossGenius (from $24/mo) is ideal for solo nail techs and booth renters. Vagaro (from $30/mo) works well for small to mid-size salons. Mangomint ($165/mo) is rated highest by established multi-staff salons. Fresha is free with transaction fees, making it popular for cost-conscious owners."
          }
        },
        {
          "@type": "Question",
          "name": "How much does salon software cost in 2026?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Salon software ranges from free (Fresha, Square Appointments for solos) to $400+/month for enterprise platforms. GlossGenius starts at $24/mo, Booksy at $29.99/mo, Vagaro at $30/mo, Mangomint at $165/mo, Boulevard at $176/mo, and Zenoti at custom pricing for large chains."
          }
        },
        {
          "@type": "Question",
          "name": "Is Vagaro better than GlossGenius for nail salons?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Vagaro is better for salons with multiple staff needing payroll, robust reporting, and marketplace exposure. GlossGenius is better for solo nail techs and small teams who want beautiful client-facing design, simple setup, and built-in card processing without per-transaction fees on higher plans."
          }
        },
        {
          "@type": "Question",
          "name": "What salon software is free?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Fresha is completely free for businesses (they charge a 2.19% + $0.20 fee per new client booking only). Square Appointments is free for individual providers. Both are excellent starting points for new salons or solo nail techs with limited budgets."
          }
        }
      ]
    }
  ]
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen font-sans antialiased">{children}<Analytics />
      </body>
    </html>
  );
}
