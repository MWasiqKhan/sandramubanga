export function ArrowIcon() {
  return (
    <svg className="arrow" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 21s-6.5-6-6.5-11A6.5 6.5 0 0 1 18.5 10c0 5-6.5 11-6.5 11Z" stroke="currentColor" strokeWidth="1.3" />
      <circle cx="12" cy="10" r="2.2" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  );
}

export function GlobeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.3" />
      <path d="M3.5 12h17M12 3.5c2.5 2.3 4 5.3 4 8.5s-1.5 6.2-4 8.5c-2.5-2.3-4-5.3-4-8.5s1.5-6.2 4-8.5Z" stroke="currentColor" strokeWidth="1.1" />
    </svg>
  );
}

export function BookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 5.5C4 4.7 4.7 4 5.5 4H12v16H5.5C4.7 20 4 19.3 4 18.5V5.5Z" stroke="currentColor" strokeWidth="1.3" />
      <path d="M20 5.5c0-.8-.7-1.5-1.5-1.5H12v16h6.5c.8 0 1.5-.7 1.5-1.5V5.5Z" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  );
}

export function QuoteMark() {
  return (
    <svg className="quote-mark" viewBox="0 0 34 26" fill="none" aria-hidden="true">
      <path d="M0 26V16C0 6 6 0 15 0V6C9 6 6 9 6 16H14V26H0ZM20 26V16C20 6 26 0 34 0V6C28 6 26 9 26 16H34V26H20Z" fill="currentColor" />
    </svg>
  );
}

export function ThemeDrip({ color }: { color: string }) {
  return (
    <svg className="theme-drip" viewBox="0 0 20 30" fill="none" aria-hidden="true">
      <path className="draw" pathLength={1} d="M10 2C4 10 3 16 7 20c3 3 2 6 0 8" stroke={color} strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

export function CoverDrips() {
  return (
    <svg className="drip" viewBox="0 0 200 260" width="220" style={{ left: -40, top: -26, zIndex: 1 }} aria-hidden="true">
      <path className="draw draw-1" pathLength={1} d="M30 10 C10 40 8 70 26 90 C 40 106 30 130 18 150 C 40 148 54 168 46 192" fill="none" stroke="var(--amber)" strokeWidth="10" strokeLinecap="round" opacity="0.5" />
      <path className="draw draw-2" pathLength={1} d="M150 4 C170 34 176 58 158 78 C144 94 150 118 168 132" fill="none" stroke="var(--pine)" strokeWidth="9" strokeLinecap="round" opacity="0.45" />
    </svg>
  );
}
