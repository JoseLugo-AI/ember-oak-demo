"use client";

import { motion } from "framer-motion";

export default function Introduction() {
  return (
    <section className="py-24 md:py-40">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-12 gap-6 md:gap-12">
          {/* Left — Text block (4 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="col-span-12 md:col-span-4"
          >
            <p className="text-[#9B9590] text-[11px] tracking-[0.2em] uppercase mb-6"
              style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}
            >
              An Invitation
            </p>
            <h2 className="font-serif text-xl md:text-[1.35rem] leading-[1.7] text-[#272320] font-normal">
              The opportunity to meet and serve you is one we don&apos;t take lightly.
              Not for the past twelve years. Our kitchen is anchored in open flame,
              seasonal ingredients, and a quiet devotion to craft.
            </h2>
            <a
              href="#story"
              className="inline-block mt-8 text-[#272320] text-[11px] tracking-[0.15em] uppercase border-b border-[#272320]/30 pb-1 hover:border-[#272320] transition-colors duration-300"
              style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}
            >
              Read more
            </a>
          </motion.div>

          {/* Right — Large photo placeholder (7 cols, offset 1) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
            className="col-span-12 md:col-span-7 md:col-start-6"
          >
            <div className="aspect-[1/1] bg-[#2a2520] overflow-hidden flex items-center justify-center">
              <span className="text-white/20 text-sm tracking-widest uppercase">Dining Room Photo</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
