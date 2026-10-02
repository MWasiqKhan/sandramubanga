"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navLinks, PUBLISHER_URL } from "@/lib/content";
import { ArrowIcon } from "./Icons";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setScrolled(window.scrollY > 8);
      setProgress(max > 0 ? Math.min(window.scrollY / max, 1) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const isActive = (href: string) => !href.includes("#") && pathname === href;

  return (
    <header className={scrolled ? "is-scrolled" : undefined}>
      <nav className="nav">
        <Link href="/" className="brand">
          <span className="name">Sandra Mubanga</span>
          <span className="role">Author</span>
        </Link>
        <div className="navlinks">
          {navLinks.map((l) => (
            <Link key={l.href} href={l.href} className={isActive(l.href) ? "active" : undefined}>
              {l.label}
            </Link>
          ))}
        </div>
        <div className="navcta">
          <a className="btn btn-primary" href={PUBLISHER_URL} target="_blank" rel="noopener">
            Get the Book
            <ArrowIcon />
          </a>
          <button
            className={`menu-btn${open ? " open" : ""}`}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mp"
            onClick={() => setOpen((o) => !o)}
          >
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path className="l1" d="M4 7h16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              <path className="l2" d="M4 12h16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              <path className="l3" d="M4 17h16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </nav>
      <div className={`mobile-panel${open ? " open" : ""}`} id="mp">
        <div className="mobile-inner">
          {navLinks.map((l, i) => (
            <Link key={l.href} href={l.href} style={{ "--i": i } as React.CSSProperties} onClick={() => setOpen(false)}>
              {l.label}
            </Link>
          ))}
        </div>
      </div>
      <div className="scroll-progress" style={{ transform: `scaleX(${progress})` }} aria-hidden="true" />
    </header>
  );
}
