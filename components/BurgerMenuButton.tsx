"use client";

type BurgerMenuButtonProps = {
  open: boolean;
  onClick: () => void;
  className?: string;
};

const EASE = "ease-[cubic-bezier(0.76,0,0.24,1)]";

/** Trigger that morphs a custom three-bar mark into an X while the menu is open.
    Unstyled for position — pass `className` to place it (inline in a nav,
    or fixed for standalone use). */
export default function BurgerMenuButton({ open, onClick, className = "" }: BurgerMenuButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-expanded={open}
      aria-label={open ? "Close menu" : "Open menu"}
      className={`btn-fill flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-ink/15 bg-cream/90 backdrop-blur-md transition-transform duration-300 ${EASE} [--fill:var(--red)] [--fill-text:var(--cream)] hover:scale-110 active:scale-95 ${className}`}
    >
      <svg viewBox="0 0 24 24" width="20" height="20" className="pointer-events-none overflow-visible">
        {/* top bar */}
        <rect
          x="3"
          y="6"
          width="18"
          height="2"
          rx="1"
          className={`origin-[12px_7px] fill-current transition-transform duration-500 ${EASE} ${
            open ? "translate-y-[5px] rotate-45 delay-100" : ""
          }`}
        />
        {/* short accent bar — the custom detail that sets this apart from a stock hamburger */}
        <rect
          x="6"
          y="11"
          width="12"
          height="2"
          rx="1"
          className={`origin-[12px_12px] fill-current transition-all duration-300 ${EASE} ${
            open ? "scale-x-0 opacity-0" : "delay-150"
          }`}
        />
        {/* bottom bar */}
        <rect
          x="3"
          y="16"
          width="18"
          height="2"
          rx="1"
          className={`origin-[12px_17px] fill-current transition-transform duration-500 ${EASE} ${
            open ? "-translate-y-[5px] -rotate-45 delay-100" : ""
          }`}
        />
      </svg>
    </button>
  );
}
