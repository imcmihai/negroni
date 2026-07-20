"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Placeholder from "./Placeholder";
import { SIGNATURES, INFO } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger);

/* intrinsic pixel dimensions of each signature photo, for next/image sizing math —
   CSS (aspect-[3/4] + object-cover) still controls the rendered box */
const SIGNATURE_DIMENSIONS: Record<string, { width: number; height: number }> = {
  "/images/signatures/tiki-negroni.png": { width: 2000, height: 2500 },
  "/images/signatures/porno-negroni.png": { width: 399, height: 501 },
  "/images/signatures/negroni-supremo.png": { width: 1920, height: 2592 },
  "/images/signatures/drinkita.png": { width: 399, height: 501 },
  "/images/signatures/sunset-spritz.png": { width: 600, height: 900 },
};

/**
 * Signature list — rows fill red on hover while a floating image preview
 * follows the cursor (classic awwwards list pattern).
 */
export default function Signatures() {
  const root = useRef<HTMLElement>(null);
  const preview = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from("[data-row]", {
        yPercent: 60,
        autoAlpha: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.07,
        scrollTrigger: { trigger: "[data-list]", start: "top 75%" },
      });
    }, root);

    /* cursor-follow preview */
    const xTo = gsap.quickTo(preview.current, "x", { duration: 0.5, ease: "power3" });
    const yTo = gsap.quickTo(preview.current, "y", { duration: 0.5, ease: "power3" });
    const move = (e: MouseEvent) => {
      xTo(e.clientX + 24);
      yTo(e.clientY - 140);
    };
    window.addEventListener("mousemove", move);
    return () => {
      window.removeEventListener("mousemove", move);
      ctx.revert();
    };
  }, []);

  useEffect(() => {
    gsap.to(preview.current, {
      autoAlpha: active === null ? 0 : 1,
      scale: active === null ? 0.85 : 1,
      rotate: active === null ? -6 : 3,
      duration: 0.35,
      ease: "power3.out",
    });
  }, [active]);

  return (
    <section ref={root} id="signatures" className="relative bg-cream py-24 md:py-32">
      <div className="px-4 md:px-10">
        {/* <p className="eyebrow mb-3 text-red ">Signatures &amp; twists</p> */}
        <h2 className="display text-[clamp(2.6rem,7.5vw,6.5rem)] w-full text-center">
          The Negronied <span className="serif-it text-red normal-case">way</span>
        </h2>
      </div>

      <div data-list className="mt-12 border-t border-ink/15">
        {SIGNATURES.map((s, i) => (
          <div
            key={s.name}
            data-row
            onMouseEnter={() => setActive(i)}
            onMouseLeave={() => setActive(null)}
            className="group relative cursor-pointer border-b border-ink/15 px-4 py-6 md:px-10"
          >
            {/* red fill sweeping up */}
            <div className="absolute inset-0 origin-bottom scale-y-0 bg-red transition-transform duration-500 [transition-timing-function:cubic-bezier(0.76,0,0.24,1)] group-hover:scale-y-100" />
            <div className="relative z-10 flex items-center gap-4 transition-colors duration-300 group-hover:text-cream md:grid md:items-baseline md:gap-x-6 md:gap-y-1 md:grid-cols-[3rem_1fr_auto_auto]">
              <span className="hidden font-mono text-xs opacity-60 md:block">
                {String(i + 1).padStart(2, "0")}
              </span>
              <Image
                src={s.src}
                alt={s.name}
                {...SIGNATURE_DIMENSIONS[s.src]}
                className="aspect-[3/4] w-20 shrink-0 rounded-lg object-cover shadow-md md:hidden"
              />
              <div className="min-w-0 flex-1 md:contents">
                <h3 className="display text-3xl md:text-5xl">{s.name}</h3>
                <p className="mt-[5px] max-w-[10rem] text-[13px] italic opacity-70 md:mt-0 md:max-w-xs md:text-right">
                  {s.notes}
                </p>
                <div className="flex items-baseline gap-4 md:w-40 md:justify-end">
                  <span className="font-mono text-xs opacity-60">
                    {s.ml}ml · {s.abv}
                  </span>
                  <span className="display absolute bottom-4 right-4 text-2xl md:static md:bottom-auto md:right-auto">
                    {s.price} lei
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* floating preview card */}
      <div
        ref={preview}
        className="pointer-events-none fixed left-0 top-0 z-40 hidden w-60 opacity-0 md:block"
        aria-hidden
      >
        {active !== null && (
          // <Placeholder
          //   tone="red"
          //   className="aspect-[3/4] w-full bg-cream shadow-2xl"
          //   desc={SIGNATURES[active].imgDesc}
          // />
            <Image
            className="aspect-[3/4]"
            src={SIGNATURES[active].src}
            alt={SIGNATURES[active].name}
            {...SIGNATURE_DIMENSIONS[SIGNATURES[active].src]}
          />
        )}
      </div>

      <div className="mt-12 flex flex-wrap items-center gap-4 px-4 md:px-10">
        <a
          href="/menu"
          className="btn-fill bg-red px-6 py-3 text-xs font-bold uppercase tracking-widest text-cream [--fill:var(--ink)] [--fill-text:var(--cream)]"
        >
          Browse the full menu →
        </a>
        {/* <a
          href={INFO.menuPdf}
          target="_blank"
          rel="noreferrer"
          className="btn-fill border border-ink px-6 py-3 text-xs font-bold uppercase tracking-widest [--fill:var(--red)]"
        >
          Download PDF ↗
        </a> */}
        <p className="text-sm opacity-60">
          + classics, frozen drops, shots, zero-proof, wine &amp; antipasti at the bar
        </p>
      </div>
    </section>
  );
}
