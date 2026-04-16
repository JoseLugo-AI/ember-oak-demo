"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const basePath = "/ember-oak-demo";

type Props = {
  src: string;
  alt: string;
  aspect?: string;
};

export default function FullBleedPhoto({
  src,
  alt,
  aspect = "aspect-[16/9]",
}: Props) {
  const container = useRef<HTMLDivElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useGSAP(
    () => {
      if (!imgRef.current || !frameRef.current) return;

      gsap.fromTo(
        imgRef.current,
        { yPercent: -8 },
        {
          yPercent: 8,
          ease: "none",
          scrollTrigger: {
            trigger: frameRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    },
    { scope: container }
  );

  return (
    <section ref={container} className="py-16 md:py-24">
      <div
        ref={frameRef}
        className={`w-full ${aspect} overflow-hidden bg-[#1e1b16]`}
      >
        <img
          ref={imgRef}
          src={`${basePath}${src}`}
          alt={alt}
          className="w-full h-[116%] object-cover"
        />
      </div>
    </section>
  );
}
