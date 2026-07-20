import SmoothScroll from "@/components/SmoothScroll";
import Preloader from "@/components/Preloader";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Manifesto from "@/components/Manifesto";
import OnTap from "@/components/OnTap";
import TrainBanner from "@/components/TrainBanner";
import Signatures from "@/components/Signatures";
import Events from "@/components/Events";
import Merch from "@/components/Merch";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="overflow-x-hidden">

      <Preloader />

      {/* main sits above the fixed footer layer — scrolling past the end
          lifts it like a curtain, revealing the footer underneath */}
      <main className="relative z-10 bg-cream shadow-[0_30px_60px_rgba(7,6,13,0.35)]">
        <Hero />
        <Manifesto />
        <OnTap />
        <TrainBanner />
        <Signatures />
        {/* <DulceBanana /> */}
        <Events />
        <Merch />
      </main>
      <Footer />
    </div>
      
  
  );
}
