import type { Metadata } from "next";
import ExternalLinkPage from "@/components/ExternalLinkPage";
import { INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "Photos — NEGRONI Aperitivo Bar",
  description: "Every negronied night, framed — browse the NEGRONI Aperitivo Bar photo gallery.",
};

export default function PhotosPage() {
  return (
    <ExternalLinkPage
      eyebrow="Every night, framed"
      title="Negroni Photos"
      description="The bar's own photo booth — every guest shot and every negronied night, archived and ready to relive."
      image="/images/upclose-cocktail.png"
      ctaLabel="Browse the gallery"
      ctaHref={INFO.photos}
      note="Opens in Pic-Time, our photo partner."
    />
  );
}
