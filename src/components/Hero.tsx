"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#0D0A07]">
      {/* Video Background — drop your MP4 at /public/hero-video.mp4 */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Subtle overlay to ensure text readability over video */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Centered Wordmark */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
          className="text-white text-[clamp(1.5rem,4vw,3rem)] tracking-[0.35em] uppercase font-light"
          style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}
        >
          Ember & Oak
        </motion.h1>
      </div>
    </section>
  );
}
