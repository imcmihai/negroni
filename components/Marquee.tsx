import { Fragment, type ReactNode } from "react";

type Props = {
  items: ReactNode[];
  className?: string;
  speed?: string; // css duration, e.g. "24s"
  separator?: ReactNode;
};

/** Infinite marquee. Two identical tracks animate -100% for a seamless loop. */
export default function Marquee({
  items,
  className = "",
  speed = "28s",
  separator = <Star className="mx-6 h-[0.55em] w-[0.55em] shrink-0" />,
}: Props) {
  const track = (ariaHidden: boolean) => (
    <div
      className="marquee-track"
      style={{ ["--marquee-speed" as string]: speed }}
      aria-hidden={ariaHidden}
    >
      {items.map((item, i) => (
        <Fragment key={i}>
          <span className="shrink-0">{item}</span>
          {separator}
        </Fragment>
      ))}
    </div>
  );

  return (
    <div className={`marquee ${className} z-40`}>
      {track(false)}
      {track(true)}
    </div>
  );
}

/** Four-point sparkle star used across the brand collages. */
export function Star({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M12 0c1.2 6.8 4 9.6 12 12-8 2.4-10.8 5.2-12 12-1.2-6.8-4-9.6-12-12C8 9.6 10.8 6.8 12 0Z" />
    </svg>
  );
}
