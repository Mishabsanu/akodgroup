"use client";

import { motion } from "framer-motion";

export default function ContactPage() {
    return (
        <main className="bg-black text-white min-h-screen pt-20">
            <section className="py-24 container mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto"
                >
                    <span className="block mb-6 text-sm font-bold tracking-[0.3em] text-brand-gold uppercase">
                        Concierge Services
                    </span>
                    <h1 className="mb-16 font-serif text-5xl md:text-6xl">
                        Start a Conversation
                    </h1>

                    <div className="grid gap-16 md:grid-cols-2 text-left bg-neutral-900/50 border border-white/10 p-12 md:p-16">
                        {/* Contact Info */}
                        <div className="flex flex-col justify-center">
                            <h3 className="mb-8 font-serif text-3xl text-white">Global Headquarters</h3>
                            <div className="space-y-8 text-gray-400 font-light">
                                <div>
                                    <span className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Address</span>
                                    <p>Level 35, The Akod Tower<br />Financial District, Dubai, UAE</p>
                                </div>
                                <div>
                                    <span className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Email</span>
                                    <p className="text-white">concierge@akodgroup.com</p>
                                </div>
                                <div>
                                    <span className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Phone</span>
                                    <p>+971 4 123 4567</p>
                                </div>
                            </div>
                        </div>

                        {/* Form */}
                        <div>
                            <form className="space-y-6">
                                <div>
                                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Name</label>
                                    <input type="text" className="w-full bg-black border border-white/20 p-4 text-white focus:border-brand-gold outline-none transition-colors" placeholder="Your Name" />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Email</label>
                                    <input type="email" className="w-full bg-black border border-white/20 p-4 text-white focus:border-brand-gold outline-none transition-colors" placeholder="email@company.com" />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Message</label>
                                    <textarea rows={4} className="w-full bg-black border border-white/20 p-4 text-white focus:border-brand-gold outline-none transition-colors" placeholder="How can we assist you?"></textarea>
                                </div>
                                <button className="w-full bg-brand-gold text-black font-bold uppercase tracking-widest py-4 hover:bg-white transition-colors">
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </motion.div>
            </section>
        </main>
    );
}
