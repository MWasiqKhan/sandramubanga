import Link from "next/link";
import { ArrowIcon } from "@/components/Icons";

export default function NotFound() {
  return (
    <section className="page-hero" style={{ minHeight: "60vh", display: "flex", alignItems: "center" }}>
      <div className="wrap">
        <p className="eyebrow hero-in">Page not found</p>
        <h1 className="title hero-in" style={{ "--d": 1 } as React.CSSProperties}>This page has wandered off.</h1>
        <p className="hero-tag hero-in" style={{ "--d": 2 } as React.CSSProperties}>The page you were looking for doesn&apos;t exist.</p>
        <Link className="btn btn-primary hero-in" style={{ "--d": 3 } as React.CSSProperties} href="/">
          Back to home <ArrowIcon />
        </Link>
      </div>
    </section>
  );
}
