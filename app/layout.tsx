import type { Metadata } from "next";
import "./globals.css";
import EventTracker from "./event-tracker";

export const metadata: Metadata = {
  metadataBase: new URL("https://marcous-seo-portfolio.vercel.app"),
  title: "Technical SEO Lead & Consultant | Marcous De Villa",
  description: "Technical SEO audits, indexation diagnostics, developer handoffs, and post-deployment verification for growing and business-critical websites.",
  alternates: { canonical: "/" },
  openGraph: { title: "Technical SEO Lead & Consultant | Marcous De Villa", description: "Technical SEO recommendations that make it into production—from diagnosis and prioritization to developer handoff and verification.", url: "/", siteName: "Marcous De Villa — Technical SEO", type: "website" },
  twitter: { card: "summary", title: "Technical SEO Lead & Consultant | Marcous De Villa", description: "Technical SEO recommendations that make it into production." },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

const structuredData = {
  "@context": "https://schema.org", "@type": "Person", name: "Marcous Alexis De Villa", url: "https://marcous-seo-portfolio.vercel.app", jobTitle: "Technical SEO Lead & Organic Search Consultant",
  knowsAbout: ["Technical SEO", "Search engine optimization", "Website indexation", "Site architecture", "Core Web Vitals", "Structured data"],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}<EventTracker /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} /></body></html>;
}
