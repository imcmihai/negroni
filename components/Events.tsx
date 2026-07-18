"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Placeholder from "./Placeholder";
import { EVENTS, INFO } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger);

export default function Events() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from("[data-card]", {
        y: 110,
        rotate: (i) => [-3, 2, -2][i % 3],
        autoAlpha: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.14,
        scrollTrigger: { trigger: "[data-cards]", start: "top 72%" },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} id="events" className="bg-cream px-4 py-24 md:px-10 md:py-32">
      <p className="eyebrow mb-3 text-red">A bit of agenda</p>
      <h2 className="display max-w-3xl text-[clamp(2.6rem,7.5vw,6.5rem)]">
        More than <span className="serif-it text-red normal-case">a</span> bar
      </h2>

      <div data-cards className="mt-14 grid gap-6 md:grid-cols-3">
        {EVENTS.map((ev, i) => (
          <article
            key={ev.title}
            data-card
            className={`group flex flex-col p-6 transition-transform duration-500 hover:-translate-y-2 ${
              i === 1 ? "bg-ink text-cream" : "bg-red text-cream"
            }`}
          >
            <div className="mb-5 flex items-center justify-between">
              <span className="rounded-full border border-cream/50 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.25em]">
                {ev.tag}
              </span>
              {/* icon: replace with line icons — cocktail shaker (guest bartending),
                  vinyl record (parties), passport stamp (membership) */}
              <span className="halftone h-8 w-8 rounded-full opacity-60" />
            </div>

            <Placeholder
              tone="ink"
              className="mb-6 aspect-[4/3] w-full border-cream/40 bg-transparent text-cream"
              desc={ev.imgDesc}
            />

            <h3 className="display text-3xl">{ev.title}</h3>
            <p className="mt-3 text-[14px] leading-relaxed opacity-85">{ev.copy}</p>

            <a
              href={INFO.instagram}
              target="_blank"
              rel="noreferrer"
              className="btn-fill mt-6 w-fit border border-cream/60 px-4 py-2 text-[11px] font-bold uppercase tracking-widest [--fill:var(--cream)] [--fill-text:var(--ink)]"
            >
              Follow {INFO.instagramHandle}
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
