"use client";

export default function Footer() {
  return (
    <footer id="contact" className="py-20 md:py-28">
      <div className="max-w-[1240px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Policies */}
          <div>
            <p
              className="text-[#272320] text-[11px] tracking-[0.2em] uppercase mb-6"
              style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}
            >
              Policies
            </p>
            <p className="font-serif text-[15px] leading-[1.8] text-[#5C5550]">
              Click{" "}
              <a
                href="#"
                className="text-[#272320] underline underline-offset-4 hover:no-underline transition-all"
              >
                here
              </a>{" "}
              for more information on dietary restrictions, attire, children, and
              cancellations.
            </p>
          </div>

          {/* Directions */}
          <div>
            <p
              className="text-[#272320] text-[11px] tracking-[0.2em] uppercase mb-6"
              style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}
            >
              Directions
            </p>
            <address className="not-italic font-serif text-[15px] leading-[1.8] text-[#5C5550]">
              742 Hearthstone Lane
              <br />
              Portland, OR 97205
            </address>
            <a
              href="#"
              className="inline-block mt-2 font-serif italic text-[15px] text-[#272320] underline underline-offset-4 hover:no-underline transition-all"
            >
              Get directions
            </a>
          </div>

          {/* Get in touch */}
          <div>
            <p
              className="text-[#272320] text-[11px] tracking-[0.2em] uppercase mb-6"
              style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}
            >
              Get in Touch
            </p>
            <p className="font-serif text-[15px] leading-[1.8] text-[#5C5550]">
              Call us at{" "}
              <a
                href="tel:+15551234567"
                className="text-[#272320] underline underline-offset-4 hover:no-underline"
              >
                (555) 123-4567
              </a>{" "}
              or email{" "}
              <a
                href="mailto:hello@emberandoak.com"
                className="text-[#272320] underline underline-offset-4 hover:no-underline"
              >
                hello@emberandoak.com
              </a>
            </p>
            <p className="mt-6 font-serif text-[13px] text-[#9B9590]">
              &copy; 2014 - {new Date().getFullYear()} Ember &amp; Oak
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
