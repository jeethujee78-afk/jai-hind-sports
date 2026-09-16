/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Link, useNavigate } from "react-router-dom";
import { 
  Trophy, 
  ArrowRight, 
  Flame, 
  CheckCircle2 
} from "lucide-react";
import { POPULAR_CATEGORIES, STORE_DETAILS } from "../constants";
import SEO from "../components/SEO";

export default function Categories() {
  const navigate = useNavigate();

  const handleCategoryClick = (id: string) => {
    // Map POPULAR_CATEGORIES id to exact Products.tsx category name
    const mapping: Record<string, string> = {
      cricket: "Cricket",
      badminton: "Badminton",
      fitness: "Gym Equipment",
      football: "Football",
      tennis: "Accessories",
      athletics: "Running",
    };
    const mappedCategory = mapping[id] || "Cricket";
    navigate("/products", { state: { category: mappedCategory } });
  };

  const JSON_LD_DATA = {
    "@context": "https://schema.org",
    "@type": "ItemPage",
    "mainEntity": {
      "@type": "ItemList",
      "name": "Sports Categories at JAI HIND SPORTS",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Cricket"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Badminton"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Gym & Fitness"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Football"
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": "Tennis"
        },
        {
          "@type": "ListItem",
          "position": 6,
          "name": "Athletics"
        }
      ]
    }
  };

  return (
    <div className="relative min-h-screen bg-[#060606] pt-28 pb-24 px-4 overflow-hidden">
      <SEO 
        title="Sports Categories & Disciplines | JAI HIND SPORTS Coimbatore"
        description="Browse premium sports gear in Coimbatore classified by disciplines including Cricket, Badminton, Gym Strength, Football, Tennis, Athletics, and customized Academy setup supplies."
        keywords="Sports classifications Coimbatore, Cricket equipment shop, Yonex badminton store Coimbatore, Football kits Vilankurichi, Gym accessories"
        canonicalUrl="https://jaihindsports.in/categories"
        jsonLd={JSON_LD_DATA}
      />
      
      {/* Stadium ambient light glows */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[500px] bg-gradient-to-l from-brand-green/10 to-transparent blur-[120px] rounded-full pointer-events-none -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 left-0 w-[600px] h-[500px] bg-gradient-to-r from-brand-saffron/10 to-transparent blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/[0.01] blur-[150px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto space-y-16 relative z-10">
        
        {/* Page Title */}
        <div className="space-y-4 text-center max-w-3xl mx-auto">
          <span className="text-xs font-mono font-black tracking-[0.25em] text-brand-saffron uppercase">SPORTS CLASSIFICATIONS</span>
          <h1 className="text-4xl sm:text-6xl font-black text-white uppercase font-display leading-tight">
            ELITE <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-saffron via-white to-brand-green-light">DISCIPLINES</span>
          </h1>
          
          {/* Animated tri-color underline divider */}
          <div className="h-[3px] w-36 mx-auto rounded-full flex overflow-hidden relative">
            <div className="w-1/3 bg-brand-saffron h-full"></div>
            <div className="w-1/3 bg-white h-full"></div>
            <div className="w-1/3 bg-brand-green h-full"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-brand-saffron via-white to-brand-green-light blur-[4px] opacity-70 animate-pulse" />
          </div>
          
          <p className="text-gray-400 max-w-2xl text-base sm:text-lg font-light leading-relaxed pt-3">
            We catalog our showroom range according to Olympic and professional disciplines, ensuring you find custom-tuned tools for peak athletic output.
          </p>
        </div>

        {/* Detailed Disciplines Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {POPULAR_CATEGORIES.map((cat, index) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => handleCategoryClick(cat.id)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  handleCategoryClick(cat.id);
                }
              }}
              tabIndex={0}
              className="p-8 rounded-3xl glass-panel border border-white/5 hover:border-brand-saffron/20 focus:border-brand-saffron/50 focus:outline-none transition-all duration-300 flex flex-col justify-between group hover:scale-[1.01] shadow-premium cursor-pointer"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-brand-saffron/10 text-brand-saffron text-[9px] font-mono uppercase font-bold tracking-wider">
                    <Flame className="w-3.5 h-3.5" />
                    <span>AUTHENTIC OUTLET RANGE</span>
                  </div>
                  <span className="text-[10px] font-mono text-gray-500 font-bold uppercase tracking-wider">{cat.count} MODELS</span>
                </div>

                <h3 className="text-3xl font-black text-white uppercase mb-3 font-display group-hover:text-brand-saffron transition-colors">
                  {cat.name}
                </h3>
                <p className="text-xs sm:text-sm text-gray-400 font-light leading-relaxed mb-6">
                  {cat.desc}
                </p>

                {/* Specialized Portfolio List */}
                <div className="space-y-2.5 border-t border-white/5 pt-5 mb-6">
                  <p className="text-[9px] font-mono text-gray-500 uppercase tracking-widest font-black">SPECIALIZED PORTFOLIO</p>
                  <div className="grid grid-cols-2 gap-2 text-xs text-gray-300 font-light">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-brand-green-light flex-shrink-0" />
                      <span>Professional Match Equipment</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-brand-green-light flex-shrink-0" />
                      <span>Custom Training Gear</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-brand-green-light flex-shrink-0" />
                      <span>School & Academy Kits</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-brand-green-light flex-shrink-0" />
                      <span>Professional Support Wear</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between mt-6 pt-4 border-t border-white/5">
                <div
                  className="inline-flex items-center gap-2 text-xs font-mono font-black tracking-widest text-brand-saffron hover:text-brand-saffron-light transition-colors font-bold"
                >
                  <span>BROWSE INVENTORY</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
                </div>
                <a
                  href={STORE_DETAILS.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="text-[10px] font-mono text-gray-500 hover:text-white transition-colors uppercase tracking-wider"
                >
                  Inquire Store Availability
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dynamic callout section */}
        <div className="p-8 sm:p-14 rounded-3xl glass-panel border border-white/10 text-center max-w-4xl mx-auto relative overflow-hidden group shadow-premium">
          <div className="absolute -top-24 -left-24 w-48 h-48 bg-brand-saffron/10 blur-[80px] rounded-full pointer-events-none group-hover:scale-150 transition-all duration-700" />
          <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-brand-green/10 blur-[80px] rounded-full pointer-events-none group-hover:scale-150 transition-all duration-700" />
          
          <Trophy className="w-12 h-12 text-brand-saffron mx-auto mb-6 stroke-[1.2]" />
          <h2 className="text-2xl sm:text-4xl font-black text-white uppercase font-display mb-4">SCHOOL AND CLUB CONFIGURATIONS</h2>
          <p className="text-xs sm:text-sm text-gray-400 max-w-xl mx-auto leading-relaxed mb-10 font-light">
            JAI HIND SPORTS Coimbatore is the official premium equipment supplier for leading schools, local academies, and corporate leagues. We support physical education trial requirements, bulk kits, and custom jerseys.
          </p>
          <Link
            to="/contact"
            className="group relative w-full sm:w-auto px-8 py-4 bg-[#FF9933] hover:bg-[#138808] text-white font-mono font-bold text-xs uppercase tracking-widest rounded-full inline-flex items-center justify-center gap-2.5 transition-all duration-500 hover:shadow-2xl hover:shadow-[#FF9933]/20 active:scale-95 overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-[50%] bg-white/10 group-hover:bg-white/5 transition-all duration-300 pointer-events-none" />
            <span>DISCUSS INSTITUTIONAL ENQUIRIES</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
