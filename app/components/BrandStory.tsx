"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function BrandStory() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax effect for image
      gsap.to(imageRef.current, {
        y: -80,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      // Fade in text content
      gsap.from(textRef.current, {
        opacity: 0,
        x: -60,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen w-full bg-bg-surface py-24 lg:py-32"
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          {/* Left: Image */}
          <div className="relative overflow-hidden rounded-3xl">
            <div
              ref={imageRef}
              className="aspect-[4/5] bg-gradient-to-br from-accent-primary/20 to-accent-secondary/20"
            >
              {/* Placeholder for brand story image */}
              <div className="flex h-full w-full items-center justify-center">
                <div className="text-center">
                  <div className="mb-4 text-8xl font-bold text-text-primary/10">
                    S&S
                  </div>
                  <p className="text-sm uppercase tracking-[0.3em] text-text-primary/30">
                    Since 2024
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Text Content */}
          <div ref={textRef} className="space-y-8">
            <div className="flex items-center gap-3">
              <span className="h-[1px] w-12 bg-text-primary/40" />
              <span className="text-xs uppercase tracking-[0.3em] text-text-primary/60">
                Our Story
              </span>
            </div>

            <h2 className="text-h2 text-text-primary">
              Where Craftsmanship Meets Character
            </h2>

            <div className="space-y-6 text-body-text">
              <p className="text-lg leading-relaxed">
                Stich and Soul was born from a simple belief: that clothing
                should be more than fabric and thread. It should tell a story,
                reflect character, and stand the test of time.
              </p>

              <p className="leading-relaxed">
                Every piece in our collection is crafted with meticulous
                attention to detail, combining traditional tailoring techniques
                with contemporary design sensibilities. We source the finest
                materials and work with skilled artisans who share our
                commitment to excellence.
              </p>

              <p className="leading-relaxed">
                For the modern gentleman aged 15 to 50, we offer more than just
                clothing—we offer a way to express individuality, confidence,
                and timeless style.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-8 border-t border-text-primary/10 pt-8">
              <div>
                <div className="mb-2 text-3xl font-bold text-accent-primary">
                  100%
                </div>
                <div className="text-sm text-body-text">
                  Premium Materials
                </div>
              </div>
              <div>
                <div className="mb-2 text-3xl font-bold text-accent-primary">
                  50+
                </div>
                <div className="text-sm text-body-text">
                  Unique Designs
                </div>
              </div>
              <div>
                <div className="mb-2 text-3xl font-bold text-accent-primary">
                  10K+
                </div>
                <div className="text-sm text-body-text">
                  Happy Customers
                </div>
              </div>
            </div>

            <button className="group relative overflow-hidden rounded-full bg-accent-primary px-8 py-4 text-button text-white transition-all duration-300 hover:translate-y-[-2px] hover:bg-accent-primary/90 hover:shadow-xl hover:shadow-accent-primary/35">
              <span className="relative z-10">Learn More About Us</span>
              <div className="absolute inset-0 -translate-x-full bg-white/15 transition-transform duration-300 group-hover:translate-x-0" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
