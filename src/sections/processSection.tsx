"use client";

import { motion } from "framer-motion";
import { ClipboardCheck, HardHat, Rocket, Trophy } from "lucide-react";

const steps = [
  {
    icon: ClipboardCheck,
    title: "Strategic Planning",
    description: "Every masterpiece begins with a blueprint. We analyze, optimize, and strategize.",
  },
  {
    icon: HardHat,
    title: "Precision Execution",
    description: "Deployed by world-class experts using state-of-the-art technology.",
  },
  {
    icon: Trophy,
    title: "Quality Assurance",
    description: "Rigorous testing protocols ensure excellence is not just a goal, but a standard.",
  },
  {
    icon: Rocket,
    title: "Global Delivery",
    description: "Seamless handover and impact scaling across international markets.",
  },
];

const ProcessSection = () => {
  return (
    <section className="bg-brand-richBlack py-32 text-white overflow-hidden relative">
      <div className="container mx-auto px-6 text-center">
        <div className="mb-20">
          <span className="block text-xs font-bold tracking-widest text-brand-champagneGold uppercase">
            Methodology
          </span>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl text-brand-platinum">
            The Art of Execution
          </h2>
        </div>

        <div className="relative">
          {/* Gold Gradient Line */}
          <div className="absolute top-1/2 left-0 hidden w-full -translate-y-1/2 border-t border-brand-champagneGold/20 lg:block" />

          <div className="grid gap-12 lg:grid-cols-4">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.8, ease: "easeOut" }}
                className="group relative flex flex-col items-center p-8 bg-brand-onyx border border-white/5 shadow-2xl rounded-sm hover:border-brand-champagneGold/50 transition-all duration-700 hover:-translate-y-4"
              >
                <div className="relative z-10 mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-black border border-brand-champagneGold/30 text-brand-champagneGold shadow-[0_0_30px_rgba(212,175,55,0.1)] transition-transform duration-500 group-hover:scale-110 group-hover:bg-brand-champagneGold group-hover:text-black">
                  <step.icon size={32} strokeWidth={1.5} />
                </div>
                <h3 className="mb-4 font-serif text-2xl text-white group-hover:text-brand-champagneGold transition-colors">{step.title}</h3>
                <p className="text-sm text-brand-platinum/60 leading-relaxed max-w-[200px] group-hover:text-white transition-colors">
                  {step.description}
                </p>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-brand-champagneGold/0 transition-colors duration-700 group-hover:bg-brand-champagneGold/5 rounded-sm pointer-events-none" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
