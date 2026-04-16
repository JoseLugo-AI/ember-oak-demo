"use client";

import { motion } from "framer-motion";

const basePath = "/ember-oak-demo";

export default function PressAndPlate() {
  return (
    <section className="py-24 md:py-40">
      <div className="max-w-[1240px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-12 gap-6 md:gap-16 items-center">
          {/* Left — press card, 4 cols */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="col-span-12 md:col-span-4 md:col-start-2"
          >
            <p
              className="text-[#9B9590] text-[11px] tracking-[0.2em] uppercase mb-6"
              style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}
            >
              In the Press
            </p>
            <h3 className="font-serif text-xl md:text-[1.35rem] leading-[1.4] text-[#272320] mb-6">
              Ember &amp; Oak Named Among the Best New Restaurants in the Pacific
              Northwest
            </h3>
            <p className="font-serif text-[15px] leading-[1.8] text-[#5C5550]">
              In the Spring of 2025, Food &amp; Wine Magazine named Ember &amp; Oak
              among the ten best restaurants in the Pacific Northwest, citing our
              &ldquo;devotion to flame-driven cooking and an uncommonly warm dining
              room.&rdquo; We are humbled by the recognition — and grateful for every
              guest who has walked through our doors.
            </p>
            <a
              href="#"
              className="inline-block mt-6 font-serif text-[15px] text-[#272320] underline underline-offset-4 hover:no-underline transition-all"
            >
              Read more
            </a>
          </motion.div>

          {/* Right — food plate, 6 cols */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.15, ease: "easeOut" }}
            className="col-span-12 md:col-span-6 md:col-start-7"
          >
            <div className="aspect-square overflow-hidden bg-[#FCFBFA]">
              <img
                src={`${basePath}/photo-pour.png`}
                alt="Hearth-roasted dish with bone broth"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
