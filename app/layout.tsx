import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "What to Draw – Get Drawing Ideas Instantly | WhatToDraw.art",
  description: "Stuck with a blank page? Get simple drawing ideas in seconds. Free drawing prompts generator, wheel, and inspiration for artists of all levels.",
  keywords: "what to draw, drawing ideas, drawing prompts, art inspiration, what should i draw",
  authors: [{ name: "WhatToDraw.art" }],
  openGraph: {
    title: "What to Draw – Get Drawing Ideas Instantly",
    description: "Stuck with a blank page? Get simple drawing ideas in seconds.",
    url: "https://whattodraw.art",
    siteName: "WhatToDraw.art",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
