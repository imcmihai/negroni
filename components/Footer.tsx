"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { INFO } from "@/lib/data";
import { scrollToId } from "./SmoothScroll";
import { Star } from "./Marquee";

gsap.registerPlugin(ScrollTrigger);

const GIANT = "NEGRONI";

const PAGE_LINKS = [
  { label: "On Tap", id: "menu" },
  { label: "The Train", id: "train" },
  { label: "Signatures", id: "signatures" },
  { label: "Events", id: "events" },
  { label: "Merch", id: "merch" },
];

/**
 * Parallax reveal footer — the footer lives in a fixed layer *underneath*
 * the site (main has z-10 + opaque backgrounds). A spacer of equal height
 * sits in normal flow, so reaching the bottom "lifts the curtain".
 * While revealing, the footer content parallaxes up and the giant
 * wordmark letters rise with a scrubbed stagger.
 */
export default function Footer() {
  const fixedRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const spacerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  /* keep the flow-spacer exactly as tall as the fixed footer */
  useEffect(() => {
    const el = fixedRef.current;
    if (!el) return;
    const ro = new ResizeObserver(() => {
      setHeight(el.offsetHeight);
      ScrollTrigger.refresh();
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = gsap.context(() => {
      const st = {
        trigger: spacerRef.current,
        start: "top bottom",
        end: "bottom bottom",
        scrub: true,
      } as const;

      /* content drifts up slower than the curtain lifts (classic reveal parallax) */
      gsap.fromTo(
        innerRef.current,
        { yPercent: -28 },
        { yPercent: 0, ease: "none", scrollTrigger: st }
      );

      /* giant letters rise one by one as the reveal progresses */
      gsap.fromTo(
        "[data-giant-letter]",
        { yPercent: 60 },
        { yPercent: 0, ease: "power1.out", stagger: 0.05, scrollTrigger: st }
      );

      /* pills float in near the end of the reveal */
      gsap.fromTo(
        "[data-pill]",
        { y: 24, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          ease: "none",
          stagger: 0.03,
          scrollTrigger: { ...st, start: "top 90%", end: "top 30%" },
        }
      );
    }, fixedRef);
    return () => ctx.revert();
  }, []);

  const go = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    scrollToId(id);
  };

  const pill =
    "btn-fill rounded-full border border-ink/25 px-5 py-2.5 text-sm font-medium " +
    "[--fill:var(--red)] [--fill-text:var(--cream)]";

  return (
    <footer id="visit-footer" aria-label="Footer">
      {/* ——— fixed layer under the site ——— */}
      <div ref={fixedRef} className="fixed bottom-0 left-0 z-0 w-full bg-cream text-ink">
        <div ref={innerRef} className="flex min-h-svh flex-col justify-between">
          {/* top: address + hours + link clouds */}
          <div className="grid gap-10 px-4 pt-16 md:grid-cols-[1fr_auto_auto] md:gap-16 md:px-10 md:pt-20">
            <div>
              <p className="eyebrow mb-4 flex items-center gap-2 text-red">
                <Star className="h-3 w-3" /> See you at 18:19
              </p>
              <a
                href={INFO.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="display block text-3xl hover:text-red md:text-4xl"
              >
                {INFO.address}
              </a>
              <div className="mt-5 space-y-1 font-mono text-sm">
                {INFO.hours.map((h) => (
                  <p key={h.days} className="flex max-w-60 justify-between gap-6">
                    <span className="opacity-60">{h.days}</span>
                    <span>{h.time}</span>
                  </p>
                ))}
              </div>
              <p className="mt-4 text-xs opacity-60">
                This bar is no playground — strictly 18+.
              </p>
            </div>

            {/* pill cloud: site links */}
            <div>
              <p className="eyebrow mb-4 opacity-50">Menu</p>
              <div className="flex max-w-xs flex-wrap gap-2.5">
                {PAGE_LINKS.map((l) => (
                  <a key={l.id} data-pill href={`#${l.id}`} onClick={go(l.id)} className={pill}>
                    {l.label}
                  </a>
                ))}
              </div>
            </div>

            {/* pill cloud: social */}
            <div>
              <p className="eyebrow mb-4 opacity-50">Social</p>
              <div className="flex max-w-xs flex-wrap gap-2.5">
                <a data-pill href={INFO.instagram} target="_blank" rel="noreferrer" className={pill}>
                  Instagram ↗
                </a>
                <a data-pill href={INFO.tripadvisor} target="_blank" rel="noreferrer" className={pill}>
                  TripAdvisor ↗
                </a>
                <a data-pill href={INFO.menuPdf} target="_blank" rel="noreferrer" className={pill}>
                  Menu PDF ↗
                </a>
                <a data-pill href={INFO.mapsUrl} target="_blank" rel="noreferrer" className={pill}>
                  Google Maps ↗
                </a>
              </div>
            </div>
          </div>

          {/* bottom: the massive wordmark, edge to edge */}
          <div className="mt-14">
            <div
              className="display select-none overflow-hidden whitespace-nowrap px-1 text-center text-[19.7vw] leading-[0.78] tracking-[-0.01em]"
              aria-hidden
            >
              {GIANT.split("").map((ch, i) => (
                <span key={i} data-giant-letter className="inline-block">
                  {ch}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap items-center justify-between gap-2 border-t border-ink/15 px-4 py-3 font-mono text-[10px] uppercase tracking-[0.25em] md:px-10">
              <span>© 2026 Negroni Aperitivo Bar</span>
              <span className="text-red">Negronied together forever</span>
            </div>
            <div className="checker h-3.5 w-full [--sq:10px]" />
          </div>
        </div>
      </div>

      {/* ——— flow spacer: reserves scroll room equal to footer height ——— */}
      <div
        ref={spacerRef}
        id="visit"
        style={{ height: height || "100svh" }}
        aria-hidden
      />
    </footer>
  );
}
