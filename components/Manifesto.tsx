"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Placeholder from "./Placeholder";

gsap.registerPlugin(ScrollTrigger);

const TEXT =
  "NEGRONI is your starting point on a journey through the history, flavors and cities of the Negroni. From Florence to London and New York, from 1919 to today — twelve easy-drinking aperitivo cocktails, signature twists, premium classics and Italian snacks.";

export default function Manifesto() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* word-by-word ink fill while scrolling through */
      gsap.to("[data-word]", {
        opacity: 1,
        ease: "none",
        stagger: 0.06,
        scrollTrigger: {
          trigger: "[data-copy]",
          start: "top 78%",
          end: "bottom 45%",
          scrub: true,
        },
      });

      gsap.from("[data-photo]", {
        y: 90,
        rotate: (i) => (i % 2 ? 7 : -6),
        autoAlpha: 0,
        duration: 1.1,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: { trigger: root.current, start: "top 60%" },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      className="relative bg-ink px-4 py-28 text-cream md:px-10 md:py-40"
    >
      <div className="mx-auto grid max-w-6xl gap-14 md:grid-cols-[1.5fr_1fr] md:gap-10">
        <div>
          <p className="eyebrow mb-8 text-red">Welcome on the bittersweet board, amici</p>
          <p
            data-copy
            className="display max-w-[24ch] text-[clamp(1.9rem,4.6vw,3.9rem)]"
          >
            {TEXT.split(" ").map((w, i) => (
              <span key={i} data-word className="opacity-[0.14]">
                {w}{" "}
              </span>
            ))}
          </p>
          <p className="serif-it mt-10 text-2xl text-red md:text-3xl">
            Whenever you want to drink about something — or someone —{" "}
            <span className="text-cream">NEGRONI is the answer.</span>
          </p>
        </div>

        {/* photo stack, slightly scattered like taped-up polaroids */}
        <div className="relative mx-auto w-full max-w-xs md:mt-10">
          <div data-photo className="rotate-[-5deg]">
            <Placeholder
              tone="ink"
              className="aspect-[4/5] w-full"
              desc="Photo: hands clinking two negronis over a marble table, warm evening light — like the IG cheers shot"
            />
          </div>
          <div data-photo className="absolute -bottom-16 -right-4 w-3/4 rotate-[6deg] md:-right-10">
            <Placeholder
              tone="ink"
              className="aspect-square w-full"
              desc="Photo: the red neon 'NEGRONIED' sign glowing inside the dark bar"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
