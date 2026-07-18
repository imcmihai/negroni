import SmoothScroll from "@/components/SmoothScroll";
import Preloader from "@/components/Preloader";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Manifesto from "@/components/Manifesto";
import OnTap from "@/components/OnTap";
import TrainBanner from "@/components/TrainBanner";
import Signatures from "@/components/Signatures";
import DulceBanana from "@/components/DulceBanana";
import Events from "@/components/Events";
import Merch from "@/components/Merch";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <SmoothScroll />
      <Preloader />
      <Nav />
      <main>
        <Hero />
        <Manifesto />
        <OnTap />
        <TrainBanner />
        <Signatures />
        <DulceBanana />
        <Events />
        <Merch />
      </main>
      <Footer />
    </>
  );
}
