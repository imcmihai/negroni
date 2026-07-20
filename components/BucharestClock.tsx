"use client";

import { useBucharestTime } from "@/hooks/useBucharestTime";

export default function BucharestClock() {
  const time = useBucharestTime();
  return (
    <span
      className="hidden rounded-full border border-ink/15 bg-cream/80 px-3 py-2 font-mono text-xs tracking-widest backdrop-blur-md sm:block"
      suppressHydrationWarning
    >
      BUC {time ?? "--:--"}
    </span>
  );
}
