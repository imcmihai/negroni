"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Placeholder from "./Placeholder";
import Marquee, { Star } from "./Marquee";
import { SLOGANS, INFO } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger);

const TITLE = "NEGRONI";

export default function Hero() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const introDelay =
        sessionStorage.getItem("negroni-intro") === "done" ? 0.1 : 1.9;

      if (!reduced) {
        /* — intro — */
        const tl = gsap.timeline({ delay: introDelay });
        tl.from("[data-letter]", {
          yPercent: 118,
          duration: 1.1,
          ease: "power4.out",
          stagger: 0.055,
        })
          .from(
            "[data-glass]",
            {
              y: -80,
              scale: 0.85,
              rotate: -10,
              autoAlpha: 0,
              duration: 1.2,
              ease: "back.out(1.6)",
            },
            "-=0.7"
          )
          .from(
            "[data-fade]",
            { autoAlpha: 0, y: 24, duration: 0.8, ease: "power3.out", stagger: 0.08 },
            "-=0.8"
          );

        /* — scroll parallax: glass drifts slower than the type — */
        gsap.to("[data-glass]", {
          y: () => window.innerHeight * 0.22,
          rotate: 6,
          ease: "none",
          scrollTrigger: {
            trigger: root.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
        gsap.to("[data-title]", {
          yPercent: 34,
          ease: "none",
          scrollTrigger: {
            trigger: root.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      id="top"
      className="relative flex min-h-svh flex-col overflow-hidden bg-cream"
    >
      {/* top checker strip */}
      <div className="checker h-3.5 w-full [--sq:10px]" />

      <div className="relative flex flex-1 flex-col items-center justify-center px-4 pt-20 pb-10">
        {/* eyebrow */}
        <p data-fade className="eyebrow mb-5 flex items-center gap-3 text-red">
          <Star className="h-3 w-3" />
          Aperitivo Bar · Bucharest
          <Star className="h-3 w-3" />
        </p>

        {/* giant wordmark — letters clip-reveal from below */}
        <h1
          data-title
          className="display relative z-10 select-none overflow-hidden text-center text-[19.5vw] leading-[0.82] text-ink"
          aria-label="Negroni"
        >
          {TITLE.split("").map((ch, i) => (
            <span key={i} data-letter aria-hidden className="inline-block">
              {ch}
            </span>
          ))}
        </h1>

        {/* hero glass — sits ON the type, parallaxes slower */}
        <div
          data-glass
          className="pointer-events-none absolute left-1/2 top-1/2 z-20 w-[34vw] -translate-x-1/2 -translate-y-[54%] md:w-[21vw]"
        >
          <div className="float-idle">
            {/* <Placeholder
              tone="red"
              className="aspect-[3/4] w-full bg-cream shadow-[0_40px_80px_-30px_rgba(7,6,13,0.35)]"
              desc="Cut-out hero shot: a Negroni rocks glass with one oversized clear ice cube and an orange wheel, photographed straight-on, transparent background — the drink floats over the giant NEGRONI wordmark"
            /> */}
            <img
             
              className="aspect-[3/4] w-full "
             src="images/hero.png"
            />
          </div>
        </div>

        {/* tagline */}
        {/* <p
          data-fade
          className="serif-it relative z-30 mt-6 max-w-md text-center text-2xl text-ink md:text-3xl"
        >
          Wanna <span className="text-red">drink</span> about it?
        </p> */}

        {/* corner info — address */}
        <div
          data-fade
          className="absolute bottom-8 left-4 hidden max-w-[220px] text-[11px] font-semibold uppercase leading-relaxed tracking-widest md:left-8 md:block"
        >
          <p>{INFO.address}</p>
          <p className="text-red">Open daily from 18:19</p>
        </div>

        {/* corner info — rotating badge */}
        <div
          data-fade
          className="absolute bottom-8 right-4 hidden h-28 w-28 md:right-8 md:block"
        >
          <div className="spin-slow absolute inset-0">
            <svg viewBox="0 0 100 100" className="h-full w-full fill-ink">
              <defs>
                <path
                  id="badge-circle"
                  d="M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0"
                />
              </defs>
              <text className="font-mono text-[10.5px] uppercase tracking-[0.28em]">
                <textPath href="#badge-circle">
                  Negronied together forever ·
                </textPath>
              </text>
            </svg>
          </div>
          <div className="absolute inset-0 grid place-items-center">
            <span className="display text-xl text-red">18:19</span>
          </div>
        </div>
      </div>

      {/* slogan marquee */}
      <Marquee
        className="display bg-red py-3 text-[clamp(1.4rem,3.2vw,2.6rem)] text-cream"
        speed="30s"
        items={SLOGANS.map((s) => (
          <span key={s}>{s}</span>
        ))}
      />
    </section>
  );
}
