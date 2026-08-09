import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Marcous Alexis De Villa — Technical SEO Lead",
  description: "Technical SEO Lead turning validated audit evidence into implementation-ready handoffs, production-safe fixes, and measurable outcomes.",
  other: { "codex-preview": "development" },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}

