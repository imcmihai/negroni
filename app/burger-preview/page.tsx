import BurgerMenu from "@/components/BurgerMenu";

/* Temporary route to preview the new burger menu components in isolation
   before they're wired into the real Nav. Safe to delete. */
export default function BurgerPreview() {
  return (
    <div className="min-h-screen bg-cream">
      <BurgerMenu />
      <div className="flex h-screen items-center justify-center">
        <p className="display text-4xl opacity-30">Click the button, top right</p>
      </div>
    </div>
  );
}
