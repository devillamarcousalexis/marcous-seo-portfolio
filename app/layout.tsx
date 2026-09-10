import type { Metadata } from "next";
import "./globals.css";
import EventTracker from "./event-tracker";

const seoDescription = "SEO Specialist focused on technical SEO, on-page optimization, search strategy, GSC and GA4 analysis, AI-search visibility, implementation, and post-release validation.";

export const metadata: Metadata = {
  metadataBase: new URL("https://marcous-seo-portfolio.vercel.app"),
  title: "SEO Specialist | Marcous De Villa",
  description: seoDescription,
  alternates: { canonical: "/" },
  openGraph: { title: "SEO Specialist | Marcous De Villa", description: seoDescription, url: "/", siteName: "Marcous De Villa — SEO Specialist", type: "website" },
  twitter: { card: "summary", title: "SEO Specialist | Marcous De Villa", description: seoDescription },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

const structuredData = {
  "@context": "https://schema.org", "@type": "Person", name: "Marcous Alexis De Villa", url: "https://marcous-seo-portfolio.vercel.app", jobTitle: "SEO Specialist",
  knowsAbout: ["Search engine optimization", "Technical SEO", "On-page SEO", "Search intent", "Search Opportunity Analysis", "Google Search Console", "Google Analytics 4", "Website indexation", "Site architecture", "Internal linking", "Core Web Vitals", "Structured data", "AI Search Visibility"],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}<EventTracker /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} /></body></html>;
}
