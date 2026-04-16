"use client";

import { motion } from "framer-motion";

const basePath = "/ember-oak-demo";

type Props = {
  src: string;
  alt: string;
};

export default function FoodPlateSolo({ src, alt }: Props) {
  return (
    <section className="py-24 md:py-40">
      <div className="max-w-[1240px] mx-auto px-6 md:px-12 flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-full max-w-[560px]"
        >
          <div className="aspect-square overflow-hidden bg-[#FCFBFA]">
            <img
              src={`${basePath}${src}`}
              alt={alt}
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
