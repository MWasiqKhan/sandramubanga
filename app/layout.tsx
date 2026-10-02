import type { Metadata, Viewport } from "next";
import { Caveat, GFS_Didot, Work_Sans } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RevealObserver from "@/components/RevealObserver";
import "./globals.css";

const didot = GFS_Didot({ weight: "400", subsets: ["latin"], variable: "--font-didot", display: "swap" });
const work = Work_Sans({ weight: ["400", "500", "600"], subsets: ["latin"], variable: "--font-work", display: "swap" });
const caveat = Caveat({ weight: ["500", "600"], subsets: ["latin"], variable: "--font-caveat", display: "swap" });

export const metadata: Metadata = {
  title: {
    default: "Sandra Mubanga — Author",
    template: "%s — Sandra Mubanga",
  },
  description:
    "Official website of Sandra Mubanga, author of The Weight of Loving — a memoir of loss, resilience, motherhood, and the quiet strength of carrying on.",
};

export const viewport: Viewport = {
  themeColor: "#FCF9F2",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${didot.variable} ${work.variable} ${caveat.variable}`} suppressHydrationWarning>
      <head>
        {/* Enable reveal animations only when JS runs, before first paint (no flash, no hidden content without JS). */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>
        <a className="skip-link" href="#top">Skip to content</a>
        <Header />
        <main id="top">{children}</main>
        <Footer />
        <RevealObserver />
      </body>
    </html>
  );
}
