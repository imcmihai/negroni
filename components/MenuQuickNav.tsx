"use client";

import { useEffect, useRef, useState } from "react";
import { MENU_CATEGORIES } from "@/lib/menu-data";
import { scrollToId } from "./SmoothScroll";

/**
 * Sticky category quick-nav — the primary wayfinding tool for a long menu.
 * Horizontally scrollable pill bar on mobile, scrollspy-highlighted as you
 * scroll, and auto-centers the active pill so it never wanders off-screen.
 */
export default function MenuQuickNav() {
  const [active, setActive] = useState(MENU_CATEGORIES[0].id);
  const barRef = useRef<HTMLDivElement>(null);
  const pillRefs = useRef<Record<string, HTMLAnchorElement | null>>({});

  useEffect(() => {
    const sections = MENU_CATEGORIES.map((c) => document.getElementById(c.id)).filter(
      (el): el is HTMLElement => !!el
    );
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-112px 0px -65% 0px", threshold: 0 }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  /* keep the active pill scrolled into view within the horizontal bar */
  useEffect(() => {
    const pill = pillRefs.current[active];
    if (pill) pill.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  }, [active]);

  const go = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    scrollToId(id);
  };

  return (
    <div
      ref={barRef}
      className="sticky top-0 z-40 border-y border-ink/15 bg-cream/95 backdrop-blur-md"
    >
      <nav
        aria-label="Menu categories"
        className="scrollbar-none flex snap-x snap-mandatory items-center gap-2 overflow-x-auto px-4 py-2.5 md:px-8"
      >
        {MENU_CATEGORIES.map((c) => {
          const isActive = c.id === active;
          return (
            <a
              key={c.id}
              ref={(el) => {
                pillRefs.current[c.id] = el;
              }}
              href={`#${c.id}`}
              onClick={go(c.id)}
              aria-current={isActive ? "true" : undefined}
              className={`btn-fill shrink-0 snap-start whitespace-nowrap rounded-full border px-4 py-1.5 text-[12px] font-bold uppercase tracking-wide transition-colors duration-300 [--fill:var(--red)] [--fill-text:var(--cream)] ${
                isActive
                  ? "border-red bg-red text-cream"
                  : "border-ink/15 bg-cream text-ink/70 hover:text-ink"
              }`}
            >
              {c.navLabel}
            </a>
          );
        })}
      </nav>
    </div>
  );
}
