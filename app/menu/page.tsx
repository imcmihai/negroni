import type { Metadata } from "next";
import SmoothScroll from "@/components/SmoothScroll";
import MenuHeader from "@/components/MenuHeader";
import MenuQuickNav from "@/components/MenuQuickNav";
import MenuSection from "@/components/MenuSection";
import BackToTop from "@/components/BackToTop";
import Footer from "@/components/Footer";
import { MENU_CATEGORIES } from "@/lib/menu-data";
import { INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "Menu — NEGRONI Aperitivo Bar",
  description:
    "The full NEGRONI menu: 12 aperitivo cocktails on tap, signature twists, premium classics, mocktails, Italian antipasti, wine, spirits and more. 5 Matei Millo St, Bucharest.",
};

export default function MenuPage() {
  return (
    <div>
      <SmoothScroll />
      {/* everything except the fixed-reveal Footer lives in one opaque,
          stacked-above-the-footer layer — same pattern as the homepage's
          <main>, so Footer's fixed curtain never paints over live content */}
      <main className="relative z-10 bg-cream shadow-[0_30px_60px_rgba(7,6,13,0.35)]">
        <MenuHeader />
        <MenuQuickNav />

        {MENU_CATEGORIES.map((category, i) => (
          <div key={category.id}>
            <MenuSection category={category} />
            {category.id === "aperitivo" && (
              <div className="px-4 pb-2 md:px-10">
                <div className="ticket-notch flex flex-wrap items-center justify-between gap-4 bg-red px-6 py-5 text-cream md:px-10 md:py-6">
                  <div>
                    <p className="eyebrow opacity-80">Every day · 18:19–20:19</p>
                    <p className="serif-it mt-1 text-xl md:text-2xl">
                      All 12 tap cocktails, aboard the Aperitivo Train
                    </p>
                  </div>
                  <p className="display text-3xl md:text-4xl">{INFO.trainPrice} lei</p>
                </div>
              </div>
            )}
          </div>
        ))}

        {/* closing note */}
        <section className="border-t border-ink/15 px-4 py-16 md:px-10 md:py-24">
          <p className="eyebrow mb-3 text-red">Amici, one more thing</p>
          <h2 className="display max-w-2xl text-[clamp(1.8rem,4.6vw,3.2rem)] leading-[0.95]">
            No people under 18. No smoking inside. Table time without orders is limited to one
            hour.
          </h2>
          <p className="serif-it mt-5 max-w-lg text-xl text-red">
            Let’s stay <span className="text-ink">#negronied and respectful — together forever.</span>
          </p>
        </section>
      </main>

      <BackToTop />
      <Footer />
    </div>
  );
}
