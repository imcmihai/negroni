"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Placeholder from "./Placeholder";
import Marquee from "./Marquee";
import { MERCH, SLOGANS } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger);

export default function Merch() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from("[data-slogan]", {
        yPercent: 100,
        autoAlpha: 0,
        duration: 0.9,
        ease: "power4.out",
        stagger: 0.08,
        scrollTrigger: { trigger: "[data-slogans]", start: "top 75%" },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} id="merch" className="overflow-hidden bg-cream py-24 text-ink md:py-32">
      <div className="px-4 md:px-10">
        <p className="eyebrow mb-3 text-red">Merch — wear your Negroni</p>

        {/* slogans as oversized outline type, filling red on hover — stroke stays visible against the cream bg either way */}
        <div data-slogans>
          {SLOGANS.map((s) => (
            <p
              key={s}
              data-slogan
              className="display text-outline fill-on-hover w-fit cursor-default text-[clamp(1.8rem,5.4vw,4.6rem)] text-ink hover:text-red"
            >
              {s}
            </p>
          ))}
        </div>
      </div>

      {/* product marquee */}
      <Marquee
        className="mt-16 border-y border-ink/15 py-6"
        speed="45s"
        separator={<span className="mx-3" />}
        items={MERCH.map((m) => (
          <div key={m.name} className="group w-48 shrink-0">
            <Placeholder
              tone="ink"
              className="aspect-square w-full transition-transform duration-500 group-hover:-rotate-2 group-hover:scale-[1.03]"
              desc={m.imgDesc}
            />
            <div className="mt-3 flex items-baseline justify-between whitespace-normal">
              <span className="display text-lg">{m.name}</span>
              <span className="font-mono text-xs text-red">{m.price}</span>
            </div>
          </div>
        ))}
      />

      <p className="mt-8 px-4 text-sm opacity-60 md:px-10">
        Available at the bar — 5 Matei Millo St. Ask for the Negroni Passport while
        you're at it.
      </p>
    </section>
  );
}
