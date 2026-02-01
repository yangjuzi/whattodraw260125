import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";



export const metadata: Metadata = {
  title: {
    default: "WhatToDraw.art – Drawing Ideas & Prompts",
    template: "%s | WhatToDraw.art",
  },
  description:
    "Stuck on what to draw? Get drawing ideas, prompts, wheels, and creative inspiration.",

  metadataBase: new URL("https://whattodraw.art"),

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
    other: [
      {
        rel: "android-chrome",
        url: "/android-chrome-192x192.png",
      },
      {
        rel: "android-chrome",
        url: "/android-chrome-512x512.png",
      },
    ],
  },

  openGraph: {
    title: "WhatToDraw.art – Drawing Ideas & Creative Tools",
    description:
      "Find inspiration with drawing ideas, generators, and creative prompts.",
    url: "https://whattodraw.art",
    siteName: "WhatToDraw.art",
    images: [
      {
        url: "/android-chrome-512x512.png",
        width: 512,
        height: 512,
        alt: "WhatToDraw.art logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "WhatToDraw.art",
    description: "Drawing ideas, prompts, and creative tools",
    images: ["/android-chrome-512x512.png"],
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
