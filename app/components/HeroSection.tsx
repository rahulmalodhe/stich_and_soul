"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const leftContentRef = useRef<HTMLDivElement>(null);
  const rightImageRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  // Split title into characters for animation
  const titleText = "STICH AND SOUL";
  const titleChars = titleText.split("");

  useEffect(() => {
    
    const ctx = gsap.context(() => {
      // Animations will trigger based on scroll position

      // Animate left content (typography) - initial visible, then animate on scroll
      if (leftContentRef.current) {
        // Set initial state
        gsap.set(leftContentRef.current, { opacity: 1, x: 0 });

        // Animate on scroll
        gsap.to(leftContentRef.current, {
          opacity: 0.8,
          x: -50,
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }

      // Animate title with text reveal
      if (titleRef.current) {
        const spans = titleRef.current.querySelectorAll("span");

        if (spans.length > 0) {
          // Set initial visible state
          gsap.set(spans, { opacity: 1, y: 0, rotationX: 0 });

          // Animate on scroll
          gsap.to(spans, {
            opacity: 0.7,
            y: -20,
            rotationX: 45,
            stagger: 0.03,
            scrollTrigger: {
              trigger: heroRef.current,
              start: "top top",
              end: "bottom top",
              scrub: true,
            },
          });
        }
      }

      // Animate subtitle - initial visible, then animate on scroll
      if (subtitleRef.current) {
        // Set initial visible state
        gsap.set(subtitleRef.current, { opacity: 1, y: 0 });

        // Animate on scroll
        gsap.to(subtitleRef.current, {
          opacity: 0.8,
          y: -20,
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }

      // Animate CTA button - initial visible, then animate on scroll
      if (ctaRef.current) {
        // Set initial visible state
        gsap.set(ctaRef.current, { opacity: 1, scale: 1 });

        // Animate on scroll
        gsap.to(ctaRef.current, {
          opacity: 0.9,
          scale: 0.95,
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }

      // Parallax and scale animation for right image
      if (rightImageRef.current) {
        // Set initial visible state
        gsap.set(rightImageRef.current, { opacity: 1, scale: 1, x: 0 });

        // Animate on scroll
        gsap.to(rightImageRef.current, {
          opacity: 0.9,
          scale: 1.1,
          x: -30,
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });

        // Continuous parallax effect during scroll
        gsap.to(rightImageRef.current, {
          y: -50,
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }
    }, heroRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative h-screen w-full overflow-hidden bg-bg-primary"
    >
      {/* Subtle backdrop overlays for premium depth */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-16 h-72 w-72 rounded-full bg-accent-secondary/15 blur-[110px]" />
        <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-bg-primary via-bg-primary/40 to-transparent" />
        <div className="absolute bottom-10 left-10 h-48 w-48 rounded-full bg-accent-primary/12 blur-[120px]" />
      </div>

      <div className="container mx-auto flex h-full flex-col w-full">
        <div className="flex h-full flex-col lg:flex-row">
          {/* Main content */}
          <div className="relative z-10 h-full w-full">
            {/* Left: Typography - Full Width */}
            <div ref={leftContentRef} className="relative z-20 flex h-full items-center">
              <div className="w-full space-y-8 pr-0 lg:w-[65%]">
              <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-text-primary/60">
                <span className="h-[1px] w-10 bg-text-primary/40" />
                Featured Drop — AW Collection
              </div>

              <div className="space-y-5">
                <h1
                  ref={titleRef}
                  className="text-h1 leading-[1.05] text-text-primary font-bold"
                  style={{ willChange: "transform, opacity", color: "#e5d8c8" }}
                >
                  {titleChars.map((char, index) => (
                    <span key={index} style={{ display: "inline-block" }}>
                      {char === " " ? "\u00A0" : char}
                    </span>
                  ))}
                </h1>
                <p
                  ref={subtitleRef}
                  className="text-body max-w-xl text-lg leading-relaxed text-body-text"
                  style={{ willChange: "transform, opacity", color: "#d6c7b2" }}
                >
                  Crafted for movement, tailored for distinction. Layerable
                  knits, sculpted outerwear, and precision denim built to carry
                  you from studio to street with cinematic ease.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4 text-sm text-body-text">
                <div className="flex items-center gap-2 rounded-full border border-text-primary/15 px-4 py-2">
                  <span className="h-2 w-2 rounded-full bg-accent-primary" />
                  Limited Release
                </div>
                <div className="flex items-center gap-2 rounded-full border border-text-primary/15 px-4 py-2">
                  <span className="h-2 w-2 rounded-full bg-accent-secondary" />
                  Sizes 38–48
                </div>
                <div className="flex items-center gap-2 rounded-full border border-text-primary/15 px-4 py-2">
                  <span className="h-2 w-2 rounded-full bg-text-primary" />
                  Free tailoring
                </div>
              </div>

              <div ref={ctaRef} className="flex flex-col gap-4 sm:flex-row">
                <button
                  className="group relative overflow-hidden rounded-full bg-accent-primary px-8 py-4 text-button text-white transition-all duration-300 hover:translate-y-[-2px] hover:bg-accent-primary/90 hover:shadow-xl hover:shadow-accent-primary/35"
                  style={{ willChange: "transform" }}
                >
                  <span className="relative z-10">Explore Collection</span>
                  <div className="absolute inset-0 -translate-x-full bg-white/15 transition-transform duration-300 group-hover:translate-x-0" />
                </button>
                <button
                  className="rounded-full border border-text-primary/25 px-8 py-4 text-button text-text-primary transition-all duration-300 hover:border-accent-primary hover:text-accent-primary"
                  style={{ willChange: "transform" }}
                >
                  Lookbook
                </button>
              </div>

              {/* SEO Keywords - Hidden but accessible */}
              <div className="sr-only">
                <h2>Premium Menswear for Ages 15-50</h2>
                <p>
                  Stich and Soul offers exclusive mens clothing designed for
                  modern gentlemen. Discover high-quality, stylish menswear that
                  combines traditional craftsmanship with contemporary design.
                  Shop premium mens clothing online.
                </p>
              </div>
              </div>
            </div>

            {/* Right: Model Image & overlay card - Positioned Absolutely */}
            <div
              ref={rightImageRef}
              className="absolute right-0 top-0 z-10 h-full w-[50%] lg:w-[45%]"
            >
              <div className="relative h-full w-full overflow-hidden rounded-[22px]">
                <div className="relative h-[100vh] w-full">
                  <Image
                    src="/HzUXuyrf5IjMwVYK.png"
                    alt="Stich and Soul menswear model in natural movement - premium clothing brand showcasing modern menswear for ages 15-50"
                    fill
                    className="object-cover object-center opacity-100"
                    priority
                    style={{ objectFit: "contain" }}
                  />
                </div>

                {/* Floating info pill */}
                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between gap-4 rounded-2xl bg-white/5 px-6 py-4 backdrop-blur-lg ring-1 ring-white/10">
                  <div className="flex items-center gap-3 text-text-primary">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent-primary/20 text-sm font-semibold text-accent-primary">
                      02
                    </div>
                    <div className="leading-tight">
                      <p className="text-xs uppercase tracking-[0.2em] text-text-primary/60">
                        Mountain Drop
                      </p>
                      <p className="text-sm font-semibold text-text-primary">
                        Natural Motion Capsule
                      </p>
                    </div>
                  </div>
                  <button className="grid h-12 w-12 place-items-center rounded-full border border-white/15 bg-white/5 text-text-primary transition hover:border-accent-primary hover:text-accent-primary">
                    <span className="sr-only">Next</span>
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14" />
                      <path d="m13 6 6 6-6 6" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
        <div className="flex flex-col items-center gap-2">
          <span
            className="text-body text-sm opacity-70"
            style={{ color: "#d6c7b2" }}
          >
            Scroll to explore
          </span>
          <div className="h-8 w-px bg-accent-primary/50">
            <div className="h-4 w-px animate-pulse bg-accent-primary"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
