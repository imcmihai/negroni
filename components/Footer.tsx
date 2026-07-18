"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { INFO } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from("[data-line]", {
        yPercent: 110,
        duration: 1,
        ease: "power4.out",
        stagger: 0.12,
        scrollTrigger: { trigger: root.current, start: "top 70%" },
      });
      /* giant wordmark rises from below the fold */
      gsap.fromTo(
        "[data-giant]",
        { yPercent: 45 },
        {
          yPercent: 0,
          ease: "none",
          scrollTrigger: {
            trigger: root.current,
            start: "top bottom",
            end: "bottom bottom",
            scrub: 1,
          },
        }
      );
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <footer ref={root} id="visit" className="relative overflow-hidden bg-red text-cream">
      <div className="px-4 pb-10 pt-24 md:px-10 md:pt-32">
        <h2 className="display text-[clamp(3rem,9vw,8rem)] leading-[0.85]">
          <span className="block overflow-hidden">
            <span data-line className="block">See you</span>
          </span>
          <span className="block overflow-hidden">
            <span data-line className="block">
              at <span className="serif-it normal-case">18:19</span>
            </span>
          </span>
        </h2>

        <div className="mt-16 grid gap-10 border-t border-cream/30 pt-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="eyebrow mb-4 opacity-70">Visit</p>
            <a
              href={INFO.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="display text-2xl underline-offset-4 hover:underline"
            >
              {INFO.address}
            </a>
          </div>

          <div>
            <p className="eyebrow mb-4 opacity-70">Hours</p>
            {INFO.hours.map((h) => (
              <p key={h.days} className="flex justify-between gap-4 font-mono text-sm">
                <span>{h.days}</span>
                <span>{h.time}</span>
              </p>
            ))}
            <p className="mt-3 text-xs opacity-70">
              This bar is no playground — strictly 18+.
            </p>
          </div>

          <div>
            <p className="eyebrow mb-4 opacity-70">Follow</p>
            <ul className="space-y-2">
              <li>
                <a href={INFO.instagram} target="_blank" rel="noreferrer" className="btn-fill px-1 text-lg font-semibold [--fill:var(--cream)] [--fill-text:var(--red)]">
                  Instagram {INFO.instagramHandle}
                </a>
              </li>
              <li>
                <a href={INFO.tripadvisor} target="_blank" rel="noreferrer" className="btn-fill px-1 text-lg font-semibold [--fill:var(--cream)] [--fill-text:var(--red)]">
                  TripAdvisor
                </a>
              </li>
              <li>
                <a href={INFO.menuPdf} target="_blank" rel="noreferrer" className="btn-fill px-1 text-lg font-semibold [--fill:var(--cream)] [--fill-text:var(--red)]">
                  Menu (PDF)
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-4 opacity-70">House rules</p>
            <p className="text-sm leading-relaxed opacity-85">
              When we're full, entry temporarily closes — step out, rejoin the line.
              Show us love on Google Maps; your review is the cherry on top of our
              night.
            </p>
          </div>
        </div>
      </div>

      {/* giant outline wordmark peeking from the bottom */}
      <div className="pointer-events-none relative mt-6 h-[16vw] overflow-hidden" aria-hidden>
        <span
          data-giant
          className="display text-outline absolute left-1/2 top-0 -translate-x-1/2 whitespace-nowrap text-[19vw] leading-[0.8] text-cream"
        >
          NEGRONI
        </span>
      </div>

      <div className="relative z-10 flex flex-wrap items-center justify-between gap-2 px-4 py-4 font-mono text-[10px] uppercase tracking-[0.25em] md:px-10">
        <span>© 2026 Negroni Aperitivo Bar</span>
        <span>Negronied together forever</span>
      </div>

      <div className="checker h-4 w-full [--c2:var(--ink)]" />
    </footer>
  );
}
