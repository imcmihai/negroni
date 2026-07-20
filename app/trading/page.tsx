import type { Metadata } from "next";
import ExternalLinkPage from "@/components/ExternalLinkPage";
import { INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "Negroni Trading — NEGRONI Aperitivo Bar",
  description: "Negroni Trading — the import house behind our bar and guest bartendings worldwide.",
};

export default function TradingPage() {
  return (
    <ExternalLinkPage
      eyebrow="Behind the bottle"
      title="Negroni Trading"
      description="The import house powering our bar and guest bartendings worldwide — bitters, vermouths and spirits, wholesale and retail."
      image="/images/events/bartendings.png"
      ctaLabel="Visit Negroni Trading"
      ctaHref={INFO.trading}
    />
  );
}
