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
    <section className="relative overflow-hidden bg-white py-32 text-brand-richBlack">
      {/* Background Decor - Industrial Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[400px] font-bold leading-none text-brand-richBlack/5 font-serif select-none pointer-events-none opacity-5">
        A
      </div>

      {/* Global Red Thread - Connecting Hero to About */}
      <div className="absolute left-1/2 top-0 h-full w-[1px] bg-brand-appRed/10 -translate-x-1/2 z-0" />

      <div className="container relative z-10 mx-auto px-6">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mb-12 flex flex-col items-center"
          >
            <span className="mb-6 block text-sm font-bold tracking-[0.3em] text-brand-appRed uppercase">
              The Parent Company
            </span>
            <h2 className="font-serif text-5xl leading-tight md:text-6xl lg:text-7xl text-brand-richBlack mb-8">
              Engineering <span className="italic text-brand-appRed">Trust.</span> <br />
              Constructing <span className="text-brand-appRed">Legacy.</span>
            </h2>
            <div className="h-1 w-24 bg-brand-appRed rounded-full mb-8" />
            <p className="text-lg md:text-xl leading-relaxed text-brand-richBlack/70 font-light max-w-3xl">
              Akod Group is the silent force behind the world&apos;s most ambitious
              structures. From scaffolding that kisses the clouds to digital ecosystems that power economies.
            </p>
          </motion.div>

          {/* Stats Grid - Light Theme */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mt-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + (index * 0.1) }}
                className="group relative overflow-hidden p-10 rounded-sm bg-white border border-brand-richBlack/10 shadow-lg hover:shadow-2xl hover:shadow-brand-richBlack/5 transition-all duration-500 hover:-translate-y-1"
              >
                <div className="absolute right-0 top-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <div className="w-20 h-20 rounded-full border-2 border-brand-appRed/30 dashed" />
                </div>

                <div className="flex flex-col items-center justify-center">
                  <span className="text-6xl md:text-7xl font-serif text-brand-richBlack mb-2 group-hover:text-brand-appRed transition-colors duration-500">{stat.value}<span className="text-3xl text-brand-appRed align-top">+</span></span>
                  <h4 className="text-brand-richBlack/60 uppercase tracking-[0.2em] text-xs font-bold">{stat.label}</h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutSection;
