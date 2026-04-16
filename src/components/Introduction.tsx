"use client";

import { motion } from "framer-motion";

const basePath = "/ember-oak-demo";

export default function Introduction() {
  return (
    <section className="py-32 md:py-48">
      <div className="max-w-[1240px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-12 gap-6 md:gap-16 items-end">
          {/* Left — text block, 4 cols */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="col-span-12 md:col-span-4"
          >
            <p
              className="text-[#9B9590] text-[11px] tracking-[0.2em] uppercase mb-8"
              style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}
            >
              An Invitation
            </p>
            <p className="font-serif text-xl md:text-[1.35rem] leading-[1.7] text-[#272320]">
              The opportunity to meet and serve you is one we don&apos;t take lightly.
              Not for the past twelve years at least. Come spend an evening with us.
              Our kitchen is anchored in open flame, seasonal ingredients, and a
              quiet devotion to craft — few places can do it quite like we can.
            </p>
          </motion.div>

          {/* Right — photo, 7 cols offset 1 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.15, ease: "easeOut" }}
            className="col-span-12 md:col-span-7 md:col-start-6"
          >
            <div className="aspect-[4/3] overflow-hidden bg-[#1e1b16]">
              <img
                src={`${basePath}/photo-dining-room.png`}
                alt="Guests dining in the main hall"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
