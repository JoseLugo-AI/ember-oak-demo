"use client";

import { motion } from "framer-motion";

const basePath = "/ember-oak-demo";

type Props = {
  src: string;
  alt: string;
  aspect?: string;
};

export default function FullBleedPhoto({ src, alt, aspect = "aspect-[16/9]" }: Props) {
  return (
    <section className="py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 1, ease: "easeOut" }}
        className={`w-full ${aspect} overflow-hidden bg-[#1e1b16]`}
      >
        <img
          src={`${basePath}${src}`}
          alt={alt}
          className="w-full h-full object-cover"
        />
      </motion.div>
    </section>
  );
}
