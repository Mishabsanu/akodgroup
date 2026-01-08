"use client";

import { motion } from "framer-motion";

const projects = [
    {
        title: "Skyline Tower",
        category: "Infrastructure",
        year: "2024",
        description: "50-story commercial complex scaffolding.",
        image: "/BANNER/25.jpg"
    },
    {
        title: "Global ERP",
        category: "Technology",
        year: "2023",
        description: "Multi-national logistics platform.",
        image: "/BANNER/26.jpg"
    },
    {
        title: "City Safe",
        category: "Safety Audit",
        year: "2025",
        description: "Urban security infrastructure.",
        image: "/BANNER/12.jpg"
    },
];

const ActivitiesSection = () => {
    return (
        <section className="bg-brand-richBlack py-32 text-white">
            <div className="container mx-auto px-8 md:px-16 lg:px-24">
                <div className="mb-24 text-center">
                    <span className="block text-xs font-bold tracking-widest text-brand-champagneGold uppercase">
                        Recent Works
                    </span>
                    <h2 className="mx-auto mt-2 max-w-3xl font-serif text-5xl md:text-6xl text-brand-platinum">
                        Selected Projects
                    </h2>
                    <p className="mt-6 text-sm text-white/40">Global Impact • 2023-2025</p>
                </div>

                <div className="space-y-24">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className={`flex flex-col items-center gap-12 md:flex-row ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
                        >
                            <div className="relative h-[400px] w-full overflow-hidden bg-brand-richBlack md:w-1/2 rounded-lg border border-white/5 group-hover:border-brand-champagneGold transition-colors">
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
                                    style={{ backgroundImage: `url(${project.image})` }}
                                />
                                <div className="absolute inset-0 bg-black/30 hover:bg-black/10 transition-colors duration-500" />
                            </div>

                            <div className="w-full text-center md:w-1/2 md:text-left md:px-12">
                                <div className="mb-4 flex items-center justify-center gap-4 md:justify-start">
                                    <span className="text-xs font-bold text-brand-champagneGold uppercase">{project.category}</span>
                                    <span className="h-[1px] w-12 bg-white/10" />
                                    <span className="text-xs text-brand-platinum/50">{project.year}</span>
                                </div>
                                <h3 className="mb-6 font-serif text-4xl md:text-5xl group-hover:text-brand-champagneGold transition-colors duration-300 cursor-pointer">
                                    {project.title}
                                </h3>
                                <p className="mx-auto max-w-md text-lg text-brand-platinum/70 font-light leading-relaxed md:mx-0">
                                    {project.description}
                                    <span className="block mt-4 text-sm font-bold text-brand-champagneGold uppercase tracking-widest opacity-100 transform translate-y-0 cursor-pointer hover:text-white transition-colors">
                                        View Case Study
                                    </span>
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ActivitiesSection;
