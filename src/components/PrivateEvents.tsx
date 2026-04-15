"use client";

import { motion } from "framer-motion";

export default function PrivateEvents() {
  return (
    <section id="events" className="relative py-28 md:py-40 bg-cream-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Left — Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="order-2 md:order-1"
          >
            <div className="aspect-[4/5] rounded-sm overflow-hidden">
              <div
                className="w-full h-full"
                style={{
                  background: `
                    radial-gradient(ellipse 60% 40% at 50% 60%, rgba(201,169,110,0.1) 0%, transparent 60%),
                    radial-gradient(ellipse 40% 30% at 30% 30%, rgba(122,139,111,0.08) 0%, transparent 50%),
                    linear-gradient(150deg, #2a2620 0%, #1e1b16 40%, #16140f 100%)
                  `,
                }}
              />
            </div>
          </motion.div>

          {/* Right — Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
            className="order-1 md:order-2"
          >
            <span className="text-gold text-[11px] tracking-[0.3em] uppercase">
              Private Events
            </span>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl text-charcoal leading-[1.2] tracking-[0.02em]">
              Your Occasion,
              <br />
              Our Craft
            </h2>
            <div className="mt-8 w-12 h-[1px] bg-gold/40" />

            <p className="mt-8 text-warm-gray text-base md:text-lg leading-[1.9] font-light">
              Our private dining room seats up to twenty-four guests in an
              atmosphere of quiet elegance. Whether celebrating a milestone,
              hosting a business dinner, or gathering loved ones, we craft every
              detail around your vision.
            </p>
            <p className="mt-4 text-warm-gray text-base md:text-lg leading-[1.9] font-light">
              Custom menus, curated wine pairings, and dedicated service ensure
              an evening that feels entirely yours.
            </p>

            {/* Features */}
            <div className="mt-10 space-y-4">
              {[
                "Custom tasting menus from Chef Solberg",
                "Curated wine and cocktail pairings",
                "Seats 8 to 24 guests",
                "Available Tuesday through Saturday",
              ].map((feature) => (
                <div key={feature} className="flex items-start gap-3">
                  <div className="mt-2 w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                  <span className="text-warm-gray text-sm font-light">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block mt-12 px-10 py-4 bg-charcoal text-cream text-[12px] tracking-[0.25em] uppercase hover:bg-charcoal-light transition-colors duration-300"
            >
              Inquire Now
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
