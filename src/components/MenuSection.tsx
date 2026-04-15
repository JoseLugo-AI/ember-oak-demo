"use client";

import { motion } from "framer-motion";

export default function MenuSection() {
  return (
    <section id="menu" className="py-24 md:py-40">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        {/* Press / Accolade section */}
        <div className="grid grid-cols-12 gap-6 md:gap-12 mb-24 md:mb-40">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="col-span-12 md:col-span-6"
          >
            <p className="text-[#9B9590] text-[11px] tracking-[0.2em] uppercase mb-6"
              style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}
            >
              In the press
            </p>
            <h2 className="font-serif text-xl md:text-[1.35rem] leading-[1.7] text-[#272320] font-normal">
              Ember & Oak Named One of the Best New Restaurants in America
            </h2>
            <p className="mt-4 font-serif text-lg leading-[1.8] text-[#5C5550] font-light">
              In the Spring of 2025, Food & Wine Magazine named Ember & Oak among
              the ten best restaurants in the Pacific Northwest, citing our
              &ldquo;devotion to flame-driven cooking and an uncommonly warm
              dining room.&rdquo;
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
            className="col-span-12 md:col-span-6"
          >
            <div className="aspect-square bg-[#2a2520] overflow-hidden flex items-center justify-center">
              <span className="text-white/20 text-sm tracking-widest uppercase">Food Photo</span>
            </div>
          </motion.div>
        </div>

        {/* Food photos grid — two side by side */}
        <div className="grid grid-cols-12 gap-6 md:gap-12 mb-24 md:mb-40">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="col-span-12 md:col-span-6"
          >
            <div className="aspect-[3/4] bg-[#EDEAE5] overflow-hidden flex items-center justify-center">
              <span className="text-[#272320]/20 text-sm tracking-widest uppercase">Plated Dish</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, delay: 0.1, ease: "easeOut" }}
            className="col-span-12 md:col-span-6"
          >
            <div className="aspect-[4/5] bg-[#EDEAE5] overflow-hidden flex items-center justify-center">
              <span className="text-[#272320]/20 text-sm tracking-widest uppercase">Plated Dish</span>
            </div>
          </motion.div>
        </div>

        {/* Wide photo — full width */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <div className="aspect-[16/9] bg-[#1e1b16] overflow-hidden flex items-center justify-center">
            <span className="text-white/20 text-sm tracking-widest uppercase">Chef Pouring / Action Shot</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
