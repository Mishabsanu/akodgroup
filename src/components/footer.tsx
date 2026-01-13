"use client";

import { ArrowUpRight, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-appBlue/5 text-brand-richBlack pt-32 pb-12 relative overflow-hidden">
      {/* Background Texture - Subtle Grey Grid/Noise on White */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(#000000 1px, transparent 1px), linear-gradient(90deg, #000000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      {/* Global Red Thread - Termination in Footer */}
      <div className="absolute left-1/2 top-0 h-full w-[1px] bg-brand-appRed/10 -translate-x-1/2 z-0" />

      {/* Massive Watermark */}
      <div className="absolute -bottom-20 -right-20 text-[300px] leading-none font-bold font-serif text-brand-richBlack/[0.02] select-none pointer-events-none">
        AKOD
      </div>

      <div className="container mx-auto px-6 md:px-16 lg:px-32 relative z-10">
        {/* Top Section - CTA */}
        <div className="mb-24 flex flex-col md:flex-row items-end justify-between border-b border-brand-richBlack/10 pb-16">
          <div className="max-w-3xl">
            <h2 className="font-serif text-5xl md:text-7xl mb-8 leading-[0.9] tracking-tight text-brand-richBlack">
              Building the <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-appRed to-brand-richBlack italic pr-4">future.</span>
            </h2>
            <Link href="/contact" className="inline-flex items-center gap-4 text-xs font-bold tracking-[0.2em] uppercase text-brand-richBlack hover:text-brand-appRed transition-colors group">
              Start a conversation
              <span className="h-8 w-8 border border-brand-richBlack/20 rounded-full flex items-center justify-center group-hover:bg-brand-appRed group-hover:border-brand-appRed group-hover:text-white transition-all duration-300">
                <ArrowUpRight size={14} />
              </span>
            </Link>
          </div>
          <div className="mt-16 md:mt-0 w-full md:w-auto">
            <p className="text-[10px] text-brand-appBlue mb-6 uppercase tracking-[0.2em] font-bold">Newsletter</p>
            <div className="flex border-b border-brand-richBlack/20 pb-4 focus-within:border-brand-appRed transition-colors duration-500">
              <input
                type="email"
                placeholder="Email Address"
                className="bg-transparent outline-none w-full md:w-80 placeholder-brand-richBlack/30 text-brand-richBlack focus:placeholder-brand-richBlack/50 transition-colors"
              />
              <button className="text-brand-richBlack font-bold uppercase text-[10px] tracking-widest hover:text-brand-appRed transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Middle Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
          <div className="space-y-8">
            <Link href="/" className="group flex items-center gap-3">
              <div className="h-12 w-12 bg-brand-appRed rounded-none flex items-center justify-center text-white font-bold text-2xl font-serif">
                A
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-serif font-medium tracking-widest text-brand-richBlack uppercase">
                  Akod
                </span>
                <span className="text-[0.6rem] font-medium tracking-[0.4em] text-brand-appRed uppercase">
                  Group
                </span>
              </div>
            </Link>
            <p className="text-brand-richBlack/60 font-light leading-relaxed text-sm max-w-xs">
              Redefining global excellence in infrastructure, technology, and safety through visionary engineering.
            </p>
            <div className="flex gap-4">
              {[Linkedin, Twitter, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="h-10 w-10 flex items-center justify-center rounded-full border border-brand-richBlack/10 text-brand-richBlack/40 hover:bg-brand-appRed hover:border-brand-appRed hover:text-white transition-all duration-300 hover:-translate-y-1">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-[10px] tracking-[0.2em] uppercase mb-10 text-brand-richBlack/40">Ventures</h4>
            <ul className="space-y-4 text-brand-richBlack/70 font-light text-sm">
              <li><Link href="/ventures/skode-safe" className="hover:text-brand-appRed transition-colors flex items-center gap-2 group"><span className="w-0 h-[1px] bg-brand-appRed transition-all group-hover:w-4" /> Skode Safe</Link></li>
              <li><Link href="/ventures/akod-scaffolding" className="hover:text-brand-appRed transition-colors flex items-center gap-2 group"><span className="w-0 h-[1px] bg-brand-appRed transition-all group-hover:w-4" /> Akod Scaffolding</Link></li>
              <li><Link href="/ventures/akod-tech" className="hover:text-brand-appRed transition-colors flex items-center gap-2 group"><span className="w-0 h-[1px] bg-brand-appRed transition-all group-hover:w-4" /> Akod Tech</Link></li>
              <li><Link href="/ventures/akod-heights" className="hover:text-brand-appRed transition-colors flex items-center gap-2 group"><span className="w-0 h-[1px] bg-brand-appRed transition-all group-hover:w-4" /> Akod Heights</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-[10px] tracking-[0.2em] uppercase mb-10 text-brand-richBlack/40">Quick Links</h4>
            <ul className="space-y-4 text-brand-richBlack/70 font-light text-sm">
              <li><Link href="/about" className="hover:text-brand-appRed transition-colors">The Group</Link></li>
              <li><Link href="/services" className="hover:text-brand-appRed transition-colors">Expertise</Link></li>
              <li><Link href="/contact" className="hover:text-brand-appRed transition-colors">Concierge</Link></li>
              <li><Link href="/careers" className="hover:text-brand-appRed transition-colors">Careers</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-[10px] tracking-[0.2em] uppercase mb-10 text-brand-richBlack/40">Contact</h4>
            <ul className="space-y-6 text-brand-richBlack/70 font-light text-sm">
              <li className="flex items-start gap-4 group">
                <MapPin size={18} className="text-brand-appRed shrink-0 mt-0.5 group-hover:text-brand-richBlack transition-colors" />
                <span className="group-hover:text-brand-richBlack transition-colors">Level 35, The Akod Tower,<br />Financial District, Dubai</span>
              </li>
              <li className="flex items-center gap-4 group">
                <Phone size={18} className="text-brand-appRed shrink-0 group-hover:text-brand-richBlack transition-colors" />
                <span className="group-hover:text-brand-richBlack transition-colors">+971 4 123 4567</span>
              </li>
              <li className="flex items-center gap-4 group">
                <Mail size={18} className="text-brand-appRed shrink-0 group-hover:text-brand-richBlack transition-colors" />
                <span className="group-hover:text-brand-richBlack transition-colors">concierge@akodgroup.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-brand-richBlack/5 text-[10px] text-brand-richBlack/30 uppercase tracking-[0.1em]">
          <p>&copy; {currentYear} Akod Group. All Rights Reserved.</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <Link href="#" className="hover:text-brand-appRed transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-brand-appRed transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-brand-appRed transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
