import type { Metadata } from "next";
import "./globals.css";
import EventTracker from "./event-tracker";

export const metadata: Metadata = {
  metadataBase: new URL("https://marcous-seo-portfolio.vercel.app"),
  title: "Senior Technical SEO Specialist | Marcous De Villa",
  description: "Senior Technical SEO Specialist focused on technical search diagnosis, Search Opportunity Analysis, developer handoffs, production validation, and evidence-driven AEO/GEO & AI Search Visibility.",
  alternates: { canonical: "/" },
  openGraph: { title: "Senior Technical SEO Specialist | Marcous De Villa", description: "Technical SEO that finds the problem—and the next opportunity. Evidence-first diagnosis, Search Opportunity Analysis, production-safe implementation, and AEO/GEO investigation.", url: "/", siteName: "Marcous De Villa — Technical SEO", type: "website" },
  twitter: { card: "summary", title: "Senior Technical SEO Specialist | Marcous De Villa", description: "Technical SEO that finds the problem—and the next opportunity." },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

const structuredData = {
  "@context": "https://schema.org", "@type": "Person", name: "Marcous Alexis De Villa", url: "https://marcous-seo-portfolio.vercel.app", jobTitle: "Senior Technical SEO Specialist",
  knowsAbout: ["Technical SEO", "Search Opportunity Analysis", "Search engine optimization", "Website indexation", "Site architecture", "Internal linking", "Core Web Vitals", "Structured data", "Answer Engine Optimization", "Generative Engine Optimization", "AI Search Visibility"],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}<EventTracker /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} /></body></html>;
}
