"use client";

import { ventures } from "@/data/ventures";
import { motion } from "framer-motion";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, CheckCircle2, ChevronRight } from "lucide-react";

export default function VenturePage({ params }: { params: { slug: string } }) {
    const venture = ventures.find((v) => v.slug === params.slug);

    if (!venture) {
        notFound();
    }

    return (
        <main className="bg-brand-appBlue text-white min-h-screen">
            {/* Cinematic Hero Section */}
            <section className="relative h-[85vh] w-full overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-[20s] ease-linear scale-100 hover:scale-105"
                    style={{ backgroundImage: `url(${venture.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-brand-appBlue via-brand-appBlue/90 to-brand-appBlue/40" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-appBlue via-transparent to-transparent" />

                <div className="relative z-10 container mx-auto px-8 md:px-16 lg:px-24 h-full flex items-center">
                    <div className="max-w-3xl">
                        <Link href="/" className="group mb-8 inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-white/60 hover:text-white transition-colors uppercase">
                            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
                            Back to Group
                        </Link>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="font-serif text-6xl md:text-8xl leading-none mb-8"
                        >
                            {venture.name}
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-2xl md:text-3xl font-light text-brand-platinum border-l-4 border-brand-appRed pl-6 italic"
                        >
                            &quot;{venture.tagline}&quot;
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Content Split Section */}
            <section className="relative py-32 overflow-hidden">
                <div className="container mx-auto px-8 md:px-16 lg:px-24">
                    <div className="grid lg:grid-cols-12 gap-20">
                        {/* Main Description */}
                        <div className="lg:col-span-7">
                            <span className="block text-xs font-bold tracking-[0.3em] text-brand-appRed uppercase mb-6">
                                Force of Excellence
                            </span>
                            <h2 className="font-serif text-4xl leading-tight mb-12 text-white">
                                Redefining the standards of <br />
                                <span className="text-gray-400 italic">{venture.name.split(" ")[1] || "Industry"}</span>.
                            </h2>
                            <div className="prose prose-lg prose-invert text-gray-300 font-light leading-relaxed">
                                <p>{venture.description}</p>
                                <p>
                                    Leveraging decades of expertise and cutting-edge technology to deliver solutions that are not just effective, but transformative.
                                </p>
                            </div>

                            <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-8">
                                {venture.stats.map((stat, idx) => (
                                    <div key={idx} className="p-6 border border-white/10 rounded-sm bg-white/5 backdrop-blur-sm">
                                        <div className="text-4xl font-serif text-white mb-2">{stat.value}</div>
                                        <div className="text-[10px] text-brand-appRed uppercase tracking-[0.2em]">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Capabilities Card */}
                        <div className="lg:col-span-5 relative">
                            <div className="sticky top-12 bg-white text-brand-appBlue p-10 md:p-12 rounded-sm shadow-2xl skew-y-1 transform transition-transform hover:skew-y-0 duration-500">
                                <h3 className="font-serif text-3xl mb-10 text-brand-appBlue flex items-center justify-between">
                                    Capabilities
                                    <div className="h-1 w-12 bg-brand-appRed" />
                                </h3>
                                <ul className="space-y-6">
                                    {venture.services.map((service, idx) => (
                                        <li key={idx} className="flex items-start gap-4 group cursor-default">
                                            <div className="mt-1.5 h-2 w-2 rounded-full bg-brand-appRed group-hover:scale-150 transition-transform" />
                                            <span className="text-lg font-medium text-brand-appBlue/80 group-hover:text-brand-appBlue transition-colors group-hover:translate-x-2 duration-300 block">
                                                {service}
                                            </span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="mt-12 pt-12 border-t border-brand-appBlue/10">
                                    <h4 className="font-bold text-xs tracking-widest uppercase mb-4 text-brand-appRed">Official Channels</h4>
                                    {venture.websiteLink && (
                                        <a
                                            href={venture.websiteLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-between w-full p-4 bg-brand-appBlue text-white hover:bg-brand-appRed transition-colors group"
                                        >
                                            <span className="text-sm font-bold uppercase tracking-widest">Visit Website</span>
                                            <ArrowUpRight size={18} className="group-hover:rotate-45 transition-transform" />
                                        </a>
                                    )}
                                </div>
                            </div>
                            {/* Decorative Underlay */}
                            <div className="absolute top-12 left-4 w-full h-full bg-brand-appRed/20 -z-10 rounded-sm skew-y-1 transform" />
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section - Minimal */}
            <section className="py-32 border-t border-white/10 bg-[#021830]">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="font-serif text-4xl md:text-5xl mb-12 text-white">Let&apos;s build the future together.</h2>
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-4 px-12 py-5 bg-white text-brand-appBlue font-bold tracking-[0.2em] uppercase hover:bg-brand-appRed hover:text-white transition-all duration-300 group"
                    >
                        <span>Initiate Partnership</span>
                        <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </section>
        </main>
    );
}
