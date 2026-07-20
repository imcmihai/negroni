"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TrainIcon } from "./OnTap";
import { INFO } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger);

/** Seconds until the next 18:19 in Bucharest. */
function useCountdown() {
  const [left, setLeft] = useState<string | null>(null);
  useEffect(() => {
    const tick = () => {
      const now = new Date();
      const parts = new Intl.DateTimeFormat("en-GB", {
        timeZone: "Europe/Bucharest",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: false,
      }).formatToParts(now);
      const get = (t: string) =>
        Number(parts.find((p) => p.type === t)?.value ?? 0);
      const secsNow = get("hour") * 3600 + get("minute") * 60 + get("second");
      const target = 18 * 3600 + 19 * 60;
      const end = 20 * 3600 + 19 * 60;
      if (secsNow >= target && secsNow < end) {
        setLeft("BOARDING");
        return;
      }
      let diff = target - secsNow;
      if (diff < 0) diff += 24 * 3600;
      const h = String(Math.floor(diff / 3600)).padStart(2, "0");
      const m = String(Math.floor((diff % 3600) / 60)).padStart(2, "0");
      const s = String(diff % 60).padStart(2, "0");
      setLeft(`${h}:${m}:${s}`);
    };
    tick();
    const t = setInterval(tick, 1000);
    return () => clearInterval(t);
  }, []);
  return left;
}

/** The daily happy hour as a train ticket, with the train scrubbing across it. */
export default function TrainBanner() {
  const root = useRef<HTMLElement>(null);
  const left = useCountdown();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        "[data-train]",
        { x: "-15vw" },
        {
          x: "82vw",
          ease: "none",
          scrollTrigger: {
            trigger: root.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.2,
          },
        }
      );
      gsap.from("[data-ticket]", {
        y: 80,
        rotate: -2,
        autoAlpha: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: { trigger: root.current, start: "top 70%" },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      id="train"
      className="relative overflow-hidden bg-cream px-4 py-24 md:py-36"
    >
      {/* the train crossing behind the ticket, on a dashed rail */}
      <div className="pointer-events-none absolute left-0 top-0 w-full">
        <div data-train className="w-max">
          <TrainIcon className="h-10 w-auto text-ink md:h-14" />
        </div>
        <div className="mt-1 border-t-2 border-dashed border-ink/25" />
      </div>

      {/* ticket */}
      <div
        data-ticket
        className="ticket-notch relative mx-auto mt-10 max-w-3xl bg-red px-8 py-10 text-cream shadow-[0_50px_100px_-40px_rgba(235,33,39,0.6)] md:px-14 md:py-14"
      >
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="eyebrow opacity-80">Every day · golden hour ride</p>
            <h2 className="display mt-2 text-[clamp(2.6rem,7vw,5.5rem)] leading-[1]!">
              Aperitivo
              <br />
              Train
            </h2>
          </div>
          {/* round stamp */}
          <div className="grid h-24 w-24 rotate-12 place-items-center rounded-full border-2 border-dashed border-cream/70 text-center md:h-28 md:w-28">
            <p className="font-mono text-[10px] uppercase leading-tight tracking-widest">
              valid
              <br />
              daily
              <br />
              18:19
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-x-8 gap-y-5 border-t border-dashed border-cream/50 pt-8 sm:grid-cols-3">
          <div>
            <p className="eyebrow opacity-70">Departure</p>
            <p className="display mt-1 text-3xl">{INFO.trainTime}</p>
          </div>
          <div>
            <p className="eyebrow opacity-70">Destination</p>
            <p className="display mt-1 text-3xl leading-[1]!">All 12 tap cocktails</p>
          </div>
          <div>
            <p className="eyebrow opacity-70">Fare price</p>
            <p className="display mt-1 text-3xl">
              {INFO.trainPrice} lei{" "}
              <span className="serif-it text-xl normal-case opacity-80">not 36</span>
            </p>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-dashed border-cream/50 pt-6">
          <p className="font-mono text-xs uppercase tracking-[0.25em]">
            Next departure in{" "}
            <span className="text-base font-bold" suppressHydrationWarning>
              {left ?? "--:--:--"}
            </span>
          </p>
          <p className="serif-it text-xl">
            Negronis? Always. Spritzes? Naturally. Bittersweet bliss? Guaranteed.
          </p>
        </div>
      </div>
    </section>
  );
}
