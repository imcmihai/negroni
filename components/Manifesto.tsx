"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import handsClickingImg from "@/public/images/hands-clicking.png";
import upcloseCocktailImg from "@/public/images/upclose-cocktail.png";

gsap.registerPlugin(ScrollTrigger);

const TEXT =
  "NEGRONI is your starting point on a journey through the history, flavors and cities of the Negroni. From Florence to London and New York, from 1919 to today — twelve easy-drinking aperitivo cocktails, signature twists, premium classics and Italian snacks.";

export default function Manifesto() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* word-by-word ink fill while scrolling through */
      gsap.to("[data-word]", {
        opacity: 1,
        ease: "none",
        stagger: 0.06,
        scrollTrigger: {
          trigger: "[data-copy]",
          start: "top 78%",
          end: "bottom 45%",
          scrub: true,
        },
      });

      /* clip-path reveal: each photo unclips top-to-bottom while its image
         settles from a slight zoom, synced to scroll for a sense of depth */
      gsap.utils.toArray<HTMLElement>("[data-photo]").forEach((photo) => {
        const img = photo.querySelector("img");
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: photo,
            start: "top 95%",
            end: "top 15%",
            scrub: 1.4,
          },
        });

        tl.fromTo(
          photo,
          { clipPath: "inset(0% 0% 100% 0%)" },
          { clipPath: "inset(0% 0% 0% 0%)", ease: "power2.inOut" },
          0
        ).fromTo(
          img,
          { scale: 1.2 },
          { scale: 1, ease: "power2.inOut" },
          0
        );
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      className="relative bg-cream px-4 py-28 text-cream md:px-10 md:py-40"
    >
      <div className="mx-auto grid max-w-8xl gap-14 md:grid-cols-[1.15fr_1fr] md:gap-10">
        <div>
          <p className="eyebrow mb-8 text-black">Welcome on the bittersweet board, amici</p>
          <p
            data-copy
            className="display max-w-[30ch] text-[clamp(1.9rem,4.6vw,3.9rem)] leading-[1]!"
          >
            {TEXT.split(" ").map((w, i) => (
              <span key={i} data-word className="opacity-[0.14] text-black">
                {w}{" "}
              </span>
            ))}
          </p>
          <p className="serif-it mt-10 text-2xl text-red text-left md:text-3xl">
            
            <span className="text-black">NEGRONI is the answer.</span>
          </p>
        </div>

        {/* photos: stacked on mobile, side-by-side and larger on desktop */}
        <div className="mx-auto flex w-full max-w-xs flex-col gap-6 md:mt-10 md:max-w-none md:flex-row md:gap-6">
          <div data-photo className="w-full overflow-hidden md:w-1/2">
            <Image
              className="aspect-[4/5] w-full object-cover"
              src={handsClickingImg}
              alt=""
            />
          </div>
          <div data-photo className="w-full overflow-hidden md:w-1/2 md:translate-y-12">
            <Image
              className="aspect-square w-full object-cover md:aspect-[4/5]"
              src={upcloseCocktailImg}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}
