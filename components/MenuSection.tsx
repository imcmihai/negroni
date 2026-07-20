import type { MenuCategory } from "@/lib/menu-data";
import MenuItemRow from "./MenuItemRow";

/** A full category block: red display heading (matching the printed menu's
 *  page headers), a thin checker strip, then one or more grouped item lists. */
export default function MenuSection({ category }: { category: MenuCategory }) {
  return (
    <section id={category.id} className=" bg-cream py-5">
      <div className="checker h-2 w-full [--sq:8px]" />

      <div className="px-4 pt-8 md:px-10">
        <p className="eyebrow mb-3 text-ink/45">{category.eyebrow}</p>
        <h2 className="display text-red text-[clamp(2.2rem,6.5vw,4.5rem)] leading-[0.86]">
          {category.title}
        </h2>
        {category.intro && (
          <p className="mt-4 max-w-lg text-sm leading-relaxed text-ink/70">{category.intro}</p>
        )}
      </div>

      <div className="mt-8">
        {category.groups.map((g, gi) => (
          <div key={g.heading ?? gi}>
            {g.heading && (
              <p className="display border-t border-ink/10 px-4 pb-2 pt-6 text-2xl text-red md:px-10 md:text-3xl">
                {g.heading}
              </p>
            )}
            <div>
              {g.items.map((item) => (
                <MenuItemRow key={`${item.name}-${item.size ?? ""}`} item={item} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
