"use client";

import { motion } from "framer-motion";

const basePath = "/ember-oak-demo";

export default function StorySection() {
  return (
    <section id="story" className="py-32 md:py-48">
      <div className="max-w-[1240px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-12 gap-6 md:gap-16 items-center">
          {/* Left — photo, 7 cols */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="col-span-12 md:col-span-7"
          >
            <div className="aspect-[4/3] overflow-hidden bg-[#1e1b16]">
              <img
                src={`${basePath}/photo-exterior.png`}
                alt="Castle exterior at dusk"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Right — text, 4 cols offset 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
            className="col-span-12 md:col-span-4 md:col-start-9"
          >
            <p
              className="text-[#9B9590] text-[11px] tracking-[0.2em] uppercase mb-8"
              style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}
            >
              The Space
            </p>
            <p className="font-serif text-xl md:text-[1.35rem] leading-[1.7] text-[#272320]">
              This storied building was first shaped by stonemasons more than a
              century ago. Generations of hands have since brought it back to life.
              Both the architecture and the kitchen now share a single philosophy:
              honor the material, respect the process, serve with intention.
            </p>
            <p className="mt-8 font-serif italic text-[15px] text-[#5C5550]">
              Recognized by the Pacific Northwest Design Review, 2014.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
