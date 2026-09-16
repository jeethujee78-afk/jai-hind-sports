/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Trophy, ShieldAlert, Users, Award, ShieldCheck, HeartPulse } from "lucide-react";
import { STORE_DETAILS } from "../constants";
import SEO from "../components/SEO";

export default function About() {
  const JSON_LD_DATA = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "mainEntity": {
      "@type": "SportsStore",
      "name": "JAI HIND SPORTS",
      "description": "Coimbatore's premium authorized sports showroom since 2012. Dedicated to absolute authenticity, professional-grade equipment, and expert sports solutions.",
      "telephone": "+919629024175",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "2/17, 17A, VRS Nagar, Near Cheran Maa Nagar, Vilankurichi",
        "addressLocality": "Coimbatore",
        "addressRegion": "Tamil Nadu",
        "postalCode": "641035",
        "addressCountry": "IN"
      }
    }
  };

  return (
    <div className="relative min-h-screen bg-[#060606] pt-28 pb-24 px-4 overflow-hidden">
      <SEO 
        title="About JAI HIND SPORTS | Our Story & Heritage Coimbatore"
        description="Learn about Coimbatore's premier boutique sports showroom established in 2012. Our mission is to democratize authentic elite athletic equipment with verified brand warranties."
        keywords="Sports Shop Coimbatore history, Jai Hind Sports story, Authentic sports showroom Coimbatore, SS SG bat authorized dealer"
        canonicalUrl="https://jaihindsports.in/about"
        jsonLd={JSON_LD_DATA}
      />
      
      {/* Cinematic Stadium Light Glows */}
      <div className="absolute top-0 left-1/4 w-[800px] h-[500px] bg-gradient-to-br from-brand-saffron/10 to-transparent blur-[160px] rounded-full pointer-events-none -z-10 animate-pulse" />
      <div className="absolute bottom-10 right-10 w-[800px] h-[500px] bg-gradient-to-tl from-brand-green/10 to-transparent blur-[160px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/[0.01] blur-[180px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto space-y-20 relative z-10">
        
        {/* Header Block */}
        <div className="space-y-4 text-center max-w-3xl mx-auto">
          <span className="text-xs font-mono font-black tracking-[0.25em] text-brand-saffron uppercase">OUR HERITAGE & VISION</span>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white uppercase font-display leading-tight">
            THE LEGACY OF <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-saffron via-white to-brand-green-light">JAI HIND SPORTS</span>
          </h1>
          
          {/* Tri-color animated underline divider */}
          <div className="h-[3px] w-36 mx-auto rounded-full flex overflow-hidden relative">
            <div className="w-1/3 bg-brand-saffron h-full"></div>
            <div className="w-1/3 bg-white h-full"></div>
            <div className="w-1/3 bg-brand-green h-full"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-brand-saffron via-white to-brand-green-light blur-[4px] opacity-70 animate-pulse" />
          </div>
          
          <p className="text-gray-400 max-w-2xl text-base sm:text-lg font-light leading-relaxed pt-3">
            Founded with an uncompromising blueprint for absolute authenticity, we serve as Coimbatore's premier athletic armory.
          </p>
        </div>

        {/* Brand Core Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6 text-gray-300 font-light text-base sm:text-lg leading-relaxed">
            <p>
              At <strong className="text-white font-semibold">JAI HIND SPORTS</strong>, our name is our pledge. <strong className="text-brand-saffron font-bold">Jai Hind</strong> — a solemn tribute to our country's spirit, and an active vehicle to empower the aspiring champions who train in every lane, playground, and arena of Tamil Nadu.
            </p>
            <p>
              We established our flagship showroom in <strong className="text-white font-semibold">Vilankurichi, Coimbatore</strong>, specifically to tackle the rampant flood of counterfeit athletic products. We discovered that local cricket clubs and badminton athletes had no trusted local source for verified products, correct balance weights, and official brand support.
            </p>
            <p>
              By operating directly with certified global manufacturers, we completely bypassed agents. Today, our store is trusted by state-level cricketers, corporate club captains, and local schools who value precise bat compression, computer-gutted rackets, and honest, direct guidance.
            </p>
          </div>

          {/* Core pillars in a premium glass container */}
          <div className="lg:col-span-5 p-8 rounded-3xl glass-panel border border-white/10 relative overflow-hidden group hover:border-brand-saffron/20 transition-all duration-500 shadow-premium">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-saffron/5 blur-3xl rounded-full pointer-events-none" />
            <h3 className="text-sm font-black text-white uppercase font-mono tracking-widest mb-6 pb-2 border-b border-white/5 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-saffron animate-ping" />
              <span>FOUNDATIONAL PILLARS</span>
            </h3>
            
            <div className="space-y-6">
              <div className="flex gap-4 group/item">
                <div className="p-3 rounded-xl bg-brand-saffron/10 text-brand-saffron flex-shrink-0 group-hover/item:bg-brand-saffron group-hover/item:text-white transition-all duration-300">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white uppercase text-xs font-mono tracking-wider">Absolute Authenticity</h4>
                  <p className="text-xs text-gray-400 mt-1 leading-relaxed">Zero counterfeit risk. Every racket, bat, or protection shield carries authentic factory-certified validation tags.</p>
                </div>
              </div>

              <div className="flex gap-4 group/item">
                <div className="p-3 rounded-xl bg-brand-green/10 text-brand-green-light flex-shrink-0 group-hover/item:bg-brand-green-light group-hover/item:text-white transition-all duration-300">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white uppercase text-xs font-mono tracking-wider">Scientific Tuning</h4>
                  <p className="text-xs text-gray-400 mt-1 leading-relaxed">In-store specialists manage computerized dynamic stringing and custom bat oiling to fit your active stance.</p>
                </div>
              </div>

              <div className="flex gap-4 group/item">
                <div className="p-3 rounded-xl bg-white/5 text-gray-400 flex-shrink-0 group-hover/item:bg-white group-hover/item:text-brand-black transition-all duration-300">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white uppercase text-xs font-mono tracking-wider">Grassroots Integration</h4>
                  <p className="text-xs text-gray-400 mt-1 leading-relaxed">Active sponsors of corporate championships, physical department trials, and sports leagues across Coimbatore.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dynamic Statistics Block */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-10 rounded-3xl bg-[#090909] border border-white/5 relative overflow-hidden text-center shadow-premium">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[100px] bg-brand-saffron/5 blur-[80px] pointer-events-none" />
          
          <div className="space-y-1">
            <p className="text-4xl sm:text-5xl font-black text-brand-saffron font-display">2012</p>
            <p className="text-[9px] font-mono text-gray-500 uppercase tracking-widest font-bold">ESTABLISHED IN CBE</p>
          </div>
          <div className="border-l border-white/5 space-y-1">
            <p className="text-4xl sm:text-5xl font-black text-white font-display">20K+</p>
            <p className="text-[9px] font-mono text-gray-500 uppercase tracking-widest font-bold">ATHLETES SERVED</p>
          </div>
          <div className="border-l border-white/5 space-y-1">
            <p className="text-4xl sm:text-5xl font-black text-brand-green-light font-display">100%</p>
            <p className="text-[9px] font-mono text-gray-500 uppercase tracking-widest font-bold">GENUINE LABELS</p>
          </div>
          <div className="border-l border-white/5 space-y-1">
            <p className="text-4xl sm:text-5xl font-black text-white font-display">4.9★</p>
            <p className="text-[9px] font-mono text-gray-500 uppercase tracking-widest font-bold">GOOGLE BUSINESS MAPS</p>
          </div>
        </div>

        {/* Majestic Call to Action */}
        <div className="p-8 sm:p-14 rounded-3xl glass-panel border border-white/10 text-center max-w-4xl mx-auto relative overflow-hidden group shadow-premium">
          {/* Animated corner light effects */}
          <div className="absolute -top-24 -left-24 w-48 h-48 bg-brand-saffron/10 blur-[80px] rounded-full group-hover:scale-150 transition-transform duration-700 pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-brand-green/10 blur-[80px] rounded-full group-hover:scale-150 transition-transform duration-700 pointer-events-none" />
          
          <Trophy className="w-12 h-12 text-brand-saffron mx-auto mb-6 stroke-[1.2]" />
          <h2 className="text-3xl sm:text-4xl font-black text-white uppercase font-display mb-4">POWER YOUR ATHLETIC FLIGHT</h2>
          <p className="text-xs sm:text-sm text-gray-400 max-w-xl mx-auto leading-relaxed mb-10 font-light">
            Whether you are picking up a professional English Willow bat, custom tensioning a Yonex racquet, or setting up a corporate football arena — our experts are here to elevate your game.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link
              to="/products"
              className="group relative w-full sm:w-auto px-8 py-4 bg-[#FF9933] hover:bg-[#138808] text-white font-mono font-bold text-xs uppercase tracking-widest rounded-full flex items-center justify-center gap-2.5 transition-all duration-500 hover:shadow-2xl hover:shadow-[#FF9933]/20 active:scale-95 overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-[50%] bg-white/10 group-hover:bg-white/5 transition-all duration-300 pointer-events-none" />
              <span>BROWSE GEARS</span>
            </Link>
            <Link
              to="/contact"
              className="group relative w-full sm:w-auto px-8 py-4 bg-brand-card hover:bg-white/5 text-white font-mono font-bold text-xs uppercase tracking-widest rounded-full flex items-center justify-center gap-2.5 border border-white/10 hover:border-brand-saffron/40 transition-all duration-500 active:scale-95 overflow-hidden"
            >
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-brand-saffron via-white to-brand-green-light opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span>VISIT US IN PERSON</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
