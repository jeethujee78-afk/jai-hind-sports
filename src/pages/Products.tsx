/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useMemo, transition } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useLocation, useNavigate } from "react-router-dom";
import { 
  Search, 
  SlidersHorizontal, 
  PhoneCall, 
  ArrowRight, 
  CheckCircle2, 
  X, 
  MessageSquare, 
  ShoppingBag, 
  Sparkles, 
  TrendingUp, 
  Info, 
  Flame, 
  Trophy, 
  ShieldCheck, 
  ExternalLink,
  ChevronRight,
  Filter,
  Check,
  RotateCcw,
  Sparkle
} from "lucide-react";
import { STORE_DETAILS } from "../constants";
import { PRODUCTS_LIST, FEATURED_COLLECTIONS, Product } from "../data/products";
import SEO from "../components/SEO";

// 1. Unified Filter and Badging configurations
const BADGES = ["Available", "New Arrival", "Popular", "Premium", "Limited Stock"] as const;

const CATEGORIES = [
  "Cricket",
  "Football",
  "Badminton",
  "Basketball",
  "Volleyball",
  "Gym Equipment",
  "Running",
  "Sports Shoes",
  "Sports Wear",
  "Fitness",
  "Accessories",
  "School Sports Equipment"
];

const BRANDS = [
  "SS",
  "SG",
  "MRF",
  "Yonex",
  "Cosco",
  "Nivia",
  "Vector X",
  "Nike",
  "Adidas",
  "Puma"
];

