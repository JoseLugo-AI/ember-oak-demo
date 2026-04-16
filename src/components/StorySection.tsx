"use client";

import { motion } from "framer-motion";

export default function StorySection() {
  return (
    <section id="story" className="py-32 md:py-48">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="max-w-xl"
        >
          <p
            className="text-[#9B9590] text-[11px] tracking-[0.2em] uppercase mb-8"
            style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}
          >
            The Space
          </p>
          <p className="font-serif text-xl md:text-[1.35rem] leading-[1.7] text-[#272320] font-normal">
            This storied building was first shaped by stonemasons more than a
            century ago. Both the architecture and the kitchen share a philosophy:
            honor the material, respect the process, serve with intention.
          </p>
          <p
            className="mt-8 text-[#9B9590] text-[13px] italic"
            style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}
          >
            Recognized by the Pacific Northwest Design Review, 2014.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
