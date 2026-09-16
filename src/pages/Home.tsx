/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link, useNavigate } from "react-router-dom";
import { 
  Trophy, 
  MapPin, 
  Sparkles, 
  Phone, 
  ArrowRight, 
  ShoppingBag, 
  ShieldCheck, 
  Zap,
  Clock,
  Star,
  CheckCircle2,
  Building2,
  ChevronDown,
  MessageSquare,
  Sparkle,
  Award,
  Layers,
  Flame,
  Target,
  Briefcase,
  Users,
  Wrench,
  Play,
  X,
  Film
} from "lucide-react";
import { STORE_DETAILS } from "../constants";
import SEO from "../components/SEO";

export default function Home() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  // Auto-transition loading screen for a premium experience
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  const handleCategoryClick = (category: string) => {
    navigate("/products", { state: { category } });
  };

  const handleGalleryZoneClick = (category: string) => {
    navigate("/gallery", { state: { category } });
  };

  // 1. Trust Strip Items
  const trustStrip = [
    { label: "100% Genuine Products", desc: "No gray-market duplicates", icon: ShieldCheck },
    { label: "Authorized Brands", desc: "Direct official partner", icon: Award },
    { label: "Bulk Orders", desc: "Custom school & club setups", icon: Layers },
    { label: "School Supplies", desc: "Coimbatore academy partner", icon: Trophy },
    { label: "Expert Guidance", desc: "Technical gear consultants", icon: Sparkles },
    { label: "Trusted Local Store", desc: "Serving for over a decade", icon: MapPin }
  ];

  // 2. Sports in Motion list
  const sportsInMotion = [
    { sport: "Cricket", tag: "Power Play", desc: "Precision Willow Balance & Edge Control", path: "M5 19L19 5M12 12l2 2m4-8a2 2 0 11-4 0 2 2 0 014 0z" },
    { sport: "Football", tag: "Active Tread", desc: "High Grip Touch & Fluid Curve Control", path: "M12 2a10 10 0 100 20 10 10 0 000-20zm0 0v20M2 12h20" },
    { sport: "Badminton", tag: "Aerodynamic", desc: "High-flex shafts with micro-tension stringing", path: "M14.7 9.3l4 4M9.3 14.7l-4-4M19 5l-7 7m-5 5l2 2" },
    { sport: "Basketball", tag: "Perfect Grip", desc: "Heavy friction moisture-absorbing seams", path: "M12 22a10 10 0 110-20 10 10 0 010 20z M6 12a6 6 0 0112 0" },
    { sport: "Volleyball", tag: "Soft-Touch", desc: "Impact cushioning synthetic leather build", path: "M12 2a10 10 0 100 20 10 10 0 000-20z M2 12c5 0 8 3 10 8" },
    { sport: "Running", tag: "Energy Return", desc: "Lightweight soles with responsive heel support", path: "M13 10V3L4 14h7v7l9-11h-7z" }
  ];

  // 3. Featured Showcase Collections (Ready for direct input / no fake products)
  const collections = [
    { title: "Premium Cricket Collection", subtitle: "English & Kashmir Willow Blades", count: "Professional Range", bgGradient: "from-brand-saffron/20 to-transparent", label: "VIEW CRICKET", category: "Cricket" },
    { title: "Badminton Professional Series", subtitle: "High Tension Carbon Rackets & Strings", count: "Pro Customization", bgGradient: "from-brand-green/20 to-transparent", label: "VIEW COURT GEAR", category: "Badminton" },
    { title: "Fitness & Strength Essentials", subtitle: "Cast Iron Weights, Dumbbells & Accessories", count: "Heavy Duty Build", bgGradient: "from-blue-500/10 to-transparent", label: "VIEW FITNESS", category: "Gym Equipment" },
    { title: "Football Arena Equipment", subtitle: "High Friction Turf Cleats & FIFA-Spec Balls", count: "Elite Performance", bgGradient: "from-purple-500/10 to-transparent", label: "VIEW SOCCER", category: "Football" },
    { title: "School Sports Equipment", subtitle: "Bulk Training Gear, Cones, Nets & Bibs", count: "Tournament Packages", bgGradient: "from-yellow-500/10 to-transparent", label: "VIEW BULK DEALS", category: "School Sports Equipment" }
  ];

  // 4. Custom Services
  const services = [
    { title: "Team Jerseys", desc: "High fidelity sublimation printing, premium team decals, and custom player numbers.", icon: Flame, tag: "CREW ONLY" },
    { title: "Tournament Supplies", desc: "Providing premium trophy sets, professional match-balls, scoreboard kits, and ground markers.", icon: Trophy, tag: "EVENT SETUP" },
    { title: "Bulk Orders", desc: "Customized wellness kits and sports league tournament gear for tech-parks and corporate groups.", icon: Briefcase, tag: "BUSINESS FIRST" },
    { title: "Sports Academy Equipment", desc: "Heavy-duty training ladders, markers, whistles, coaching boards, and professional soccer bibs.", icon: Target, tag: "ACADEMY LEVEL" },
    { title: "School Sports Kits", desc: "Complete bundles for physical education departments including standard volleyballs, nets, and markers.", icon: Users, tag: "CURRICULUM BULK" },
    { title: "Professional Product Guidance", desc: "Bespoke consultations on selecting the ideal bat weight, racket string tension, or shoe studs.", icon: Wrench, tag: "EXPERT ADVICE" }
  ];

  // 5. Brands scrolling lists
  const marqueeBrands = [
    { name: "SS", origin: "India" },
    { name: "SG", origin: "India" },
    { name: "MRF", origin: "India" },
    { name: "YONEX", origin: "Japan" },
    { name: "COSCO", origin: "India" },
    { name: "NIVIA", origin: "India" },
    { name: "VECTOR X", origin: "India" },
    { name: "ADIDAS", origin: "Germany" },
    { name: "NIKE", origin: "USA" },
    { name: "PUMA", origin: "Germany" }
  ];

  const doubledBrands = [...marqueeBrands, ...marqueeBrands, ...marqueeBrands];

  // 6. Testimonials
  const testimonialsList = [
    {
      name: "Verified Google Reviewer",
      rating: 5,
      date: "Recent Review",
      text: "Outstanding customer service and absolute genuine sports goods. Jai Hind Sports is the only reliable showroom in Coimbatore for real Yonex rackets and authentic SG bats. Highly recommended for professionals."
    },
    {
      name: "Coimbatore Club Athlete",
      rating: 5,
      date: "Recent Review",
      text: "The customized racket gutting they performed was of top international quality. Expert guidance is what sets them apart from typical retail chains. Visited VRS Nagar shop and left extremely satisfied."
    }
  ];

  // 7. Gallery zones
  const galleryZones = [
    { 
      title: "Bespoke Cricket Rack", 
      desc: "Aligned English Willow bats displaying clear straight grains, oil-treated & knocked to perfection.",
      image: "https://images.unsplash.com/photo-1531415080295-5a79bc90153c?q=80&w=600&auto=format&fit=crop",
      category: "cricket"
    },
    { 
      title: "Pro Racket Stringing Desk", 
      desc: "Equipped with specialized computerized gutting stations for precise, professional string tensioning.",
      image: "https://images.unsplash.com/photo-1542382156909-9ae37b3f56fd?q=80&w=600&auto=format&fit=crop",
      category: "badminton"
    },
    { 
      title: "Footwear & Studs Vault", 
      desc: "Row after row of genuine high-traction football studs, non-marking court shoes, and running flats.",
      image: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?q=80&w=600&auto=format&fit=crop",
      category: "football"
    },
    { 
      title: "Premium Fitness Showcase", 
      desc: "Cast-iron dumbbells, solid gym plates, Olympic bars, and dynamic structural support kits.",
      image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=600&auto=format&fit=crop",
      category: "fitness"
    }
  ];

  const JSON_LD_DATA = {
    "@context": "https://schema.org",
    "@type": "SportsStore",
    "name": "JAI HIND SPORTS",
    "description": "Coimbatore's premium authorized sports showroom since 2012. Authentic English Willow cricket bats, Yonex carbon-fibre rackets, computerized racket gutting, football studs, gym accessories.",
    "image": [
      "https://images.unsplash.com/photo-1541252260730-0412e8e2108e?q=80&w=800&auto=format&fit=crop"
    ],
    "priceRange": "$$",
    "telephone": "+919629024175",
    "email": "jaihindsports1@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "2/17, 17A, VRS Nagar, Near Cheran Maa Nagar, Vilankurichi",
      "addressLocality": "Coimbatore",
      "addressRegion": "Tamil Nadu",
      "postalCode": "641035",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "11.042500",
      "longitude": "77.017500"
    },
    "url": "https://jaihindsports.in",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "09:30",
        "closes": "21:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Sunday",
        "opens": "10:30",
        "closes": "20:30"
      }
    ],
    "sameAs": [
      "https://instagram.com/jai_hind_sports_shop",
      "https://facebook.com/jai_hind_sports_shop"
    ]
  };

  return (
    <div className="relative min-h-screen bg-brand-black text-white selection:bg-brand-saffron/30 selection:text-white overflow-hidden font-sans">
      
      <SEO 
        title="JAI HIND SPORTS | Premium Authorized Sports Showroom Coimbatore"
        description="Coimbatore's premier authorized showroom since 2012. Buy genuine SS/SG Cricket Bats, Yonex Badminton Rackets with computer gutting, Nivia Football Studs, and wholesale academy items."
        keywords="Sports Shop Coimbatore, Jai Hind Sports, Cricket Bats Coimbatore, Yonex Badminton Coimbatore, Vilankurichi Sports Shop, Cheran Maa Nagar, Sports Equipment Coimbatore"
        canonicalUrl="https://jaihindsports.in/"
        jsonLd={JSON_LD_DATA}
      />
      
      {/* PREMIUM LOADING SCREEN */}
      <AnimatePresence>
        {loading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed inset-0 bg-brand-black z-50 flex flex-col items-center justify-center p-4"
          >
            <div className="space-y-6 text-center max-w-md">
              <div className="flex justify-center gap-1.5 mb-2">
                <motion.span 
                  animate={{ scale: [1, 1.3, 1] }} 
                  transition={{ repeat: Infinity, duration: 1, delay: 0 }}
                  className="w-3 h-3 rounded-full bg-brand-saffron shadow-lg shadow-brand-saffron/50" 
                />
                <motion.span 
                  animate={{ scale: [1, 1.3, 1] }} 
                  transition={{ repeat: Infinity, duration: 1, delay: 0.2 }}
                  className="w-3 h-3 rounded-full bg-white shadow-lg shadow-white/30" 
                />
                <motion.span 
                  animate={{ scale: [1, 1.3, 1] }} 
                  transition={{ repeat: Infinity, duration: 1, delay: 0.4 }}
                  className="w-3 h-3 rounded-full bg-brand-green-light shadow-lg shadow-brand-green/50" 
                />
              </div>

              <motion.h2 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="text-2xl font-black uppercase tracking-widest text-white font-display"
              >
                JAI HIND SPORTS
              </motion.h2>

              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="text-[10px] font-mono text-gray-500 tracking-widest uppercase"
              >
                Loading Experience...
              </motion.p>

              <div className="relative w-48 h-[2px] bg-white/5 mx-auto overflow-hidden rounded-full">
                <motion.div 
                  initial={{ left: "-100%" }}
                  animate={{ left: "100%" }}
                  transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
                  className="absolute top-0 bottom-0 w-24 bg-gradient-to-r from-transparent via-brand-saffron to-transparent"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* BACKGROUND EFFECTS */}
      <div className="absolute inset-0 bg-noise opacity-[0.01] pointer-events-none z-40" />

      {/* 1. CINEMATIC HERO SECTION */}
      <section className="relative min-h-[96vh] flex items-center justify-center pt-28 pb-20 px-6 overflow-hidden">
        
        {/* Background Layer: Deep premium black, stadium lighting, ambient glows */}
        <div className="absolute inset-0 bg-[#050505] z-0" />
        
        {/* Stadium lighting spotlights & Premium Tricolour Ambient glows */}
        <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
          {/* Saffron Glow - Top Left */}
          <div className="absolute -top-[20%] -left-[10%] w-[800px] h-[800px] bg-brand-saffron/10 blur-[180px] rounded-full" />
          {/* Green Glow - Bottom Right */}
          <div className="absolute -bottom-[20%] -right-[10%] w-[800px] h-[800px] bg-[#138808]/10 blur-[180px] rounded-full" />
          {/* Subtle White Spotlight Center */}
          <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-white/[0.015] blur-[150px] rounded-full" />
        </div>

        {/* Floating Particles and Premium grid lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] z-10 pointer-events-none" />

        {/* Soft elegant vignette */}
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#050505]/70 to-[#050505] z-15 pointer-events-none" />

        {/* Hero main body wrapper */}
        <div className="relative z-20 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-7 text-left space-y-8">
            
            {/* Elite Badge */}
            <motion.div 
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, type: "spring" }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] backdrop-blur-md border border-white/10 text-[10px] font-mono font-bold tracking-widest text-[#FF9933] uppercase shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
            >
              <Trophy className="w-3.5 h-3.5 text-[#FF9933]" />
              <span>COIMBATORE'S AUTHENTIC SPORTS LEADER</span>
            </motion.div>

            {/* Title / Slogans */}
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tighter uppercase leading-none font-display text-white">
                <motion.span 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1, type: "spring", stiffness: 100 }}
                  className="block text-gray-400"
                >
                  YOUR GAME
                </motion.span>
                <motion.span 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 100 }}
                  className="block text-transparent bg-clip-text bg-gradient-to-r from-[#FF9933] via-white to-[#138808]"
                >
                  OUR PASSION
                </motion.span>
              </h1>

              {/* Animated tri-color underline divider */}
              <div className="h-[4px] w-48 rounded-full flex overflow-hidden relative my-6">
                <div className="w-1/3 bg-[#FF9933] h-full"></div>
                <div className="w-1/3 bg-white h-full"></div>
                <div className="w-1/3 bg-[#138808] h-full"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-[#FF9933] via-white to-[#138808] blur-[4px] opacity-70 animate-pulse" />
              </div>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-gray-400 text-lg sm:text-xl font-light tracking-wide max-w-xl leading-relaxed"
              >
                Welcome to <strong className="text-white font-semibold">JAI HIND SPORTS</strong>. Coimbatore's elite showroom for authenticated professional gear, team apparel, and customized sports services.
              </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto pt-2"
            >
              <Link 
                to="/products"
                className="group relative w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#FF9933] to-[#FFB366] hover:from-[#138808] hover:to-[#22C55E] text-white font-mono font-bold text-xs uppercase tracking-widest rounded-full flex items-center justify-center gap-2.5 transition-all duration-500 hover:shadow-2xl hover:shadow-brand-saffron/20 active:scale-95 overflow-hidden border border-white/10"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Explore Products</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
              </Link>
              
              <Link 
                to="/contact"
                className="group relative w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-mono font-bold text-xs uppercase tracking-widest rounded-full flex items-center justify-center gap-2.5 border border-white/10 hover:border-[#FF9933]/40 transition-all duration-500 active:scale-95 overflow-hidden"
              >
                {/* Subtle tri-color outline glow on hover */}
                <div className="absolute bottom-0 left-0 right-0 h-[2.2px] bg-gradient-to-r from-[#FF9933] via-white to-[#138808] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span>Visit Store</span>
              </Link>
            </motion.div>

            {/* Quick trust info */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="pt-6 border-t border-white/5 flex flex-wrap gap-x-8 gap-y-4 text-xs font-mono text-gray-500 uppercase font-semibold"
            >
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#FF9933]" />
                <span>9:30 AM - 9:00 PM</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#138808]" />
                <span>VRS Nagar, CBE</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#FF9933]" />
                <span>+91 96290 24175</span>
              </div>
            </motion.div>

          </div>

          {/* Hero Right Foreground Showcase */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:col-span-5 relative w-full aspect-square max-w-[450px] mx-auto lg:max-w-none"
          >
            {/* Elegant glass casing representation with custom brand lighting */}
            <div className="absolute inset-0 rounded-[32px] bg-gradient-to-br from-white/[0.08] via-white/[0.01] to-transparent border border-white/10 p-1 flex flex-col justify-between overflow-hidden shadow-[0_30px_100px_rgba(0,0,0,0.8)] backdrop-blur-3xl">
              
              <div className="flex justify-between items-center p-6 bg-black/40 border-b border-white/5 rounded-t-[28px]">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FF9933] shadow-[0_0_10px_rgba(255,153,51,0.8)]"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#138808] shadow-[0_0_10px_rgba(19,136,8,0.8)]"></span>
                </div>
                <span className="text-[9px] font-mono tracking-widest text-[#FF9933] font-bold">ATHLETIC COMPOSITION</span>
              </div>

              {/* Artistic vector layout portraying sports equipment (luxurious golden design) */}
              <div className="flex-grow p-8 flex flex-col items-center justify-center text-center relative group/showcase overflow-hidden">
                <div className="absolute inset-0 z-0">
                  <img 
                    src="https://images.unsplash.com/photo-1540747737956-378724044432?q=80&w=800&auto=format&fit=crop" 
                    alt="Jai Hind Sports Showroom Atmosphere" 
                    className="w-full h-full object-cover opacity-15 scale-105 group-hover/showcase:scale-110 transition-transform duration-1000 ease-out"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
                </div>
                <div className="absolute inset-0 bg-radial-gradient from-[#FF9933]/20 to-transparent opacity-60 pointer-events-none z-0" />
                
                {/* Composite Vector Graphics Overlay */}
                <div className="space-y-6 z-10 relative">
                  
                  {/* Highly polished golden trophy with surrounding concentric athletic orbits */}
                  <div className="relative w-36 h-36 mx-auto flex items-center justify-center">
                    <motion.div 
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
                      className="absolute inset-0 border border-dashed border-white/10 rounded-full"
                    />
                    <motion.div 
                      animate={{ rotate: -360 }}
                      transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
                      className="absolute inset-4 border border-dashed border-[#FF9933]/20 rounded-full"
                    />
                    <div className="relative p-6 rounded-full bg-black border border-white/10 shadow-inner">
                      <Trophy className="w-16 h-16 text-[#FF9933] stroke-[1.2]" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-xl font-black text-white uppercase font-display tracking-wide">
                      THE ARMORY OF CHAMPIONS
                    </h3>
                    <p className="text-[11px] text-gray-400 font-light max-w-xs mx-auto leading-relaxed">
                      Hand-selected Cricket bats, balanced Badminton shafts, high-traction Soccer cleats, and professional Basketballs.
                    </p>
                  </div>
                </div>

                {/* Micro visual label cards floating */}
                <div className="absolute bottom-6 left-6 p-2.5 bg-black/90 rounded-xl border border-white/10 flex items-center gap-2 shadow-lg">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#138808] animate-ping" />
                  <span className="text-[9px] font-mono text-gray-400">YONEX AUTHORIZED</span>
                </div>

                <div className="absolute top-6 right-6 p-2.5 bg-black/90 rounded-xl border border-white/10 flex items-center gap-2 shadow-lg">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF9933] animate-ping" />
                  <span className="text-[9px] font-mono text-gray-400">SS & SG PREMIUM OUTLET</span>
                </div>
              </div>

              {/* Showroom visual parameters bar */}
              <div className="p-6 bg-[#0B0B0B] border-t border-white/5 rounded-b-[28px] flex items-center justify-between text-[10px] font-mono">
                <span className="text-gray-500">VRS NAGAR, CBE</span>
                <span className="text-[#138808] font-bold flex items-center gap-1.5">
                  <span>OUTLET ONLINE</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                </span>
              </div>
            </div>

            {/* Soft backdrop lighting to raise focus */}
            <div className="absolute -inset-2 bg-gradient-to-r from-brand-saffron/5 to-[#138808]/5 rounded-[35px] blur-2xl -z-10 pointer-events-none" />
          </motion.div>

        </div>

        {/* Scroll down indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1 text-gray-600 cursor-pointer">
          <span className="text-[8px] font-mono uppercase tracking-widest font-black">SCROLL DOWN</span>
          <motion.div 
            animate={{ y: [0, 4, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ChevronDown className="w-4 h-4 text-brand-saffron" />
          </motion.div>
        </div>

      </section>

      {/* PREMIUM DIVIDER */}
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-brand-saffron/15 to-transparent" />

      {/* 2. THE TRUST STRIP */}
      <section className="py-12 bg-[#0B0B0B] overflow-hidden border-y border-white/5 px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center lg:justify-between items-center gap-y-6 gap-x-8">
          {trustStrip.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="flex items-center gap-3.5 group select-none">
                <div className="p-2.5 rounded-xl bg-white/5 text-[#FF9933] border border-white/5 group-hover:bg-[#FF9933]/10 group-hover:border-[#FF9933]/20 transition-all duration-300">
                  <Icon className="w-4.5 h-4.5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wide font-display">{item.label}</h4>
                  <p className="text-[10px] text-gray-500 mt-0.5">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. SPORTS IN MOTION SECTION */}
      <section className="py-24 px-6 relative overflow-hidden bg-[#050505]">
        
        {/* Subtle Background Glows */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-brand-saffron/3 blur-[140px] rounded-full" />
          <div className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] bg-[#138808]/3 blur-[140px] rounded-full" />
        </div>

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3 relative z-10">
          <span className="text-xs font-mono font-bold tracking-widest text-[#FF9933] uppercase">PERFORMANCE AND SPEED</span>
          <h2 className="text-4xl sm:text-5xl font-black uppercase font-display text-white">
            SPORTS IN MOTION
          </h2>
          {/* Elegant tri-color divider */}
          <div className="h-[3px] w-28 rounded-full flex overflow-hidden relative mx-auto my-4">
            <div className="w-1/3 bg-[#FF9933] h-full"></div>
            <div className="w-1/3 bg-white h-full"></div>
            <div className="w-1/3 bg-[#138808] h-full"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#FF9933] via-white to-[#138808] blur-[4px] opacity-70" />
          </div>
          <p className="text-gray-400 text-sm font-light max-w-xl mx-auto leading-relaxed">
            Elegant mathematical silhouettes detailing our six core disciplines. Hover to explore our technical expertise in each sport.
          </p>
        </div>

        {/* Sports Motion Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
          {sportsInMotion.map((sport, index) => (
            <motion.div
              key={sport.sport}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              onClick={() => handleCategoryClick(sport.sport)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  handleCategoryClick(sport.sport);
                }
              }}
              tabIndex={0}
              className="p-8 rounded-2xl bg-white/[0.02] hover:bg-white/[0.04] border border-white/5 hover:border-[#FF9933]/30 focus:border-[#FF9933]/50 focus:outline-none transition-all duration-300 flex flex-col justify-between h-72 group relative shadow-lg cursor-pointer hover:scale-[1.01]"
            >
              {/* Subtle hover tricolour card accent */}
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#FF9933] via-white to-[#138808] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-2xl" />
              
              <div>
                <div className="flex justify-between items-start mb-6">
                  <span className="text-[9px] font-mono font-bold text-[#FF9933] bg-[#FF9933]/10 px-2.5 py-1 rounded">
                    {sport.tag}
                  </span>
                  {/* Custom Minimal Athletic Path Icon */}
                  <svg 
                    className="w-6 h-6 text-gray-500 group-hover:text-[#FF9933] transition-colors" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="1.5" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d={sport.path} />
                  </svg>
                </div>
                
                <h3 className="text-2xl font-black text-white uppercase font-display group-hover:text-[#FF9933] transition-colors">
                  {sport.sport}
                </h3>
                <p className="text-xs text-gray-400 font-light mt-2 leading-relaxed">
                  {sport.desc}
                </p>
              </div>

              <div className="border-t border-white/5 pt-4 mt-6 flex items-center justify-between text-[10px] font-mono">
                <span className="text-gray-500">PREMIUM OUTLET RANGE</span>
                <span className="text-[#138808] font-bold flex items-center gap-1 group-hover:text-[#FF9933] transition-colors">
                  <span>DISCOVER</span>
                  <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </section>

      {/* PREMIUM DIVIDER */}
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-brand-green/15 to-transparent" />

      {/* 4. FEATURED SHOWCASE COLLECTIONS */}
      <section className="py-24 bg-[#0B0B0B] px-6 relative overflow-hidden">
        
        {/* Subtle spotlight glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#138808]/4 blur-[130px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
            <div>
              <span className="text-xs font-mono font-bold tracking-widest text-[#138808] uppercase">CURATED SELECTIONS</span>
              <h2 className="text-4xl sm:text-5xl font-black uppercase font-display text-white mt-1">
                FEATURED COLLECTIONS
              </h2>
            </div>
            <Link 
              to="/categories" 
              className="group text-[#FF9933] hover:text-[#FFB366] text-xs font-mono font-bold tracking-widest uppercase flex items-center gap-1.5 transition-colors self-start md:self-auto"
            >
              <span>BROWSE CATEGORIES</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Luxury Showcase Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {collections.map((col, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                onClick={() => handleCategoryClick(col.category)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    handleCategoryClick(col.category);
                  }
                }}
                tabIndex={0}
                className="group relative rounded-2xl bg-white/[0.02] hover:bg-white/[0.04] border border-white/5 hover:border-[#FF9933]/20 focus:border-[#FF9933]/50 focus:outline-none transition-all duration-300 p-8 h-80 flex flex-col justify-between overflow-hidden shadow-md cursor-pointer hover:scale-[1.01]"
              >
                {/* Background overlay lights */}
                <div className={`absolute inset-0 bg-gradient-to-tr ${col.bgGradient} z-0 pointer-events-none`} />
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-bl-full pointer-events-none" />
                
                {/* Micro visual label accent glow on bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#FF9933] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10">
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-[9px] font-mono tracking-widest text-[#FF9933] bg-[#FF9933]/10 px-2.5 py-1 rounded font-bold">
                      {col.count}
                    </span>
                    <Sparkle className="w-4 h-4 text-gray-600 group-hover:text-[#FF9933] transition-colors" />
                  </div>

                  <h3 className="text-2xl font-black text-white uppercase font-display mb-1.5 group-hover:text-[#FF9933] transition-colors leading-tight">
                    {col.title}
                  </h3>
                  <p className="text-xs text-gray-400 font-light">
                    {col.subtitle}
                  </p>
                </div>

                <div className="relative z-10 border-t border-white/5 pt-4 mt-6">
                  <div 
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#138808] group-hover:text-white transition-colors"
                  >
                    <span>{col.label}</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1.5" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* PREMIUM DIVIDER */}
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#FF9933]/15 to-transparent" />

      {/* 5. SERVICES SECTION */}
      <section className="py-24 px-6 relative overflow-hidden bg-[#050505]">
        
        {/* Subtle background glow */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-[30%] left-[5%] w-[600px] h-[600px] bg-brand-saffron/4 blur-[150px] rounded-full" />
          <div className="absolute bottom-[20%] right-[5%] w-[600px] h-[600px] bg-[#138808]/4 blur-[150px] rounded-full" />
        </div>

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3 relative z-10">
          <span className="text-xs font-mono font-bold tracking-widest text-[#FF9933] uppercase">PROFESSIONAL VALUE ADDONS</span>
          <h2 className="text-4xl sm:text-5xl font-black uppercase font-display text-white">
            ELITE STORE SERVICES
          </h2>
          {/* Elegant tri-color divider */}
          <div className="h-[3px] w-28 rounded-full flex overflow-hidden relative mx-auto my-4">
            <div className="w-1/3 bg-[#FF9933] h-full"></div>
            <div className="w-1/3 bg-white h-full"></div>
            <div className="w-1/3 bg-[#138808] h-full"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#FF9933] via-white to-[#138808] blur-[4px] opacity-70" />
          </div>
          <p className="text-gray-400 text-sm font-light max-w-xl mx-auto leading-relaxed">
            We offer full-cycle sporting solutions to keep school departments, academies, and clubs performing at global levels.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
          {services.map((serv, index) => {
            const Icon = serv.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="p-8 rounded-2xl bg-white/[0.02] hover:bg-white/[0.04] border border-white/5 hover:border-[#FF9933]/25 transition-all duration-300 flex flex-col justify-between h-72 group relative shadow-lg"
              >
                {/* Highlight line */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#FF9933] via-white to-[#138808] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-2xl" />

                <div>
                  <div className="flex justify-between items-start mb-6">
                    <span className="text-[9px] font-mono font-bold text-[#FF9933] bg-[#FF9933]/10 px-2.5 py-1 rounded">
                      {serv.tag}
                    </span>
                    <Icon className="w-5 h-5 text-gray-500 group-hover:text-[#FF9933] transition-colors" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white uppercase font-display mb-2 group-hover:text-[#FF9933] transition-colors">
                    {serv.title}
                  </h3>
                  <p className="text-xs text-gray-400 font-light leading-relaxed">
                    {serv.desc}
                  </p>
                </div>

                <div className="border-t border-white/5 pt-4 mt-6">
                  <Link 
                    to="/contact"
                    className="inline-flex items-center gap-1 text-[10px] font-mono font-bold text-[#138808] group-hover:text-[#FF9933] transition-colors"
                  >
                    <span>INQUIRE SERVICE</span>
                    <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

      </section>

      {/* PREMIUM DIVIDER */}
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#138808]/15 to-transparent" />

      {/* 6. BRAND EXPERIENCE (Scrolling Premium Marquee) */}
      <section className="py-16 bg-[#0B0B0B] overflow-hidden border-y border-white/5 relative">
        <div className="absolute inset-0 bg-radial-gradient from-white/[0.01] to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 mb-8 relative z-10">
          <p className="text-center text-[10px] font-mono tracking-widest text-gray-500 uppercase font-black">
            INFINITE SPEED MARQUEE • AUTHORIZED PARTNERS ONLY
          </p>
        </div>

        {/* Marquee Container with scrolling animations */}
        <div className="relative w-full flex items-center overflow-hidden py-4 z-10">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0B0B0B] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0B0B0B] to-transparent z-10 pointer-events-none" />

          {/* Framer motion infinite translation loop */}
          <motion.div 
            animate={{ x: [0, -1000] }}
            transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
            className="flex gap-20 whitespace-nowrap"
          >
            {doubledBrands.map((b, i) => (
              <div key={i} className="flex flex-col items-center justify-center min-w-[130px] cursor-default select-none group">
                <span className="text-2xl md:text-3xl font-black tracking-widest text-gray-600 group-hover:text-[#FF9933] transition-colors duration-300 font-display">
                  {b.name}
                </span>
                <span className="text-[7.5px] font-mono text-gray-500 tracking-wider uppercase mt-1 transition-colors group-hover:text-[#138808]">
                  {b.origin} • GENUINE
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 7. ABOUT PREVIEW (Luxurious Split Layout) */}
      <section className="py-24 px-6 relative overflow-hidden bg-[#050505]">
        
        {/* Subtle background glow */}
        <div className="absolute top-[40%] right-[10%] w-[600px] h-[600px] bg-[#138808]/4 blur-[140px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          
          {/* About Split Left Visual */}
          <div className="lg:col-span-5 relative rounded-3xl overflow-hidden aspect-[4/3] bg-white/[0.02] border border-white/10 p-8 flex flex-col justify-between group min-h-[350px] shadow-2xl">
            <div className="absolute inset-0 z-0">
              <img 
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop" 
                alt="Jai Hind Sports Coimbatore Showroom Interior" 
                className="w-full h-full object-cover opacity-15 group-hover:scale-105 transition-transform duration-700 ease-out"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black via-black/95 to-[#FF9933]/10 pointer-events-none" />
            </div>
            
            <div className="relative z-10 flex justify-between items-start">
              <span className="text-4xl font-black text-white/5 select-none font-display">THE OUTLET</span>
              <span className="px-3 py-1.5 rounded text-[9px] font-mono tracking-widest text-[#FF9933] bg-[#FF9933]/10 border border-[#FF9933]/15 font-bold">
                ESTABLISHED 2012
              </span>
            </div>

            <div className="relative z-10 space-y-4">
              <Building2 className="w-10 h-10 text-[#FF9933] stroke-[1.2]" />
              <h3 className="text-2xl font-bold text-white uppercase font-display leading-tight">
                VRS Nagar Showroom
              </h3>
              <p className="text-xs text-gray-400 font-light leading-relaxed">
                Step inside our physically loaded sports hub near Cheran Maa Nagar, Coimbatore. Feel the balance, pick your grains, and consult our technicians.
              </p>
            </div>

            <div className="relative z-10 flex items-center gap-2 text-[10px] font-mono text-[#138808] font-bold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>COIMBATORE LOCAL AUTHENTICITY GATEWAY</span>
            </div>
          </div>

          {/* About Split Right Copy */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-mono font-bold tracking-widest text-[#FF9933] uppercase">COIMBATORE LEGACY STORY</span>
            <h2 className="text-3xl sm:text-5xl font-black uppercase font-display text-white leading-tight">
              A Legacy of Uncompromising Sportsmanship
            </h2>
            {/* Elegant tri-color divider */}
            <div className="h-[3px] w-28 rounded-full flex overflow-hidden relative my-4">
              <div className="w-1/3 bg-[#FF9933] h-full"></div>
              <div className="w-1/3 bg-white h-full"></div>
              <div className="w-1/3 bg-[#138808] h-full"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF9933] via-white to-[#138808] blur-[4px] opacity-70" />
            </div>
            
            <p className="text-gray-400 text-base font-light leading-relaxed">
              Founded in 2012, <strong className="text-white font-medium">JAI HIND SPORTS</strong> in Vilankurichi has grown to become Coimbatore's trusted destination for genuine, elite-grade athletic items. We set out to solve the critical issue of duplicate products in local sports retail.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <div className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#138808] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-white uppercase font-display text-sm">Trusted by Schools</h4>
                  <p className="text-xs text-gray-400 mt-1">Official equipment partner for premium educational institutions and sports academies in Coimbatore district.</p>
                </div>
              </div>

              <div className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#138808] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-white uppercase font-display text-sm">Premium Sports Equipment</h4>
                  <p className="text-xs text-gray-400 mt-1">We host the finest collections of SS/SG Cricket bats, Yonex Carbon Series rackets, and premium footwear.</p>
                </div>
              </div>

              <div className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#138808] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-white uppercase font-display text-sm">Bulk Orders Specialists</h4>
                  <p className="text-xs text-gray-400 mt-1">Efficient fulfillment of customized team jersey sublimation printing and bulk academy orders.</p>
                </div>
              </div>

              <div className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#138808] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-white uppercase font-display text-sm">Automated Bat Knocking</h4>
                  <p className="text-xs text-gray-400 mt-1">Premium automated in-store knocking, waxing, and toe guarding services for new blades.</p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <Link 
                to="/about"
                className="px-8 py-4 bg-gradient-to-r from-[#FF9933] to-[#FFB366] hover:from-[#138808] hover:to-[#22C55E] text-white font-mono font-bold text-xs uppercase tracking-widest rounded-xl inline-flex items-center gap-2.5 transition-all duration-300 hover:scale-[1.03] shadow-lg border border-white/10"
              >
                <span>Read Full Story</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>
      </section>
      {/* PREMIUM DIVIDER */}
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#FF9933]/15 to-transparent" />

      {/* 7.5 CINEMATIC SHOWROOM WALKTHROUGH VIDEO */}
      <section className="py-24 px-6 bg-[#0B0B0B] border-y border-white/5 relative overflow-hidden">
        {/* Background ambient lighting */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] bg-[#FF9933]/5 blur-[160px] rounded-full pointer-events-none" />
        
        <div className="max-w-5xl mx-auto text-center space-y-12 relative z-10">
          
          {/* Section Header */}
          <div className="space-y-3 max-w-3xl mx-auto">
            <span className="text-xs font-mono font-bold tracking-widest text-[#FF9933] uppercase">VIRTUAL SHOWROOM TOUR</span>
            <h2 className="text-4xl sm:text-5xl font-black uppercase font-display text-white">
              IN-STORE CINEMATIC WALKTHROUGH
            </h2>
            {/* Elegant tri-color divider */}
            <div className="h-[3px] w-28 rounded-full flex overflow-hidden relative mx-auto my-4">
              <div className="w-1/3 bg-[#FF9933] h-full"></div>
              <div className="w-1/3 bg-white h-full"></div>
              <div className="w-1/3 bg-[#138808] h-full"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF9933] via-white to-[#138808] blur-[4px] opacity-70 animate-pulse" />
            </div>
            <p className="text-gray-400 text-sm font-light leading-relaxed max-w-xl mx-auto">
              Get an immersive look inside Coimbatore's premier athletic armory. Inspect our brand displays, precision gutting systems, and bat knocking workshops before visiting in person.
            </p>
          </div>

          {/* Interactive Thumbnail Container */}
          <motion.div 
            whileHover={{ scale: 1.01 }}
            onClick={() => setIsVideoModalOpen(true)}
            className="group relative aspect-video w-full max-w-4xl mx-auto rounded-3xl overflow-hidden border border-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.8)] cursor-pointer"
          >
            {/* High-quality showroom tour placeholder thumbnail */}
            <img 
              src="https://images.unsplash.com/photo-1541252260730-0412e8e2108e?q=80&w=1200&auto=format&fit=crop" 
              alt="Jai Hind Sports Coimbatore Walkthrough Thumbnail" 
              className="w-full h-full object-cover opacity-20 group-hover:opacity-30 group-hover:scale-105 transition-all duration-700 ease-out"
              referrerPolicy="no-referrer"
              loading="lazy"
            />
            
            {/* Gradient Mask Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />
            <div className="absolute inset-0 bg-[#FF9933]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

            {/* Pulsating play button container */}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 z-20">
              <div className="relative w-20 h-20 flex items-center justify-center">
                {/* Outer concentric pulsing rings */}
                <span className="absolute inset-0 rounded-full bg-[#FF9933]/20 border border-[#FF9933]/40 animate-ping" />
                <span className="absolute inset-2 rounded-full bg-[#FF9933]/30 border border-[#FF9933]/50 animate-pulse" />
                
                {/* Central solid play button */}
                <div className="relative w-16 h-16 rounded-full bg-gradient-to-r from-[#FF9933] to-[#FFB366] flex items-center justify-center text-white shadow-lg shadow-[#FF9933]/30 group-hover:scale-110 transition-transform duration-300">
                  <Play className="w-6 h-6 fill-white ml-1 text-white" />
                </div>
              </div>
              
              <div className="space-y-1">
                <span className="text-[10px] font-mono font-black text-[#FF9933] uppercase tracking-widest">
                  PLAY DIGITAL TOUR
                </span>
                <span className="text-[9px] font-mono text-gray-500 block uppercase tracking-wider">
                  DURATION: 01:45 MINS • HIGH DEFINITION
                </span>
              </div>
            </div>

            {/* Bottom Floating Info Ribbon */}
            <div className="absolute bottom-6 left-6 right-6 z-20 flex flex-wrap gap-4 items-center justify-between text-[10px] font-mono text-gray-400">
              <div className="flex items-center gap-2">
                <Film className="w-4 h-4 text-[#FF9933]" />
                <span className="font-bold uppercase tracking-wider">JAI HIND SPORTS VIRTUAL ARMORY V1</span>
              </div>
              <span className="px-2.5 py-1 rounded bg-black/60 border border-white/10 text-[#138808] font-bold">
                COIMBATORE LOCAL STORE
              </span>
            </div>
          </motion.div>

        </div>
      </section>

      {/* WALKTHROUGH VIDEO MODAL LAYER */}
      <AnimatePresence>
        {isVideoModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/98 z-50 flex items-center justify-center p-4 backdrop-blur-md"
            onClick={() => setIsVideoModalOpen(false)}
          >
            {/* Modal Box */}
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-4xl bg-[#0B0B0B] border border-white/10 rounded-3xl overflow-hidden shadow-2xl p-1"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button top-right */}
              <button
                onClick={() => setIsVideoModalOpen(false)}
                className="absolute top-4 right-4 z-30 p-2 rounded-full bg-black/60 hover:bg-[#FF9933] text-white border border-white/10 transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Video Player Display */}
              <div className="aspect-video w-full bg-[#050505] flex flex-col justify-between p-8 relative">
                <div className="absolute inset-0 bg-radial-gradient from-[#FF9933]/5 to-transparent pointer-events-none" />
                
                {/* Live Performance Loop or elegant visual placeholder message */}
                <div className="z-10 flex justify-between items-start">
                  <span className="text-[9px] font-mono tracking-widest text-[#FF9933] font-bold font-mono">IN-STORE MEDIA PLAYBACK</span>
                  <span className="px-2.5 py-1 bg-brand-green/10 text-[#138808] border border-[#138808]/25 text-[9px] font-mono uppercase rounded font-bold">
                    VIRTUAL ARMORY LINK
                  </span>
                </div>

                <div className="z-10 text-center space-y-4 my-auto max-w-md mx-auto">
                  <div className="relative w-16 h-16 mx-auto flex items-center justify-center">
                    <span className="absolute inset-0 rounded-full border border-dashed border-[#FF9933]/30 animate-spin" style={{ animationDuration: '6s' }} />
                    <Film className="w-8 h-8 text-[#FF9933]" />
                  </div>
                  <h4 className="text-xl sm:text-2xl font-black text-white uppercase font-display tracking-wide">
                    PROMOTIONAL TOUR IS COMING SOON
                  </h4>
                  <p className="text-xs text-gray-400 font-light leading-relaxed font-sans">
                    Our high-production, full-showroom 4K walkthrough video is currently undergoing editing. This container is fully responsive and configured to instantly display your YouTube or Vimeo link.
                  </p>
                  <p className="text-[10px] font-mono text-gray-500 font-mono">
                    SITRA-VILANKURICHI ROAD • COIMBATORE, TN
                  </p>
                </div>

                <div className="z-10 flex justify-center pt-4">
                  <button 
                    onClick={() => setIsVideoModalOpen(false)}
                    className="px-6 py-2.5 bg-gradient-to-r from-[#FF9933] to-[#FFB366] text-white font-mono font-bold text-[10px] uppercase tracking-widest rounded-lg transition-transform hover:scale-105 active:scale-95 shadow-md shadow-[#FF9933]/25 cursor-pointer"
                  >
                    CONTINUE EXPLORING SITE
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* PREMIUM DIVIDER */}
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#FF9933]/15 to-transparent" />

      {/* 8. CUSTOMER TESTIMONIALS */}
      <section className="py-24 px-6 relative overflow-hidden bg-[#050505]">
        
        {/* Ambient background glow */}
        <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-[#FF9933]/3 blur-[140px] rounded-full pointer-events-none" />

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3 relative z-10">
          <span className="text-xs font-mono font-bold tracking-widest text-[#FF9933] uppercase">VERIFIED CUSTOMER INSIGHTS</span>
          <h2 className="text-4xl sm:text-5xl font-black uppercase font-display text-white">
            GOOGLE BUSINESS REVIEWS
          </h2>
          <div className="h-1 w-20 bg-[#FF9933] mx-auto rounded-full" />
          <p className="text-gray-400 text-sm font-light max-w-xl mx-auto leading-relaxed">
            Authentic, un-manipulated feedback from local athletes and club captains who buy from Jai Hind Sports.
          </p>
        </div>

        {/* Testimonial Layout ready for real inputs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto relative z-10">
          {testimonialsList.map((review, idx) => (
            <div 
              key={idx} 
              className="p-8 rounded-2xl bg-white/[0.02] hover:bg-white/[0.04] border border-white/5 hover:border-[#FF9933]/20 transition-all duration-300 relative shadow-lg"
            >
              <div className="flex justify-between items-center mb-4">
                <div>
                  <h4 className="font-bold text-white uppercase font-display text-sm">{review.name}</h4>
                  <p className="text-[9px] font-mono text-[#138808] uppercase mt-0.5">{review.date}</p>
                </div>
                <div className="flex gap-0.5 text-[#FF9933]">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#FF9933] text-[#FF9933]" />
                  ))}
                </div>
              </div>
              <p className="text-xs text-gray-400 font-light leading-relaxed italic">
                "{review.text}"
              </p>
            </div>
          ))}
        </div>

      </section>

      {/* PREMIUM DIVIDER */}
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#138808]/15 to-transparent" />

      {/* 9. GALLERY PREVIEW */}
      <section className="py-24 bg-[#0B0B0B] px-6 relative overflow-hidden">
        
        {/* Ambient spotlight */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#138808]/3 blur-[140px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
            <div>
              <span className="text-xs font-mono font-bold tracking-widest text-[#FF9933] uppercase">SHOWROOM DIRECTORY VISUALS</span>
              <h2 className="text-4xl sm:text-5xl font-black uppercase font-display text-white mt-1">
                GALLERY WALKTHROUGH
              </h2>
            </div>
            <Link 
              to="/gallery" 
              className="group text-[#138808] hover:text-white text-xs font-mono font-bold tracking-widest uppercase flex items-center gap-1.5 transition-colors self-start md:self-auto"
            >
              <span>EXPLORE ALL SHOWROOM ZONES</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Masonry-Style Responsive Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryZones.map((zone, idx) => (
              <div 
                key={idx} 
                onClick={() => handleGalleryZoneClick(zone.category)}
                className="group relative rounded-2xl overflow-hidden aspect-square bg-[#050505] border border-white/5 flex flex-col justify-end p-6 hover:border-[#FF9933]/30 transition-all duration-500 shadow-md cursor-pointer hover:scale-[1.01]"
              >
                <img 
                  src={zone.image} 
                  alt={zone.title} 
                  className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700 ease-out z-0"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1540747737956-378724044432?q=80&w=800&auto=format&fit=crop";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10 transition-all duration-500 group-hover:via-black/60" />
                <div className="absolute inset-0 bg-[#FF9933]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10" />
                
                <div className="absolute top-4 right-4 z-20 px-2.5 py-1 rounded bg-black/60 border border-white/10 text-[9px] font-mono uppercase text-[#FF9933]">
                  ZONE 0{idx+1}
                </div>

                <div className="relative z-20 transition-transform duration-300 group-hover:translate-y-[-4px]">
                  <h4 className="text-lg font-bold text-white uppercase font-display mb-1.5 group-hover:text-[#FF9933] transition-colors">
                    {zone.title}
                  </h4>
                  <p className="text-[11px] text-gray-400 font-light leading-relaxed line-clamp-2">
                    {zone.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* PREMIUM DIVIDER */}
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#FF9933]/15 to-transparent" />

      {/* 10. LOCATION SECTION */}
      <section className="py-24 px-6 relative overflow-hidden bg-[#050505]">
        
        {/* Subtle background glow */}
        <div className="absolute top-1/2 right-[10%] w-[500px] h-[500px] bg-[#138808]/3 blur-[150px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          
          {/* Location Details Left */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-xs font-mono font-bold tracking-widest text-[#FF9933] uppercase">COIMBATORE GPS PIN</span>
              <h2 className="text-3xl sm:text-5xl font-black uppercase font-display text-white leading-tight mt-1">
                LOCATE THE SHOWROOM
              </h2>
              <div className="h-1 w-20 bg-[#FF9933] mt-3 rounded-full" />
            </div>

            <div className="space-y-6 text-xs font-mono">
              <div className="flex gap-4">
                <div className="p-3 bg-[#FF9933]/10 text-[#FF9933] rounded-xl flex-shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="font-sans">
                  <h4 className="font-mono text-xs font-bold text-white uppercase tracking-wider">Showroom Address</h4>
                  <p className="text-sm text-gray-400 mt-1 leading-relaxed font-sans">
                    2/17, 17A, VRS Nagar,<br />
                    Near Cheran Maa Nagar, Vilankurichi,<br />
                    Coimbatore, Tamil Nadu - 641035
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="p-3 bg-[#138808]/10 text-[#138808] rounded-xl flex-shrink-0 mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="font-sans">
                  <h4 className="font-mono text-xs font-bold text-white uppercase tracking-wider">Store Timings</h4>
                  <p className="text-sm text-gray-400 mt-1">{STORE_DETAILS.operatingHours.weekdays}</p>
                  <p className="text-sm text-gray-400 mt-0.5">{STORE_DETAILS.operatingHours.sunday}</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="p-3 bg-blue-500/10 text-blue-400 rounded-xl flex-shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="font-sans">
                  <h4 className="font-mono text-xs font-bold text-white uppercase tracking-wider">Active Helplines</h4>
                  <p className="text-sm text-gray-400 mt-1">96290 24175</p>
                  <p className="text-sm text-gray-400 mt-0.5">87547 39973</p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href={STORE_DETAILS.googleMapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-4 bg-white text-black hover:bg-[#FF9933] hover:text-white font-mono font-bold text-xs uppercase tracking-widest rounded-xl text-center transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-[#FF9933]/20"
              >
                <span>Get GPS Directions</span>
              </a>
              <a 
                href={STORE_DETAILS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-4 bg-white/5 hover:bg-white/10 text-white font-mono font-bold text-xs uppercase tracking-widest rounded-xl text-center transition-all duration-300 flex items-center justify-center gap-2 border border-white/10"
              >
                <MessageSquare className="w-4 h-4 text-[#138808]" />
                <span>WhatsApp Consult</span>
              </a>
            </div>
          </div>

          {/* Map Frame Right (Geometric simulated interactive map design) */}
          <div className="lg:col-span-7 relative w-full aspect-video rounded-3xl overflow-hidden border border-white/10 p-1 shadow-2xl">
            <div className="absolute inset-0 bg-[#0B0B0B] flex flex-col justify-between p-8">
              <div className="absolute inset-0 bg-radial-gradient from-[#FF9933]/5 to-transparent pointer-events-none" />
              
              <div className="z-10 flex justify-between items-start">
                <span className="text-[9px] font-mono tracking-widest text-[#FF9933] font-bold font-mono">COIMBATORE GPS INDEX</span>
                <span className="px-2.5 py-1 bg-brand-green/10 text-[#138808] border border-[#138808]/25 text-[9px] font-mono uppercase rounded font-bold">
                  TAMIL NADU, INDIA
                </span>
              </div>

              <div className="z-10 text-center space-y-3 my-auto max-w-sm mx-auto">
                <MapPin className="w-12 h-12 text-[#FF9933] mx-auto stroke-[1.2] animate-bounce" />
                <h4 className="text-xl font-bold text-white uppercase font-display">Jai Hind Sports Location Pin</h4>
                <p className="text-xs text-gray-400 font-light leading-relaxed font-sans">
                  Located near Cheran Maa Nagar, VRS Nagar, Vilankurichi, Coimbatore. Easily accessible for direct physical quality checks.
                </p>
              </div>

              <div className="z-10 flex justify-center pt-4">
                <a 
                  href={STORE_DETAILS.googleMapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-gradient-to-r from-[#FF9933] to-[#FFB366] text-white font-mono font-bold text-xs uppercase tracking-widest rounded-lg transition-transform hover:scale-105 active:scale-95 shadow-md shadow-[#FF9933]/25"
                >
                  NAVIGATE NOW
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
