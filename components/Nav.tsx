"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { scrollToId } from "./SmoothScroll";

gsap.registerPlugin(ScrollTrigger);

const LINKS = [
  { label: "On Tap", id: "menu" },
  { label: "The Train", id: "train" },
  { label: "Signatures", id: "signatures" },
  { label: "Events", id: "events" },
  { label: "Merch", id: "merch" },
];

/** Live Bucharest clock — the bar's whole identity runs on :19 minutes. */
function useBucharestTime() {
  const [time, setTime] = useState<string | null>(null);
  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-GB", {
      timeZone: "Europe/Bucharest",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
    const tick = () => setTime(fmt.format(new Date()));
    tick();
    const t = setInterval(tick, 10_000);
    return () => clearInterval(t);
  }, []);
  return time;
}

export default function Nav() {
  const ref = useRef<HTMLElement>(null);
  const time = useBucharestTime();

  /* hide on scroll down, reveal on scroll up */
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const st = ScrollTrigger.create({
      start: "top top",
      end: "max",
      onUpdate: (self) => {
        gsap.to(el, {
          yPercent: self.direction === 1 && self.scroll() > 200 ? -110 : 0,
          duration: 0.4,
          ease: "power3.out",
          overwrite: "auto",
        });
      },
    });
    return () => st.kill();
  }, []);

  const go = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    scrollToId(id);
  };

  return (
    <header
      ref={ref}
      className="fixed inset-x-0 top-0 z-50 flex items-center justify-between px-4 py-3 md:px-8"
    >
      {/* wordmark */}
      <a
        href="#top"
        onClick={go("top")}
        className="group flex items-center gap-2 text-ink"
      >
        {/* Roundel: replace with the real red NEGRONI roundel logo (SVG),
            as seen on the menu cover and IG avatar */}
        <span className="grid h-8 w-8 place-items-center rounded-full bg-red text-[7px] font-bold uppercase tracking-wider text-cream transition-transform duration-500 group-hover:rotate-[360deg]">
          NEG
        </span>
        <span className="display text-xl leading-none">Negroni</span>
      </a>

      {/* links */}
      <nav className="hidden items-center gap-1 rounded-full border border-ink/15 bg-cream/80 px-2 py-1.5 backdrop-blur-md lg:flex">
        {LINKS.map((l) => (
          <a
            key={l.id}
            href={`#${l.id}`}
            onClick={go(l.id)}
            className="btn-fill rounded-full px-4 py-1.5 text-[13px] font-semibold uppercase tracking-wide [--fill:var(--red)]"
          >
            {l.label}
          </a>
        ))}
      </nav>

      {/* clock + CTA */}
      <div className="flex items-center gap-2">
        <span
          className="hidden rounded-full border border-ink/15 bg-cream/80 px-3 py-2 font-mono text-xs tracking-widest backdrop-blur-md sm:block"
          suppressHydrationWarning
        >
          BUC {time ?? "--:--"}
        </span>
        <a
          href="/menu"
          className="btn-fill hidden rounded-full border border-ink/15 bg-cream/80 px-4 py-2 text-[13px] font-semibold uppercase tracking-wide backdrop-blur-md [--fill:var(--red)] [--fill-text:var(--cream)] sm:block"
        >
          Full menu
        </a>
        <a
          href="#visit"
          onClick={go("visit")}
          className="btn-fill rounded-full bg-red px-5 py-2 text-[13px] font-bold uppercase tracking-wide text-cream [--fill:var(--ink)] [--fill-text:var(--cream)]"
        >
          Find us
        </a>
      </div>
    </header>
  );
}