export default function Products() {
  const location = useLocation();
  const navigate = useNavigate();

  // --- States ---
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedStatus, setSelectedStatus] = useState<string | null>(null);
  
  // Mobile filter drawer state
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  
  // Quick View Modal product
  const [activeQuickViewProduct, setActiveQuickViewProduct] = useState<Product | null>(null);

  // Scroll to top when category is selected via banners
  const catalogSectionRef = React.useRef<HTMLDivElement>(null);

  // Read location state passed from other pages (e.g., Home page category clicks)
  useEffect(() => {
    if (location.state && (location.state as any).category) {
      const stateCategory = (location.state as any).category;
      
      // Match category name case-insensitively against our CATEGORIES array
      const matchedCategory = CATEGORIES.find(
        (cat) => cat.toLowerCase() === stateCategory.toLowerCase()
      );
      
      if (matchedCategory) {
        setSelectedCategory(matchedCategory);
        // Scroll to the catalog list
        setTimeout(() => {
          catalogSectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
      
      // Clear location state to prevent sticky filtering behavior on refresh/back navigation
      navigate(location.pathname, { replace: true, state: {} });
    }
  }, [location.state, navigate, location.pathname]);

  const handleBannerExplore = (category: string) => {
    setSelectedCategory(category);
    setTimeout(() => {
      catalogSectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  // --- Filtering Logic ---
  const filteredProducts = useMemo(() => {
    return PRODUCTS_LIST.filter((product) => {
      // Search matching (matches name, brand, category, or descriptions)
      const matchesSearch = searchQuery === "" || 
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase());

      // Category matching
      const matchesCategory = !selectedCategory || product.category === selectedCategory;

      // Brand matching (if none checked, match all; else match selected)
      const matchesBrand = selectedBrands.length === 0 || selectedBrands.includes(product.brand);

      // Status matching
      const matchesStatus = !selectedStatus || product.status === selectedStatus;

      return matchesSearch && matchesCategory && matchesBrand && matchesStatus;
    });
  }, [searchQuery, selectedCategory, selectedBrands, selectedStatus]);

  // Brand toggle function
  const toggleBrand = (brand: string) => {
    if (selectedBrands.includes(brand)) {
      setSelectedBrands(selectedBrands.filter((b) => b !== brand));
    } else {
      setSelectedBrands([...selectedBrands, brand]);
    }
  };

  // Reset all filters
  const resetFilters = () => {
    setSearchQuery("");
    setSelectedCategory(null);
    setSelectedBrands([]);
    setSelectedStatus(null);
  };

  // Prepare whatsapp link
  const getWhatsAppLink = (product: Product) => {
    const text = `Hello JAI HIND SPORTS,\n\nI would like to know more about this product from your digital catalog:\n\n*Product:* ${product.name}\n*Brand:* ${product.brand}\n*Category:* ${product.category}\n*Status:* ${product.status}\n\nPlease share availability and pricing details. Thank you!`;
    return `https://wa.me/919629024175?text=${encodeURIComponent(text)}`;
  };

  const JSON_LD_DATA = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Products Catalog of JAI HIND SPORTS",
    "description": "Browse our genuine, authorized elite sports equipment including SS/SG cricket bats, Yonex carbon-fibre rackets, Nivia footballs, and gym plates. Each product features direct WhatsApp enquiry.",
    "url": "https://jaihindsports.in/products"
  };

  return (
    <div className="relative min-h-screen bg-[#060606] pt-24 pb-20 text-white selection:bg-brand-saffron/30 font-sans">
      <SEO 
        title="Premium Sports Catalog | JAI HIND SPORTS Coimbatore"
        description="Explore JAI HIND SPORTS Coimbatore's premium digital catalog. English & Kashmir willow bats, professional Yonex carbon rackets, heavy-duty gym plates, football studs with live WhatsApp inquiry."
        keywords="Sports equipment catalog, Cricket bats Coimbatore, Yonex badminton racket price, Gym dumbbells Coimbatore, buy sports gear Coimbatore"
        canonicalUrl="https://jaihindsports.in/products"
        jsonLd={JSON_LD_DATA}
      />
      
      {/* Decorative Atmosphere Backdrops */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-brand-saffron/5 blur-[150px] rounded-full pointer-events-none z-0" />
      <div className="absolute top-2/4 right-10 w-[500px] h-[500px] bg-brand-green/5 blur-[180px] rounded-full pointer-events-none z-0" />
      <div className="absolute bottom-10 left-1/3 w-96 h-96 bg-blue-500/[0.03] blur-[150px] rounded-full pointer-events-none z-0" />

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">

        {/* ==========================================
            A. LUXURIOUS HEADER BLOCK
            ========================================== */}
        <div className="mb-14 text-left border-b border-white/5 pb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-saffron/15 text-[10px] font-mono font-bold tracking-widest text-brand-saffron uppercase mb-4 border border-brand-saffron/20 shadow-lg shadow-brand-saffron/5">
            <Trophy className="w-3.5 h-3.5" />
            <span>Coimbatore's Premier Authorized Sports Showroom</span>
          </div>
          
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white uppercase tracking-tighter font-display leading-none">
            THE CATALOGUE <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-saffron to-brand-green-light">OF CHAMPIONS</span>
          </h1>

          {/* Animated tri-color underline divider */}
          <div className="h-[3px] w-36 rounded-full flex overflow-hidden relative mt-4">
            <div className="w-1/3 bg-brand-saffron h-full"></div>
            <div className="w-1/3 bg-white h-full"></div>
            <div className="w-1/3 bg-brand-green h-full"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-brand-saffron via-white to-brand-green-light blur-[4px] opacity-70 animate-pulse" />
          </div>
          
          <p className="text-gray-400 max-w-3xl font-light text-base sm:text-lg mt-4 leading-relaxed">
            Every racquet strung on advanced computer systems, every bat pre-knocked with protective wax, every ball FIFA/FIBA compliant. Experience genuine elite equipment without compromise.
          </p>
        </div>


        {/* ==========================================
            B. FEATURED PREMIUM COLLECTIONS SHOWCASE
            ========================================== */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <div className="space-y-1">
              <span className="text-xs font-mono font-bold tracking-widest text-brand-saffron uppercase">CURATED DISCIPLINES</span>
              <h2 className="text-2xl sm:text-3.5xl font-black uppercase font-display text-white">FEATURED ZONE COLLECTIONS</h2>
            </div>
            <div className="h-[1px] flex-grow mx-8 bg-white/5 hidden md:block" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURED_COLLECTIONS.map((banner) => (
              <div 
                key={banner.id}
                onClick={() => handleBannerExplore(banner.category)}
                className="group relative rounded-2xl overflow-hidden glass-panel hover:border-brand-saffron/35 p-8 flex flex-col justify-between h-[230px] transition-all duration-300 shadow-premium cursor-pointer hover:scale-[1.01]"
              >
                {/* Dynamic Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-tr ${banner.bgGradient} z-0 pointer-events-none opacity-90 transition-all duration-300 group-hover:scale-105`} />
                <div className="absolute top-0 right-0 w-32 h-32 bg-radial-gradient from-white/[0.04] to-transparent rounded-bl-full pointer-events-none" />

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[9px] font-mono tracking-widest font-black text-brand-saffron bg-brand-saffron/15 border border-brand-saffron/20 px-2.5 py-1 rounded font-bold">
                      {banner.imageAccent}
                    </span>
                    <Sparkle className="w-4 h-4 text-gray-600 group-hover:text-brand-saffron transition-colors" />
                  </div>
                  
                  <h3 className="text-xl sm:text-2xl font-black text-white uppercase font-display leading-tight tracking-tight">
                    {banner.title}
                  </h3>
                  <p className="text-xs text-gray-400 font-light mt-1 max-w-[260px] line-clamp-2 leading-relaxed">
                    {banner.subtitle}
                  </p>
                </div>

                <div className="relative z-10 flex items-center justify-between border-t border-white/5 pt-4">
                  <span className="text-[10px] font-mono text-gray-500 uppercase tracking-wide font-medium">Elite Grade</span>
                  <div 
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-brand-green-light group-hover:text-white transition-colors"
                  >
                    <span>EXPLORE ZONE</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>


        {/* ==========================================
            C. SEARCH & QUICK STATUS FILTERS HUB
            ========================================== */}
        <div ref={catalogSectionRef} className="scroll-mt-24 mb-10">
          
          {/* Main search and trigger row */}
          <div className="p-4 rounded-2xl glass-panel flex flex-col lg:flex-row items-center justify-between gap-4 shadow-premium">
            
            {/* Real-time search bar */}
            <div className="relative w-full lg:w-96 group">
              <span className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-500 group-focus-within:text-brand-saffron transition-colors">
                <Search className="w-4.5 h-4.5" />
              </span>
              <input 
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search gear (e.g., Willow, Yonex, Nike, Shoes)..."
                className="w-full pl-11 pr-10 py-3.5 bg-brand-black/60 border border-white/10 rounded-xl text-sm text-gray-100 placeholder-gray-500 focus:outline-none focus:border-brand-saffron/50 focus:ring-1 focus:ring-brand-saffron/30 transition-all"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery("")}
                  className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-gray-500 hover:text-white"
                  title="Clear search"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Quick status chips / Mobile filters trigger */}
            <div className="flex flex-wrap items-center gap-2 w-full lg:w-auto justify-end">
              
              {/* Show Active Count Badge */}
              {(selectedCategory || selectedBrands.length > 0 || selectedStatus || searchQuery) && (
                <button
                  onClick={resetFilters}
                  className="flex items-center gap-1.5 px-3 py-2.5 bg-brand-saffron/10 hover:bg-brand-saffron/20 border border-brand-saffron/20 rounded-xl text-xs font-mono text-brand-saffron font-bold uppercase transition-all"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset Filters</span>
                </button>
              )}

              {/* Status Filters - Desktop Selectors */}
              <div className="hidden sm:flex items-center gap-1.5 bg-brand-black/40 p-1.5 rounded-xl border border-white/5">
                <span className="text-[9px] font-mono tracking-widest text-gray-500 uppercase px-2 font-black">QUICK BADGES:</span>
                {BADGES.map((badge) => (
                  <button
                    key={badge}
                    onClick={() => setSelectedStatus(selectedStatus === badge ? null : badge)}
                    className={`px-3 py-1.5 rounded-lg text-[10px] font-mono font-bold uppercase tracking-wider transition-all duration-300 ${
                      selectedStatus === badge
                        ? "bg-brand-saffron text-white shadow-lg shadow-brand-saffron/20"
                        : "bg-transparent text-gray-400 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {badge}
                  </button>
                ))}
              </div>

              {/* Mobile Filter Drawer trigger */}
              <button 
                onClick={() => setMobileFiltersOpen(true)}
                className="lg:hidden w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-3.5 bg-brand-card hover:bg-white/5 text-xs text-white font-mono font-bold uppercase rounded-xl border border-white/10 transition-colors"
              >
                <SlidersHorizontal className="w-4 h-4 text-brand-saffron" />
                <span>Filter & Sort</span>
                {(selectedBrands.length > 0 || selectedCategory) && (
                  <span className="w-2.5 h-2.5 rounded-full bg-brand-saffron animate-pulse" />
                )}
              </button>

            </div>
          </div>

          {/* Quick Filter Info strip */}
          {(selectedCategory || selectedBrands.length > 0 || selectedStatus) && (
            <div className="mt-3 flex flex-wrap items-center gap-2 text-xs font-mono text-gray-400 pl-2">
              <span className="text-gray-600 uppercase text-[9px] font-black">Active filter tags:</span>
              
              {selectedCategory && (
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-white/5 border border-white/10 text-[10px]">
                  Category: <strong className="text-white font-black">{selectedCategory}</strong>
                  <X className="w-3 h-3 text-gray-500 hover:text-white cursor-pointer" onClick={() => setSelectedCategory(null)} />
                </span>
              )}

              {selectedBrands.map((b) => (
                <span key={b} className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-white/5 border border-white/10 text-[10px]">
                  Brand: <strong className="text-white font-black">{b}</strong>
                  <X className="w-3 h-3 text-gray-500 hover:text-white cursor-pointer" onClick={() => toggleBrand(b)} />
                </span>
              ))}

              {selectedStatus && (
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-white/5 border border-white/10 text-[10px]">
                  Badge: <strong className="text-white font-black">{selectedStatus}</strong>
                  <X className="w-3 h-3 text-gray-500 hover:text-white cursor-pointer" onClick={() => setSelectedStatus(null)} />
                </span>
              )}
            </div>
          )}
        </div>


        {/* ==========================================
            D. MAIN GRID AND DESKTOP SIDEBARS
            ========================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* DESKTOP STICKY SIDEBAR (Col span 3) */}
          <aside className="hidden lg:block lg:col-span-3 space-y-6 sticky top-24">
            
            {/* Categories List Sidebar */}
            <div className="p-6 rounded-2xl bg-brand-card/40 border border-white/5 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-white/5">
                <span className="text-xs font-mono font-bold tracking-widest text-brand-saffron uppercase">DISCIPLINE STACK</span>
                <Filter className="w-3.5 h-3.5 text-gray-500" />
              </div>
              
              <div className="space-y-1">
                <button
                  onClick={() => setSelectedCategory(null)}
                  className={`w-full text-left px-3.5 py-2.5 rounded-xl text-xs font-mono font-bold uppercase tracking-wider transition-all flex items-center justify-between ${
                    selectedCategory === null
                      ? "bg-brand-saffron/15 text-brand-saffron border border-brand-saffron/20"
                      : "text-gray-400 hover:text-white hover:bg-white/5 border border-transparent"
                  }`}
                >
                  <span>ALL DISCIPLINES</span>
                  <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-white/5 text-gray-500">
                    {PRODUCTS_LIST.length}
                  </span>
                </button>

                {CATEGORIES.map((cat) => {
                  const count = PRODUCTS_LIST.filter(p => p.category === cat).length;
                  return (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`w-full text-left px-3.5 py-2.5 rounded-xl text-xs font-mono font-bold uppercase tracking-wider transition-all flex items-center justify-between ${
                        selectedCategory === cat
                          ? "bg-brand-saffron/15 text-brand-saffron border border-brand-saffron/20"
                          : "text-gray-400 hover:text-white hover:bg-white/5 border border-transparent"
                      }`}
                    >
                      <span className="truncate pr-1">{cat}</span>
                      <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-white/5 text-gray-500">
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Brands Checklist Sidebar */}
            <div className="p-6 rounded-2xl bg-brand-card/40 border border-white/5 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-white/5">
                <span className="text-xs font-mono font-bold tracking-widest text-brand-green-light uppercase">PARTNER BRANDS</span>
                <span className="text-[9px] font-mono text-gray-500">{BRANDS.length} AUTHORIZED</span>
              </div>

              <div className="grid grid-cols-2 gap-2">
                {BRANDS.map((brand) => {
                  const isChecked = selectedBrands.includes(brand);
                  return (
                    <button
                      key={brand}
                      onClick={() => toggleBrand(brand)}
                      className={`px-3 py-2.5 rounded-xl text-[10px] font-mono font-bold uppercase tracking-wider transition-all border flex items-center justify-between ${
                        isChecked
                          ? "bg-brand-green/10 text-brand-green-light border-brand-green/30"
                          : "bg-transparent text-gray-500 border-white/5 hover:text-white hover:border-white/10"
                      }`}
                    >
                      <span>{brand}</span>
                      {isChecked && <Check className="w-3 h-3 text-brand-green-light" />}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Genuine Guarantee Box */}
            <div className="p-5 rounded-2xl bg-[#090909] border border-white/5 space-y-3">
              <div className="flex items-center gap-2 text-brand-green-light">
                <ShieldCheck className="w-5 h-5 flex-shrink-0" />
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider">JAI HIND ASSURED</h4>
              </div>
              <p className="text-[11px] text-gray-500 leading-relaxed font-light">
                We absolutely guarantee that we do not deal in duplicate, counterfeit, or grey-market items. All rackets, willow blades, and accessories are shipped or collected directly from brand authorized stocks.
              </p>
            </div>

          </aside>


          {/* PRODUCTS GRID AREA (Col span 9) */}
          <main className="lg:col-span-9 space-y-10">
            
            {/* Grid count header & Status info */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-2xl font-black font-display text-white">
                  {filteredProducts.length}
                </span>
                <span className="text-xs font-mono text-gray-500 uppercase tracking-widest">
                  ITEMS LOCATED IN SHOWROOM
                </span>
              </div>
              <div className="flex items-center gap-2 text-[10px] font-mono text-gray-500">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>ONLINE ASSISTANCE ACTIVE</span>
              </div>
            </div>

            {/* Product Card Grid */}
            <AnimatePresence mode="popLayout">
              {filteredProducts.length === 0 ? (
                
                // --- ELEGANT EMPTY STATE ---
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.5 }}
                  className="p-12 sm:p-20 rounded-3xl glass-panel border border-white/5 text-center max-w-2xl mx-auto space-y-6 bg-brand-card/10 backdrop-blur-3xl"
                >
                  <div className="w-20 h-20 rounded-full bg-brand-saffron/10 flex items-center justify-center mx-auto border border-brand-saffron/20 shadow-lg shadow-brand-saffron/5">
                    <ShoppingBag className="w-10 h-10 text-brand-saffron" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-2xl font-black text-white uppercase font-display">NO MATCHING PRODUCTS</h3>
                    <p className="text-xs sm:text-sm text-gray-400 font-light max-w-md mx-auto leading-relaxed">
                      We couldn't locate any products matching your current combination of filters. Try another discipline or reset selectors to explore our full catalogue range.
                    </p>
                  </div>

                  {/* Suggestive quick categories to fix filter */}
                  <div className="pt-2">
                    <p className="text-[10px] font-mono text-gray-500 uppercase tracking-widest font-black mb-3">POPULAR DEPARTMENTS</p>
                    <div className="flex flex-wrap justify-center gap-2">
                      {["Cricket", "Badminton", "Football", "Sports Shoes"].map((sugg) => (
                        <button
                          key={sugg}
                          onClick={() => {
                            setSelectedCategory(sugg);
                            setSelectedBrands([]);
                            setSelectedStatus(null);
                          }}
                          className="px-3.5 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-gray-400 hover:text-white hover:border-brand-saffron/30 transition-all"
                        >
                          {sugg}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/5">
                    <button
                      onClick={resetFilters}
                      className="px-6 py-3 bg-white text-brand-black hover:bg-brand-saffron hover:text-white font-mono font-bold text-xs uppercase tracking-widest rounded-xl transition-all"
                    >
                      CLEAR ALL FILTERS
                    </button>
                  </div>
                </motion.div>

              ) : (
                
                // --- PREMIUM RESPONSIVE GRID ---
                <motion.div 
                  layout
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                  {filteredProducts.map((product) => (
                    <motion.div
                      layout
                      key={product.id}
                      initial={{ opacity: 0, scale: 0.98 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4 }}
                      className="group flex flex-col justify-between bg-brand-card hover:bg-brand-card/70 border border-white/5 hover:border-brand-saffron/20 rounded-2xl overflow-hidden transition-all duration-300 shadow-xl"
                    >
                      {/* 1. Visual Showcase Placeholder Frame */}
                      <div 
                        onClick={() => setActiveQuickViewProduct(product)}
                        className="relative w-full aspect-square overflow-hidden cursor-pointer bg-neutral-950 p-6 flex flex-col justify-between border-b border-white/5 group-hover:border-white/10"
                      >
                        {/* Interactive glow overlay */}
                        <div className={`absolute inset-0 bg-gradient-to-tr ${product.visualGradient} z-0 pointer-events-none opacity-40 group-hover:opacity-75 transition-opacity duration-300`} />
                        <div className="absolute top-0 right-0 w-32 h-32 bg-radial-gradient from-white/[0.03] to-transparent rounded-bl-full pointer-events-none" />

                        {/* Card top banner/badges */}
                        <div className="relative z-10 flex justify-between items-start">
                          <span className="text-[8px] font-mono tracking-widest text-brand-saffron bg-brand-saffron/15 border border-brand-saffron/20 px-2.5 py-1 rounded-md font-black">
                            {product.brand} ORIGINAL
                          </span>
                          
                          {/* Elegant Status Badge */}
                          <span className="text-[8px] font-mono tracking-widest text-white bg-white/10 px-2.5 py-1 rounded-md font-bold uppercase">
                            {product.status}
                          </span>
                        </div>

                        {/* Centered Large Showcase Abbreviation/Graphics (Indicating high-contrast premium layout) */}
                        <div className="relative z-10 flex flex-col items-center justify-center my-auto py-8">
                          <span className="text-4xl font-black text-white/5 select-none font-display mb-2 group-hover:scale-110 transition-transform duration-300">
                            {product.brand}
                          </span>
                          <span className="text-xl font-bold text-white uppercase tracking-wider text-center max-w-[180px] drop-shadow-md">
                            {product.iconSymbol}
                          </span>
                        </div>

                        {/* Interactive footer click helper */}
                        <div className="relative z-10 flex justify-between items-center text-[9px] font-mono text-gray-500 bg-brand-black/40 px-2 py-1.5 rounded border border-white/5">
                          <span className="uppercase">Click for Quick View</span>
                          <span className="text-brand-saffron font-bold flex items-center gap-0.5">
                            <span>DETAILS</span>
                            <ChevronRight className="w-3 h-3" />
                          </span>
                        </div>
                      </div>

                      {/* 2. Content Info Panel */}
                      <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                        <div className="space-y-1.5">
                          {/* Category and brand tags */}
                          <div className="flex items-center justify-between text-[10px] font-mono text-gray-500 uppercase tracking-wider font-semibold">
                            <span>{product.category}</span>
                            <span className="text-brand-green-light">{product.brand}</span>
                          </div>

                          <h3 
                            onClick={() => setActiveQuickViewProduct(product)}
                            className="text-lg font-black text-white uppercase font-display leading-tight tracking-tight hover:text-brand-saffron cursor-pointer transition-colors"
                          >
                            {product.name}
                          </h3>

                          <p className="text-xs text-gray-400 font-light line-clamp-2 leading-relaxed">
                            {product.description}
                          </p>
                        </div>

                        {/* Quick detail specifications summary */}
                        <div className="border-t border-white/5 pt-4 space-y-3">
                          <div className="flex flex-wrap gap-1">
                            {product.features.slice(0, 2).map((feat, i) => (
                              <span key={i} className="text-[9px] font-mono text-gray-400 bg-white/5 px-2 py-1 rounded border border-white/5">
                                ✓ {feat}
                              </span>
                            ))}
                          </div>

                          {/* CTA Enquire on WhatsApp Button */}
                          <a 
                            href={getWhatsAppLink(product)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full py-3 bg-brand-black hover:bg-[#111111] text-white font-mono font-bold text-[10px] uppercase tracking-widest rounded-xl flex items-center justify-center gap-2.5 border border-white/10 hover:border-brand-saffron/40 hover:text-brand-saffron transition-all duration-300"
                          >
                            <MessageSquare className="w-4 h-4 text-brand-green-light group-hover:text-brand-saffron" />
                            <span>Enquire on WhatsApp</span>
                          </a>
                        </div>
                      </div>

                    </motion.div>
                  ))}
                </motion.div>

              )}
            </AnimatePresence>

          </main>
        </div>


        {/* ==========================================
            E. PROFESSIONAL SPECS & HELP INVITATION
            ========================================== */}
        <div className="mt-24 rounded-3xl bg-brand-card/50 border border-white/5 overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-r from-brand-saffron/10 via-transparent to-transparent pointer-events-none" />
          
          <div className="p-8 md:p-14 max-w-4xl relative z-10 space-y-6">
            <span className="text-xs font-mono font-bold tracking-widest text-brand-saffron uppercase">DIRECT CONSULTATIONS ACTIVE</span>
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase font-display leading-tight">
              Looking for custom weights, string tensions or personalized grips?
            </h2>
            <p className="text-gray-300 text-base md:text-lg font-light leading-relaxed">
              We know professional sports gear is highly personalized. Instead of mailing standard out-of-the-box packages, our technicians coordinate with you on WhatsApp. Tell us your requested racket tension or bat grain count, and we will hand-select your piece.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a 
                href={STORE_DETAILS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-gradient-to-r from-brand-saffron to-brand-saffron-light text-white font-mono font-bold text-xs uppercase tracking-widest rounded-xl text-center flex items-center justify-center gap-2 hover:shadow-xl hover:shadow-brand-saffron/20 hover:scale-[1.02] transition-all"
              >
                <MessageSquare className="w-4.5 h-4.5" />
                <span>WHATSAPP CONSULTATION</span>
              </a>
              <a 
                href={`tel:${STORE_DETAILS.phone}`}
                className="px-8 py-4 bg-brand-card/80 hover:bg-white/5 text-white font-mono font-bold text-xs uppercase tracking-widest rounded-xl text-center flex items-center justify-center gap-2 border border-white/10 hover:border-brand-saffron/30 hover:scale-[1.02] transition-all"
              >
                <PhoneCall className="w-4.5 h-4.5 text-brand-saffron" />
                <span>CALL SHOWROOM HELPLINE</span>
              </a>
            </div>
          </div>
        </div>


        {/* ==========================================
            F. PREMIUM QUICK VIEW MODAL (AnimatePresence)
            ========================================== */}
        <AnimatePresence>
          {activeQuickViewProduct && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-brand-black/90 backdrop-blur-md z-50 flex items-center justify-center p-4 overflow-y-auto"
            >
              <motion.div 
                initial={{ scale: 0.95, y: 15 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 15 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="bg-brand-card border border-white/10 rounded-2xl w-full max-w-4xl overflow-hidden shadow-2xl relative my-8"
              >
                
                {/* Close Button absolute */}
                <button 
                  onClick={() => setActiveQuickViewProduct(null)}
                  className="absolute top-5 right-5 p-2 rounded-xl bg-brand-black/60 border border-white/10 text-gray-400 hover:text-white transition-colors z-30"
                  title="Close Modal"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="grid grid-cols-1 md:grid-cols-12">
                  
                  {/* Left Side: Dynamic Showcase (Col span 5) */}
                  <div className="md:col-span-5 relative bg-neutral-950 p-8 flex flex-col justify-between min-h-[300px] md:min-h-full">
                    {/* Atmospheric color bleed */}
                    <div className={`absolute inset-0 bg-gradient-to-tr ${activeQuickViewProduct.visualGradient} z-0 opacity-60`} />
                    
                    <div className="relative z-10">
                      <span className="text-[10px] font-mono tracking-widest text-brand-saffron bg-brand-saffron/20 px-2.5 py-1 rounded font-bold uppercase">
                        {activeQuickViewProduct.brand} ORIGINAL
                      </span>
                    </div>

                    <div className="relative z-10 text-center my-auto py-12">
                      <span className="text-6xl font-black text-white/5 select-none font-display block mb-1">
                        {activeQuickViewProduct.brand}
                      </span>
                      <span className="text-3xl font-bold text-white uppercase tracking-wider block drop-shadow-md">
                        {activeQuickViewProduct.iconSymbol}
                      </span>
                      <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest block mt-4">
                        COIMBATORE SHOWROOM REFERENCE
                      </span>
                    </div>

                    <div className="relative z-10 bg-brand-black/50 p-4 rounded-xl border border-white/5 text-[10px] font-mono space-y-1">
                      <div className="flex justify-between">
                        <span className="text-gray-500">CATEGORY:</span>
                        <span className="text-white font-bold">{activeQuickViewProduct.category}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">WARRANTY:</span>
                        <span className="text-brand-green-light font-bold">BRAND ORIGINAL</span>
                      </div>
                    </div>
                  </div>

                  {/* Right Side: Detailed specs & information (Col span 7) */}
                  <div className="md:col-span-7 p-6 sm:p-10 space-y-6 max-h-[85vh] overflow-y-auto">
                    
                    {/* Header */}
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-xs font-mono text-brand-saffron font-bold uppercase">
                        <span>{activeQuickViewProduct.brand} Outfitting</span>
                        <span>•</span>
                        <span className="text-brand-green-light">{activeQuickViewProduct.status}</span>
                      </div>
                      <h2 className="text-2xl sm:text-3.5xl font-black text-white uppercase font-display leading-tight">
                        {activeQuickViewProduct.name}
                      </h2>
                    </div>

                    {/* Detailed long description */}
                    <div className="space-y-2">
                      <h4 className="text-[10px] font-mono text-gray-500 uppercase tracking-widest font-black">OVERVIEW</h4>
                      <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed">
                        {activeQuickViewProduct.longDescription}
                      </p>
                    </div>

                    {/* Features list */}
                    <div className="space-y-2.5">
                      <h4 className="text-[10px] font-mono text-gray-500 uppercase tracking-widest font-black">PRODUCT KEY FEATURES</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {activeQuickViewProduct.features.map((feat, index) => (
                          <div key={index} className="flex items-center gap-2 text-xs text-gray-400">
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-saffron flex-shrink-0" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Colors & Sizes Grid */}
                    <div className="grid grid-cols-2 gap-4 border-t border-white/5 pt-4">
                      <div>
                        <h4 className="text-[10px] font-mono text-gray-500 uppercase tracking-widest font-black mb-2">AVAILABLE SIZES</h4>
                        <div className="flex flex-wrap gap-1">
                          {activeQuickViewProduct.sizes.map((sz) => (
                            <span key={sz} className="px-2.5 py-1 rounded bg-brand-black border border-white/5 text-[10px] font-mono text-gray-300">
                              {sz}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-[10px] font-mono text-gray-500 uppercase tracking-widest font-black mb-2">AVAILABLE STYLES</h4>
                        <div className="flex flex-wrap gap-1">
                          {activeQuickViewProduct.colors.map((col) => (
                            <span key={col} className="px-2.5 py-1 rounded bg-brand-black border border-white/5 text-[10px] font-mono text-gray-300">
                              {col}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Specifications table */}
                    <div className="border-t border-white/5 pt-4 space-y-2">
                      <h4 className="text-[10px] font-mono text-gray-500 uppercase tracking-widest font-black">TECHNICAL SPECIFICATIONS</h4>
                      <div className="bg-brand-black/40 rounded-xl overflow-hidden border border-white/5 text-xs">
                        {Object.entries(activeQuickViewProduct.specifications).map(([key, val], idx) => (
                          <div 
                            key={key} 
                            className={`flex justify-between p-3 border-b border-white/5 last:border-none ${
                              idx % 2 === 0 ? "bg-white/[0.01]" : ""
                            }`}
                          >
                            <span className="text-gray-500 font-mono uppercase text-[10px]">{key}</span>
                            <span className="text-white text-right font-medium">{val}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* WhatsApp Action row */}
                    <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row gap-3 items-center justify-between">
                      <div className="text-left font-sans space-y-0.5">
                        <span className="text-[9px] font-mono text-gray-500 uppercase tracking-wide block">ASSISTANCE GUARANTEED</span>
                        <span className="text-xs text-brand-green-light font-bold flex items-center gap-1.5">
                          <span>Verified Store Stock</span>
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        </span>
                      </div>

                      <a 
                        href={getWhatsAppLink(activeQuickViewProduct)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto px-8 py-4 bg-[#25D366] hover:bg-[#20ba59] text-black font-mono font-bold text-xs uppercase tracking-widest rounded-xl flex items-center justify-center gap-2.5 shadow-lg shadow-[#25D366]/10 transition-all hover:scale-[1.03]"
                      >
                        <MessageSquare className="w-4.5 h-4.5" />
                        <span>Enquire on WhatsApp</span>
                      </a>
                    </div>

                  </div>

                </div>

              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>


        {/* ==========================================
            G. MOBILE FILTER DRAWER (AnimatePresence)
            ========================================== */}
        <AnimatePresence>
          {mobileFiltersOpen && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-brand-black/80 backdrop-blur-md z-50 lg:hidden flex justify-end"
            >
              <motion.div 
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "tween", duration: 0.3 }}
                className="w-full max-w-md bg-brand-card h-full p-6 space-y-6 overflow-y-auto flex flex-col justify-between"
              >
                
                {/* Header */}
                <div className="space-y-6">
                  <div className="flex items-center justify-between pb-4 border-b border-white/10">
                    <div className="flex items-center gap-2 text-brand-saffron">
                      <SlidersHorizontal className="w-5 h-5" />
                      <h3 className="font-bold font-display uppercase tracking-wider text-white">FILTER CATALOGUE</h3>
                    </div>
                    <button 
                      onClick={() => setMobileFiltersOpen(false)}
                      className="p-2 rounded-xl bg-white/5 border border-white/5 text-gray-400 hover:text-white"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Discipline category stack list */}
                  <div className="space-y-3">
                    <span className="text-[10px] font-mono font-bold text-gray-500 uppercase tracking-widest">DISCIPLINES</span>
                    <div className="flex flex-wrap gap-1.5">
                      <button
                        onClick={() => setSelectedCategory(null)}
                        className={`px-3 py-2 rounded-xl text-[10px] font-mono font-bold uppercase transition-all ${
                          selectedCategory === null
                            ? "bg-brand-saffron text-white"
                            : "bg-brand-black/40 text-gray-400 hover:text-white border border-white/5"
                        }`}
                      >
                        ALL DISCIPLINES
                      </button>

                      {CATEGORIES.map((cat) => (
                        <button
                          key={cat}
                          onClick={() => setSelectedCategory(cat)}
                          className={`px-3 py-2 rounded-xl text-[10px] font-mono font-bold uppercase transition-all ${
                            selectedCategory === cat
                              ? "bg-brand-saffron text-white"
                              : "bg-brand-black/40 text-gray-400 hover:text-white border border-white/5"
                          }`}
                        >
                          {cat}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Brands checklist list */}
                  <div className="space-y-3 pt-4 border-t border-white/10">
                    <span className="text-[10px] font-mono font-bold text-gray-500 uppercase tracking-widest">AUTHORIZED BRANDS</span>
                    <div className="grid grid-cols-2 gap-2">
                      {BRANDS.map((brand) => {
                        const isChecked = selectedBrands.includes(brand);
                        return (
                          <button
                            key={brand}
                            onClick={() => toggleBrand(brand)}
                            className={`px-3 py-2.5 rounded-xl text-[10px] font-mono font-bold uppercase tracking-wider transition-all border flex items-center justify-between ${
                              isChecked
                                ? "bg-brand-green/10 text-brand-green-light border-brand-green/30"
                                : "bg-brand-black/40 text-gray-400 border-white/5 hover:text-white"
                            }`}
                          >
                            <span>{brand}</span>
                            {isChecked && <Check className="w-3.5 h-3.5 text-brand-green-light" />}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Badges list */}
                  <div className="space-y-3 pt-4 border-t border-white/10">
                    <span className="text-[10px] font-mono font-bold text-gray-500 uppercase tracking-widest">STATUS BADGES</span>
                    <div className="flex flex-wrap gap-1.5">
                      {BADGES.map((badge) => (
                        <button
                          key={badge}
                          onClick={() => setSelectedStatus(selectedStatus === badge ? null : badge)}
                          className={`px-3 py-2 rounded-xl text-[10px] font-mono font-bold uppercase transition-all ${
                            selectedStatus === badge
                              ? "bg-brand-saffron text-white"
                              : "bg-brand-black/40 text-gray-400 hover:text-white border border-white/5"
                          }`}
                        >
                          {badge}
                        </button>
                      ))}
                    </div>
                  </div>

                </div>

                {/* Confirm action bottom row */}
                <div className="pt-6 border-t border-white/10 flex gap-3">
                  <button
                    onClick={() => {
                      resetFilters();
                      setMobileFiltersOpen(false);
                    }}
                    className="flex-1 py-3.5 bg-white/5 text-gray-400 font-mono font-bold text-xs uppercase tracking-widest rounded-xl text-center"
                  >
                    Reset All
                  </button>
                  <button
                    onClick={() => setMobileFiltersOpen(false)}
                    className="flex-1 py-3.5 bg-gradient-to-r from-brand-saffron to-brand-saffron-light text-white font-mono font-bold text-xs uppercase tracking-widest rounded-xl text-center"
                  >
                    View {filteredProducts.length} Items
                  </button>
                </div>

              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}
