"use client";

import { ArrowUpRight, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-richBlack text-white pt-24 pb-12">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        {/* Top Section - CTA */}
        <div className="mb-20 flex flex-col md:flex-row items-end justify-between border-b border-white/10 pb-12">
          <div className="max-w-2xl">
            <h2 className="font-serif text-4xl md:text-6xl mb-6 leading-tight">
              Let's build the <br /><span className="text-brand-champagneGold italic">extraordinary.</span>
            </h2>
            <Link href="/contact" className="inline-flex items-center gap-3 text-sm font-bold tracking-widest uppercase text-white hover:text-brand-champagneGold transition-colors group">
              Start a conversation
              <span className="bg-white/10 p-2 rounded-full group-hover:bg-brand-champagneGold group-hover:text-black transition-all">
                <ArrowUpRight size={16} />
              </span>
            </Link>
          </div>
          <div className="mt-12 md:mt-0 w-full md:w-auto">
            <p className="text-xs text-brand-platinum/50 mb-4 uppercase tracking-widest font-bold">Newsletter</p>
            <div className="flex border-b border-white/20 pb-2 focus-within:border-brand-champagneGold transition-colors">
              <input
                type="email"
                placeholder="Email Address"
                className="bg-transparent outline-none w-full md:w-64 placeholder-white/30 text-white focus:placeholder-white/50 transition-colors"
              />
              <button className="text-brand-champagneGold font-bold uppercase text-xs hover:text-white transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Middle Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="space-y-8">
            <Link href="/" className="group flex items-center gap-2">
              <div className="h-10 w-10 bg-brand-champagneGold rounded-sm flex items-center justify-center text-black font-bold text-xl font-serif">
                A
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-serif font-medium tracking-widest text-white uppercase">
                  Akod
                </span>
                <span className="text-[0.6rem] font-medium tracking-[0.3em] text-brand-champagneGold uppercase">
                  Group
                </span>
              </div>
            </Link>
            <p className="text-brand-platinum/60 font-light leading-relaxed text-sm max-w-xs">
              A global conglomerate redefining excellence in infrastructure, technology, and safety through visionary engineering.
            </p>
            <div className="flex gap-4">
              {[Linkedin, Twitter, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="h-10 w-10 flex items-center justify-center rounded-full border border-white/10 text-white/60 hover:bg-brand-champagneGold hover:border-brand-champagneGold hover:text-black transition-all duration-300">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-xs tracking-widest uppercase mb-8 text-brand-champagneGold">Ventures</h4>
            <ul className="space-y-4 text-brand-platinum/70 font-light text-sm">
              <li><Link href="/ventures/skode-safe" className="hover:text-white transition-colors">Skode Safe</Link></li>
              <li><Link href="/ventures/akod-scaffolding" className="hover:text-white transition-colors">Akod Scaffolding</Link></li>
              <li><Link href="/ventures/akod-tech" className="hover:text-white transition-colors">Akod Tech</Link></li>
              <li><Link href="/ventures/akod-heights" className="hover:text-white transition-colors">Akod Heights</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-xs tracking-widest uppercase mb-8 text-brand-champagneGold">Quick Links</h4>
            <ul className="space-y-4 text-brand-platinum/70 font-light text-sm">
              <li><Link href="/about" className="hover:text-white transition-colors">The Group</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Expertise</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Concierge</Link></li>
              <li><Link href="/careers" className="hover:text-white transition-colors">Careers</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-xs tracking-widest uppercase mb-8 text-brand-champagneGold">Contact</h4>
            <ul className="space-y-4 text-brand-platinum/70 font-light text-sm">
              <li className="flex items-start gap-4">
                <MapPin size={18} className="text-brand-champagneGold shrink-0 mt-0.5" />
                <span>Level 35, The Akod Tower,<br />Financial District, Dubai</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone size={18} className="text-brand-champagneGold shrink-0" />
                <span>+971 4 123 4567</span>
              </li>
              <li className="flex items-center gap-4">
                <Mail size={18} className="text-brand-champagneGold shrink-0" />
                <span>concierge@akodgroup.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-xs text-white/30 uppercase tracking-wider">
          <p>&copy; {currentYear} Akod Group. All Rights Reserved.</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-white transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
