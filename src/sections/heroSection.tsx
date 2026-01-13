"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowRight, Play, MousePointer2 } from "lucide-react";

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
    <section className="relative h-screen w-full overflow-hidden bg-brand-richBlack text-white">
      {/* Background Slides */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={current}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
        >
          <motion.div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slides[current].image})` }}
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, ease: "linear" }}
          />
          {/* Heavy Gradient Overlay for Text Readability - Perfectly Centered Vignette */}
          <div className="absolute inset-0 bg-brand-richBlack/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-richBlack via-transparent to-brand-richBlack/30 opactiy-80" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-richBlack/50 via-transparent to-brand-richBlack/50" />
        </motion.div>
      </AnimatePresence>

      {/* Global Red Thread - Center Line */}
      <div className="absolute left-1/2 top-0 h-1/2 w-[1px] bg-gradient-to-b from-brand-appRed to-transparent -translate-x-1/2 z-20 opacity-80" />

      {/* Hero Content - Perfectly Centered */}
      <div className="relative z-30 flex h-full flex-col items-center justify-center text-center px-6">

        {/* Animated Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8 flex flex-col items-center gap-4"
        >
          <div className="h-16 w-[1px] bg-brand-appRed shadow-[0_0_15px_rgba(214,8,9,0.5)]"></div>
          <span className="text-sm font-bold tracking-[0.4em] uppercase text-white/90">
            Akod Group Holdings
          </span>
        </motion.div>

        {/* Main Title - Staggered */}
        <div className="mb-8 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.h1
              key={current}
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              exit={{ y: "-100%", opacity: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-5xl md:text-7xl lg:text-9xl font-medium leading-[1.1] tracking-tight text-white"
            >
              {slides[current].title}
            </motion.h1>
          </AnimatePresence>
        </div>

        {/* Subtitle */}
        <motion.p
          key={`sub-${current}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-12 max-w-2xl text-lg md:text-xl font-light text-brand-platinum/90 leading-relaxed"
        >
          {slides[current].subtitle}
        </motion.p>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center gap-6"
        >
          <button className="group relative overflow-hidden bg-brand-appRed px-10 py-5 transition-transform hover:scale-105 duration-300 shadow-lg shadow-brand-appRed/20">
            <span className="relative z-10 flex items-center gap-3 text-xs font-bold tracking-widest text-white uppercase">
              Discover Our World <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          </button>

          <button className="group flex items-center gap-4 text-xs font-bold tracking-widest text-white uppercase hover:text-brand-appRed transition-colors">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-white/5 backdrop-blur-md transition-all duration-300 group-hover:border-brand-appRed group-hover:bg-brand-appRed group-hover:text-white group-hover:scale-110">
              <Play size={16} fill="currentColor" />
            </div>
            <span>Watch Showreel</span>
          </button>
        </motion.div>
      </div>

      {/* Progress Indicators */}
      <div className="absolute bottom-12 right-0 left-0 w-full px-6 flex justify-center z-30">
        <div className="flex items-center gap-4">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`h-[2px] transition-all duration-500 ${current === idx ? "w-16 bg-brand-appRed shadow-[0_0_10px_rgba(214,8,9,0.8)]" : "w-8 bg-white/20 hover:bg-white/40"}`}
            />
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-8 hidden md:flex items-center gap-2 text-white/50 text-[10px] uppercase tracking-widest z-30"
      >
        <div className="w-8 h-[1px] bg-white/20"></div>
        Scroll to Explore
      </motion.div>

    </section>
  );
};

export default HeroSection;
