"use client";

import { useState } from "react";
import BurgerMenuButton from "./BurgerMenuButton";
import BurgerMenuOverlay from "./BurgerMenuOverlay";

/** Fullscreen burger menu: trigger button + expanding overlay panel. */
export default function BurgerMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <BurgerMenuButton
        open={open}
        onClick={() => setOpen((v) => !v)}
        className="fixed right-4 top-4 z-[70] md:right-8 md:top-6"
      />
      <BurgerMenuOverlay open={open} onClose={() => setOpen(false)} />
    </>
  );
}
