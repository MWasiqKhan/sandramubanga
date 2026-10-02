import Link from "next/link";
import { chapters, facts, ISBN, PUBLISHER_URL, themes } from "@/lib/content";
import { ArrowIcon, QuoteMark, ThemeDrip } from "./Icons";
import type { CSSProperties, ReactNode } from "react";

const d = (i: number) => ({ "--d": i }) as CSSProperties;

/* ---------- inner page hero ---------- */
export function PageHero({ eyebrow, title, tag, crumb }: { eyebrow: string; title: ReactNode; tag: string; crumb: string }) {
  return (
    <section className="page-hero">
      <div className="wrap">
        <nav className="crumbs hero-in" style={d(0)} aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span aria-hidden="true">/</span>
          <span>{crumb}</span>
        </nav>
        <p className="eyebrow hero-in" style={d(1)}>{eyebrow}</p>
        <h1 className="title hero-in" style={d(2)}>{title}</h1>
        <p className="hero-tag hero-in" style={d(3)}>{tag}</p>
      </div>
    </section>
  );
}

/* ---------- about the author ---------- */
export function AuthorSection({ full = false }: { full?: boolean }) {
  return (
    <section id="author" className="section-pad">
      <div className="wrap row">
        <div className="colhead reveal">
          <p className="lede">About the Author</p>
          <div className="author-sig" style={{ marginTop: 18 }}>Sandra Mubanga</div>
          <p style={{ fontFamily: "var(--font-work), sans-serif", fontSize: 13, color: "var(--ink-faint)" }}>Author of The Weight of Loving</p>
        </div>
        <div className="prose">
          <p className="lead reveal">Sandra Mubanga was born in 1970 in Ndola, Zambia, where she attended Sansa Primary School, Dominican Convent, and Saint Andrew&apos;s High School.</p>
          <p className="reveal">She studied Business Administration through the Institute of Commercial Management in the United Kingdom before relocating to the United States to begin a new chapter of her life. There, she trained in personal fitness through ISSA and is currently furthering her education in Healthcare Management.</p>
          {full ? (
            <>
              <p className="reveal">Known for her hardworking nature, loyalty, and compassion, Sandra values resilience, honesty, and perseverance above all else — and considers her son and her grandchildren her greatest accomplishments.</p>
              <div className="pull-box reveal">Rather than turning to traditional therapy, Sandra chose to put her experience into words.</div>
              <p className="reveal">Writing became her path forward following the loss of her brother and, later, her husband. That decision became her debut memoir, <em>The Weight of Loving</em>.</p>
            </>
          ) : (
            <p className="reveal">Known for her hardworking nature, loyalty, and compassion, Sandra values resilience, honesty, and perseverance above all else — and considers her son and her grandchildren her greatest accomplishments. Writing became her path forward following the loss of her brother and, later, her husband. Rather than turning to traditional therapy, Sandra chose to put her experience into words — and that decision became her debut memoir, <em>The Weight of Loving</em>.</p>
          )}
          <ul className="factlist">
            {facts.map((f, i) => (
              <li key={f.label} className="reveal" style={d(i)}>
                <b>{f.label}</b>
                <span>{f.value}</span>
              </li>
            ))}
          </ul>
          {!full && (
            <Link className="more-link reveal" href="/about">
              Read her full story <ArrowIcon />
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}

/* ---------- featured book ---------- */
export function BookSection({ teaser = true }: { teaser?: boolean }) {
  return (
    <section id="book" className="section-pad">
      <div className="wrap row">
        <div className="colhead reveal">
          <p className="lede">Featured Book</p>
          <h2 style={{ fontSize: 34, marginTop: 10 }}>The Weight<br />of Loving</h2>
          <p style={{ fontFamily: "'Fraunces', serif", fontStyle: "italic", fontSize: 15, color: "var(--ink-faint)", marginTop: 10 }}>A Life of Loss and Endurance</p>
        </div>
        <div className="prose">
          <p className="lead reveal">After the devastating loss of her husband, Sandra was forced into a life she never imagined — raising children alone, navigating grief without the luxury of mourning, and facing betrayal, injustice, and systems built to work against her.</p>
          <p className="reveal">Yet through unimaginable hardship, she refused to surrender. <em>The Weight of Loving</em> is told through the eyes of a daughter who watched her mother&apos;s quiet strength up close — a story about what it truly means to love when love arrives with sacrifice, responsibility, and extraordinary endurance.</p>
          <div className="pull-box reveal">This is more than a story about loss. It is a story about the women who carry generations on their backs, and keep walking.</div>
          <p className="reveal">Sandra wrote it for anyone who has lost someone and is still learning how to carry what remains of them, for mothers who built a life for someone else before they had finished becoming themselves, and for anyone who carries a quiet weight and wants to feel a little less alone in it.</p>
          {teaser && (
            <Link className="more-link reveal" href="/book">
              More about the book <ArrowIcon />
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}

/* ---------- themes ---------- */
export function ThemesSection() {
  return (
    <section id="themes" className="section-pad">
      <div className="wrap">
        <div className="reveal" style={{ maxWidth: 640, marginBottom: 52 }}>
          <p className="lede">Themes in Her Story</p>
          <h2 style={{ fontSize: 34, marginTop: 10 }}>What this book carries</h2>
        </div>
        <div className="theme-grid">
          {themes.map((t, i) => (
            <div key={t.title} className="theme-item reveal" style={d(i)}>
              <ThemeDrip color={t.color} />
              <div>
                <h4>{t.title}</h4>
                <p>{t.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- book preview: quote + contents ---------- */
export function PreviewSection({ teaser = true }: { teaser?: boolean }) {
  return (
    <section id="preview" className="section-pad">
      <div className="wrap">
        <div className="reveal" style={{ maxWidth: 640, marginBottom: 44 }}>
          <p className="lede">Inside the Book</p>
          <h2 style={{ fontSize: 34, marginTop: 10 }}>Book Preview</h2>
        </div>

        <div className="quote-card reveal">
          <QuoteMark />
          <blockquote>This story is not only about what I have lost. It is about what I have carried.</blockquote>
          <p className="quote-cite">— Sandra Mubanga, from the Preface</p>
          <div className="quote-second">
            <blockquote>You do not move on from the people who shape you. You move forward with them — in memory, in habit, in the ways they have altered how you see the world.</blockquote>
            <p className="quote-cite">— from the Preface</p>
          </div>
        </div>

        <p className="lede reveal" style={{ marginBottom: 22 }}>Contents</p>
        <div className="toc">
          {chapters.map((c, i) => (
            <div key={c.name} className="toc-item reveal" style={d(i % 7)}>
              <span className="toc-num">{String(i + 1).padStart(2, "0")}</span>
              <span className="toc-name">{c.name}</span>
              <span className="toc-page">{c.page}</span>
            </div>
          ))}
        </div>
        {teaser && (
          <Link className="more-link reveal" href="/chapters" style={{ marginTop: 30 }}>
            View all chapters <ArrowIcon />
          </Link>
        )}
      </div>
    </section>
  );
}

/* ---------- reviews ---------- */
export function ReviewsSection() {
  return (
    <section id="reviews" className="section-pad" style={{ paddingTop: 64, paddingBottom: 64 }}>
      <div className="wrap">
        <div className="reveal" style={{ maxWidth: 640, marginBottom: 28 }}>
          <p className="lede">Reviews</p>
          <h2 style={{ fontSize: 26, marginTop: 10 }}>Advance Praise</h2>
        </div>
        <div className="reviews-strip reveal">
          <p>Reader and critical reviews will be added here as they become available. This space is reserved for genuine reader response to <em>The Weight of Loving</em>.</p>
          <span className="lede pulse" style={{ color: "var(--amber-deep)" }}>Coming soon</span>
        </div>
      </div>
    </section>
  );
}

/* ---------- final cta ---------- */
export function FinalCta({ secondary = { href: "/about", label: "Learn About Sandra" } }: { secondary?: { href: string; label: string } }) {
  return (
    <section className="section-pad" style={{ paddingTop: 20 }}>
      <div className="wrap">
        <div className="final-card reveal">
          <p className="eyebrow">Available Now</p>
          <h2>Read Sandra Mubanga&apos;s story.</h2>
          <p><em>The Weight of Loving</em> is her debut memoir, available through Elite Author Publishing — a true account of loss, motherhood, and the endurance it takes to keep going anyway.</p>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <a className="btn btn-primary" href={PUBLISHER_URL} target="_blank" rel="noopener">
              Get the Book
              <ArrowIcon />
            </a>
            <Link className="btn btn-ghost" href={secondary.href}>{secondary.label}</Link>
          </div>
          <p className="isbn">ISBN {ISBN} &middot; Published by Elite Author Publishing</p>
        </div>
      </div>
    </section>
  );
}

export function Divider() {
  return <hr className="divider" />;
}
