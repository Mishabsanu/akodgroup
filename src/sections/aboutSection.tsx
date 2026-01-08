"use client";
import React from "react";
import { motion } from "framer-motion";

const stats = [
  { label: "Years of Excellence", value: 12 },
  { label: "Global Projects", value: 150 },
  { label: "Industry Awards", value: 25 },
];

const AboutSection = () => {
  return (
    <section className="relative overflow-hidden bg-brand-appBlue py-32 text-white">
      {/* Red Accent Line */}
      <div className="absolute top-0 left-1/2 h-24 w-[1px] -translate-x-1/2 bg-gradient-to-b from-brand-appRed to-transparent opacity-80" />

      <div className="container relative z-10 mx-auto px-6">
        <div className="mx-auto max-w-4xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-8 text-sm font-bold tracking-[0.3em] text-brand-appRed uppercase"
          >
            The Parent Company
          </motion.h2>

          <motion.h3
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-12 font-serif text-4xl leading-tight md:text-6xl lg:text-7xl"
          >
            Engineering <span className="text-gray-400 italic">Trust.</span> <br />
            Constructing <span className="text-brand-appRed">Legacy.</span>
          </motion.h3>

          <div className="mx-auto mb-16 h-[1px] w-24 bg-white/20" />

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="mx-auto mb-20 max-w-2xl text-lg font-light leading-relaxed text-gray-300 md:text-xl"
          >
            Akod Group is the silent force behind the world&apos;s most ambitious
            structures. From scaffolding that kisses the clouds to digital ecosystems that power economies.
          </motion.p>
        </div>

        {/* Stats Grid - Red Accents */}
        <div className="grid grid-cols-1 gap-12 border-t border-brand-appRed/20 pt-16 md:grid-cols-3">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="text-center"
            >
              <div className="mb-2 font-serif text-6xl font-medium text-white md:text-7xl">
                {stat.value}+
              </div>
              <div className="text-xs font-bold tracking-widest text-brand-appRed uppercase">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default AboutSection;
