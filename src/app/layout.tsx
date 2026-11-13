import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileActionBar from "@/components/MobileActionBar";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Decent Packers and Movers | Thane, Bhiwandi, Mumbai",
  description:
    "Decent Packers and Movers — Premium relocation, household shifting, office moving & vehicle transport based in Thane, servicing Bhiwandi, Mumbai, and all nearby areas. Call 9376501262 / 9376501263.",
  keywords: [
    "Decent Packers and Movers",
    "packers and movers Thane",
    "packers and movers Bhiwandi",
    "packers and movers Mumbai",
    "household shifting Thane",
    "vehicle transport Mumbai",
    "office shifting Bhiwandi",
  ],
  openGraph: {
    title: "Decent Packers and Movers | Thane, Bhiwandi, Mumbai",
    description:
      "Reliable and damage-free moving across Thane, Bhiwandi, Mumbai and nearby regions. Instant WhatsApp quotation.",
    type: "website",
    locale: "en_IN",
    siteName: "Decent Packers and Movers",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MovingCompany",
  name: "Decent Packers and Movers",
  description:
    "Professional packing and moving services located in Thane, serving Bhiwandi, Mumbai, and all nearby areas.",
  url: "https://decentpackersmovers.in",
  telephone: "+919376501262",
  email: "decentmoversbwd@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Thane",
    addressRegion: "Maharashtra",
    addressCountry: "IN",
  },
  areaServed: ["Thane", "Bhiwandi", "Mumbai", "Kalyan", "Navi Mumbai"],
  sameAs: [],
  priceRange: "₹₹",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased bg-white text-[#0F172A] selection:bg-[#FACC15] selection:text-[#0F172A]">
        <Header />
        <main className="min-h-screen pb-16 md:pb-0">{children}</main>
        <Footer />
        <MobileActionBar />
      </body>
    </html>
  );
}
