"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "The kind of meal you think about for weeks. Every course felt intentional, like a quiet conversation between chef and guest.",
    author: "James & Claire Whitfield",
    context: "Anniversary Dinner, October 2025",
  },
  {
    quote:
      "I've dined at Michelin-starred restaurants across Europe. Ember & Oak belongs in that conversation. The dry-aged ribeye alone is worth the trip.",
    author: "David Engstrom",
    context: "Food & Wine Contributing Writer",
  },
  {
    quote:
      "We hosted our firm's year-end dinner here. Chef Solberg designed a menu around our preferences that left everyone speechless. Truly exceptional.",
    author: "Catherine Liu",
    context: "Private Event, December 2025",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="relative py-28 md:py-40 bg-cream overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-gold text-[11px] tracking-[0.3em] uppercase">
            Guest Reflections
          </span>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl text-charcoal tracking-[0.02em]">
            Words Kindly Shared
          </h2>
          <div className="mt-6 w-12 h-[1px] bg-gold/40 mx-auto" />
        </motion.div>

        {/* Testimonials — staggered layout */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.15, ease: "easeOut" }}
              className={`${i === 1 ? "md:-mt-8" : ""}`}
            >
              <div className="relative p-8 md:p-10 border border-charcoal/[0.06] rounded-sm bg-white/40">
                {/* Quote mark */}
                <span className="absolute -top-4 left-8 font-serif text-6xl text-gold/20 leading-none">
                  &ldquo;
                </span>

                <p className="relative z-10 text-warm-gray text-[15px] leading-[1.9] font-light italic">
                  {t.quote}
                </p>

                <div className="mt-8 pt-6 border-t border-charcoal/[0.06]">
                  <span className="block text-charcoal text-sm font-medium tracking-[0.05em]">
                    {t.author}
                  </span>
                  <span className="block mt-1 text-warm-gray/60 text-[11px] tracking-[0.15em] uppercase">
                    {t.context}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
