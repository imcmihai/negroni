"use client";

import { useEffect, useState } from "react";

/** Floating "back to top" button — appears once you've scrolled past the
 *  hero, so the long menu never feels like a one-way street on mobile. */
export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setVisible(window.scrollY > 640);
        ticking = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goTop = () => {
    if (window.__lenis) {
      window.__lenis.scrollTo(0, { duration: 1.1 });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <button
      type="button"
      onClick={goTop}
      aria-label="Back to top"
      className={`btn-fill fixed bottom-5 right-4 z-40 grid h-11 w-11 place-items-center rounded-full border border-ink/15 bg-cream text-ink shadow-[0_10px_30px_rgba(7,6,13,0.18)] transition-all duration-300 [--fill:var(--red)] [--fill-text:var(--cream)] md:bottom-8 md:right-8 ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2.5}>
        <path d="M12 19V5M5 12l7-7 7 7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );
}
