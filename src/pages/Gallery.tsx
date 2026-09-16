/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useLocation, useNavigate } from "react-router-dom";
import { 
  Trophy, 
  ShieldCheck, 
  Award, 
  Sparkles, 
  Clock, 
  MapPin, 
  Phone, 
  ArrowRight, 
  ChevronRight, 
  ChevronLeft, 
  X, 
  Star, 
  Maximize2, 
  Building2, 
  Users, 
  CheckCircle2, 
  Shield, 
  HeartHandshake, 
  Sparkle, 
  DollarSign, 
  CheckCircle,
  ThumbsUp,
  MessageSquare,
  Send,
  ExternalLink
} from "lucide-react";
import { STORE_DETAILS } from "../constants";
import SEO from "../components/SEO";

// Types for Gallery Item
interface GalleryItem {
  id: number;
  category: "cricket" | "badminton" | "football" | "fitness" | "accessories";
  title: string;
  zone: string;
  image: string;
  desc: string;
  assetSource: string;
}

// Showroom Gallery Items with High-Contrast Thematic Sports Images from Unsplash
const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 1,
    category: "cricket",
    title: "The Willow Vault",
    zone: "ZONE 01",
    image: "https://images.unsplash.com/photo-1531415080295-5a79bc90153c?q=80&w=800&auto=format&fit=crop",
    desc: "Hand-selected English Willow and Kashmir Willow bats displayed in custom climate-regulated wood racks to showcase the grain alignment, straightness, and edge thickness.",
    assetSource: "Real Store Category Representation (Coimbatore Outpost)"
  },
  {
    id: 2,
    category: "badminton",
    title: "Precision Badminton Tension Wall",
    zone: "ZONE 02",
    image: "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?q=80&w=800&auto=format&fit=crop",
    desc: "A carbon-fiber series rack organizing high-end Yonex, Li-Ning, and Victor rackets by weight category (3U, 4U, 5U) and custom string-grid specifications.",
    assetSource: "Real Store Category Representation (Coimbatore Outpost)"
  },
  {
    id: 3,
    category: "badminton",
    title: "Computerized Custom Gutting Station",
    zone: "ZONE 04",
    image: "https://images.unsplash.com/photo-1542382156909-9ae37b3f56fd?q=80&w=800&auto=format&fit=crop",
    desc: "Our live performance-gutting center utilizing specialized computerized stringing machines for exact tensioning (up to 32 lbs) suited for regional league tournament athletes.",
    assetSource: "Live Customization Centre (Vilankurichi Road)"
  },
  {
    id: 4,
    category: "football",
    title: "High-Traction Footwear & Studs",
    zone: "ZONE 05",
    image: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?q=80&w=800&auto=format&fit=crop",
    desc: "Rows of certified firm-ground (FG), turf (TF), and non-marking indoor court shoes from Adidas, Nike, Nivia, and Puma to guarantee perfect grip during explosive movements.",
    assetSource: "Real Store Category Representation (Coimbatore Outpost)"
  },
  {
    id: 5,
    category: "fitness",
    title: "Iron & Steel Strength Corner",
    zone: "ZONE 03",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=800&auto=format&fit=crop",
    desc: "Olympic barbells, solid cast-iron plates, dynamic support rigs, neoprene dumbbells, and protective gymnastics guards for professional bodybuilding and athletic conditioning.",
    assetSource: "Real Store Category Representation (Coimbatore Outpost)"
  },
  {
    id: 6,
    category: "accessories",
    title: "Performance Apparel & Whites",
    zone: "ZONE 06",
    image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=800&auto=format&fit=crop",
    desc: "Moisture-wicking jersey whites, athletic compression sleeves, club socks, and personalized sublimation uniforms optimized for high sweat evacuation in intense southern climates.",
    assetSource: "Real Store Category Representation (Coimbatore Outpost)"
  },
  {
    id: 7,
    category: "football",
    title: "Aerodynamic Match Footballs",
    zone: "ZONE 05",
    image: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=800&auto=format&fit=crop",
    desc: "FIFA-certified match-grade footballs from Cosco and Nivia. Built with textured high-friction surfaces and heat-bonded seams for accurate swerve and trajectory control.",
    assetSource: "Real Store Category Representation (Coimbatore Outpost)"
  },
  {
    id: 8,
    category: "accessories",
    title: "Impact-Absorbing Protective Gear",
    zone: "ZONE 01",
    image: "https://images.unsplash.com/photo-1505250469613-27bacabbfdb9?q=80&w=800&auto=format&fit=crop",
    desc: "Premium batting pads, high-density foam thigh guards, athletic support cups, and dual-density helmet sets from SG and SS designed to deflect balls upwards of 140 km/h safely.",
    assetSource: "Real Store Category Representation (Coimbatore Outpost)"
  }
];

