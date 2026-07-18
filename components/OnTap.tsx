"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Placeholder from "./Placeholder";
import { TAP_COCKTAILS } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger);

/**
 * The 12 tap cocktails as a horizontally-scrubbed "train" of cars,
 * pinned while you scroll. A tiny train rides the progress track below.
 */
export default function OnTap() {
  const root = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const train = useRef<HTMLDivElement>(null);
  const bar = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add(
      { desktop: "(min-width: 769px) and (prefers-reduced-motion: no-preference)" },
      () => {
        const trackEl = track.current!;
        const dist = () => trackEl.scrollWidth - window.innerWidth;

        gsap.to(trackEl, {
          x: () => -dist(),
          ease: "none",
          scrollTrigger: {
            trigger: root.current,
            start: "top top",
            end: () => "+=" + dist(),
            scrub: 1,
            pin: true,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              if (train.current && bar.current) {
                const w = bar.current.clientWidth - train.current.clientWidth;
                gsap.set(train.current, { x: self.progress * w });
              }
            },
          },
        });

        /* cars gently sway as the train moves */
        gsap.utils.toArray<HTMLElement>("[data-car]").forEach((car, i) => {
          gsap.to(car, {
            y: i % 2 ? -14 : 14,
            ease: "none",
            scrollTrigger: {
              trigger: root.current,
              start: "top top",
              end: "max",
              scrub: 2,
            },
          });
        });
      }
    );

    return () => mm.revert();
  }, []);

  return (
    <section ref={root} id="menu" className="relative overflow-hidden bg-cream text-black">
      <div className="flex min-h-svh flex-col justify-center py-16">
        {/* header */}
        <div className="px-4 md:px-10">
          <p className="eyebrow mb-3 opacity-80">Cocktails on tap — 36 lei each</p>
          <h2 className="display text-[clamp(2.6rem,7.5vw,6.5rem)]">
            12 Aperitivo
            <span className="text-outline ml-4">Classics</span>
          </h2>
        </div>

        {/* horizontal track (native swipe-scroll on mobile) */}
        <div className="mt-10 overflow-x-auto md:overflow-visible">
          <div
            ref={track}
            className="flex w-max items-stretch gap-4 px-4 pb-4 md:gap-6 md:px-10"
          >
            {TAP_COCKTAILS.map((c, i) => (
              <article
                key={c.name}
                data-car
                className="group relative flex w-[76vw] shrink-0 flex-col border border-cream/40 bg-cream border-red text-cream p-5 transition-colors duration-500 bg-cream text-red sm:w-[340px]"
              >
                <div className="mb-4 flex items-start justify-between">
                  <span className="font-mono text-xs opacity-70">
                    {String(i + 1).padStart(2, "0")} / 12
                  </span>
                  <span className="font-mono text-xs opacity-70">
                    {c.ml} ml · {c.abv}
                  </span>
                </div>

                {/* <Placeholder
                  tone="ink"
                  className="mb-5 aspect-[4/5] w-full border-current bg-transparent text-current"
                  desc={c.imgDesc}
                /> */}
                     <img
                  className="mb-5 aspect-[4/5] w-full border-current bg-transparent text-current"
                  src={c.src}
                />

                <h3 className="display text-3xl">{c.name}</h3>
                <p className="eyebrow mt-2 opacity-80">{c.notes}</p>
                <p className="mt-3 text-[13px] leading-relaxed opacity-80">
                  {c.ingredients}
                </p>

                <div className="mt-auto flex items-center justify-between pt-5">
                  <span className="display text-2xl">{c.price} lei</span>
                  {/* tap icon: replace with a small line-icon of a beer-style tap
                      pouring a negroni */}
                  <span className="grid h-9 w-9 place-items-center rounded-full border border-current text-[9px] font-bold uppercase">
                    tap
                  </span>
                </div>
              </article>
            ))}

            {/* caboose card → aperitivo train teaser */}
            <a
              href="#train"
              className="group relative flex w-[76vw] shrink-0 flex-col items-start justify-center gap-4 border border-cream/40 bg-ink p-8 text-cream transition-colors duration-500 bg-red text-cream sm:w-[340px]"
            >
              <p className="eyebrow text-red">Psst, amici</p>
              <p className="display text-4xl leading-none">
                All 12, for 28 lei each, every day
              </p>
              <span className="btn-fill mt-2 border border-current px-5 py-2 text-xs font-bold uppercase tracking-widest [--fill:var(--red)]">
                Board the Aperitivo Train →
              </span>
            </a>
          </div>
        </div>

        {/* progress rail + running train */}
        <div className="mt-8 hidden px-4 md:block md:px-10">
          <div ref={bar} className="relative border-t-2 border-dashed border-ink/50 pt-2">
            <div ref={train} className="absolute -top-[13px] left-0">
              <TrainIcon className="h-6 w-auto text-ink" />
            </div>
          </div>
          <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.3em] opacity-60">
            Keep scrolling — the train is moving
          </p>
        </div>
      </div>
    </section>
  );
}

/** Minimal loco + two cars. Replace with a custom illustrated brand train if available. */
export function TrainIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 96 24" fill="currentColor" className={className} aria-hidden>
      <rect x="0" y="4" width="26" height="12" rx="2" />
      <rect x="30" y="4" width="26" height="12" rx="2" />
      <path d="M60 16V6a2 2 0 0 1 2-2h20l10 8v4z" />
      <circle cx="7" cy="20" r="3" />
      <circle cx="19" cy="20" r="3" />
      <circle cx="37" cy="20" r="3" />
      <circle cx="49" cy="20" r="3" />
      <circle cx="67" cy="20" r="3" />
      <circle cx="83" cy="20" r="3" />
    </svg>
  );
}
