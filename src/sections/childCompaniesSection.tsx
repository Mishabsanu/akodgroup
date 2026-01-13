"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const companies = [
    {
        name: "Skode Safe",
        category: "Safety",
        description: "Premium safety protocols.",
        image: "/BANNER/15.jpg",
        link: "/ventures/skode-safe",
    },
    {
        name: "Akod Scaffolding",
        category: "Infrastructure",
        description: "Industrial strength systems.",
        image: "/BANNER/20.jpg",
        link: "/ventures/akod-scaffolding",
    },
    {
        name: "Akod Tech",
        category: "Technology",
        description: "Digital transformation.",
        image: "/BANNER/18.jpg",
        link: "/ventures/akod-tech",
    },
    {
        name: "Akod Heights",
        category: "Real Estate",
        description: "Luxury developments.",
        image: "/BANNER/21.jpg",
        link: "/ventures/akod-heights",
    },
];

const ChildCompaniesSection = () => {
    return (
        <section className="bg-white py-32 text-brand-richBlack relative overflow-hidden">
            {/* Background Texture - Subtle Grey Grid/Noise on White */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(#000000 1px, transparent 1px), linear-gradient(90deg, #000000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

            {/* Global Red Thread - Connecting About to ChildCompanies */}
            <div className="absolute left-1/2 top-0 h-32 w-[1px] bg-brand-appRed/10 -translate-x-1/2 z-0" />

            <div className="container mx-auto px-6 md:px-16 lg:px-32 relative z-10">
                <div className="mb-24 flex flex-col items-center text-center max-w-4xl mx-auto">
                    <span className="mb-6 block text-sm font-bold tracking-[0.3em] text-brand-appRed uppercase">
                        Our Ecosystem
                    </span>
                    <h2 className="font-serif text-4xl font-light md:text-6xl text-brand-richBlack mb-8">
                        The <span className="text-brand-appRed font-medium">Akod</span> Portfolio
                    </h2>
                    <p className="text-brand-richBlack/60 max-w-xl text-lg font-light leading-relaxed">
                        Diversified excellence across four key pillars of industry. Building the future through specialized verticals.
                    </p>
                </div>

                <div className="flex flex-col md:flex-row h-[800px] md:h-[500px] gap-2">
                    {companies.map((company, index) => (
                        <motion.div
                            key={index}
                            className="group relative flex-1 overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] hover:flex-[3] cursor-pointer rounded-lg border border-brand-richBlack/5"
                        >
                            {/* Background Image */}
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105 saturate-0 group-hover:saturate-100"
                                style={{ backgroundImage: `url(${company.image})` }}
                            />

                            {/* Overlays - Lightened for Light Theme or kept dark for contrast? Kept dark for text readability over images */}
                            <div className="absolute inset-0 bg-brand-richBlack/40 group-hover:bg-brand-richBlack/20 transition-colors duration-500" />
                            <div className="absolute inset-0 bg-gradient-to-t from-brand-richBlack via-transparent to-transparent opacity-90" />

                            {/* Content */}
                            <div className="absolute inset-0 p-8 flex flex-col justify-end">
                                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    <h3 className="text-2xl md:text-3xl font-serif text-white mb-2 relative inline-block">
                                        {company.name}
                                        <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-brand-appRed transition-all duration-500 group-hover:w-full" />
                                    </h3>

                                    <div className="max-h-0 overflow-hidden group-hover:max-h-32 transition-all duration-700 delay-100">
                                        <p className="text-white/80 mt-4 text-sm font-light">
                                            {company.description}
                                        </p>
                                        <Link href={company.link} className="inline-flex items-center gap-2 mt-4 text-brand-appRed text-xs font-bold uppercase tracking-widest hover:text-white transition-colors">
                                            Explorer Venture <ArrowUpRight className="w-4 h-4" />
                                        </Link>
                                    </div>
                                </div>
                                <span className="absolute top-8 right-8 text-6xl font-bold text-white/5 group-hover:text-white/10 transition-colors">
                                    0{index + 1}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Bottom Transition - Seamless White */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent z-10" />

        </section>
    );
};
export default ChildCompaniesSection;
