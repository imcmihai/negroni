import type { Metadata } from "next";
import ExternalLinkPage from "@/components/ExternalLinkPage";
import { INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "Catalogue — Negroni Trading",
  description: "Browse the full Negroni Trading product catalogue — every bottle we import and pour.",
};

export default function CataloguePage() {
  return (
    <ExternalLinkPage
      eyebrow="Negroni Trading"
      title="The Catalogue"
      description="Every bottle we import and pour, in one place — browse the full Negroni Trading product catalogue."
      image="/images/merch/multiple-merch.png"
      ctaLabel="Open the catalogue"
      ctaHref={INFO.catalogue}
    />
  );
}
