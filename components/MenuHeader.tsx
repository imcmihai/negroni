"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { INFO } from "@/lib/data";
import { Star } from "./Marquee";

/** Live Bucharest clock — same brand detail as the homepage Nav. */
function useBucharestTime() {
  const [time, setTime] = useState<string | null>(null);
  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-GB", {
      timeZone: "Europe/Bucharest",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
    const tick = () => setTime(fmt.format(new Date()));
    tick();
    const t = setInterval(tick, 10_000);
    return () => clearInterval(t);
  }, []);
  return time;
}

/**
 * Brand header + hero for /menu. Not fixed (unlike the homepage Nav) — the
 * sticky category quick-nav underneath takes over as the persistent wayfinder
 * once you start scrolling the long list.
 */
export default function MenuHeader() {
  const time = useBucharestTime();

  return (
    <header id="menu-top" className="relative bg-cream">
      {/* top bar */}
      <div className="flex items-center justify-between gap-3 px-4 py-4 md:px-8 md:py-5">
        <Link href="/" className="group flex items-center gap-2 text-ink">
          <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-red text-[7px] font-bold uppercase tracking-wider text-cream transition-transform duration-500 group-hover:rotate-[360deg]">
            NEG
          </span>
          <span className="display text-xl leading-none">Negroni</span>
        </Link>

        <Link
          href="/"
          className="hidden text-[13px] font-semibold uppercase tracking-wide opacity-60 transition-opacity hover:opacity-100 sm:block"
        >
          ← Back to site
        </Link>

        <div className="flex items-center gap-2">
          <span
            className="hidden rounded-full border border-ink/15 bg-cream/80 px-3 py-2 font-mono text-xs tracking-widest backdrop-blur-md sm:block"
            suppressHydrationWarning
          >
            BUC {time ?? "--:--"}
          </span>
          <a
            href={INFO.mapsUrl}
            target="_blank"
            rel="noreferrer"
            className="btn-fill rounded-full bg-red px-5 py-2 text-[13px] font-bold uppercase tracking-wide text-cream [--fill:var(--ink)] [--fill-text:var(--cream)]"
          >
            Find us
          </a>
        </div>
      </div>

      {/* checker strip */}
      {/* <div className="checker h-3 w-full [--sq:10px]" />

      
      <div className="px-4 pb-10 pt-10 md:px-10 md:pb-14 md:pt-16">
        <p className="eyebrow mb-3 flex items-center gap-2 text-red">
          <Star className="h-3 w-3" />
          {INFO.address}
          <Star className="h-3 w-3" />
        </p>
        <h1 className="display text-[clamp(3rem,13vw,7.5rem)] leading-[0.82]">
          The menu
        </h1>
        <p className="serif-it mt-4 max-w-md text-xl text-red md:text-2xl">
          Every cocktail, snack, pour and sip <span className="text-ink">— bittersweet, from A to Zero.</span>
        </p>
      </div> */}
    </header>
  );
}
