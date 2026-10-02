"use client";

import Image from "next/image";
import { useRef } from "react";
import { CoverDrips } from "./Icons";

/** Book cover with ink-drip strokes and a gentle 3D tilt that follows the pointer. */
export default function BookCover({ priority = false }: { priority?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse" || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    ref.current.style.setProperty("--ry", `${x * 14}deg`);
    ref.current.style.setProperty("--rx", `${-y * 14}deg`);
  };

  const onLeave = () => {
    ref.current?.style.setProperty("--ry", "0deg");
    ref.current?.style.setProperty("--rx", "0deg");
  };

  return (
    <div className="cover-frame" ref={ref} onPointerMove={onMove} onPointerLeave={onLeave}>
      <CoverDrips />
      <div className="cover-tilt">
        <Image
          src="/images/the-weight-of-loving-cover.png"
          alt="Front cover of The Weight of Loving by Sandra Mubanga — a cream cover with hand-lettered scrawl and amber, plum, and pine ink drips beneath the title."
          width={313}
          height={466}
          priority={priority}
          sizes="(max-width: 400px) 70vw, 280px"
        />
      </div>
    </div>
  );
}
