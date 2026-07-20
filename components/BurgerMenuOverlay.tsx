"use client";

import { Fragment, useEffect, useRef, type CSSProperties, type MouseEvent } from "react";
import Link from "next/link";
import gsap from "gsap";
import { scrollToId } from "./SmoothScroll";

type MenuItem = {
  id: string;
  label: string;
  image: string;
  /** present for real pages — navigates instead of scrolling to an in-page anchor */
  href?: string;
};

const MENU_ITEMS: MenuItem[] = [
  { id: "photos", label: "Negroni Photos", image: "/images/upclose-cocktail.png", href: "/photos" },
  {
    id: "passport",
    label: "Apply For Passport",
    image: "/images/events/passport.png",
    href: "/passport",
  },
  {
    id: "trading",
    label: "Negroni Trading",
    image: "/images/events/bartendings.png",
    href: "/trading",
  },
  {
    id: "catalogue",
    label: "Catalogue",
    image: "/images/merch/multiple-merch.png",
    href: "/catalogue",
  },
];

type BurgerMenuOverlayProps = {
  open: boolean;
  onClose: () => void;
};

/** splits text into per-character masks with a stacked duplicate underneath;
    on `.group:hover` each pair swaps places on a stagger, giving the
    awwwwards-style flip reveal instead of a plain color change */
function StaggerReveal({ text }: { text: string }) {
  return (
    <span className="stagger-char-mask inline-flex flex-wrap">
      {Array.from(text).map((ch, i) => (
        <span
          key={i}
          className="relative inline-block overflow-hidden"
          style={{ "--stagger-delay": `${i * 18}ms` } as CSSProperties}
        >
          <span className="stagger-char-1 block">{ch === " " ? " " : ch}</span>
          <span aria-hidden className="stagger-char-2 absolute left-0 top-0 block">
            {ch === " " ? " " : ch}
          </span>
        </span>
      ))}
    </span>
  );
}

export default function BurgerMenuOverlay({ open, onClose }: BurgerMenuOverlayProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const photoRefs = useRef<Array<HTMLDivElement | null>>([]);
  const timeline = useRef<gsap.core.Timeline | null>(null);

  /* build the open/close timeline once: curtain drops from the top with a
     domed bottom edge (wide border-radius) that flattens out as it reaches
     full height, then the copy staggers in */
  useEffect(() => {
    const ctx = gsap.context(() => {
      timeline.current = gsap
        .timeline({ paused: true })
        .fromTo(
          panelRef.current,
          {
            height: 0,
            borderBottomLeftRadius: "50% 120px",
            borderBottomRightRadius: "50% 120px",
          },
          {
            height: "100vh",
            borderBottomLeftRadius: "0% 0px",
            borderBottomRightRadius: "0% 0px",
            duration: 1,
            ease: "power4.inOut",
          }
        )
        .fromTo(
          contentRef.current,
          { autoAlpha: 0 },
          { autoAlpha: 1, duration: 0.3 },
          "-=0.35"
        )
        .fromTo(
          "[data-menu-row]",
          { y: 48, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, stagger: 0.09, ease: "power3.out" },
          "-=0.15"
        );
    }, panelRef);
    return () => ctx.revert();
  }, []);

  /* play forward on open, reverse on close; lock scroll while open */
  useEffect(() => {
    const tl = timeline.current;
    if (!tl) return;
    if (open) {
      document.body.style.overflow = "hidden";
      window.__lenis?.stop();
      tl.play();
    } else {
      tl.reverse();
      document.body.style.overflow = "";
      window.__lenis?.start();
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  /* same clip-path + scale reveal as the Manifesto photos, triggered on hover */
  const showPhoto = (i: number) => {
    const el = photoRefs.current[i];
    if (!el) return;
    const img = el.querySelector("img");
    gsap.killTweensOf([el, img]);
    gsap.fromTo(
      el,
      { clipPath: "inset(0% 0% 100% 0%)" },
      { clipPath: "inset(0% 0% 0% 0%)", duration: 0.7, ease: "power3.out" }
    );
    gsap.fromTo(img, { scale: 1.18 }, { scale: 1, duration: 0.9, ease: "power3.out" });
  };

  const hidePhoto = (i: number) => {
    const el = photoRefs.current[i];
    if (!el) return;
    gsap.killTweensOf(el);
    gsap.to(el, { clipPath: "inset(0% 0% 100% 0%)", duration: 0.5, ease: "power2.inOut" });
  };

  const handleLinkClick = (id: string) => (e: MouseEvent) => {
    e.preventDefault();
    onClose();
    scrollToId(id);
  };

  const handlePageClick = () => onClose();

  return (
    <div
      ref={panelRef}
      className="fixed inset-x-0 top-0 z-40 overflow-hidden bg-red text-cream"
      style={{ height: 0 }}
      aria-hidden={!open}
    >
      <div
        ref={contentRef}
        className="flex h-[100vh] w-full flex-col px-6 pb-8 pt-24 md:px-16 md:pt-28"
      >
        <nav className="grid min-h-0 flex-1 grid-cols-1 content-center overflow-y-auto md:grid-cols-[1fr_1.3fr] md:gap-x-16">
          {MENU_ITEMS.map((item, i) => (
            <Fragment key={item.id}>
              <div
                ref={(el) => {
                  photoRefs.current[i] = el;
                }}
                className="relative hidden aspect-[4/5] h-44 w-auto self-center overflow-hidden md:block lg:h-56"
                style={{ clipPath: "inset(0% 0% 100% 0%)" }}
              >
                <img src={item.image} alt="" className="h-full w-full object-cover" />
              </div>
              {item.href ? (
                <Link
                  href={item.href}
                  data-menu-row
                  onMouseEnter={() => showPhoto(i)}
                  onMouseLeave={() => hidePhoto(i)}
                  onClick={handlePageClick}
                  className="group relative flex items-center gap-4 py-3 md:gap-5 md:py-5"
                  tabIndex={open ? 0 : -1}
                >
                  <span className="eyebrow text-white">
                    <StaggerReveal text={`0${i + 1}`} />
                  </span>
                  <span className="display text-[clamp(2rem,6.5vw,4.3rem)] leading-none">
                    <StaggerReveal text={item.label} />
                  </span>
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-cream/15"
                  />
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-white transition-transform duration-[520ms] ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:scale-x-100"
                  />
                </Link>
              ) : (
                <a
                  href={`#${item.id}`}
                  data-menu-row
                  onMouseEnter={() => showPhoto(i)}
                  onMouseLeave={() => hidePhoto(i)}
                  onClick={handleLinkClick(item.id)}
                  className="group relative flex items-center gap-4 py-3 md:gap-5 md:py-5"
                  tabIndex={open ? 0 : -1}
                >
                  <span className="eyebrow text-white">
                    <StaggerReveal text={`0${i + 1}`} />
                  </span>
                  <span className="display text-[clamp(2rem,6.5vw,4.3rem)] leading-none">
                    <StaggerReveal text={item.label} />
                  </span>
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-cream/15"
                  />
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-white transition-transform duration-[520ms] ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:scale-x-100"
                  />
                </a>
              )}
            </Fragment>
          ))}
        </nav>

        <div className="eyebrow flex items-center justify-between text-cream/45">
          <span>Negroni — Est. 1919</span>
          <span>Bucharest</span>
        </div>
      </div>
    </div>
  );
}
