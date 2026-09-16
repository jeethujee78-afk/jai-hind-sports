/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { LogoFull, LogoIcon } from "../components/BrandLogo";
import { 
  Phone, 
  MapPin, 
  Menu, 
  X, 
  Search, 
  ArrowUp, 
  MessageSquare, 
  Clock, 
  Trophy,
  Activity,
  Instagram,
  Facebook,
  Mail
} from "lucide-react";
import { STORE_DETAILS, NAV_ITEMS } from "../constants";

export default function RootLayout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const location = useLocation();

  // Scroll event listeners
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="flex flex-col min-h-screen bg-brand-black text-gray-100 selection:bg-brand-saffron/30 selection:text-white">
      
      {/* 1. TOP CONTACT & ANNOUNCEMENT BAR */}
      <div id="top-bar" className="w-full bg-[#070707] border-b border-white/5 text-gray-400 py-2.5 px-4 text-xs">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2.5">
          {/* Slogan */}
          <div className="flex items-center gap-2">
            <Trophy className="w-3.5 h-3.5 text-brand-saffron" />
            <span className="font-mono tracking-wider text-[10px] uppercase text-gray-300">
              {STORE_DETAILS.tagline}
            </span>
          </div>

          {/* Quick Contacts */}
          <div className="flex flex-wrap items-center justify-center gap-4 font-mono text-[10px] tracking-wide">
            <a 
              href={STORE_DETAILS.googleMapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <MapPin className="w-3.5 h-3.5 text-brand-green-light" />
              <span>Villankurichi, Coimbatore</span>
            </a>
            <span className="text-white/10">|</span>
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-brand-saffron" />
              <span>9:30 AM - 9:00 PM</span>
            </div>
            <span className="text-white/10">|</span>
            <a 
              href={`tel:${STORE_DETAILS.phone}`}
              className="flex items-center gap-1.5 hover:text-white transition-colors text-white font-bold"
            >
              <Phone className="w-3.5 h-3.5 text-brand-saffron animate-pulse" />
              <span>{STORE_DETAILS.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>

      {/* 2. STICKY NAVIGATION BAR */}
      <header 
        className={`sticky top-0 z-40 w-full transition-all duration-500 ease-in-out backdrop-blur-md border-b ${
          scrolled 
            ? "bg-[#050505]/80 border-white/10 py-3 shadow-[0_4px_20px_rgba(0,0,0,0.3)]" 
            : "bg-transparent border-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          
          {/* Brand Logo with Patriotic Subtlety */}
          <Link to="/" className="flex items-center select-none">
            <LogoFull iconSize="sm" />
          </Link>
 
          {/* Desktop Nav Items with Tricolour Hovers & Active States */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `relative py-1 text-xs font-mono uppercase tracking-widest font-bold transition-all duration-300 ${
                    isActive 
                      ? "text-[#FF9933] drop-shadow-[0_2px_8px_rgba(255,153,51,0.4)]" 
                      : "text-gray-400 hover:text-white"
                  }`
                }
              >
                {({ isActive }) => (
                  <span className="relative group/nav-item py-1 block">
                    <span>{item.name}</span>
                    {/* Animated tricolour hover line expansion */}
                    {!isActive && (
                      <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#FF9933] via-[#FFFFFF] to-[#138808] transition-all duration-300 group-hover/nav-item:w-full" />
                    )}
                    {isActive && (
                      <motion.div 
                        layoutId="activeNavBorder"
                        className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[#FF9933] via-[#FFFFFF] to-[#138808] shadow-[0_1px_10px_rgba(255,153,51,0.5)]"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </span>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Interactive Utility CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Visual Search Indicator (Disabled / interactive visual design) */}
            <button 
              className="p-2.5 rounded-full bg-white/5 border border-white/5 text-gray-400 hover:text-white hover:border-white/10 transition-all active:scale-95 cursor-pointer"
              title="Search store inventory"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Direct Dial Helpline */}
            <a
              href={`tel:${STORE_DETAILS.phone}`}
              className="px-5 py-2.5 bg-gradient-to-r from-brand-saffron to-brand-saffron-light text-white font-mono font-bold text-xs uppercase tracking-wider rounded-lg flex items-center gap-2 hover:shadow-md hover:shadow-brand-saffron/20 active:scale-95 transition-all"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call Showroom</span>
            </a>
          </div>

          {/* Mobile Menu Actions */}
          <div className="flex items-center gap-3 lg:hidden">
            <a
              href={`tel:${STORE_DETAILS.phone}`}
              className="p-2.5 rounded-full bg-brand-saffron text-white shadow-md active:scale-95 transition-transform"
              title="Call Store Helpline"
            >
              <Phone className="w-4 h-4" />
            </a>
            
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-full bg-white/5 border border-white/5 text-gray-400 hover:text-white active:scale-95 transition-all"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </header>

      {/* 3. MOBILE MENU SLIDE-DOWN DRAWER */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden w-full bg-brand-dark/95 border-b border-white/10 backdrop-blur-md sticky top-[69px] z-30"
          >
            <div className="px-4 py-6 space-y-4">
              <div className="space-y-1.5">
                {NAV_ITEMS.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      `flex items-center justify-between p-3.5 rounded-xl text-sm font-mono uppercase tracking-wider font-bold transition-all ${
                        isActive 
                          ? "bg-brand-saffron/10 text-brand-saffron border-l-2 border-brand-saffron pl-4" 
                          : "text-gray-300 hover:bg-white/5"
                      }`
                    }
                  >
                    <span>{item.name}</span>
                    <span className="text-[10px] text-gray-600 font-light font-sans">{item.description}</span>
                  </NavLink>
                ))}
                <NavLink
                  to="/brand-identity"
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center justify-between p-3.5 rounded-xl text-sm font-mono uppercase tracking-wider font-bold transition-all ${
                      isActive 
                        ? "bg-brand-saffron/10 text-brand-saffron border-l-2 border-brand-saffron pl-4" 
                        : "text-[#FF9933] hover:bg-white/5"
                    }`
                  }
                >
                  <span>Brand Manual</span>
                  <span className="text-[10px] text-brand-saffron font-light font-sans">Official Identity & Guidelines</span>
                </NavLink>
              </div>

              <div className="pt-4 border-t border-white/5 space-y-3">
                <a
                  href={STORE_DETAILS.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 bg-emerald-600 text-white font-bold text-xs font-mono uppercase tracking-widest rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/10"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Consultant</span>
                </a>
                <a
                  href={`tel:${STORE_DETAILS.phone}`}
                  className="w-full py-3.5 bg-gradient-to-r from-brand-saffron to-brand-saffron-light text-white font-bold text-xs font-mono uppercase tracking-widest rounded-xl flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Store Crew</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 4. MAIN ROUTE VIEWPORT WITH PREMIUM TRANSITION */}
      <main className="flex-grow overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>

      {/* 5. FLOATING COMPONENT UTILITIES */}
      {/* Floating back to top & WhatsApp chat buttons */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
        {/* WhatsApp Assistance Widget */}
        <a
          href={STORE_DETAILS.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-xl hover:scale-105 active:scale-95 transition-all flex items-center justify-center group"
          title="Chat with Sports Expert"
        >
          <MessageSquare className="w-6 h-6" />
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 font-mono text-[10px] font-bold uppercase tracking-widest group-hover:pl-2 whitespace-nowrap">
            WHATSAPP LIVE
          </span>
        </a>

        {/* Back to top scroll trigger */}
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={scrollToTop}
              className="p-4 rounded-full bg-brand-card hover:bg-white/5 text-white border border-white/10 shadow-xl hover:scale-105 active:scale-95 transition-all flex items-center justify-center"
              title="Scroll to top"
            >
              <ArrowUp className="w-5 h-5" />
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      {/* 6. LUXURIOUS SHOWROOM FOOTER */}
      <footer className="relative bg-[#0B0B0B] border-t border-white/5 text-gray-400 overflow-hidden">
        
        {/* Animated Tricolour Top Border */}
        <div className="absolute top-0 left-0 right-0 h-[3px] flex overflow-hidden">
          <motion.div 
            animate={{ x: ["-100%", "100%"] }}
            transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
            className="w-[200%] h-full bg-gradient-to-r from-brand-saffron via-white to-brand-green absolute top-0 left-0"
          />
          {/* Static Backup */}
          <div className="w-1/3 bg-brand-saffron h-full z-10" />
          <div className="w-1/3 bg-white h-full z-10" />
          <div className="w-1/3 bg-brand-green h-full z-10" />
        </div>

        {/* Dark Glass Background Overlays */}
        <div className="absolute inset-0 bg-radial-gradient from-brand-saffron/2 via-transparent to-brand-green/2 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 py-20 relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
          
          {/* Column 1: Brand details (ColSpan 4) */}
          <div className="lg:col-span-4 space-y-6">
            <Link to="/" className="flex items-center select-none">
              <LogoFull iconSize="md" />
            </Link>
            <p className="text-sm text-gray-400 font-light leading-relaxed">
              Coimbatore's premium boutique sports showroom. We stringently source, inspect, and certify 100% genuine elite-grade athletic equipment for athletes who dream big.
            </p>
            <div className="flex items-center gap-3 text-xs text-gray-500 font-mono uppercase mt-4">
              <span>ESTD. 2012</span>
              <span>•</span>
              <span className="text-[#138808] font-bold">MADE IN INDIA</span>
            </div>
            <div className="pt-2 flex items-center gap-3">
              <a 
                href={STORE_DETAILS.instagram} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white/5 border border-white/5 hover:bg-[#FF9933] hover:text-white hover:border-[#FF9933] transition-all duration-300"
                title="Follow us on Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href={STORE_DETAILS.facebook} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white/5 border border-white/5 hover:bg-[#FF9933] hover:text-white hover:border-[#FF9933] transition-all duration-300"
                title="Follow us on Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Directory & Categories (ColSpan 3) */}
          <div className="lg:col-span-3 space-y-6">
            <div>
              <h4 className="text-xs font-mono font-bold tracking-widest text-white uppercase mb-4">
                STORE DIRECTORY
              </h4>
              <ul className="space-y-2.5 text-xs">
                {NAV_ITEMS.map((item) => (
                  <li key={item.path}>
                    <Link 
                      to={item.path} 
                      className="text-gray-400 hover:text-[#FF9933] transition-colors flex items-center gap-2 group"
                    >
                      <span className="text-gray-600 group-hover:text-[#FF9933] transition-colors">•</span>
                      <span>{item.name} Page</span>
                    </Link>
                  </li>
                ))}
                <li>
                  <Link 
                    to="/brand-identity" 
                    className="text-[#FF9933] hover:text-[#FF9933]/80 font-semibold transition-colors flex items-center gap-2 group"
                  >
                    <span className="text-[#FF9933]">•</span>
                    <span>Brand Manual (RC-1)</span>
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-mono font-bold tracking-widest text-white uppercase mb-4">
                POPULAR DISCIPLINES
              </h4>
              <ul className="space-y-2.5 text-xs">
                <li><Link to="/categories" className="text-gray-400 hover:text-[#FF9933] transition-colors">• Cricket Elite Series</Link></li>
                <li><Link to="/categories" className="text-gray-400 hover:text-[#FF9933] transition-colors">• Badminton Pro Series</Link></li>
                <li><Link to="/categories" className="text-gray-400 hover:text-[#FF9933] transition-colors">• Gym & Strength</Link></li>
              </ul>
            </div>
          </div>

          {/* Column 3: Showroom & Opening Hours (ColSpan 2) */}
          <div className="lg:col-span-2 space-y-6">
            <div className="space-y-4">
              <h4 className="text-xs font-mono font-bold tracking-widest text-white uppercase">
                COIMBATORE HUB
              </h4>
              <div className="space-y-3 text-xs leading-relaxed text-gray-400">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#FF9933] flex-shrink-0 mt-0.5" />
                  <p>
                    {STORE_DETAILS.address.street},<br />
                    {STORE_DETAILS.address.area},<br />
                    {STORE_DETAILS.address.city}, {STORE_DETAILS.address.state} - {STORE_DETAILS.address.pin}
                  </p>
                </div>
                <p className="text-[10px] text-gray-500 font-mono">
                  Landmark: {STORE_DETAILS.address.landmark}
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-xs font-mono font-bold tracking-widest text-white uppercase">
                OPENING HOURS
              </h4>
              <div className="space-y-2 text-xs text-gray-400">
                <div className="flex flex-col">
                  <span className="font-semibold text-gray-300">Mon - Sat:</span>
                  <span className="text-[11px] font-mono mt-0.5">09:30 AM - 09:00 PM</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-semibold text-gray-300">Sunday:</span>
                  <span className="text-[11px] font-mono mt-0.5">10:30 AM - 08:30 PM</span>
                </div>
              </div>
            </div>
          </div>

          {/* Column 4: Google Map & Hotlines (ColSpan 3) */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="text-xs font-mono font-bold tracking-widest text-white uppercase">
              SHOWROOM NAVIGATION
            </h4>
            
            {/* Elegant Map Preview Widget / Google Maps Iframe */}
            <div className="relative w-full h-32 rounded-2xl overflow-hidden border border-white/10 group shadow-md bg-black">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.932857037748!2d77.015312!3d11.0425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859f7df802193%3A0xea2df2da72566ecb!2sJai%20Hind%20Sports!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                className="absolute inset-0 w-full h-full border-0 grayscale invert opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500"
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-3 flex items-center gap-1.5 bg-black/80 border border-white/10 px-2.5 py-1 rounded-lg text-[9px] font-mono text-white">
                <MapPin className="w-3 h-3 text-[#FF9933]" />
                <span>VRS Nagar, CBE</span>
              </div>
            </div>

            <div className="space-y-3">
              <p className="text-xs font-mono font-bold tracking-wider text-gray-300">DIRECT HELPLINES</p>
              <div className="space-y-1.5">
                <a 
                  href={`tel:${STORE_DETAILS.phone}`}
                  className="text-[#FF9933] font-mono font-bold text-sm hover:underline flex items-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>{STORE_DETAILS.phoneDisplay}</span>
                </a>
                <a 
                  href={`tel:${STORE_DETAILS.secondaryPhone}`}
                  className="text-[#FF9933] font-mono font-bold text-sm hover:underline flex items-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>{STORE_DETAILS.secondaryPhoneDisplay}</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Legal copyrights line */}
        <div className="border-t border-white/5 py-8 px-6 bg-[#050505]">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] font-mono tracking-widest text-gray-500 uppercase text-center md:text-left">
            <p>© {new Date().getFullYear()} JAI HIND SPORTS. ALL RIGHTS RESERVED.</p>
            <p className="flex items-center gap-1">
              <span>DESIGNED AND ARCHITECTED WITH EXCELLENCE IN TAMIL NADU</span>
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500" />
            </p>
          </div>
        </div>

      </footer>

    </div>
  );
}
