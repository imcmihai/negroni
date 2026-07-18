"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const WORDS = ["APERITIVO", "BITTERSWEET", "NEGRONIED"];

/** Red curtain intro — cycles brand words, then lifts. Runs once per session. */
export default function Preloader() {
  const [gone, setGone] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    /* checked in an effect (not render) to keep SSR/client markup identical */
    if (sessionStorage.getItem("negroni-intro") === "done") {
      setGone(true);
      return;
    }
    const root = rootRef.current;
    if (!root) return;

    document.documentElement.style.overflow = "hidden";
    const words = root.querySelectorAll<HTMLElement>("[data-word]");

    const tl = gsap.timeline({
      onComplete: () => {
        document.documentElement.style.overflow = "";
        sessionStorage.setItem("negroni-intro", "done");
        setGone(true);
      },
    });

    words.forEach((w) => {
      tl.fromTo(
        w,
        { yPercent: 110 },
        { yPercent: 0, duration: 0.34, ease: "power3.out" }
      ).to(w, { yPercent: -110, duration: 0.3, ease: "power3.in", delay: 0.12 });
    });

    tl.to(root, {
      yPercent: -100,
      duration: 0.85,
      ease: "expo.inOut",
    });

    return () => {
      tl.kill();
      document.documentElement.style.overflow = "";
    };
  }, []);

  if (gone) return null;

  return (
    <div
      ref={rootRef}
      className="fixed inset-0 z-[100] grid place-items-center bg-red text-cream"
      aria-hidden
    >
      <div className="overflow-hidden py-2">
        <div className="grid justify-items-center">
          {WORDS.map((w) => (
            <span
              key={w}
              data-word
              className="display col-start-1 row-start-1 translate-y-[110%] whitespace-nowrap bg-red px-4 py-4 text-[13vw] w-full leading-none text-cream md:px-6 md:text-[8vw] text-center"
            >
              {w}
            </span>
          ))}
        </div>
      </div>
      {/* checkerboard footer strip of the curtain */}
      <div className="checker absolute bottom-0 h-4 w-full [--c2:var(--ink)]" />
    </div>
  );
}
