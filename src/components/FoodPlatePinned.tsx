"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const basePath = "/ember-oak-demo";

const courses = [
  {
    roman: "I.",
    name: "Hearth-Kissed Root",
    body: "Charred heritage beets, fermented pear, wild sorrel ash.",
  },
  {
    roman: "II.",
    name: "Cherrywood Bone Broth",
    body: "Reduction of oxtail and roasted marrow, set over heirloom barley.",
  },
  {
    roman: "III.",
    name: "Wild Strawberry, Stone Cream",
    body: "Late-summer strawberries, sheep's milk cream, oak-smoked honey.",
  },
];

type Props = {
  src: string;
  alt: string;
};

export default function FoodPlatePinned({ src, alt }: Props) {
  const container = useRef<HTMLDivElement>(null);
  const plateRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!container.current) return;

      const mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
        const courseEls = gsap.utils.toArray<HTMLElement>(
          container.current!.querySelectorAll(".course-card")
        );
        if (courseEls.length === 0) return;

        gsap.set(courseEls, { opacity: 0, y: 24 });
        gsap.set(courseEls[0], { opacity: 1, y: 0 });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: container.current,
            start: "top top",
            end: "+=2400",
            pin: true,
            scrub: 0.6,
          },
        });

        courseEls.forEach((el, i) => {
          if (i === 0) return;
          const prev = courseEls[i - 1];
          tl.to(prev, { opacity: 0, y: -24, duration: 0.5, ease: "power2.inOut" }, `+=0.4`)
            .to(el, { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }, "<");
        });

        if (plateRef.current) {
          gsap.to(plateRef.current, {
            scale: 1.04,
            ease: "none",
            scrollTrigger: {
              trigger: container.current,
              start: "top top",
              end: "+=2400",
              scrub: 0.6,
            },
          });
        }
      });

      mm.add("(max-width: 767px)", () => {
        const courseEls = gsap.utils.toArray<HTMLElement>(
          container.current!.querySelectorAll(".course-card")
        );
        gsap.set(courseEls, { opacity: 1, y: 0 });
      });

      return () => mm.revert();
    },
    { scope: container }
  );

  return (
    <section ref={container} className="relative bg-[#FCFBFA] overflow-hidden">
      <div className="h-screen w-full flex items-center py-12 md:py-20">
        <div className="max-w-[1240px] mx-auto px-6 md:px-12 w-full">
          <div className="grid grid-cols-12 gap-6 md:gap-16 items-center">
            <div className="col-span-12 md:col-span-6 md:col-start-1">
              <div
                ref={plateRef}
                className="aspect-square overflow-hidden bg-[#F2ECE4]"
              >
                <img
                  src={`${basePath}${src}`}
                  alt={alt}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="col-span-12 md:col-span-5 md:col-start-8 relative min-h-[320px] md:min-h-[360px]">
              <p
                className="text-[#9B9590] text-[11px] tracking-[0.2em] uppercase mb-8"
                style={{
                  fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                }}
              >
                The Tasting — Three Courses
              </p>

              <div className="relative">
                {courses.map((c) => (
                  <article
                    key={c.roman}
                    className="course-card md:absolute md:inset-0 mb-10 md:mb-0"
                  >
                    <p
                      className="text-[#9B6E3B] text-[12px] tracking-[0.3em] mb-4"
                      style={{
                        fontFamily:
                          "'Helvetica Neue', Helvetica, Arial, sans-serif",
                      }}
                    >
                      {c.roman}
                    </p>
                    <h3 className="font-serif text-[1.6rem] md:text-[2rem] leading-[1.2] text-[#272320] mb-5">
                      {c.name}
                    </h3>
                    <p className="font-serif text-[15px] md:text-[16px] leading-[1.8] text-[#5C5550] max-w-[420px]">
                      {c.body}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
