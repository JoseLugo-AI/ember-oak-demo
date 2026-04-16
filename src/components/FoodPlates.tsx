"use client";

import { motion } from "framer-motion";

const basePath = "/ember-oak-demo";

const plates = [
  { src: "/photo-dessert.png", alt: "Seasonal strawberry composition" },
  { src: "/photo-pour.png", alt: "Hearth-roasted dish with bone broth" },
];

export default function FoodPlates() {
  return (
    <section id="menu" className="py-16 md:py-24">
      {plates.map((plate, i) => (
        <motion.div
          key={plate.src}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, delay: i * 0.05, ease: "easeOut" }}
          className="py-20 md:py-32 flex justify-center"
        >
          <div className="w-full max-w-[520px] px-6">
            <div className="aspect-square overflow-hidden bg-[#FCFBFA]">
              <img
                src={`${basePath}${plate.src}`}
                alt={plate.alt}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      ))}
    </section>
  );
}
