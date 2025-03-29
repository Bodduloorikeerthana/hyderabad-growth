import type { Metadata } from "next";
import { Cinzel, Fauna_One } from "next/font/google";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./globals.css";
import Navbar from "../components/Navbar";

// Load Cinzel font
const cinzel = Cinzel({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-cinzel",
  weight: ["400", "500", "700"],  // Include multiple weights if needed
});

// Load Fauna One font
const faunaOne = Fauna_One({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fauna-one",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Hyderabad Growth - Real Estate Trends & Insights",
  description: "Discover Hyderabad's real estate potential with insights on growth areas, investment opportunities, and market trends.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cinzel.variable} ${faunaOne.variable}`}>
      <body
        className="antialiased"
        suppressHydrationWarning
      >
        <Navbar />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}