"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(useGSAP, SplitText);

const basePath = "/ember-oak-demo";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  useGSAP(
    () => {
      if (!headingRef.current) return;

      const split = SplitText.create(headingRef.current, {
        type: "chars",
        charsClass: "ember-char",
      });

      gsap.set(headingRef.current, { opacity: 1 });

      gsap.from(split.chars, {
        opacity: 0,
        y: 24,
        duration: 1.1,
        ease: "power3.out",
        stagger: 0.06,
        delay: 0.5,
      });

      return () => split.revert();
    },
    { scope: container }
  );

  return (
    <section
      ref={container}
      className="relative h-screen w-full overflow-hidden bg-[#0D0A07]"
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={`${basePath}/hero-video.mp4`} type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/15" />

      <div className="relative z-10 h-full flex items-center justify-center">
        <h1
          ref={headingRef}
          className="text-white text-[clamp(1.5rem,4vw,3rem)] tracking-[0.35em] uppercase font-light opacity-0"
          style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}
        >
          Ember &amp; Oak
        </h1>
      </div>
    </section>
  );
}
