"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Placeholder from "./Placeholder";
import { DULCE_BANANA as D } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger);

/** Feature block for the banana-flask statement cocktail. */
export default function DulceBanana() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from("[data-reveal]", {
        y: 60,
        autoAlpha: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: { trigger: root.current, start: "top 65%" },
      });
      /* banana drifts and swings on scroll */
      gsap.fromTo(
        "[data-banana]",
        { y: 60, rotate: -8 },
        {
          y: -60,
          rotate: 8,
          ease: "none",
          scrollTrigger: {
            trigger: root.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        }
      );
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      className="relative overflow-hidden bg-ink px-4 py-28 text-cream md:px-10 md:py-40"
    >
      {/* giant ghost type behind */}
      <span
        className="display text-outline pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-[24vw] text-cream/20"
        aria-hidden
      >
        D&amp;B
      </span>

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 md:grid-cols-2">
        <div>
          <p data-reveal className="serif-it text-3xl text-red md:text-4xl">
            Liquid luxury,
          </p>
          <h2 data-reveal className="display mt-2 text-[clamp(2.8rem,7vw,6rem)]">
            Dulce &amp;<br />Banana
          </h2>
          <p data-reveal className="mt-8 max-w-md text-[15px] leading-relaxed opacity-85">
            {D.copy}
          </p>
          <div data-reveal className="mt-8 flex flex-wrap items-center gap-3">
            {[`${D.ml} ml`, D.abv, "banana flask included"].map((chip) => (
              <span
                key={chip}
                className="rounded-full border border-cream/40 px-4 py-1.5 font-mono text-xs uppercase tracking-widest"
              >
                {chip}
              </span>
            ))}
            <span className="display rounded-full bg-red px-5 py-2 text-2xl">
              {D.price} lei
            </span>
          </div>
        </div>

        <div data-banana className="relative mx-auto w-full max-w-sm">
          <Placeholder
            tone="ink"
            className="aspect-[3/4] w-full"
            desc={D.imgDesc}
          />
          {/* sticker: replace with round 'Pomo Negroni'-style sticker sheet asset */}
          <div className="absolute -right-6 -top-6 grid h-24 w-24 rotate-12 place-items-center rounded-full bg-red text-center">
            <span className="display text-sm leading-tight">
              very
              <br />
              dulce
              <br />
              vita
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
