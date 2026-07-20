import type { Metadata } from "next";
import ExternalLinkPage from "@/components/ExternalLinkPage";
import { INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "Negroni Passport — NEGRONI Aperitivo Bar",
  description: "Apply for the Negroni Passport — exclusive perks and access to closed-door Negronied Train parties.",
};

export default function PassportPage() {
  return (
    <ExternalLinkPage
      eyebrow="For the devoted amici"
      title="Apply For Your Passport"
      description="Exclusive cocktail perks, priority at the door, and access to our closed-door Negronied Train parties."
      image="/images/events/passport.png"
      ctaLabel="Apply for the passport"
      ctaHref={INFO.passport}
      note="Applications are reviewed by the bar team — opens in RSVPify."
    />
  );
}
