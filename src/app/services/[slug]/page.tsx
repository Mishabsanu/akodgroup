"use client";

import { services } from "@/data/services";
import { motion } from "framer-motion";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

export default function ServicePage({ params }: { params: { slug: string } }) {
    const service = services.find((s) => s.slug === params.slug);

    if (!service) {
        notFound();
    }

    return (
        <main className="bg-brand-appBlue text-white min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[60vh] w-full overflow-hidden flex items-center justify-center">
                {/* Background Image */}
                {service.banner ? (
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url(${service.banner})` }}
                    />
                ) : (
                    <div className="absolute inset-0 bg-brand-appBlue" />
                )}
                <div className="absolute inset-0 bg-brand-appBlue/80 mix-blend-multiply" />

                <div className="container px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <Link href="/" className="mb-8 inline-flex items-center gap-2 text-sm font-bold tracking-widest text-brand-appRed uppercase hover:text-white transition-colors">
                            <ArrowLeft size={16} /> Back to Home
                        </Link>
                        <span className="block mb-4 text-xs font-bold tracking-[0.3em] text-gray-400 uppercase">
                            Expertise
                        </span>
                        <h1 className="mb-6 font-serif text-4xl md:text-6xl max-w-4xl mx-auto leading-tight">
                            {service.title}
                        </h1>
                    </motion.div>
                </div>
            </section>

            {/* Overview - WHITE Background */}
            <section className="py-24 bg-white text-brand-appBlue">
                <div className="container mx-auto px-6 max-w-4xl text-center">
                    <h2 className="font-serif text-3xl mb-8 text-brand-appRed">Our Approach</h2>
                    <p className="text-xl text-brand-appBlue font-light leading-relaxed mb-12">
                        {service.text}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                        {service.modules.map((mod, idx) => (
                            <div key={idx} className="flex items-center gap-4 bg-white p-4 border border-brand-appBlue/10 rounded-lg shadow-sm">
                                <CheckCircle2 className="text-brand-appRed shrink-0" size={20} />
                                <span className="text-sm text-brand-appBlue">{mod}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects Showcase - BLUE Background */}
            {service.exampleProjects && service.exampleProjects.length > 0 && (
                <section className="py-24 bg-brand-appBlue">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-16">
                            <span className="block text-xs font-bold tracking-widest text-brand-appRed uppercase">Case Studies</span>
                            <h2 className="mt-4 font-serif text-4xl text-white">Featured Implementations</h2>
                        </div>

                        <div className="grid gap-12 md:grid-cols-3">
                            {service.exampleProjects.map((project, idx) => (
                                <div key={idx} className="group">
                                    <div className="relative h-64 w-full overflow-hidden rounded-lg bg-[#05325e] mb-6 border border-white/5 group-hover:border-brand-appRed/30 transition-colors">
                                        {/* Placeholder for project image */}
                                        <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-serif text-lg italic">
                                            Project Image {idx + 1}
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-serif text-white mb-2 group-hover:text-brand-appRed transition-colors">{project.title}</h3>
                                    <p className="text-sm text-gray-400 leading-relaxed">{project.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* CTA */}
            <section className="py-20 bg-[#05325e] border-t border-brand-appRed/30 text-center">
                <div className="container mx-auto px-6">
                    <h2 className="font-serif text-3xl mb-8 text-white">Ready to elevate your {service.title}?</h2>
                    <Link
                        href="/contact"
                        className="inline-block px-10 py-4 bg-brand-appRed text-white font-bold tracking-widest uppercase hover:bg-white hover:text-brand-appBlue transition-colors"
                    >
                        Enquire Now
                    </Link>
                </div>
            </section>
        </main>
    );
}
