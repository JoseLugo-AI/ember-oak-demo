"use client";

import { motion } from "framer-motion";

export default function InThePress() {
  return (
    <section className="py-32 md:py-48">
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
            In the Press
          </p>
          <p className="font-serif text-xl md:text-[1.35rem] leading-[1.7] text-[#272320] font-normal">
            Ember &amp; Oak Named One of the Best New Restaurants in America.
          </p>
          <a
            href="#"
            className="inline-block mt-6 font-serif text-lg text-[#272320] underline underline-offset-4 hover:no-underline transition-all"
          >
            Read here.
          </a>
        </motion.div>
      </div>
    </section>
  );
}
