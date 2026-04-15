"use client";

import { motion } from "framer-motion";

export default function ReservationCTA() {
  return (
    <section id="reservations" className="py-32 md:py-48">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center"
        >
          <h2 className="font-display text-[clamp(3rem,8vw,7rem)] leading-[1.1] text-foreground">
            Make a{" "}
            <em className="font-display italic">reservation.</em>
          </h2>
        </motion.div>
      </div>
    </section>
  );
}