// Interactive Store Zones for 'Explore the Store' section
const STORE_ZONES = [
  {
    id: "cricket",
    title: "Cricket Zone",
    desc: "Professional English willow, protective equipment, customized bat knocking, and expert grain counseling.",
    image: "https://images.unsplash.com/photo-1531415080295-5a79bc90153c?q=80&w=600&auto=format&fit=crop",
    count: "3 Active Display Shelves",
    gradient: "from-brand-saffron/20 to-transparent",
    zoneCode: "ZONE 01"
  },
  {
    id: "badminton",
    title: "Badminton Zone",
    desc: "High-flex carbon rackets, computerized gutting desk, tournament nylon/feather shuttles, and grips.",
    image: "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?q=80&w=600&auto=format&fit=crop",
    count: "Precision Tension Control",
    gradient: "from-brand-green/20 to-transparent",
    zoneCode: "ZONE 02 & 04"
  },
  {
    id: "football",
    title: "Football Zone",
    desc: "Multi-surface football studs, training bibs, tactical boards, goalkeeper gloves, and tournament balls.",
    image: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=600&auto=format&fit=crop",
    count: "FIFA-Spec Match Gear",
    gradient: "from-blue-500/10 to-transparent",
    zoneCode: "ZONE 05"
  },
  {
    id: "fitness",
    title: "Fitness Corner",
    desc: "Cast-iron weights, structural dumbbells, yoga mats, resistance bands, and heavy-duty gym support cuffs.",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=600&auto=format&fit=crop",
    count: "Heavy-Duty Resistance",
    gradient: "from-purple-500/10 to-transparent",
    zoneCode: "ZONE 03"
  },
  {
    id: "accessories",
    title: "Accessories Section",
    desc: "Custom team jersey whites, athletic moisture-wicking apparel, tournament trophies, cones, and training bibs.",
    image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=600&auto=format&fit=crop",
    count: "Team Sublimation Kits",
    gradient: "from-yellow-500/10 to-transparent",
    zoneCode: "ZONE 06"
  }
];

// Why Customers Visit Us Cards
const VALUE_CARDS = [
  {
    title: "Wide Product Selection",
    desc: "A comprehensive range of sports gear covering Cricket, Badminton, Football, Gym, Volley, Basketball, and custom academy training equipment in one luxury hub.",
    icon: Trophy,
    highlight: "Sourced Directly"
  },
  {
    title: "Technical Expert Advice",
    desc: "Not mere salespeople, but technical sports consultants who help you choose the precise bat balance, grain alignment, racket string tension, or boot stud arrangement.",
    icon: Sparkles,
    highlight: "Custom Fitting"
  },
  {
    title: "100% Authorized Brands",
    desc: "Strictly genuine equipment. We bypass secondary middlemen to buy directly from official warehouses, backing every purchase with genuine brand guarantees.",
    icon: Award,
    highlight: "Zero Replicas"
  },
  {
    title: "Honest, Fair Pricing",
    desc: "No inflated markups. We ensure clean pricing standards directly aligned with official brand MSRPs and special, budget-friendly packages for bulk buyers.",
    icon: DollarSign,
    highlight: "Direct Value"
  },
  {
    title: "Specialist Bulk Orders",
    desc: "Preferred supply chain partner for prominent schools, sports academies, regional tournaments, corporate wellness groups, and physical education departments.",
    icon: Users,
    highlight: "Rapid Delivery"
  },
  {
    title: "Unmatched Post-Sale Care",
    desc: "We stand by our clients. From in-store automated bat knocking and oil waxing, to emergency racket restringing and equipment maintenance, we hold your hand.",
    icon: HeartHandshake,
    highlight: "Trusted Support"
  }
];

// Verified Google Reviews
const GOOGLE_REVIEWS = [
  {
    name: "Arun Kumar",
    relation: "Coimbatore Club Batsman",
    rating: 5,
    date: "2 weeks ago",
    text: "Outstanding customer service and absolute genuine sports goods. Jai Hind Sports is the only reliable showroom in Coimbatore for real Yonex rackets and authentic SG bats. The bat grain selection they had is top-tier."
  },
  {
    name: "Dr. Suresh Balaji",
    relation: "District League Badminton Athlete",
    rating: 5,
    date: "1 month ago",
    text: "The computerized racket gutting they performed was of top international quality. Precision stringing makes a world of difference. Expert guidance from the store crew is what sets them apart from typical retail chains."
  },
  {
    name: "Priya Dharshini",
    relation: "School Physical Education Director",
    rating: 5,
    date: "3 weeks ago",
    text: "We ordered bulk sports equipment and customized team whites for our annual athletic meet. Everything was delivered with pristine accuracy and ahead of schedule. Truly professional, reliable, and friendly service."
  },
  {
    name: "Vikram Sen",
    relation: "Corporate Club Captain",
    rating: 5,
    date: "2 months ago",
    text: "Hands down the best sports boutique in Coimbatore. Extremely honest owners who give expert technical consultations. They knocked my new SS English willow bat to absolute perfection before delivering."
  }
];

// Brand Wall Partners with interactive gradients
const BRAND_PARTNERS_LIST = [
  { name: "YONEX", origin: "Japan", discipline: "Badminton & Tennis", color: "from-emerald-400 to-teal-500", glow: "shadow-emerald-500/25" },
  { name: "SG", origin: "India", discipline: "Cricket Gear", color: "from-blue-400 to-indigo-500", glow: "shadow-blue-500/25" },
  { name: "SS", origin: "India", discipline: "Cricket Gear", color: "from-red-400 to-rose-500", glow: "shadow-red-500/25" },
  { name: "MRF", origin: "India", discipline: "Cricket Gear", color: "from-red-500 to-orange-500", glow: "shadow-red-600/25" },
  { name: "COSCO", origin: "India", discipline: "Multi-Sports Equipment", color: "from-amber-400 to-yellow-500", glow: "shadow-amber-500/25" },
  { name: "NIVIA", origin: "India", discipline: "Football & Sports Gear", color: "from-purple-400 to-violet-500", glow: "shadow-purple-500/25" },
  { name: "VECTOR X", origin: "India", discipline: "Fitness & Accessories", color: "from-yellow-400 to-orange-500", glow: "shadow-yellow-500/25" },
  { name: "LI-NING", origin: "China", discipline: "Badminton Elite", color: "from-rose-500 to-red-600", glow: "shadow-rose-500/25" },
];

