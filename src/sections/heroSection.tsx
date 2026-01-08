"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const slides = [
  {
    image: "/BANNER/10.jpg",
    title: "Legacy of Excellence",
    subtitle: "Orchestrating the future of Infrastructure, Technology, and Safety.",
  },
  {
    image: "/BANNER/11.jpg",
    title: "Precision Engineering",
    subtitle: "Building the foundations of modern civilization with absolute integrity.",
  },
  {
    image: "/BANNER/22.jpg",
    title: "Global Vision",
    subtitle: "Empowering industries across borders with sustainable innovation.",
  },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-brand-appBlue">
      {/* Background Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${index === current ? "opacity-100" : "opacity-0"
            }`}
        >
          <motion.div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
            initial={{ scale: 1.1 }}
            animate={{ scale: index === current ? 1 : 1.1 }}
            transition={{ duration: 8, ease: "linear" }}
          />
          {/* Blue Overlay */}
          <div className="absolute inset-0 bg-brand-appBlue/60 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-appBlue via-transparent to-black/30" />
        </div>
      ))}

      {/* Hero Content */}
      <div className="relative z-20 flex h-full items-center justify-center text-center">
        <div className="container px-6">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          >
            <span className="mb-6 block text-sm font-bold tracking-[0.3em] text-brand-appRed uppercase">
              Akod Group Holdings
            </span>
            <h1 className="mb-8 font-serif text-5xl font-medium leading-tight text-white md:text-7xl lg:text-8xl">
              {slides[current].title}
            </h1>
            <p className="mx-auto mb-12 max-w-2xl text-lg font-light text-gray-200 md:text-xl">
              {slides[current].subtitle}
            </p>

            <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
              <button className="group relative overflow-hidden bg-white px-8 py-4 transition-all hover:bg-brand-appRed hover:text-white">
                <span className="relative z-10 text-xs font-bold tracking-widest text-brand-appBlue uppercase group-hover:text-white">
                  Discover Our World
                </span>
              </button>
              <button className="group flex items-center gap-4 text-xs font-bold tracking-widest text-white uppercase hover:text-brand-appRed">
                <span>Play Showreel</span>
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 transition-all group-hover:border-brand-appRed group-hover:bg-brand-appRed group-hover:text-white">
                  ▶
                </div>
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Progress Bar & Indicators */}
      <div className="absolute bottom-12 left-0 w-full px-6">
        <div className="mx-auto flex max-w-7xl items-end justify-between border-t border-white/10 pt-6">
          <div className="flex gap-4">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`h-[2px] w-12 transition-all duration-500 ${current === idx ? "bg-brand-appRed" : "bg-white/20"}`}
              />
            ))}
          </div>
          <div className="hidden text-xs font-bold tracking-widest text-brand-appRed uppercase md:block">
            0{current + 1} / 0{slides.length}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
