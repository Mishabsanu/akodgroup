"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

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

const ProjectCard = ({ project, index }: { project: typeof projects[0], index: number }) => {
    const cardRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: cardRef,
        offset: ["start end", "end start"]
    });

    // Parallax effect for the image
    const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

    // Slight rotation/scale for a dynamic feel
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);

    return (
        <div ref={cardRef} className={`flex flex-col md:flex-row items-center gap-12 md:gap-24 relative ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>

            {/* Connector Dot - Pulses when in center of view */}
            <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ margin: "-50% 0px -50% 0px" }}
                className="absolute left-1/2 w-4 h-4 bg-white border-[2px] border-brand-appRed rounded-full -translate-x-1/2 z-20 shadow-[0_0_0_4px_rgba(239,242,246,1)] hidden md:block"
            />

            {/* Image Card with Parallax */}
            <div className="w-full md:w-1/2 relative group perspective-1000">
                <motion.div
                    style={{ scale }}
                    className="relative h-[400px] w-full overflow-hidden rounded-sm bg-brand-appBlue/5 shadow-2xl shadow-brand-richBlack/10"
                >
                    <motion.div
                        style={{ y, backgroundImage: `url(${project.image})` }}
                        className="absolute inset-[-10%] bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                    {/* Overlay Content */}
                    <div className="absolute bottom-0 left-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <span className="px-3 py-1 bg-brand-appRed text-white text-[10px] font-bold tracking-widest uppercase mb-4 inline-block">
                            {project.category}
                        </span>
                    </div>
                </motion.div>
                {/* Offset Border */}
                <div className="absolute -inset-4 border border-brand-richBlack/10 rounded-sm -z-10 group-hover:border-brand-appRed/30 transition-colors duration-500" />
            </div>

            {/* Text Content */}
            <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-full md:w-1/2 text-center md:text-left"
            >
                <h3 className="text-4xl font-serif text-brand-richBlack mb-4 group-hover:text-brand-appRed transition-colors">
                    {project.title}
                </h3>
                <p className="text-lg text-brand-richBlack/60 mb-8 max-w-sm mx-auto md:mx-0">
                    {project.description}
                </p>
                <div className="flex items-center justify-center md:justify-start gap-4">
                    <span className="text-4xl font-light text-brand-richBlack/20">
                        {project.year}
                    </span>
                    <div className="h-[1px] flex-1 bg-brand-richBlack/10 max-w-[100px]" />
                    <button className="text-brand-appRed font-bold text-xs uppercase tracking-widest hover:text-brand-richBlack transition-colors">
                        View Case
                    </button>
                </div>
            </motion.div>
        </div>
    );
};

const ActivitiesSection = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // Draw the line from 0% height to 100% height as we scroll
    const lineHeight = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "100%"]);
    const smoothLineHeight = useSpring(lineHeight, { stiffness: 100, damping: 30 });

    return (
        <section ref={containerRef} className="bg-white py-32 text-brand-richBlack relative">
            {/* Background Texture - Subtle Grey Grid/Noise on White */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(#000000 1px, transparent 1px), linear-gradient(90deg, #000000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

            {/* Extended Vertical Line from Previous Section */}
            <div className="absolute left-1/2 top-0 h-48 w-[1px] bg-brand-appRed/10 -translate-x-1/2 z-0" />

            <div className="container mx-auto px-6 md:px-20 lg:px-44">
                <div className="mb-32 text-center relative z-10">
                    <motion.h2
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        className="text-[120px] leading-none font-bold text-brand-richBlack/5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 uppercase tracking-widest whitespace-nowrap select-none pointer-events-none"
                    >
                        Our Work
                    </motion.h2>
                    <div className="relative">
                        <span className="block text-sm font-bold tracking-[0.3em] text-brand-appRed uppercase mb-4">
                            Recent Works
                        </span>
                        <h2 className="font-serif text-5xl md:text-6xl text-brand-richBlack">
                            Selected Projects
                        </h2>
                    </div>
                </div>

                <div className="relative">
                    {/* The Red Thread Connection Track (Faint) */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-brand-richBlack/5 -translate-x-1/2 hidden md:block" />

                    {/* The LIVE Drawing Red Thread */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2 hidden md:block overflow-hidden">
                        <motion.div
                            style={{ height: smoothLineHeight }}
                            className="w-full bg-brand-appRed shadow-[0_0_15px_rgba(214,8,9,0.8)]"
                        />
                    </div>

                    <div className="space-y-32 relative z-10">
                        {projects.map((project, index) => (
                            <ProjectCard key={index} project={project} index={index} />
                        ))}
                    </div>
                </div>
            </div>

            {/* Bottom Connector to Next Section */}
            <div className="absolute bottom-0 left-1/2 w-[1px] h-24 bg-brand-appRed/20 -translate-x-1/2 z-20" />
            <div className="absolute bottom-0 left-1/2 w-3 h-3 bg-brand-appRed rounded-full -translate-x-1/2 translate-y-1/2 z-30 shadow-lg shadow-brand-appRed/50" />
        </section >
    );
};
export default ActivitiesSection;
