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
        <section className="bg-brand-richBlack py-32 text-white">
            <div className="container mx-auto px-8 md:px-16 lg:px-24">
                <div className="mb-24 flex flex-col items-center justify-center text-center">
                    <span className="mb-4 block text-sm font-bold tracking-[0.2em] text-brand-champagneGold uppercase">
                        Our Ecosystem
                    </span>
                    <h2 className="font-serif text-4xl font-light md:text-5xl">
                        The <span className="text-brand-platinum">Akod</span> Portfolio
                    </h2>
                </div>

                <div className="grid h-auto gap-4 md:h-[600px] md:grid-cols-4">
                    {companies.map((company, index) => (
                        <motion.div
                            key={index}
                            className="group relative flex h-[400px] md:h-full flex-col justify-end overflow-hidden border-r border-white/5 bg-brand-richBlack p-8 transition-all duration-700 hover:flex-[2]"
                        >
                            {/* Background Image */}
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110 opacity-40 group-hover:opacity-60"
                                style={{ backgroundImage: `url(${company.image})` }}
                            />

                            {/* Gradients */}
                            <div className="absolute inset-0 bg-gradient-to-t from-brand-richBlack via-brand-richBlack/80 to-transparent" />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />

                            {/* Gold Border on Hover */}
                            <div className="absolute top-0 left-0 w-full h-[1px] bg-brand-champagneGold opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                            <div className="relative z-10 transition-transform duration-500 group-hover:-translate-y-4">
                                <div className="mb-4 flex items-center justify-between">
                                    <span className="text-xs font-bold tracking-widest text-brand-platinum/70 group-hover:text-brand-champagneGold transition-colors uppercase">
                                        {company.category}
                                    </span>
                                    <ArrowUpRight className="h-5 w-5 text-brand-champagneGold opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                                </div>
                                <h3 className="mb-2 font-serif text-3xl font-light leading-none">
                                    {company.name.split(" ")[0]}<br />
                                    <span className="font-bold text-white group-hover:text-brand-platinum">{company.name.split(" ")[1]}</span>
                                </h3>
                                <p className="max-w-[200px] text-sm text-brand-platinum/70 opacity-0 transition-opacity duration-500 delay-100 group-hover:opacity-100">
                                    {company.description}
                                </p>

                                <Link
                                    href={company.link}
                                    className="absolute inset-0 z-20"
                                    aria-label={`Visit ${company.name}`}
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ChildCompaniesSection;
