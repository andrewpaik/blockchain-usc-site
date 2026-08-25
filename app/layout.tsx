import type { Metadata, Viewport } from "next";
import { Newsreader, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const newsreader = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz"],
  variable: "--font-newsreader",
});

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });

const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });

export const metadata: Metadata = {
  title: "Blockchain@USC",
  description:
    "Blockchain@USC: one of the oldest crypto student organizations in the country. Research, an on-chain portfolio, and shipped projects at the University of Southern California.",
  openGraph: {
    title: "Blockchain@USC",
    description:
      "Research. Invest. Build. USC's student-led organization for blockchain research, rigorous protocol analysis, and Web3 founders.",
  },
  icons: { icon: "/assets/logo-128.png" },
};

export const viewport: Viewport = {
  themeColor: "#faf9fc",
  viewportFit: "cover",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${newsreader.variable} ${geist.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
