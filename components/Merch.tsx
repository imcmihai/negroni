"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Placeholder from "./Placeholder";
import Marquee from "./Marquee";
import { MERCH, SLOGANS } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger);

const REPEL_RADIUS = 130; // px, how close the cursor must be to a character to push it
const REPEL_STRENGTH = 60; // px, max displacement at the cursor's center

/** Splits a line into words (kept unbreakable) of individually-animatable characters. */
function SplitWords({ text }: { text: string }) {
  const words = text.split(" ");
  return (
    <>
      {words.map((word, wi) => (
        <span key={wi}>
          <span className="inline-block whitespace-nowrap">
            {word.split("").map((char, ci) => (
              <span key={ci} data-char className="inline-block">
                {char}
              </span>
            ))}
          </span>
          {wi < words.length - 1 ? " " : ""}
        </span>
      ))}
    </>
  );
}

export default function Merch() {
  const root = useRef<HTMLElement>(null);
  const slogansRef = useRef<HTMLDivElement>(null);

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

  // characters split apart around the cursor as it passes over them
  useEffect(() => {
    const container = slogansRef.current;
    if (!container) return;

    const mm = gsap.matchMedia();
    mm.add("(hover: hover) and (pointer: fine)", () => {
      const chars = Array.from(container.querySelectorAll<HTMLElement>("[data-char]"));
      const movers = chars.map((el) => ({
        x: gsap.quickTo(el, "x", { duration: 0.35, ease: "power4.out" }),
        y: gsap.quickTo(el, "y", { duration: 0.35, ease: "power4.out" }),
      }));

      let centers: { ox: number; oy: number }[] = [];
      const measure = () => {
        const containerRect = container.getBoundingClientRect();
        centers = chars.map((el) => {
          const r = el.getBoundingClientRect();
          return {
            ox: r.left - containerRect.left + r.width / 2,
            oy: r.top - containerRect.top + r.height / 2,
          };
        });
      };
      measure();

      const onMove = (e: MouseEvent) => {
        const containerRect = container.getBoundingClientRect();
        const mx = e.clientX - containerRect.left;
        const my = e.clientY - containerRect.top;

        centers.forEach((c, i) => {
          const dx = c.ox - mx;
          const dy = c.oy - my;
          const dist = Math.hypot(dx, dy);
          if (dist < REPEL_RADIUS) {
            const force = (1 - dist / REPEL_RADIUS) * REPEL_STRENGTH;
            const angle = Math.atan2(dy, dx);
            movers[i].x(Math.cos(angle) * force);
            movers[i].y(Math.sin(angle) * force);
          } else {
            movers[i].x(0);
            movers[i].y(0);
          }
        });
      };

      const onLeave = () => {
        movers.forEach(({ x, y }) => {
          x(0);
          y(0);
        });
      };

      window.addEventListener("resize", measure);
      container.addEventListener("mousemove", onMove);
      container.addEventListener("mouseleave", onLeave);

      return () => {
        window.removeEventListener("resize", measure);
        container.removeEventListener("mousemove", onMove);
        container.removeEventListener("mouseleave", onLeave);
      };
    });

    return () => mm.revert();
  }, []);

  return (
    <section ref={root} id="merch" className="overflow-hidden bg-cream py-24 text-ink md:py-32">
      <div className="px-4 md:px-10">
        <p className="eyebrow mb-3 text-red">Merch — wear your Negroni</p>

        {/* slogans as solid oversized type — filled so the section reads as content, not empty space; characters split apart around the cursor on hover */}
        <div data-slogans ref={slogansRef} className="space-y-3 md:space-y-3">
          {SLOGANS.map((s) => (
            <p
              key={s}
              data-slogan
              className="display w-fit cursor-default text-[clamp(1.8rem,5.4vw,4.6rem)] leading-[0.9]! text-ink md:leading-[0.86]!"
            >
              <SplitWords text={s} />
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
            {/* <Placeholder
              tone="ink"
              className="aspect-square w-full transition-transform duration-500 group-hover:-rotate-2 group-hover:scale-[1.03]"
              desc={m.imgDesc}
            /> */}
                        <img

              className="aspect-square w-full transition-transform duration-500 group-hover:-rotate-2 group-hover:scale-[1.03]"
              src={m.src}
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
