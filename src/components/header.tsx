"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { services } from "@/data/services";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItemClass = (path: string) =>
    `relative text-sm font-medium tracking-[0.2em] uppercase transition-colors duration-300 hover:text-brand-appRed ${pathname === path ? "text-brand-appRed" : "text-white"
    } after:absolute after:-bottom-2 after:left-0 after:h-[1px] after:w-0 after:bg-brand-appRed after:transition-all after:duration-300 hover:after:w-full`;

  return (
    <>
      <header
        className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${scrolled
          ? "bg-brand-appBlue/90 backdrop-blur-md py-4 shadow-xl border-b border-white/5"
          : "bg-transparent py-8"
          }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
          {/* Logo */}
          <Link href="/" className="relative z-50 flex items-center gap-2">
            <div className="text-2xl font-bold tracking-widest text-white">
              <span className="text-brand-appRed">AKOD</span>
              <span className="font-light">GROUP</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center space-x-12 md:flex">
            <Link href="/" className={navItemClass("/")}>
              Home
            </Link>
            <Link href="/about" className={navItemClass("/about")}>
              The Group
            </Link>

            {/* Services Dropdown */}
            <div className="group relative">
              <button className={`text-sm font-medium tracking-[0.2em] uppercase text-white hover:text-brand-appRed`}>
                Expertise
              </button>
              <div className="absolute top-full -left-4 pt-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="w-64 bg-brand-appBlue border-t-2 border-brand-appRed p-6 shadow-2xl">
                  <ul className="space-y-4">
                    {services.slice(0, 5).map(s => (
                      <li key={s.slug}>
                        <Link href={`/services/${s.slug}`} className="block text-sm text-gray-300 hover:text-white transition-colors">
                          {s.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Ventures Dropdown */}
            <div className="group relative">
              <button className={`text-sm font-medium tracking-[0.2em] uppercase text-white hover:text-brand-appRed`}>
                Ventures
              </button>
              <div className="absolute top-full -left-4 pt-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="w-64 bg-brand-appBlue border-t-2 border-brand-appRed p-6 shadow-2xl">
                  <ul className="space-y-4">
                    <li><Link href="/ventures/skode-safe" className="block text-sm text-gray-300 hover:text-white transition-colors">Skode Safe</Link></li>
                    <li><Link href="/ventures/akod-scaffolding" className="block text-sm text-gray-300 hover:text-white transition-colors">Akod Scaffolding</Link></li>
                    <li><Link href="/ventures/akod-tech" className="block text-sm text-gray-300 hover:text-white transition-colors">Akod Tech</Link></li>
                    <li><Link href="/ventures/akod-heights" className="block text-sm text-gray-300 hover:text-white transition-colors">Akod Heights</Link></li>
                  </ul>
                </div>
              </div>
            </div>
            <Link href="/contact" className={navItemClass("/contact")}>
              Contact
            </Link>
          </nav>

          {/* Right Area - Concierge/CTA */}
          <div className="hidden items-center md:flex">
            <Link
              href="/contact"
              className="group relative overflow-hidden rounded-full border border-white/20 bg-white/5 px-6 py-2 transition-all hover:bg-brand-appRed hover:border-brand-appRed"
            >
              <span className="relative z-10 text-xs font-bold tracking-widest text-white uppercase transition-colors group-hover:text-white">
                Inquire
              </span>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="text-white md:hidden"
            onClick={() => setShowMobileMenu(true)}
          >
            <span className="sr-only">Menu</span>
            <div className="space-y-2">
              <div className="w-8 h-[2px] bg-white"></div>
              <div className="w-8 h-[2px] bg-white"></div>
            </div>
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {showMobileMenu && (
        <div className="fixed inset-0 z-[60] bg-brand-appBlue text-white">
          <div className="p-8 flex justify-end">
            <button onClick={() => setShowMobileMenu(false)} className="text-sm tracking-widest uppercase text-brand-appRed font-bold">Close</button>
          </div>
          <nav className="flex flex-col items-center justify-center h-full space-y-8">
            <Link href="/" onClick={() => setShowMobileMenu(false)} className="text-2xl font-serif">Home</Link>
            <Link href="/about" onClick={() => setShowMobileMenu(false)} className="text-2xl font-serif">The Group</Link>
            <Link href="/services" onClick={() => setShowMobileMenu(false)} className="text-2xl font-serif">Expertise</Link>
            <Link href="/contact" onClick={() => setShowMobileMenu(false)} className="text-2xl font-serif text-brand-appRed">Inquire</Link>
          </nav>
        </div>
      )}
    </>
  );
};

export default Header;
