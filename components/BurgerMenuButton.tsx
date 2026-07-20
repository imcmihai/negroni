"use client";

type BurgerMenuButtonProps = {
  open: boolean;
  onClick: () => void;
  className?: string;
};

/** Trigger that morphs its two bars into an X while the menu is open.
    Unstyled for position — pass `className` to place it (inline in a nav,
    or fixed for standalone use). */
export default function BurgerMenuButton({ open, onClick, className = "" }: BurgerMenuButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-expanded={open}
      aria-label={open ? "Close menu" : "Open menu"}
      className={`flex h-10 w-10 flex-col items-center justify-center gap-[7px] rounded-full border border-ink/15 bg-cream/90 backdrop-blur-md transition-colors ${className}`}
    >
      <span
        className={`block h-[2px] w-6 rounded-full bg-ink transition-transform duration-300 ease-[cubic-bezier(0.76,0,0.24,1)] ${
          open ? "translate-y-[9px] rotate-45" : ""
        }`}
      />
      <span
        className={`block h-[2px] w-6 rounded-full bg-ink transition-opacity duration-200 ${
          open ? "opacity-0" : "opacity-100"
        }`}
      />
      <span
        className={`block h-[2px] w-6 rounded-full bg-ink transition-transform duration-300 ease-[cubic-bezier(0.76,0,0.24,1)] ${
          open ? "-translate-y-[9px] -rotate-45" : ""
        }`}
      />
    </button>
  );
}
