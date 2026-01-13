"use client";
import React from "react";
import { Play, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function BrandStorySection() {
    return (
        <section className="relative h-[750px] w-full bg-brand-appBlue/5 overflow-hidden group">
            {/* Background Texture - Subtle Grey Grid/Noise on White */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(#000000 1px, transparent 1px), linear-gradient(90deg, #000000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

            {/* Global Red Thread - Connecting Testimonials to Brand Story */}
            <div className="absolute left-1/2 top-0 h-full w-[1px] bg-brand-appRed/10 -translate-x-1/2 z-0" />

            <div className="relative container mx-auto h-full px-8 md:px-16 lg:px-24 flex items-center justify-center text-center">
                <div className="max-w-3xl flex flex-col items-center">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-richBlack/10 bg-brand-richBlack/5 mb-8 animate-fade-in-up">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-appRed animate-pulse"></span>
                        <span className="text-[10px] uppercase tracking-[0.3em] text-brand-richBlack/70">The Akod Philosophy</span>
                    </div>

                    {/* Headline */}
                    <h2 className="text-5xl md:text-7xl font-serif text-brand-richBlack leading-[1.1] mb-8 animate-fade-in-up delay-100">
                        Mastery lies in <br />
                        <span className="italic text-brand-appRed">the details.</span>
                    </h2>

                    {/* Description */}
                    <p className="text-brand-richBlack/60 text-lg md:text-xl font-light leading-relaxed max-w-2xl mb-12 animate-fade-in-up delay-200">
                        From the robust frameworks of industrial scaffolding to the delicate code of digital ecosystems. We blend engineering precision with visionary luxury to create legacies that stand the test of time.
                    </p>

                    {/* Actions */}
                    <div className="flex flex-col md:flex-row items-center gap-8 animate-fade-in-up delay-300">
                        {/* Magnetic Play Button */}
                        <button className="group relative flex items-center gap-4">
                            <div className="relative w-16 h-16 rounded-full border border-brand-richBlack/10 flex items-center justify-center transition-all duration-300 group-hover:bg-brand-appRed group-hover:border-brand-appRed group-hover:scale-110">
                                <span className="absolute inset-0 rounded-full border border-brand-appRed/20 animate-ping opacity-20"></span>
                                <Play className="w-5 h-5 text-brand-richBlack fill-brand-richBlack transition-colors group-hover:fill-white group-hover:text-white" />
                            </div>
                            <span className="text-xs uppercase tracking-[0.2em] text-brand-richBlack group-hover:text-brand-appRed transition-colors">
                                Watch the Film
                            </span>
                        </button>

                        <div className="h-px w-12 bg-brand-richBlack/20 hidden md:block"></div>

                        <Link href="/about" className="group flex items-center gap-2 text-brand-richBlack/70 hover:text-brand-appRed transition-colors">
                            <span className="text-xs uppercase tracking-[0.2em] relative">
                                Our Journey
                                <span className="absolute -bottom-1 left-0 w-0 h-px bg-brand-appRed transition-all duration-300 group-hover:w-full"></span>
                            </span>
                            <ArrowUpRight className="w-4 h-4 text-brand-appRed" />
                        </Link>
                    </div>
                </div>
            </div>

            {/* Footer Details - Bottom Right Stats */}
            <div className="absolute bottom-0 right-0 p-12 hidden md:block">
                <div className="flex flex-col items-end gap-1 text-right">
                    <span className="text-4xl text-brand-richBlack/10 font-serif">2012</span>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-brand-richBlack/40">Established</span>
                </div>
            </div>

            {/* Soft fade to footer if needed, or sharp cut-off. White to Navy Footer transition is classic. */}
            <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent z-10" />

        </section>
    );
}
