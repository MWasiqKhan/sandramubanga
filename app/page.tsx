import Link from "next/link";
import BookCover from "@/components/BookCover";
import { ArrowIcon, BookIcon, GlobeIcon, PinIcon } from "@/components/Icons";
import {
  AuthorSection,
  BookSection,
  Divider,
  FinalCta,
  PreviewSection,
  ReviewsSection,
  ThemesSection,
} from "@/components/Sections";
import type { CSSProperties } from "react";

const d = (i: number) => ({ "--d": i }) as CSSProperties;

export default function Home() {
  return (
    <>
      {/* HERO — AUTHOR FIRST */}
      <section className="hero">
        <div className="wrap">
          <div>
            <p className="eyebrow hero-in" style={d(0)}>Author &middot; Memoirist</p>
            <h1 className="title hero-in" style={d(1)}>Sandra Mubanga</h1>
            <p className="hero-tag hero-in" style={d(2)}>A voice for resilience, motherhood, and the quiet strength of carrying on.</p>
            <p className="hero-desc hero-in" style={d(3)}>
              Born in Ndola, Zambia and now based in the United States, Sandra Mubanga writes from lived experience — motherhood that began at sixteen, profound loss, and the discipline of turning a hard life into honest words. Her debut memoir, <em>The Weight of Loving</em>, is the first telling of that story.
            </p>
            <div className="hero-ctas hero-in" style={d(4)}>
              <Link className="btn btn-primary" href="/about">
                About Sandra
                <ArrowIcon />
              </Link>
              <Link className="btn btn-ghost" href="/book">Explore Her Book</Link>
            </div>
            <div className="hero-meta hero-in" style={d(5)}>
              <span><PinIcon /> Born in Zambia</span>
              <span><GlobeIcon /> Based in the United States</span>
              <span><BookIcon /> Debut Memoir: The Weight of Loving</span>
            </div>
          </div>
          <div className="hero-art">
            <BookCover priority />
            <div className="cover-caption hero-in" style={d(6)}>
              <span className="lede">Debut Memoir</span>
              <p>The Weight of Loving</p>
            </div>
          </div>
        </div>
      </section>

      <Divider />
      <AuthorSection />
      <Divider />
      <BookSection />
      <Divider />
      <ThemesSection />
      <Divider />
      <PreviewSection />
      <Divider />
      <ReviewsSection />
      <FinalCta />
    </>
  );
}
