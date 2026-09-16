/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { ShieldCheck, Award, Globe, ArrowRight } from "lucide-react";
import { PARTNER_BRANDS } from "../constants";
import SEO from "../components/SEO";

const getBrandColors = (name: string) => {
  const upper = name.toUpperCase();
  if (upper.includes("YONEX")) {
    return { text: "group-hover:text-[#005691]", border: "group-hover:border-[#005691]/40", glow: "hover:shadow-[#005691]/10" };
  }
  if (upper.includes("SG")) {
    return { text: "group-hover:text-[#1e3c72]", border: "group-hover:border-[#1e3c72]/40", glow: "hover:shadow-[#1e3c72]/10" };
  }
  if (upper.includes("SS")) {
    return { text: "group-hover:text-[#d32f2f]", border: "group-hover:border-[#d32f2f]/40", glow: "hover:shadow-[#d32f2f]/10" };
  }
  if (upper.includes("COSCO")) {
    return { text: "group-hover:text-[#ffd600]", border: "group-hover:border-[#ffd600]/40", glow: "hover:shadow-[#ffd600]/10" };
  }
  if (upper.includes("NIVIA")) {
    return { text: "group-hover:text-[#e53935]", border: "group-hover:border-[#e53935]/40", glow: "hover:shadow-[#e53935]/10" };
  }
  if (upper.includes("LI-NING")) {
    return { text: "group-hover:text-[#f44336]", border: "group-hover:border-[#f44336]/40", glow: "hover:shadow-[#f44336]/10" };
  }
  if (upper.includes("ADIDAS")) {
    return { text: "group-hover:text-white", border: "group-hover:border-white/30", glow: "hover:shadow-white/5" };
  }
  return { text: "group-hover:text-brand-saffron", border: "group-hover:border-brand-saffron/40", glow: "hover:shadow-brand-saffron/10" };
};

export default function Brands() {
  const JSON_LD_DATA = {
    "@context": "https://schema.org",
    "@type": "ItemPage",
    "mainEntity": {
      "@type": "ItemList",
      "name": "Authorized Partner Brands of JAI HIND SPORTS",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Yonex"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "SG (Sanspareils Greenlands)"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "SS (Sareen Sports)"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Cosco"
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": "Nivia"
        }
      ]
    }
  };

  return (
    <div className="relative min-h-screen bg-[#060606] pt-28 pb-24 px-4 overflow-hidden">
      <SEO 
        title="Authorized Sports Brands | JAI HIND SPORTS Coimbatore"
        description="We are authorized stockists and dealers for world-class sports brands in Coimbatore, including Yonex Badminton, SG Cricket, SS Cricket, Cosco, and Nivia. 100% genuine guaranteed."
        keywords="Sports brands Coimbatore, Yonex Badminton Coimbatore, SG Cricket Bats Coimbatore, SS Cricket gear Coimbatore, Genuine Cosco Nivia store"
        canonicalUrl="https://jaihindsports.in/brands"
        jsonLd={JSON_LD_DATA}
      />
      
      {/* Stadium glow effects */}
      <div className="absolute top-1/4 left-0 w-[600px] h-[500px] bg-gradient-to-r from-brand-saffron/10 to-transparent blur-[120px] rounded-full pointer-events-none -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 right-0 w-[600px] h-[500px] bg-gradient-to-l from-brand-green/10 to-transparent blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/[0.01] blur-[150px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto space-y-16 relative z-10">
        
        {/* Header Block */}
        <div className="space-y-4 text-center max-w-3xl mx-auto">
          <span className="text-xs font-mono font-black tracking-[0.25em] text-brand-saffron uppercase">AUTHORIZED PARTNERS</span>
          <h1 className="text-4xl sm:text-6xl font-black text-white uppercase font-display leading-tight">
            THE WORLD'S <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-saffron via-white to-brand-green-light">FINEST BRANDS</span>
          </h1>
          
          {/* Animated tri-color underline divider */}
          <div className="h-[3px] w-36 mx-auto rounded-full flex overflow-hidden relative">
            <div className="w-1/3 bg-brand-saffron h-full"></div>
            <div className="w-1/3 bg-white h-full"></div>
            <div className="w-1/3 bg-brand-green h-full"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-brand-saffron via-white to-brand-green-light blur-[4px] opacity-70 animate-pulse" />
          </div>
          
          <p className="text-gray-400 max-w-2xl text-base sm:text-lg font-light leading-relaxed pt-3">
            We partner with the world's most trusted manufacturers of premium sporting goods. Zero duplicates. 100% authentic quality with verified serial numbers.
          </p>
        </div>

        {/* Brands Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PARTNER_BRANDS.map((brand, index) => {
            const colors = getBrandColors(brand.name);
            return (
              <motion.div
                key={brand.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={`p-8 rounded-2xl glass-panel ${colors.border} transition-all duration-300 flex flex-col justify-between group hover:scale-[1.03] hover:shadow-2xl ${colors.glow} shadow-premium`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className={`p-2.5 bg-white/5 rounded-xl text-gray-400 ${colors.text} transition-all duration-300`}>
                      <ShieldCheck className="w-5 h-5 stroke-[1.5]" />
                    </div>
                    <span className="text-[9px] font-mono tracking-widest text-gray-500 uppercase flex items-center gap-1">
                      <Globe className="w-3 h-3 text-brand-green-light" />
                      <span>{brand.origin}</span>
                    </span>
                  </div>

                  <h3 className={`text-2xl font-black tracking-widest text-white uppercase mb-2 font-display ${colors.text} transition-colors duration-300`}>
                    {brand.name.split(" ")[0]}
                  </h3>
                  <p className="text-[10px] font-mono text-gray-400 uppercase tracking-widest leading-relaxed">
                    {brand.discipline}
                  </p>
                </div>

                <div className="border-t border-white/5 pt-4 mt-6 flex items-center gap-2 text-[8px] font-mono text-gray-500 group-hover:text-gray-400 transition-colors">
                  <Award className="w-3.5 h-3.5 text-brand-saffron" />
                  <span>OFFICIAL CBE STOCKIST</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Authenticity Pledge Box */}
        <div className="p-8 sm:p-12 rounded-3xl glass-panel border border-white/10 relative overflow-hidden max-w-4xl mx-auto shadow-premium">
          <div className="absolute top-0 right-0 w-48 h-48 bg-brand-green/5 blur-3xl rounded-full pointer-events-none" />
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
            <div className="text-left space-y-2.5">
              <span className="text-[10px] font-mono tracking-widest text-brand-green-light font-black uppercase">DIRECT FROM FACTORIES</span>
              <h3 className="text-xl sm:text-2xl font-black text-white uppercase font-display">OUR 100% AUTHENTICITY BLUEPRINT</h3>
              <p className="text-xs sm:text-sm text-gray-400 font-light leading-relaxed max-w-xl">
                We understand that duplicate cricket bats and cloned badminton racquets flood online spaces. JAI HIND SPORTS Coimbatore sources merchandise directly from official YONEX India, SG, SS, and COSCO distribution hubs. We invite you to scan hologram stickers and verify official factory stamp codes in-store.
              </p>
            </div>
            <div className="flex-shrink-0">
              <span className="px-6 py-3 border border-brand-green-light/30 rounded-full bg-brand-green/10 text-brand-green-light font-mono font-black text-[10px] uppercase tracking-widest inline-block shadow-lg shadow-brand-green/5">
                ✓ VERIFIED ORIGINAL WARRANTY
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
