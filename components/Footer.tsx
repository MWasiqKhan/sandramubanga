import Link from "next/link";
import { ISBN, navLinks, PUBLISHER_URL } from "@/lib/content";

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-grid">
          <div className="reveal">
            <div className="foot-brand">Sandra Mubanga</div>
            <p className="foot-role">Author</p>
            <p>Sandra Mubanga is the author of <em>The Weight of Loving</em>, a memoir of loss, resilience, motherhood, and the invisible burdens we inherit from those who came before us.</p>
          </div>
          <div className="reveal" style={{ "--d": 1 } as React.CSSProperties}>
            <p className="foot-h">Explore</p>
            <ul className="foot-links">
              {navLinks.map((l) => (
                <li key={l.href}><Link href={l.href}>{l.label}</Link></li>
              ))}
            </ul>
          </div>
          <div className="reveal" style={{ "--d": 2 } as React.CSSProperties}>
            <p className="foot-h">Publisher</p>
            <ul className="foot-links">
              <li><a href={PUBLISHER_URL} target="_blank" rel="noopener">eliteauthorpublishing.com</a></li>
              <li><span>ISBN {ISBN}</span></li>
            </ul>
          </div>
        </div>
        <div className="foot-bottom">
          <span>© Sandra Mubanga. All rights reserved.</span>
          <span>Official author website</span>
        </div>
      </div>
    </footer>
  );
}
