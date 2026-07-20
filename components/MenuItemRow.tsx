import type { MenuItem } from "@/lib/menu-data";

/** One menu line, laid out like the printed menu: small size label, bold
 *  black name, red tasting notes, black ingredients — price and abv stacked
 *  top-right. Cream background throughout, just a soft tint on hover. */
export default function MenuItemRow({ item }: { item: MenuItem }) {
  return (
    <div className="border-b border-ink/10 px-4 py-4 transition-colors duration-200 hover:bg-ink/[0.025] md:px-10 md:py-5">
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0 flex-1">
          {item.size && (
            <p className="font-mono text-[10px] font-bold uppercase tracking-wide text-ink/45">
              {item.size}
            </p>
          )}
          <h3 className="display mt-0.5 text-xl leading-[0.95] text-ink md:text-2xl">{item.name}</h3>
          {item.notes && (
            <p className="mt-1.5 text-[10px] font-bold uppercase tracking-[0.1em] text-red">
              • {item.notes} •
            </p>
          )}
          {item.ingredients && (
            <p className="mt-1.5 max-w-md text-[13px] leading-snug text-ink/70">{item.ingredients}</p>
          )}
          {item.story && (
            <p className="serif-it mt-2 max-w-md text-[15px] italic leading-snug text-red">
              {item.story}
            </p>
          )}
        </div>
        <div className="shrink-0 text-right">
          <p className="display text-lg leading-none text-ink md:text-xl">{item.price}</p>
          {item.abv && <p className="mt-1.5 font-mono text-[10px] font-semibold text-red">{item.abv}</p>}
        </div>
      </div>
    </div>
  );
}
