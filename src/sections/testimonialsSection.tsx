"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Absolute precision in every execution. Akod Group defines industrial luxury.",
    author: "Elena R.",
    role: "Director, Vortex Capital",
    image: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
  },
  {
    quote: "A partnership that transformed our digital infrastructure overnight.",
    author: "James Chen",
    role: "CTO, Future Systems",
    image: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
  },
  {
    quote: "Unmatched safety standards. They don't just build, they protect.",
    author: "Sarah Miller",
    role: "VP, Civitas Construction",
    image: "https://i.pravatar.cc/150?u=a04258114e29026302d",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="bg-brand-richBlack py-32 relative overflow-hidden">
      {/* Background Decor - Industrial Grid Hint */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute left-1/4 top-0 h-full w-[1px] bg-gradient-to-b from-transparent via-brand-platinum to-transparent" />
        <div className="absolute right-1/4 top-0 h-full w-[1px] bg-gradient-to-b from-transparent via-brand-platinum to-transparent" />
        <div className="absolute top-1/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-platinum to-transparent" />
        <div className="absolute bottom-1/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-platinum to-transparent" />
      </div>

      <div className="container mx-auto px-6 md:px-20 lg:px-32 relative z-10">

        {/* Section Header */}
        <div className="mb-32 flex flex-col items-center text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-xs font-bold tracking-[0.3em] text-brand-appRed uppercase mb-6"
          >
            Validation
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-serif text-5xl md:text-7xl text-white leading-tight"
          >
            Trusted by <span className="italic text-brand-platinum/50">Leaders.</span>
          </motion.h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid gap-12 md:grid-cols-3 relative">
          {/* The Red Thread Connection (Vertical Line through cards if desired, or simplified) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-white/5 -translate-x-1/2 z-0" />

          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.7 }}
              viewport={{ once: true }}
              className={`flex flex-col group relative ${index === 1 ? 'md:-translate-y-12' : ''}`}
            >
              {/* Card Container - Glassmorphism */}
              <div className="flex flex-col h-full p-10 bg-white/5 backdrop-blur-md border border-white/10 rounded-sm hover:border-brand-appRed/50 transition-colors duration-500">

                {/* Quote Icon */}
                <div className="mb-8">
                  <Quote className="w-10 h-10 text-brand-appRed opacity-50" />
                </div>

                {/* Quote Content */}
                <p className="mb-10 font-serif text-xl md:text-2xl leading-relaxed text-brand-platinum/90 flex-1">
                  &quot;{t.quote}&quot;
                </p>

                {/* Author Block */}
                <div className="flex items-center gap-5 pt-8 border-t border-white/10">
                  <div className="relative h-14 w-14 overflow-hidden rounded-full border border-white/20 group-hover:border-brand-appRed transition-colors">
                    <Image
                      src={t.image}
                      alt={t.author}
                      fill
                      className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-white uppercase text-sm tracking-wider mb-1">{t.author}</h4>
                    <span className="text-[10px] font-medium text-brand-appRed uppercase tracking-[0.2em]">{t.role}</span>
                  </div>
                </div>
              </div>

              {/* Decorative Corner Accent */}
              <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-brand-appRed opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-brand-appRed opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom Seamless Fade to Next Section */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-brand-richBlack to-transparent z-20 pointer-events-none" />

    </section>
  );
};

export default TestimonialsSection;
