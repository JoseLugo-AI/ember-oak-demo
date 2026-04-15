"use client";

export default function Footer() {
  return (
    <footer id="contact" className="py-20 md:py-28">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 space-y-16">
        {/* Reservation details */}
        <div>
          <p className="text-foreground text-[11px] tracking-[0.2em] uppercase mb-4"
            style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}
          >
            Reservations
          </p>
          <p className="font-serif text-lg leading-[1.8] text-warm-brown max-w-lg">
            Dinner service Tuesday through Saturday, from six in the evening.
            We recommend reserving at least two weeks in advance for weekend seating.
            Click{" "}
            <a href="#" className="text-foreground underline underline-offset-4 hover:no-underline transition-all">
              here
            </a>{" "}
            for more information on dietary restrictions, attire, children, and cancellations.
          </p>
        </div>

        {/* Directions */}
        <div>
          <p className="text-foreground text-[11px] tracking-[0.2em] uppercase mb-4"
            style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}
          >
            Directions
          </p>
          <address className="not-italic font-serif text-lg leading-[1.8] text-warm-brown">
            742 Hearthstone Lane
            <br />
            Portland, OR 97205
          </address>
          <a
            href="#"
            className="inline-block mt-2 font-serif text-lg text-foreground underline underline-offset-4 hover:no-underline transition-all"
          >
            Get directions.
          </a>
        </div>

        {/* Contact */}
        <div>
          <p className="text-foreground text-[11px] tracking-[0.2em] uppercase mb-4"
            style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}
          >
            Get in Touch
          </p>
          <p className="font-serif text-lg leading-[1.8] text-warm-brown">
            Call us at{" "}
            <a href="tel:+15551234567" className="text-foreground underline underline-offset-4 hover:no-underline">
              (555) 123-4567
            </a>{" "}
            or email{" "}
            <a href="mailto:hello@emberandoak.com" className="text-foreground underline underline-offset-4 hover:no-underline">
              hello@emberandoak.com
            </a>
          </p>
          <p className="mt-6 font-serif text-base text-light-gray">
            &copy; 2014 - {new Date().getFullYear()} Ember & Oak
          </p>
        </div>
      </div>
    </footer>
  );
}
