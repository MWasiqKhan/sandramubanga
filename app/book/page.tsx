import type { Metadata } from "next";
import BookCover from "@/components/BookCover";
import { BookSection, Divider, FinalCta, ThemesSection } from "@/components/Sections";
import { ISBN } from "@/lib/content";
import Link from "next/link";
import type { CSSProperties } from "react";

export const metadata: Metadata = {
  title: "The Weight of Loving",
  description: "The Weight of Loving: A Life of Loss and Endurance — the debut memoir by Sandra Mubanga.",
};

const d = (i: number) => ({ "--d": i }) as CSSProperties;

export default function BookPage() {
  return (
    <>
      <section className="hero">
        <div className="wrap">
          <div>
            <nav className="crumbs hero-in" style={d(0)} aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span aria-hidden="true">/</span>
              <span>Featured Book</span>
            </nav>
            <p className="eyebrow hero-in" style={d(1)}>Debut Memoir</p>
            <h1 className="title hero-in" style={d(2)}>The Weight of Loving</h1>
            <p className="hero-tag hero-in" style={d(3)}>A Life of Loss and Endurance</p>
            <p className="hero-desc hero-in" style={d(4)}>
              A true account of loss, motherhood, and the endurance it takes to keep going anyway — told through the eyes of a daughter who watched her mother&apos;s quiet strength up close.
            </p>
            <div className="hero-meta hero-in" style={d(5)}>
              <span>14 chapters</span>
              <span>Elite Author Publishing</span>
              <span>ISBN {ISBN}</span>
            </div>
          </div>
          <div className="hero-art">
            <BookCover priority />
          </div>
        </div>
      </section>
      <Divider />
      <BookSection teaser={false} />
      <Divider />
      <ThemesSection />
      <FinalCta secondary={{ href: "/chapters", label: "Preview the Chapters" }} />
    </>
  );
}
