"use client";

import { motion } from "framer-motion";

export default function StorySection() {
  return (
    <section id="story" className="py-24 md:py-40">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-12 gap-6 md:gap-12">
          {/* Left — Large photo placeholder (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="col-span-12 md:col-span-7"
          >
            <div className="aspect-[4/3] bg-[#1e1b16] overflow-hidden flex items-center justify-center">
              <span className="text-white/20 text-sm tracking-widest uppercase">Kitchen / Chef Photo</span>
            </div>
          </motion.div>

          {/* Right — Text block (4 cols, offset 1) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
            className="col-span-12 md:col-span-4 md:col-start-9 flex flex-col justify-center"
          >
            <p className="text-[#9B9590] text-[11px] tracking-[0.2em] uppercase mb-6"
              style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}
            >
              The Space
            </p>
            <h2 className="font-serif text-xl md:text-[1.35rem] leading-[1.7] text-[#272320] font-normal">
              This storied building was first designed by Roland Terry in 2014.
              Both the architecture and the kitchen share a philosophy: honor
              the material, respect the process, serve with intention.
            </h2>
            <p className="mt-6 font-serif text-lg leading-[1.8] text-[#5C5550] font-light">
              Our dining room seats forty-two. The hearth burns nightly with
              sustainably sourced oak and cherry. Every detail has been considered
              so you don&apos;t have to think about any of them.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