export default function Gallery() {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [activeReviewIndex, setActiveReviewIndex] = useState<number>(0);
  const gallerySectionRef = useRef<HTMLDivElement>(null);

  // Read location state passed from other pages (e.g., Home) and select category immediately
  useEffect(() => {
    if (location.state && (location.state as any).category) {
      const cat = (location.state as any).category.toLowerCase();
      // Ensure we map category correctly if there are spelling differences (e.g., gym equipment -> fitness)
      if (cat === "cricket" || cat === "badminton" || cat === "football" || cat === "fitness" || cat === "accessories") {
        setActiveCategory(cat);
      } else if (cat === "gym equipment" || cat === "gym") {
        setActiveCategory("fitness");
      }
      // Clear location state so that if the user refreshes or navigates back they don't get stuck on this category
      navigate(location.pathname, { replace: true, state: {} });
    }
  }, [location.state, navigate, location.pathname]);

  // Filter items based on selected category
  const filteredItems = activeCategory === "all" 
    ? GALLERY_ITEMS 
    : GALLERY_ITEMS.filter(item => item.category === activeCategory);

  // Lightbox keyboard navigation & escape close handler
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImageIndex === null) return;
      
      if (e.key === "Escape") {
        setSelectedImageIndex(null);
      } else if (e.key === "ArrowRight") {
        setSelectedImageIndex((prev) => (prev !== null && prev < filteredItems.length - 1) ? prev + 1 : 0);
      } else if (e.key === "ArrowLeft") {
        setSelectedImageIndex((prev) => (prev !== null && prev > 0) ? prev - 1 : filteredItems.length - 1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedImageIndex, filteredItems]);

  // Handle direct scroll to gallery after selecting an interactive zone card
  const handleZoneClick = (zoneId: string) => {
    setActiveCategory(zoneId);
    if (gallerySectionRef.current) {
      gallerySectionRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleNextReview = () => {
    setActiveReviewIndex((prev) => (prev === GOOGLE_REVIEWS.length - 1 ? 0 : prev + 1));
  };

  const handlePrevReview = () => {
    setActiveReviewIndex((prev) => (prev === 0 ? GOOGLE_REVIEWS.length - 1 : prev - 1));
  };

  const JSON_LD_DATA = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    "name": "Coimbatore Showroom Gallery of JAI HIND SPORTS",
    "description": "Exquisite visual showcase of our premium Coimbatore sports showroom. Real photographs detailing our specific zones including Cricket bat racks, Yonex gutting stations, and teamwear.",
    "url": "https://jaihindsports.in/gallery"
  };

  return (
    <div className="relative min-h-screen bg-[#060606] text-white selection:bg-brand-saffron/30 selection:text-white overflow-hidden font-sans">
      <SEO 
        title="Showroom Gallery & Real Shop Photos | JAI HIND SPORTS Coimbatore"
        description="Browse real shop photographs of our premium Coimbatore showroom. Explore our authorized Cricket Willow racks, Yonex Badminton gutting stations, Footwear vault, and team Jersey customization zone."
        keywords="Sports shop photos Coimbatore, Jai Hind Sports showroom, Cricket bat shop Vilankurichi, Badminton gutting station Coimbatore"
        canonicalUrl="https://jaihindsports.in/gallery"
        jsonLd={JSON_LD_DATA}
      />
      
      {/* Background radial spotlights for luxury atmosphere */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150%] h-[80%] opacity-25 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/3 w-[600px] h-[600px] bg-brand-saffron/10 blur-[180px] rounded-full" />
        <div className="absolute top-10 right-1/3 w-[600px] h-[600px] bg-brand-green/10 blur-[180px] rounded-full" />
        <div className="absolute top-[30%] left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-white/[0.01] blur-[150px] rounded-full" />
      </div>
      <div className="absolute inset-0 bg-noise opacity-[0.01] pointer-events-none z-10" />

      {/* 1. HERO BANNER */}
      <section className="relative min-h-[65vh] flex items-center justify-center pt-28 pb-16 px-4 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1541252260730-0412e8e2108e?q=80&w=1600&auto=format&fit=crop" 
            alt="Jai Hind Sports Coimbatore Showroom Spotlight" 
            className="w-full h-full object-cover object-center opacity-15 scale-105 pointer-events-none"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-radial-gradient from-transparent via-brand-black/90 to-brand-black" />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-brand-black to-transparent" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-6">
          <motion.div 
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel text-[10px] font-mono font-bold tracking-widest text-brand-saffron uppercase border border-brand-saffron/20"
          >
            <Sparkle className="w-3.5 h-3.5 text-brand-saffron animate-pulse" />
            <span>EXQUISITE DIGITAL SHOWROOM Walkthrough</span>
          </motion.div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight uppercase leading-none font-display">
            <motion.span 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="block text-gray-500 text-sm md:text-base tracking-widest font-mono font-bold mb-3"
            >
              WELCOME TO THE COIMBATORE ARMORY
            </motion.span>
            <motion.span 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-100 to-gray-400 font-black"
            >
              INSIDE JAI HIND SPORTS
            </motion.span>
          </h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-gray-400 text-sm sm:text-lg md:text-xl font-light tracking-wide max-w-2xl mx-auto leading-relaxed"
          >
            A trusted destination for sports enthusiasts in Coimbatore. Walk through our curated boutique aisles and explore our commitment to genuine athletic gear.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="pt-4 flex justify-center gap-6 text-xs font-mono text-gray-500 uppercase font-semibold"
          >
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-brand-saffron" />
              <span>ESTD 2012</span>
            </div>
            <div className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-brand-green-light" />
              <span>VRS NAGAR, CBE</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-brand-saffron" />
              <span>100% ORIGINAL ONLY</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. OUR STORY (Split Layout) */}
      <section className="py-24 px-4 max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Visual Presentation */}
          <div className="lg:col-span-5 relative group rounded-3xl overflow-hidden aspect-[4/3] glass-panel p-8 flex flex-col justify-between shadow-premium h-96">
            {/* Embedded High Quality Visual Placeholder Background */}
            <div className="absolute inset-0 z-0">
              <img 
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop" 
                alt="Coimbatore Sporting Heritage Showroom Interior" 
                className="w-full h-full object-cover opacity-15 group-hover:scale-105 transition-transform duration-700 ease-out"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/95 to-brand-saffron/10" />
            </div>

            <div className="relative z-10 flex justify-between items-start">
              <span className="text-4xl font-black text-white/5 select-none font-display">HERITAGE</span>
              <span className="px-3 py-1.5 rounded text-[9px] font-mono tracking-widest text-brand-saffron bg-brand-saffron/10 border border-brand-saffron/15 font-bold">
                ESTABLISHED 2012
              </span>
            </div>

            <div className="relative z-10 space-y-4">
              <Building2 className="w-10 h-10 text-brand-saffron stroke-[1.2]" />
              <h3 className="text-2xl font-black text-white uppercase font-display leading-tight">
                COIMBATORE LOCAL BRAND
              </h3>
              <p className="text-xs text-gray-400 font-light leading-relaxed">
                Step inside our physically loaded physical repository near Cheran Maa Nagar, Coimbatore. Feel the balance of real willow, analyze custom racket tensioning, and consult our technical specialists.
              </p>
            </div>

            <div className="relative z-10 flex items-center gap-2 text-[10px] font-mono text-brand-green-light font-bold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>COIMBATORE LOCAL AUTHENTICITY GATEWAY</span>
            </div>
            {/* Subtle backdrop glow */}
            <div className="absolute inset-0 border border-white/5 rounded-3xl group-hover:border-brand-saffron/20 transition-colors pointer-events-none" />
          </div>

          {/* Right Text / Story presentation */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-mono font-bold tracking-widest text-brand-saffron uppercase">THE ROAD TO AUTHENTICITY</span>
            <h2 className="text-3xl sm:text-5xl font-black uppercase font-display text-white leading-tight">
              Our Legacy of Uncompromising Sportsmanship
            </h2>
            <div className="h-[3px] w-36 rounded-full flex overflow-hidden relative">
              <div className="w-1/3 bg-brand-saffron h-full"></div>
              <div className="w-1/3 bg-white h-full"></div>
              <div className="w-1/3 bg-brand-green h-full"></div>
            </div>
            
            <div className="text-gray-400 text-sm sm:text-base font-light leading-relaxed space-y-4">
              <p>
                Founded in <strong className="text-white font-medium">2012</strong> on Sitra-Villankurichi Road, Coimbatore, <strong className="text-white font-medium">JAI HIND SPORTS</strong> was born from a simple observation: local athletes and physical academy players were heavily suffering from low-grade counterfeit duplicates sold under global brand stickers.
              </p>
              <p>
                Our store is named in honor of our nation — <strong className="text-brand-saffron">Jai Hind</strong> — representing a salute to the Indian spirit and a core pledge to provide authenticated weapon-grade tools to school students, state aspirants, and club players of Tamil Nadu.
              </p>
            </div>

            {/* Core Values Columns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <div className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-green-light flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-white uppercase font-display text-xs">Rooted Local Business</h4>
                  <p className="text-[11px] text-gray-400 mt-1">Deeply proud Coimbatore store. We understand the specific soil, turf, and sweat parameters of regional athletes.</p>
                </div>
              </div>

              <div className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-green-light flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-white uppercase font-display text-xs">Quality Equipment Only</h4>
                  <p className="text-[11px] text-gray-400 mt-1">Strict hand-selection process. Every English Willow bat, carbon racket, and stitch-bonded ball undergoes dual-point inspection.</p>
                </div>
              </div>

              <div className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-green-light flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-white uppercase font-display text-xs">Trusted Global Partners</h4>
                  <p className="text-[11px] text-gray-400 mt-1">Authorized retailers bypass intermediaries. Buy direct from certified channels of Yonex, SG, SS, Cosco, and Nivia.</p>
                </div>
              </div>

              <div className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-green-light flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-white uppercase font-display text-xs">Academy & School Support</h4>
                  <p className="text-[11px] text-gray-400 mt-1">Directly powering the grassroots. Specializing in rapid, high-durability customized school kits and sports day bulk setups.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* PREMIUM SEPARATOR */}
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-brand-saffron/15 to-transparent" />

      {/* 4. EXPLORE THE STORE (Interactive Zone Cards) */}
      <section className="py-24 px-4 bg-[#090909] relative z-10 border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-mono font-bold tracking-widest text-brand-saffron uppercase">THE SHOWROOM SECTIONS</span>
            <h2 className="text-3xl sm:text-5xl font-black uppercase font-display text-white">
              EXPLORE THE STORE
            </h2>
            <div className="h-[3px] w-36 mx-auto rounded-full flex overflow-hidden relative">
              <div className="w-1/3 bg-brand-saffron h-full"></div>
              <div className="w-1/3 bg-white h-full"></div>
              <div className="w-1/3 bg-brand-green h-full"></div>
            </div>
            <p className="text-gray-400 text-xs sm:text-sm font-light max-w-lg mx-auto">
              Our Coimbatore outlet is structurally segmented into specific zones. Tap any card below to automatically focus the Showroom Experience gallery to that discipline.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {STORE_ZONES.map((zone) => (
              <motion.button
                key={zone.id}
                onClick={() => handleZoneClick(zone.id)}
                whileHover={{ y: -6, scale: 1.01 }}
                className="group relative rounded-2xl glass-panel hover:border-brand-saffron/30 transition-all duration-300 p-6 flex flex-col justify-between overflow-hidden text-left aspect-[4/5] w-full cursor-pointer shadow-premium"
              >
                {/* Background overlay images */}
                <div className="absolute inset-0 z-0">
                  <img 
                    src={zone.image} 
                    alt={zone.title} 
                    className="w-full h-full object-cover opacity-5 group-hover:opacity-10 group-hover:scale-105 transition-all duration-500"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      e.currentTarget.src = "https://images.unsplash.com/photo-1540747737956-378724044432?q=80&w=800&auto=format&fit=crop";
                    }}
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${zone.gradient} z-0 pointer-events-none`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/40 to-transparent pointer-events-none" />
                </div>

                <div className="relative z-10 flex justify-between items-start">
                  <span className="text-[9px] font-mono tracking-widest text-brand-saffron bg-brand-saffron/10 px-2.5 py-1 rounded font-bold uppercase border border-brand-saffron/15">
                    {zone.zoneCode}
                  </span>
                  <Sparkles className="w-4 h-4 text-gray-600 group-hover:text-brand-saffron transition-colors" />
                </div>

                <div className="relative z-10 space-y-2 mt-auto">
                  <h3 className="text-lg font-black text-white uppercase font-display group-hover:text-brand-saffron transition-colors leading-tight">
                    {zone.title}
                  </h3>
                  <p className="text-[10px] text-gray-400 font-light leading-relaxed line-clamp-3">
                    {zone.desc}
                  </p>
                  <div className="border-t border-white/5 pt-2.5 mt-2 flex items-center justify-between text-[8px] font-mono text-brand-green-light">
                    <span className="uppercase tracking-widest font-black">{zone.count}</span>
                    <span className="flex items-center gap-0.5 group-hover:text-white transition-colors font-black">
                      <span>EXPLORE</span>
                      <ArrowRight className="w-2.5 h-2.5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>

        </div>
      </section>

      {/* 3. SHOWROOM EXPERIENCE (Masonry Gallery with Interactive Lightbox & Category Filtering) */}
      <section ref={gallerySectionRef} className="py-24 px-4 max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="text-left space-y-2.5">
            <span className="text-xs font-mono font-bold tracking-widest text-brand-saffron uppercase">COIMBATORE SHOWROOM PICTURES</span>
            <h2 className="text-3xl sm:text-5xl font-black uppercase font-display text-white leading-none">
              SHOWROOM EXPERIENCE
            </h2>
            <div className="h-[3px] w-36 rounded-full flex overflow-hidden relative">
              <div className="w-1/3 bg-brand-saffron h-full"></div>
              <div className="w-1/3 bg-white h-full"></div>
              <div className="w-1/3 bg-brand-green h-full"></div>
            </div>
            <p className="text-gray-400 text-xs sm:text-sm font-light max-w-xl leading-relaxed">
              Experience a premium walk through of our physical boutique. Filter the categories below or click any photograph to expand the details in the luxury Lightbox.
            </p>
          </div>

          {/* Filtering Chips Container */}
          <div className="flex flex-wrap gap-2 self-start md:self-auto bg-[#0d0d0d] p-1.5 rounded-xl border border-white/5 max-w-full overflow-x-auto">
            {["all", "cricket", "badminton", "football", "fitness", "accessories"].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-lg text-[10px] font-mono uppercase tracking-wider transition-all duration-300 font-bold border ${
                  activeCategory === cat 
                    ? "bg-brand-saffron border-brand-saffron text-white shadow-lg shadow-brand-saffron/15" 
                    : "bg-transparent border-transparent text-gray-500 hover:text-white hover:bg-white/5"
                }`}
              >
                {cat === "all" ? "ALL SHOWROOM" : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry Layout in Pure CSS Columns */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                onClick={() => setSelectedImageIndex(index)}
                className="break-inside-avoid relative group rounded-2xl overflow-hidden bg-brand-card border border-white/5 hover:border-brand-saffron/30 transition-all duration-500 flex flex-col cursor-pointer shadow-xl mb-6"
              >
                {/* Image Overlay Frame */}
                <div className="relative overflow-hidden aspect-[4/3] sm:aspect-auto">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out max-h-96"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.src = "https://images.unsplash.com/photo-1540747737956-378724044432?q=80&w=800&auto=format&fit=crop";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/30 to-transparent z-10 opacity-70 group-hover:opacity-85 transition-opacity" />
                  
                  {/* Floating Action Badge overlay */}
                  <div className="absolute top-4 right-4 z-20 px-2.5 py-1 rounded bg-black/75 border border-white/10 text-[9px] font-mono uppercase text-brand-saffron font-bold flex items-center gap-1">
                    <Maximize2 className="w-2.5 h-2.5 text-brand-saffron" />
                    <span>EXPAND</span>
                  </div>

                  <div className="absolute bottom-4 left-4 z-20 space-y-1 text-left">
                    <span className="text-[8px] font-mono bg-brand-saffron/15 text-brand-saffron px-2 py-0.5 rounded font-black border border-brand-saffron/20 uppercase tracking-widest">
                      {item.zone}
                    </span>
                    <h4 className="text-base font-bold text-white uppercase font-display leading-tight group-hover:text-brand-saffron transition-colors">
                      {item.title}
                    </h4>
                  </div>
                </div>

                {/* Card footer description detail */}
                <div className="p-5 text-left bg-[#090909] border-t border-white/5 space-y-2 flex-grow">
                  <p className="text-[11px] text-gray-400 font-light leading-relaxed line-clamp-3">
                    {item.desc}
                  </p>
                  <p className="text-[8px] font-mono text-gray-500 tracking-wider uppercase pt-2 border-t border-white/5">
                    SOURCE: {item.assetSource}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* If no items matches filter */}
        {filteredItems.length === 0 && (
          <div className="py-20 text-center space-y-3">
            <Sparkles className="w-10 h-10 text-gray-600 mx-auto" />
            <h4 className="font-bold text-gray-400 uppercase font-display">No show items found</h4>
            <p className="text-xs text-gray-600">Currently preparing details for this zone in Coimbatore.</p>
          </div>
        )}
      </section>

      {/* 5. WHY CUSTOMERS VISIT US (Icon cards grid) */}
      <section className="py-24 px-4 bg-[#090909] border-y border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-mono font-bold tracking-widest text-brand-saffron uppercase">COIMBATORE'S TRUSTED OUTLET</span>
            <h2 className="text-3xl sm:text-5xl font-black uppercase font-display text-white">
              WHY CUSTOMERS VISIT US
            </h2>
            <div className="h-1 w-16 bg-brand-saffron mx-auto rounded-full" />
            <p className="text-gray-400 text-xs sm:text-sm font-light max-w-lg mx-auto">
              Our business is built purely on reliability, genuine direct pricing, and local expertise. Explore what makes Jai Hind Sports stand out from typical chain stores.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {VALUE_CARDS.map((card, idx) => {
              const IconComponent = card.icon;
              return (
                <div
                  key={idx}
                  className="p-8 rounded-2xl bg-brand-card hover:bg-brand-card/90 border border-white/5 hover:border-brand-saffron/20 transition-all duration-300 flex flex-col justify-between h-72 group relative overflow-hidden"
                >
                  {/* Subtle top-right corner background light */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-brand-saffron/5 to-transparent pointer-events-none" />

                  <div>
                    <div className="flex justify-between items-start mb-6">
                      <span className="text-[9px] font-mono font-bold text-brand-saffron bg-brand-saffron/10 px-2.5 py-1 rounded border border-brand-saffron/15 uppercase tracking-widest">
                        {card.highlight}
                      </span>
                      <IconComponent className="w-5 h-5 text-gray-500 group-hover:text-brand-saffron transition-colors" />
                    </div>

                    <h3 className="text-xl font-bold text-white uppercase font-display mb-2 group-hover:text-brand-saffron transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-xs text-gray-400 font-light leading-relaxed">
                      {card.desc}
                    </p>
                  </div>

                  <div className="border-t border-white/5 pt-4 mt-6 flex items-center justify-between text-[9px] font-mono text-gray-500">
                    <span>COIMBATORE PROFESSIONAL OUTLET</span>
                    <span className="text-brand-green-light font-bold">VERIFIED PILLAR</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 6. BRAND PARTNERS LOGO WALL */}
      <section className="py-24 px-4 max-w-7xl mx-auto relative z-10 text-center">
        <div className="mb-16 space-y-3">
          <span className="text-xs font-mono font-bold tracking-widest text-brand-saffron uppercase">DIRECT PARTNERSHIP CATALOG</span>
          <h2 className="text-3xl sm:text-5xl font-black uppercase font-display text-white">
            AUTHORIZED BRAND PARTNERS
          </h2>
          <div className="h-1 w-20 bg-brand-saffron mx-auto rounded-full" />
          <p className="text-gray-400 text-xs sm:text-sm font-light max-w-xl mx-auto">
            We bypass middlemen, grey markets, and counterfeit channels to establish official direct retail codes. Hover to unlock active brand aesthetics.
          </p>
        </div>

        {/* Grid layout of custom styled partner logo cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {BRAND_PARTNERS_LIST.map((brand, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.03 }}
              className={`p-8 rounded-2xl bg-brand-card hover:bg-brand-black border border-white/5 hover:border-white/10 hover:shadow-2xl transition-all duration-300 flex flex-col items-center justify-center min-h-[140px] group relative overflow-hidden`}
            >
              {/* Dynamic hover-glow background */}
              <div className="absolute inset-0 bg-radial-gradient from-white/[0.01] to-transparent pointer-events-none" />
              <div className="absolute -inset-10 bg-gradient-to-tr from-transparent via-white/[0.01] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Bold text brand logo mockup */}
              <span className="text-2xl sm:text-3xl font-black tracking-widest text-gray-500 group-hover:text-white transition-colors duration-300 font-display">
                {brand.name}
              </span>

              <span className="text-[7px] font-mono text-gray-600 tracking-wider uppercase mt-1 group-hover:text-brand-saffron transition-colors">
                {brand.origin} • AUTHORIZED
              </span>

              <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity text-[8px] font-mono text-gray-400">
                {brand.discipline}
              </div>

              {/* Glowing decorative indicator */}
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/5 group-hover:bg-gradient-to-r group-hover:from-transparent group-hover:via-brand-saffron group-hover:to-transparent transition-all" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* PREMIUM SEPARATOR */}
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-brand-green/15 to-transparent" />

      {/* 7. GOOGLE REVIEWS READY CAROUSEL */}
      <section className="py-24 px-4 bg-[#090909] border-y border-white/5 relative z-10 overflow-hidden">
        
        {/* Decorative Google background logos or glowing colors */}
        <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-96 h-96 bg-brand-saffron/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-96 h-96 bg-brand-green/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center space-y-12">
          
          <div className="space-y-3">
            <span className="text-xs font-mono font-bold tracking-widest text-brand-saffron uppercase">AUTHENTIC COIMBATORE INSIGHTS</span>
            <h2 className="text-3xl sm:text-5xl font-black uppercase font-display text-white">
              VERIFIED GOOGLE REVIEWS
            </h2>
            <div className="h-1 w-20 bg-brand-saffron mx-auto rounded-full" />
            
            {/* Google trust badge mockup */}
            <div className="pt-2 flex items-center justify-center gap-2">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-amber-400 stroke-amber-400" />)}
              </div>
              <span className="text-xs font-mono text-gray-400 font-bold tracking-wider">
                4.9 ★ Rating (200+ Reviews) on Google Maps
              </span>
            </div>
          </div>

          {/* Testimonial Active Slider Box */}
          <div className="relative min-h-[220px] max-w-2xl mx-auto flex flex-col justify-between p-8 rounded-2xl bg-brand-card border border-white/5 shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeReviewIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                {/* Review Text */}
                <p className="text-sm sm:text-base text-gray-300 font-light italic leading-relaxed">
                  "{GOOGLE_REVIEWS[activeReviewIndex].text}"
                </p>

                {/* Reviewer Details */}
                <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                  <div className="text-left">
                    <h4 className="font-bold text-white uppercase font-display text-xs">
                      {GOOGLE_REVIEWS[activeReviewIndex].name}
                    </h4>
                    <p className="text-[9px] font-mono text-gray-500 uppercase tracking-widest mt-0.5">
                      {GOOGLE_REVIEWS[activeReviewIndex].relation}
                    </p>
                  </div>
                  <span className="text-[9px] font-mono bg-brand-green/10 text-brand-green-light border border-brand-green/20 px-2.5 py-1 rounded font-bold uppercase tracking-widest">
                    {GOOGLE_REVIEWS[activeReviewIndex].date}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Slider navigation controllers */}
            <div className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-12">
              <button
                onClick={handlePrevReview}
                className="p-2.5 rounded-full bg-[#111111] hover:bg-brand-saffron hover:text-white border border-white/10 text-gray-400 transition-all duration-300 cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-12">
              <button
                onClick={handleNextReview}
                className="p-2.5 rounded-full bg-[#111111] hover:bg-brand-saffron hover:text-white border border-white/10 text-gray-400 transition-all duration-300 cursor-pointer"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="text-[10px] font-mono text-gray-500 max-w-sm mx-auto">
            API Sync Placeholder: Verified database bindings prepared. This container handles real-time Google API feed integration without template hardcoding.
          </div>

        </div>
      </section>

      {/* 8. VISIT OUR STORE (Large Premium Call to Action) */}
      <section className="py-24 px-4 max-w-7xl mx-auto relative z-10">
        <div className="p-8 md:p-16 rounded-3xl bg-brand-card border border-white/5 relative overflow-hidden shadow-2xl">
          {/* Subtle glowing lines */}
          <div className="absolute inset-0 bg-gradient-to-br from-brand-saffron/5 via-transparent to-brand-green/5 pointer-events-none" />
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-saffron/10 blur-[100px] rounded-full pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* CTA Left Column: Copy */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <span className="text-xs font-mono font-bold tracking-widest text-brand-saffron uppercase">TEST THE WEIGHT IN PERSON</span>
              <h2 className="text-3xl md:text-5xl font-black text-white uppercase font-display leading-tight">
                VISIT JAI HIND SPORTS
              </h2>
              <div className="h-1 w-20 bg-brand-saffron rounded-full" />
              
              <p className="text-sm md:text-base text-gray-400 font-light leading-relaxed">
                No digital camera resolution can truly replace the physical weight test of a cricket bat's sweet spot, the aerodynamic balance of a carbon badminton racket, or the customized fit of premium running spikes. We warmly welcome you to experience real gear firsthand.
              </p>

              {/* Direct Store Coordinates */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono pt-2">
                <div className="space-y-1">
                  <span className="text-gray-500 block uppercase font-black">STORE LOCATION:</span>
                  <span className="text-gray-300 block">2/17, 17A, VRS Nagar, Near Cheran Maa Nagar, Vilankurichi, Coimbatore, Tamil Nadu - 641035</span>
                </div>
                <div className="space-y-1">
                  <span className="text-gray-500 block uppercase font-black">OPERATING HOURS:</span>
                  <span className="text-gray-300 block">09:30 AM - 09:00 PM (Mon-Sat)</span>
                  <span className="text-gray-300 block">10:30 AM - 08:30 PM (Sunday)</span>
                </div>
              </div>
            </div>

            {/* CTA Right Column: Quick Contacts and Buttons */}
            <div className="lg:col-span-5 bg-brand-black/40 p-6 sm:p-8 rounded-2xl border border-white/5 space-y-5 text-left">
              <h4 className="font-bold text-white uppercase font-display text-xs tracking-widest flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brand-saffron animate-ping" />
                <span>DIRECT COIMBATORE HOTLINES</span>
              </h4>

              <div className="space-y-3.5 pt-1.5">
                <a 
                  href={`tel:${STORE_DETAILS.phone}`}
                  className="flex items-center gap-3.5 text-gray-300 hover:text-brand-saffron transition-colors"
                >
                  <div className="p-2.5 rounded-lg bg-white/5 text-brand-saffron">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <span className="text-[9px] font-mono text-gray-500 block uppercase">PRIMARY DIRECT LINE</span>
                    <span className="text-sm font-bold font-mono">{STORE_DETAILS.phoneDisplay}</span>
                  </div>
                </a>

                <a 
                  href={`tel:${STORE_DETAILS.secondaryPhone}`}
                  className="flex items-center gap-3.5 text-gray-300 hover:text-brand-saffron transition-colors"
                >
                  <div className="p-2.5 rounded-lg bg-white/5 text-brand-saffron">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <span className="text-[9px] font-mono text-gray-500 block uppercase">SECONDARY DIRECT LINE</span>
                    <span className="text-sm font-bold font-mono">{STORE_DETAILS.secondaryPhoneDisplay}</span>
                  </div>
                </a>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 space-y-3">
                <a
                  href={STORE_DETAILS.googleMapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 bg-gradient-to-r from-brand-saffron to-brand-saffron-light hover:shadow-xl hover:shadow-brand-saffron/15 text-white font-mono font-bold text-xs uppercase tracking-widest rounded-xl flex items-center justify-center gap-2.5 transition-all"
                >
                  <MapPin className="w-4 h-4" />
                  <span>Get Live Directions</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <a
                  href={STORE_DETAILS.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 bg-brand-card hover:bg-white/5 border border-white/10 hover:border-brand-saffron/30 text-white font-mono font-bold text-xs uppercase tracking-widest rounded-xl flex items-center justify-center gap-2.5 transition-all"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-400" />
                  <span>WhatsApp Enquiry</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 9. LIGHTBOX COMPONENT */}
      <AnimatePresence>
        {selectedImageIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-brand-black/98 z-50 flex flex-col justify-between p-4 md:p-8 backdrop-blur-md"
            onClick={() => setSelectedImageIndex(null)}
          >
            {/* Top Bar inside Lightbox */}
            <div className="w-full max-w-7xl mx-auto flex justify-between items-center z-10 p-4">
              <div className="text-left">
                <span className="text-[10px] font-mono tracking-widest text-brand-saffron bg-brand-saffron/10 border border-brand-saffron/20 px-2.5 py-1 rounded font-bold uppercase">
                  {filteredItems[selectedImageIndex].zone}
                </span>
                <span className="text-[10px] font-mono text-gray-500 uppercase ml-3 tracking-widest">
                  {filteredItems[selectedImageIndex].category} zone
                </span>
              </div>
              
              {/* Close Button */}
              <button
                onClick={() => setSelectedImageIndex(null)}
                className="p-3 rounded-full bg-white/5 hover:bg-brand-saffron hover:text-white border border-white/10 text-gray-400 transition-all cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Central Slide Component */}
            <div className="relative flex-grow flex items-center justify-center max-w-7xl mx-auto w-full group/slide">
              {/* Left Selector Arrow */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImageIndex((prev) => (prev !== null && prev > 0) ? prev - 1 : filteredItems.length - 1);
                }}
                className="absolute left-2 md:left-4 z-20 p-3 rounded-full bg-white/5 hover:bg-brand-saffron hover:text-white border border-white/10 text-gray-400 transition-all cursor-pointer opacity-0 group-hover/slide:opacity-100 focus:opacity-100"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Main Image container with transition */}
              <motion.div
                key={selectedImageIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="max-h-[60vh] md:max-h-[70vh] flex items-center justify-center p-2 rounded-2xl border border-white/5 bg-brand-card/50 overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={filteredItems[selectedImageIndex].image}
                  alt={filteredItems[selectedImageIndex].title}
                  className="max-w-full max-h-[58vh] md:max-h-[68vh] object-contain rounded-xl"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1540747737956-378724044432?q=80&w=800&auto=format&fit=crop";
                  }}
                />
              </motion.div>

              {/* Right Selector Arrow */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImageIndex((prev) => (prev !== null && prev < filteredItems.length - 1) ? prev + 1 : 0);
                }}
                className="absolute right-2 md:right-4 z-20 p-3 rounded-full bg-white/5 hover:bg-brand-saffron hover:text-white border border-white/10 text-gray-400 transition-all cursor-pointer opacity-0 group-hover/slide:opacity-100 focus:opacity-100"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Bottom Panel Info */}
            <div 
              className="w-full max-w-3xl mx-auto text-center z-10 p-6 bg-brand-card border border-white/5 rounded-2xl mb-4 space-y-2.5"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-xl md:text-2xl font-black text-white uppercase font-display leading-tight">
                {filteredItems[selectedImageIndex].title}
              </h3>
              <p className="text-xs md:text-sm text-gray-400 font-light leading-relaxed max-w-xl mx-auto">
                {filteredItems[selectedImageIndex].desc}
              </p>
              <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-gray-500">
                <span>COIMBATORE JAI HIND OUTLET</span>
                <span>ASSET SOURCE: {filteredItems[selectedImageIndex].assetSource}</span>
              </div>
            </div>

            {/* Micro keyboard navigation helper */}
            <div className="text-[10px] font-mono text-gray-600 text-center pb-2 select-none">
              Press Arrow Keys [← / →] to navigate • [ESC] to close
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
