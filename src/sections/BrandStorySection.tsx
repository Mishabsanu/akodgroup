"use client";
import React from "react";
import { Play, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function BrandStorySection() {
    return (
        <section className="relative h-[750px] w-full bg-brand-richBlack overflow-hidden group">
            {/* Background Image with Slow Pan - Using a high-end architectural/technical image */}
            <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-[20s] ease-linear scale-100 group-hover:scale-110"
                style={{ backgroundImage: "url('/BANNER/14.jpg')" }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
                <div className="absolute inset-0 bg-black/40 mix-blend-overlay"></div>
                {/* Seamless Fade from Top */}
                <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-brand-richBlack to-transparent z-10" />
                {/* Seamless Fade to Footer */}
                <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-brand-richBlack to-transparent z-10" />
            </div>

            <div className="relative container mx-auto h-full px-8 md:px-16 lg:px-24 flex items-center">
                <div className="max-w-2xl">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8 animate-fade-in-up">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-champagneGold animate-pulse"></span>
                        <span className="text-[10px] uppercase tracking-[0.3em] text-white/90">The Akod Philosophy</span>
                    </div>

                    {/* Headline */}
                    <h2 className="text-5xl md:text-7xl font-serif text-white leading-[1.1] mb-8 animate-fade-in-up delay-100">
                        Mastery lies in <br />
                        <span className="italic text-brand-champagneGold opacity-90">the details.</span>
                    </h2>

                    {/* Description */}
                    <p className="text-brand-platinum/80 text-lg font-light leading-relaxed max-w-lg mb-12 animate-fade-in-up delay-200 border-l border-brand-champagneGold/30 pl-6 ml-1">
                        From the robust frameworks of industrial scaffolding to the delicate code of digital ecosystems. We blend engineering precision with visionary luxury to create legacies that stand the test of time.
                    </p>

                    {/* Actions */}
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-8 animate-fade-in-up delay-300">
                        {/* Magnetic Play Button */}
                        <button className="group relative flex items-center gap-4">
                            <div className="relative w-16 h-16 rounded-full border border-brand-champagneGold/30 flex items-center justify-center transition-all duration-300 group-hover:bg-brand-champagneGold group-hover:border-brand-champagneGold group-hover:scale-110">
                                <span className="absolute inset-0 rounded-full border border-brand-champagneGold/20 animate-ping opacity-20"></span>
                                <Play className="w-5 h-5 text-white fill-white transition-colors group-hover:fill-black group-hover:text-black" />
                            </div>
                            <span className="text-xs uppercase tracking-[0.2em] text-white group-hover:text-brand-champagneGold transition-colors">
                                Watch the Film
                            </span>
                        </button>

                        <div className="h-px w-12 bg-white/20 hidden md:block"></div>

                        <Link href="/about" className="group flex items-center gap-2 text-white/70 hover:text-white transition-colors">
                            <span className="text-xs uppercase tracking-[0.2em] relative">
                                Our Journey
                                <span className="absolute -bottom-1 left-0 w-0 h-px bg-brand-champagneGold transition-all duration-300 group-hover:w-full"></span>
                            </span>
                            <ArrowUpRight className="w-4 h-4 text-brand-champagneGold" />
                        </Link>
                    </div>
                </div>
            </div>

            {/* Footer Details - Bottom Right Stats */}
            <div className="absolute bottom-0 right-0 p-12 hidden md:block">
                <div className="flex flex-col items-end gap-1 text-right">
                    <span className="text-4xl text-brand-platinum/20 font-serif">2012</span>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-white/40">Established</span>
                </div>
            </div>
        </section>
    );
}
