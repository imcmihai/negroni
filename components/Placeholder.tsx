/**
 * Annotated placeholder for imagery/icons that will be supplied later.
 * Renders a styled frame with a description of the intended asset,
 * so the layout reads correctly while making the swap-out obvious.
 */
type Props = {
  desc: string;
  kind?: "image" | "icon";
  tone?: "cream" | "ink" | "red";
  className?: string;
};

const tones = {
  cream: "bg-cream text-ink border-ink/25",
  ink: "bg-ink text-cream border-cream/30",
  red: "bg-red/5 text-red border-red/40",
};

export default function Placeholder({
  desc,
  kind = "image",
  tone = "cream",
  className = "",
}: Props) {
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden border ${tones[tone]} ${className}`}
      role="img"
      aria-label={`Placeholder: ${desc}`}
    >
      {/* faint diagonal hatching */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, transparent 0 10px, currentColor 10px 11px)",
        }}
      />
      <div className="relative z-10 m-3 flex max-w-[26ch] flex-col items-center gap-1.5 text-center">
        <span className="border border-current px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-[0.2em]">
          {kind}
        </span>
        <span className="text-[11px] leading-snug opacity-80">{desc}</span>
      </div>
    </div>
  );
}
