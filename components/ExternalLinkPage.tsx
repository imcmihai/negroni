import Link from "next/link";
import Image from "next/image";
import Footer from "./Footer";

type ExternalLinkPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  ctaLabel: string;
  ctaHref: string;
  note?: string;
};

/**
 * Lightweight branded landing page for a link that ultimately sends the
 * visitor off-site (photo gallery, RSVP form, trading storefront, catalogue).
 * Shared by /photos, /passport, /trading and /catalogue so each only needs
 * to supply its copy, image and destination.
 */
export default function ExternalLinkPage({
  eyebrow,
  title,
  description,
  image,
  ctaLabel,
  ctaHref,
  note,
}: ExternalLinkPageProps) {
  return (
    <div>
      <main className="relative z-10 bg-cream shadow-[0_30px_60px_rgba(7,6,13,0.35)]">
        <section className="grid items-center gap-10 px-4 py-12 md:grid-cols-[1fr_1.1fr] md:px-10 md:py-20">
          <div className="order-2 md:order-1">
            <p className="eyebrow mb-4 text-red">{eyebrow}</p>
            <h1 className="display text-[clamp(2.6rem,8vw,5.5rem)] leading-[0.9]!">{title}</h1>
            <p className="serif-it mt-5 max-w-md text-xl text-ink md:text-2xl">{description}</p>
            <a
              href={ctaHref}
              target="_blank"
              rel="noreferrer"
              className="btn-fill mt-8 inline-flex rounded-full bg-red px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-cream [--fill:var(--ink)] [--fill-text:var(--cream)]"
            >
              {ctaLabel} ↗
            </a>
            {note && <p className="mt-5 max-w-sm text-sm opacity-60">{note}</p>}
          </div>
          <div className="relative order-1 aspect-[4/5] w-full overflow-hidden md:order-2 md:aspect-[3/4]">
            <Image
              src={image}
              alt=""
              fill
              sizes="(min-width: 768px) 55vw, 100vw"
              className="h-full w-full object-cover"
            />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
