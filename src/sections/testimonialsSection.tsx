"use client";

import { motion } from "framer-motion";
import Image from "next/image";

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
    <section className="bg-brand-richBlack py-32 text-white">
      <div className="container mx-auto px-8 md:px-16 lg:px-24 text-center">
        <div className="mx-auto mb-20 max-w-4xl">
          <span className="block text-xs font-bold tracking-widest text-brand-champagneGold uppercase">
            Testimonials
          </span>
          <h2 className="mt-4 font-serif text-4xl leading-tight md:text-5xl text-brand-platinum">
            Trusted by Industry Leaders
          </h2>
          <div className="mx-auto mt-8 h-1 w-20 bg-brand-champagneGold" />
        </div>

        <div className="grid gap-16 md:grid-cols-3">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="flex flex-col items-center p-8 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:shadow-2xl hover:shadow-brand-champagneGold/10 transition-all duration-500 hover:border-brand-champagneGold/50 hover:-translate-y-2"
            >
              {/* Image Avatar */}
              <div className="mb-8 relative h-20 w-20 rounded-full border border-brand-champagneGold p-1">
                <div className="relative h-full w-full overflow-hidden rounded-full bg-brand-onyx">
                  <Image
                    src={t.image}
                    alt={t.author}
                    width={100}
                    height={100}
                    className="h-full w-full object-cover grayscale transition-all duration-300 group-hover:grayscale-0"
                  />
                </div>
              </div>

              <div className="mb-6 text-2xl text-brand-champagneGold font-serif">"</div>
              <p className="mb-8 font-serif text-lg italic leading-relaxed text-brand-platinum/90">
                {t.quote}
              </p>
              <div className="mt-auto">
                <h4 className="font-bold text-white tracking-widest uppercase text-sm">{t.author}</h4>
                <span className="text-xs text-brand-champagneGold">{t.role}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
