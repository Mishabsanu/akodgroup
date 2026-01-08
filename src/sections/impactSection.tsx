"use client";

import { motion } from "framer-motion";

const stats = [
    { label: "Countries Served", value: "12" },
    { label: "Active Projects", value: "45+" },
    { label: "Team Strength", value: "250+" },
    { label: "Client Retention", value: "98%" },
];

const ImpactSection = () => {
    return (
        <section className="bg-brand-appBlue py-32 text-white relative overflow-hidden">
            {/* Background Map Effect */}
            <div className="absolute inset-0 opacity-10 pointer-events-none mix-blend-overlay">
                <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[600px] bg-no-repeat bg-contain bg-center"
                    style={{ backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/World_map_blank_without_borders.svg/2000px-World_map_blank_without_borders.svg.png')" }}
                />
                {/* Glowing Hotspots */}
                <div className="absolute top-[30%] left-[20%] w-2 h-2 bg-brand-appRed rounded-full animate-ping" />
                <div className="absolute top-[40%] left-[50%] w-3 h-3 bg-brand-appRed rounded-full animate-ping delay-700" />
                <div className="absolute top-[35%] left-[80%] w-2 h-2 bg-brand-appRed rounded-full animate-ping delay-300" />
            </div>

            <div className="container px-6 relative z-10">
                <div className="flex flex-col md:flex-row items-center justify-between mb-20">
                    <div className="text-center md:text-left mb-10 md:mb-0">
                        <span className="block text-xs font-bold tracking-widest text-brand-appRed uppercase">
                            Global Reach
                        </span>
                        <h2 className="mt-2 font-serif text-5xl md:text-6xl text-white">
                            Impact Across <br /> Borders
                        </h2>
                    </div>
                    <div className="md:max-w-md text-center md:text-right text-gray-300 font-light">
                        <p>
                            From the bustling infrastructure of Mumbai to the digital hubs of Dubai and London,
                            Akod Group delivers excellence without boundaries.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-12 border-t border-brand-appRed/20 pt-12">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="text-center md:text-left"
                        >
                            <div className="text-4xl md:text-6xl font-serif text-white mb-2">
                                {stat.value}
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

export default ImpactSection;
