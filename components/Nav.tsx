"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { scrollToId } from "./SmoothScroll";
import BurgerMenuButton from "./BurgerMenuButton";
import BurgerMenuOverlay from "./BurgerMenuOverlay";
import logoImg from "@/public/logo.png";
import { useBucharestTime } from "@/hooks/useBucharestTime";

gsap.registerPlugin(ScrollTrigger);

export default function Nav() {
  const ref = useRef<HTMLElement>(null);
  const time = useBucharestTime();
  const [menuOpen, setMenuOpen] = useState(false);

  /* hide on scroll down, reveal on scroll up */
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const st = ScrollTrigger.create({
      start: "top top",
      end: "max",
      onUpdate: (self) => {
        gsap.to(el, {
          yPercent: self.direction === 1 && self.scroll() > 200 ? -110 : 0,
          duration: 0.4,
          ease: "power3.out",
          overwrite: "auto",
        });
      },
    });
    return () => st.kill();
  }, []);

  const go = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    scrollToId(id);
  };

  return (
    <>
      <header
        ref={ref}
        className="fixed inset-x-0 top-0 z-50 flex items-center justify-between px-4 py-3 md:px-8"
      >
        {/* wordmark */}
        <a
          href="/"
          className="group flex items-center gap-2 text-ink"
        >
          {/* Roundel: replace with the real red NEGRONI roundel logo (SVG),
              as seen on the menu cover and IG avatar */}
   <Image
        className="h-15 w-15 place-items-center rounded-full bg-red border border-red border-[3px] text-[7px] font-bold uppercase tracking-wider text-cream transition-transform duration-500 group-hover:rotate-[360deg]"
        src={logoImg}
        alt=""/>
        </a>

        {/* clock + full menu + burger */}
        <div className="flex items-center gap-2">
          <span
            className="hidden rounded-full border border-ink/15 bg-cream/80 px-3 py-2 font-mono text-xs tracking-widest backdrop-blur-md sm:block"
            suppressHydrationWarning
          >
            BUC {time ?? "--:--"}
          </span>
          <a
            href="/menu"
            className="btn-fill hidden rounded-full border border-ink/15 bg-cream/80 px-4 py-2 text-[13px] font-semibold uppercase tracking-wide backdrop-blur-md [--fill:var(--red)] [--fill-text:var(--cream)] sm:block"
          >
            Full menu
          </a>
          <BurgerMenuButton open={menuOpen} onClick={() => setMenuOpen((v) => !v)} />
        </div>
      </header>

      <BurgerMenuOverlay open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
