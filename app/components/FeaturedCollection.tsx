"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function FeaturedCollection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Pin the section
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "+=400%",
        pin: true,
        pinSpacing: true,
      });

      // Set initial position to show first card
      gsap.set(cardsContainerRef.current, {
        x: 0,
      });

      // Horizontal scroll animation
      gsap.to(cardsContainerRef.current, {
        x: () => {
          const cardWidth = window.innerWidth * 0.8; // 80vw
          const gap = 32; // gap-8 = 2rem = 32px
          return -(cardWidth * 3 + gap * 3); // Move through 3 cards (showing cards 1,2,3,4)
        },
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=400%",
          scrub: true,
        },
      });

      // Fade and scale cards as they come into view
      const cards = gsap.utils.toArray<HTMLElement>(".carousel-card");
      cards.forEach((card, index) => {
        gsap.fromTo(
          card,
          {
            opacity: 0.6,
            scale: 0.95,
          },
          {
            opacity: 1,
            scale: 1,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: `top+=${index * 100}% top`,
              end: `top+=${(index + 1) * 100}% top`,
              scrub: true,
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const collections = [
    {
      title: "Tailored Shirts",
      description: "Precision-cut for the modern professional",
      image: "/blueshirt.png",
    },
    {
      title: "Casual Essentials",
      description: "Elevated basics for everyday wear",
      image: "/blackTsirt.png",
    },
    {
      title: "Outerwear",
      description: "Statement pieces for all seasons",
      image: "/Polo.png",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen w-full overflow-hidden bg-bg-primary"
      style={{ minHeight: '100vh' }}
    >
      <div className="flex h-full w-full flex-col items-center justify-center">
        {/* Section Header - Centered at top */}
        <div className="absolute left-0 right-0 top-20 z-20 text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-[1px] w-12 bg-text-primary/40" />
            <span className="text-xs uppercase tracking-[0.3em] text-text-primary/60">
              Explore Our Collections
            </span>
            <span className="h-[1px] w-12 bg-text-primary/40" />
          </div>
          <h2 className="text-h2 mb-4 text-text-primary">
            Crafted for Distinction
          </h2>
          <p className="text-body mx-auto max-w-2xl text-body-text">
            Each piece is thoughtfully designed to elevate your wardrobe with
            timeless style and exceptional quality.
          </p>
        </div>

        {/* Horizontal scrolling cards container */}
        <div className="relative flex h-full w-full items-center justify-start overflow-hidden pt-48 mt-10">
          <div
            ref={cardsContainerRef}
            className="flex h-full items-center gap-8"
          >
          {collections.map((collection, index) => (
            <div
              key={index}
              className="carousel-card flex h-full flex-shrink-0 items-center justify-center"
              style={{ width: "100vw" }}
            >
              <div className="relative h-[600px] w-full max-w-2xl overflow-hidden rounded-3xl bg-bg-surface shadow-2xl">
                <div className="relative h-full w-full overflow-hidden bg-gradient-to-br from-bg-surface to-bg-primary">
                  {/* Placeholder for collection image */}
                  <div className="relative flex h-full w-full items-center justify-center bg-gradient-to-br from-accent-primary/10 to-accent-secondary/10">
                  <Image
                    src={collection.image}
                    alt={collection.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 896px"
                    className="object-contain"
                    unoptimized
                  />
                  </div>
                </div>

                {/* Card content overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-bg-primary via-bg-primary/90 to-transparent p-12">
                  <h3 className="mb-3 text-4xl font-bold text-text-primary">
                    {collection.title}
                  </h3>
                  <p className="mb-6 text-lg text-body-text">
                    {collection.description}
                  </p>
                  <button className="group flex items-center gap-3 rounded-full bg-accent-primary px-8 py-4 text-button text-white transition-all duration-300 hover:translate-y-[-2px] hover:bg-accent-primary/90 hover:shadow-xl hover:shadow-accent-primary/35">
                    <span>Explore Collection</span>
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="transition-transform group-hover:translate-x-1"
                    >
                      <path d="M5 12h14" />
                      <path d="m13 6 6 6-6 6" />
                    </svg>
                  </button>
                </div>

                {/* Card number indicator */}
                <div className="absolute right-8 top-8 flex h-16 w-16 items-center justify-center rounded-full bg-accent-primary/20 backdrop-blur-sm">
                  <span className="text-2xl font-bold text-accent-primary">
                    {index + 1}
                  </span>
                </div>
              </div>
            </div>
          ))}
          </div>
        </div>
      </div>

      {/* Progress indicator */}
      <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {collections.map((_, index) => (
          <div
            key={index}
            className="h-1 w-12 rounded-full bg-text-primary/20"
          >
            <div
              className="progress-bar h-full w-0 rounded-full bg-accent-primary"
              style={{ width: "0%" }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
