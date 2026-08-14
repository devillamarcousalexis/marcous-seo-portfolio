import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://marcous-seo-portfolio.vercel.app";
  return [
    { url: base, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: `${base}/digital-growth-team`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
  ];
}
