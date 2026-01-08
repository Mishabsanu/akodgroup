"use client";

import { motion } from "framer-motion";
import { FaGlobe, FaHandshake, FaLightbulb } from "react-icons/fa";

const values = [
    {
        icon: FaGlobe,
        title: "Global Vision",
        description: "Thinking beyond borders to deliver world-class infrastructure.",
    },
    {
        icon: FaHandshake,
        title: "Integrity",
        description: "Building trust through transparency and unwavering ethics.",
    },
    {
        icon: FaLightbulb,
        title: "Innovation",
        description: "Pioneering new technologies for a sustainable future.",
    },
];

export default function AboutPage() {
    return (
        <main className="bg-black text-white min-h-screen pt-20">
            {/* Hero Section - Centered */}
            <section className="relative py-32 overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center opacity-20" />
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="block mb-6 text-sm font-bold tracking-[0.3em] text-brand-gold uppercase">
                            The Akod Legacy
                        </span>
                        <h1 className="mb-8 font-serif text-5xl md:text-7xl leading-tight">
                            Building the Future, <br /> Preserving the Past.
                        </h1>
                        <p className="mx-auto max-w-2xl text-xl text-gray-400 font-light leading-relaxed">
                            Founded on the principles of precision and excellence, Akod Group has grown from a local scaffolding provider to a global conglomerate spanning technology, real estate, and industrial safety.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Values Section - Centered */}
            <section className="py-24 bg-neutral-900 text-center">
                <div className="container mx-auto px-6">
                    <h2 className="mb-16 font-serif text-4xl text-white">Our Core Values</h2>
                    <div className="grid gap-12 md:grid-cols-3 max-w-5xl mx-auto">
                        {values.map((val, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.2 }}
                                className="flex flex-col items-center"
                            >
                                <div className="mb-6 h-16 w-16 rounded-full border border-brand-gold/30 flex items-center justify-center text-brand-gold">
                                    <val.icon size={24} />
                                </div>
                                <h3 className="mb-4 text-xl font-serif text-white">{val.title}</h3>
                                <p className="text-gray-400 font-light">{val.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Leadership Note - Centered */}
            <section className="py-32 bg-brand-background text-center">
                <div className="container mx-auto px-6">
                    <div className="mx-auto max-w-3xl border border-white/10 p-12 relative">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-background px-4 text-brand-gold text-4xl font-serif">"</div>
                        <p className="font-serif text-2xl italic leading-relaxed text-gray-300 mb-8">
                            We don't just construct buildings or write code; we engineer ecosystems where businesses and communities can thrive. Excellence is not an aspiration, it is our baseline.
                        </p>
                        <div>
                            <h4 className="font-bold text-white uppercase tracking-widest text-sm">Mr. Chairman</h4>
                            <span className="text-xs text-gray-500">Founder, Akod Group</span>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
