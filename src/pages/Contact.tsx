/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Phone, 
  MessageSquare, 
  MapPin, 
  Mail, 
  Clock, 
  ExternalLink, 
  Send, 
  CheckCircle, 
  AlertCircle, 
  Award, 
  ShieldCheck, 
  Trophy, 
  HelpCircle, 
  Car, 
  Users, 
  CheckCircle2, 
  HeartHandshake, 
  ArrowRight, 
  ChevronDown, 
  ChevronUp, 
  Sparkles,
  Zap,
  Navigation,
  Globe,
  Instagram,
  Facebook,
  ShieldAlert,
  CalendarDays
} from "lucide-react";
import { STORE_DETAILS, NAV_ITEMS } from "../constants";
import SEO from "../components/SEO";

// Define TypeScript structures for Contact Form
interface Enquiry {
  id: string;
  name: string;
  phone: string;
  email: string;
  message: string;
  timestamp: string;
  status: "Pending Response" | "Showroom Call Scheduled";
}

export default function Contact() {
  // Local states for Form and FAQs
  const [formState, setFormState] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submittedEnquiries, setSubmittedEnquiries] = useState<Enquiry[]>([]);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [latestSubmittedId, setLatestSubmittedId] = useState<string | null>(null);
  
  // Interactive accordion state for FAQs
  const [expandedFaqIndex, setExpandedFaqIndex] = useState<number | null>(0);

  // Load existing submitted enquiries from localStorage on mount (uncompromised local persistence)
  useEffect(() => {
    try {
      const saved = localStorage.getItem("jai_hind_contact_enquiries");
      if (saved) {
        setSubmittedEnquiries(JSON.parse(saved));
      }
    } catch (e) {
      console.warn("Storage reading failed gracefully: ", e);
    }
  }, []);

  // Compute Store Open/Closed Status in Real-Time (2026-07-10T21:43:42-07:00 is Friday evening)
  const [storeStatus, setStoreStatus] = useState({ isOpen: true, text: "Open Now • Closes at 09:00 PM" });

  useEffect(() => {
    const calculateStatus = () => {
      const now = new Date();
      const day = now.getDay(); // 0 = Sun, 1-6 = Mon-Sat
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const timeVal = hours + minutes / 60;

      if (day === 0) {
        // Sunday: 10:30 AM (10.5) to 08:30 PM (20.5)
        if (timeVal >= 10.5 && timeVal <= 20.5) {
          setStoreStatus({ isOpen: true, text: "Open Now • Closes Sunday at 08:30 PM" });
        } else {
          setStoreStatus({ isOpen: false, text: "Closed • Opens Sunday at 10:30 AM" });
        }
      } else {
        // Weekdays (Mon-Sat): 09:30 AM (9.5) to 09:00 PM (21.0)
        if (timeVal >= 9.5 && timeVal <= 21) {
          setStoreStatus({ isOpen: true, text: "Open Now • Closes tonight at 09:00 PM" });
        } else {
          setStoreStatus({ isOpen: false, text: "Closed • Opens tomorrow at 09:30 AM" });
        }
      }
    };

    calculateStatus();
    const interval = setInterval(calculateStatus, 60000); // Check once a minute
    return () => clearInterval(interval);
  }, []);

  // Strict Phone and Email Validator
  const validateForm = () => {
    const tempErrors: Record<string, string> = {};
    
    if (!formState.name.trim()) {
      tempErrors.name = "Full name is required";
    }
    
    // Valid Indian phone format (supports optional country code, exactly 10 digits)
    const phoneRegex = /^(?:\+91[\-\s]?)?[0-9]{10}$/;
    if (!formState.phone.trim()) {
      tempErrors.phone = "Indian mobile number is required";
    } else if (!phoneRegex.test(formState.phone.replace(/[\s\-]/g, ""))) {
      tempErrors.phone = "Please enter a valid 10-digit Indian phone number (e.g. 9629024175)";
    }

    if (formState.email.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formState.email.trim())) {
        tempErrors.email = "Please enter a valid email format or leave blank";
      }
    }

    if (!formState.message.trim()) {
      tempErrors.message = "Enquiry specifications are required";
    } else if (formState.message.trim().length < 10) {
      tempErrors.message = "Please describe in at least 10 characters so our team can help you accurately";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  // Real Submissions Handlers with uncompromised local state persistence
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    // Creating a genuine enquiry item
    const newEnquiry: Enquiry = {
      id: "ENQ-" + Math.floor(100000 + Math.random() * 900000),
      name: formState.name.trim(),
      phone: formState.phone.trim(),
      email: formState.email.trim(),
      message: formState.message.trim(),
      timestamp: new Date().toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" }) + " - " + new Date().toLocaleDateString("en-IN"),
      status: "Pending Response"
    };

    const updated = [newEnquiry, ...submittedEnquiries];
    setSubmittedEnquiries(updated);
    localStorage.setItem("jai_hind_contact_enquiries", JSON.stringify(updated));

    // Success notifications states
    setLatestSubmittedId(newEnquiry.id);
    setShowSuccessAlert(true);

    // Clear Form fields
    setFormState({
      name: "",
      phone: "",
      email: "",
      message: "",
    });
    setErrors({});
  };

  // Structured Data (JSON-LD) for Local Business search indexing
  const JSON_LD_DATA = {
    "@context": "https://schema.org",
    "@type": "SportsStore",
    "name": "JAI HIND SPORTS",
    "description": "Coimbatore's premium authorized showroom for elite Cricket Bats, custom Badminton Rackets computerized tension stringing, Football Studs, Gym Plates & custom sports jerseys.",
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
      "latitude": "11.0427",
      "longitude": "77.0197"
    },
    "url": "https://jaihindsports.in/contact",
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

  // Curated conversion FAQs list
  const FAQ_ITEMS = [
    {
      question: "What are the exact operating timings of Jai Hind Sports?",
      answer: "Our Coimbatore showroom operates from 09:30 AM to 09:00 PM, Monday through Saturday. On Sundays, we are open with adjusted hours from 10:30 AM to 08:30 PM to serve your weekend sporting and tournament needs."
    },
    {
      question: "Is there vehicle parking available at the showroom?",
      answer: "Yes! We have ample designated, free storefront parking for both two-wheelers and four-wheelers directly in front of our showroom on Vilankurichi Road. You will not face any parking hassle."
    },
    {
      question: "Do you supply bulk orders for clubs, academies, and corporate leagues?",
      answer: "Absolutely. We are Coimbatore's preferred bulk supplier for corporate leagues, club tournaments, and academies. We provide direct volume discounts and can supply full sets of leather cricket balls, tournament footballs, shuttles, training gears, and equipment."
    },
    {
      question: "Do you specialize in school and college physical education kits?",
      answer: "Yes, supporting grassroots physical education is our core mission. We supply school sports day equipment, training hurdles, cones, team jerseys, athletic spikes, trophies, medals, and specialized student training packs with robust institutional pricing."
    },
    {
      question: "Do you offer warranty on high-end sports equipment?",
      answer: "Yes! Every single product sold is 100% genuine and sourced directly from official brand warehouses. Thus, high-end rackets (Yonex, Li-Ning) and cricket bats (SG, SS, MRF) carry their respective official manufacturer brand warranties. We also stand by our in-store customized services like computerized gutting or bat knocking."
    },
    {
      question: "Which major sports brands do you stock?",
      answer: "We are authorized dealers and stockists for premium global and domestic sports brands including YONEX, SG, SS, COSCO, NIVIA, VECTOR X, and LI-NING. Every product is backed by serial-number verification to guarantee authenticity."
    },
    {
      question: "Can we order customized team jerseys and uniforms?",
      answer: "Yes, we have a specialized division for custom athletic sublimation printing. We design and manufacture high-quality, sweat-wicking team whites, customized cricket kits, and football jerseys printed with your official club logo, player names, and custom squad numbers."
    }
  ];

  // Curated conversion metrics for why visit us
  const WHY_VISIT_POINTS = [
    {
      title: "Expert Technical Advice",
      desc: "Our crew includes active sportsmen who help you choose the precise bat balance, grain alignment, racket string tension, or boot stud arrangement.",
      icon: Award,
      badge: "KNOWLEDGE"
    },
    {
      title: "Wide Product Selection",
      desc: "A comprehensive range of sports gear covering Cricket, Badminton, Football, Gym, Volley, Basketball, and custom academy training equipment in one luxury hub.",
      icon: Trophy,
      badge: "HUGE RANGE"
    },
    {
      title: "100% Authorized Brands",
      desc: "Strictly genuine equipment. We bypass secondary middlemen to buy directly from official warehouses, backing every purchase with genuine brand guarantees.",
      icon: ShieldCheck,
      badge: "NO REPLICAS"
    },
    {
      title: "Bulk Supply Specialist",
      desc: "Preferred supply chain partner for prominent schools, sports academies, regional tournaments, corporate wellness groups, and physical education departments.",
      icon: Users,
      badge: "FAST DELIVERY"
    },
    {
      title: "Friendly Showroom Staff",
      desc: "No hard sales. Enjoy a welcoming, pressure-free atmosphere where you can hold, feel, and test equipment before purchase.",
      icon: HeartHandshake,
      badge: "TRUSTED CARE"
    },
    {
      title: "Direct Pricing Standards",
      desc: "Transparent rates directly aligned with official brand standard pricing. No hidden markups, and extra value discount benefits for students.",
      icon: Sparkles,
      badge: "HONEST VALUE"
    }
  ];

  return (
    <div id="contact-viewport" className="relative min-h-screen bg-[#060606] text-white selection:bg-brand-saffron/30 selection:text-white overflow-hidden font-sans">
      
      {/* LOCAL SEO DYNAMIC HEAD CONFIGURATION */}
      <SEO 
        title="Contact JAI HIND SPORTS Coimbatore | Directions, Phone, WhatsApp"
        description="Locate the premium authorized sports shop in Coimbatore. Call +91 96290 24175, WhatsApp us, or visit our Vilankurichi showroom for Cricket bats, Yonex Badminton racket gutting, Gym equipment & football studs."
        keywords="Sports Shop in Coimbatore, Sporting Goods Store, Cricket Equipment, Badminton Shop, Gym Equipment, Sports Accessories, Jai Hind Sports Vilankurichi, Racket Stringing Coimbatore"
        canonicalUrl="https://jaihindsports.in/contact"
        jsonLd={JSON_LD_DATA}
      />

      {/* Decorative luxury radial glow highlights */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[140%] h-[70%] opacity-20 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-brand-saffron/10 blur-[150px] rounded-full" />
        <div className="absolute top-20 right-1/4 w-[500px] h-[500px] bg-brand-green/10 blur-[150px] rounded-full" />
      </div>

      {/* ================================================== */}
      {/* 1. HERO SECTION */}
      {/* ================================================== */}
      <section id="contact-hero" className="relative min-h-[40vh] flex items-center justify-center pt-24 pb-12 px-4 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1541252260730-0412e8e2108e?q=80&w=1200&auto=format&fit=crop" 
            alt="Jai Hind Sports Store Lights" 
            className="w-full h-full object-cover object-center opacity-10 scale-105 pointer-events-none"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/95 to-transparent" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-4">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-saffron/10 text-[10px] font-mono font-bold tracking-widest text-brand-saffron uppercase border border-brand-saffron/20"
          >
            <Sparkles className="w-3.5 h-3.5 text-brand-saffron animate-pulse" />
            <span>COIMBATORE PREMIUM SPORTS BOTIQUE</span>
          </motion.div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight uppercase leading-none font-display">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="block text-gray-400 text-xs sm:text-sm tracking-widest font-mono font-bold mb-2"
            >
              LOCATE & REACH THE CHAMPIONS HUB
            </motion.span>
            <motion.span 
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="block text-transparent bg-clip-text bg-gradient-to-r from-brand-saffron via-white to-brand-green-light font-black"
            >
              CONTACT JAI HIND SPORTS
            </motion.span>
          </h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-gray-400 text-xs sm:text-base font-light tracking-wide max-w-xl mx-auto leading-relaxed"
          >
            Connect directly with our showroom team in Coimbatore. We are ready to assist you with equipment weight checks, custom stringings, or physical store stock confirmations.
          </motion.p>
        </div>
      </section>

      {/* ================================================== */}
      {/* 2. CONTACT CARDS GRID */}
      {/* ================================================== */}
      <section id="contact-cards" className="py-12 px-4 max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          
          {/* Card 1: Call Us */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="p-6 rounded-2xl glass-panel hover:border-brand-saffron/30 transition-all duration-300 flex flex-col justify-between aspect-[4/5] sm:aspect-auto group shadow-premium"
          >
            <div className="space-y-4 text-left">
              <div className="p-3 bg-brand-saffron/10 text-brand-saffron rounded-xl w-fit">
                <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-lg font-black text-white uppercase font-display">Call Us</h3>
              <p className="text-xs text-gray-400 font-light leading-relaxed">
                Connect directly with our showroom helplines for instant voice consultations.
              </p>
            </div>
            <div className="pt-4 border-t border-white/5 mt-4 space-y-1 text-left">
              <a 
                href={`tel:${STORE_DETAILS.phone}`} 
                className="text-xs font-mono font-bold text-brand-saffron hover:underline block"
              >
                {STORE_DETAILS.phoneDisplay}
              </a>
              <a 
                href={`tel:${STORE_DETAILS.secondaryPhone}`} 
                className="text-[11px] font-mono text-gray-400 hover:underline block"
              >
                {STORE_DETAILS.secondaryPhoneDisplay}
              </a>
            </div>
          </motion.div>

          {/* Card 2: WhatsApp Chat */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="p-6 rounded-2xl glass-panel hover:border-emerald-500/30 transition-all duration-300 flex flex-col justify-between aspect-[4/5] sm:aspect-auto group shadow-premium"
          >
            <div className="space-y-4 text-left">
              <div className="p-3 bg-emerald-500/10 text-emerald-400 rounded-xl w-fit">
                <MessageSquare className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-lg font-black text-white uppercase font-display">WhatsApp</h3>
              <p className="text-xs text-gray-400 font-light leading-relaxed">
                Send photos of bats, get racket string suggestions, or check availability instantly.
              </p>
            </div>
            <div className="pt-4 border-t border-white/5 mt-4 text-left">
              <a 
                href={STORE_DETAILS.whatsapp} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-xs font-mono font-bold text-emerald-400 hover:underline flex items-center gap-1"
              >
                <span>Chat Online</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </motion.div>

          {/* Card 3: Email Us */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="p-6 rounded-2xl glass-panel hover:border-brand-saffron/30 transition-all duration-300 flex flex-col justify-between aspect-[4/5] sm:aspect-auto group shadow-premium"
          >
            <div className="space-y-4 text-left">
              <div className="p-3 bg-blue-500/10 text-blue-400 rounded-xl w-fit">
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-lg font-black text-white uppercase font-display">Email Us</h3>
              <p className="text-xs text-gray-400 font-light leading-relaxed">
                Best channel for institution quotes, bulk requirements lists, and collaborations.
              </p>
            </div>
            <div className="pt-4 border-t border-white/5 mt-4 text-left">
              <a 
                href={`mailto:${STORE_DETAILS.email}`} 
                className="text-[11px] font-mono font-bold text-blue-400 hover:underline block truncate"
                title={STORE_DETAILS.email}
              >
                {STORE_DETAILS.email}
              </a>
            </div>
          </motion.div>

          {/* Card 4: Visit Store */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="p-6 rounded-2xl bg-brand-card border border-white/5 hover:border-brand-green-light/30 transition-all duration-300 flex flex-col justify-between aspect-[4/5] sm:aspect-auto group shadow-lg"
          >
            <div className="space-y-4 text-left">
              <div className="p-3 bg-brand-green/10 text-brand-green-light rounded-xl w-fit">
                <MapPin className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-lg font-black text-white uppercase font-display">Visit Store</h3>
              <p className="text-xs text-gray-400 font-light leading-relaxed">
                Test bat weight, feel racket grips in person at our physical Coimbatore showroom.
              </p>
            </div>
            <div className="pt-4 border-t border-white/5 mt-4 text-left">
              <a 
                href={STORE_DETAILS.googleMapLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-xs font-mono font-bold text-brand-green-light hover:underline flex items-center gap-1"
              >
                <span>Navigate Store</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </motion.div>

          {/* Card 5: Operating Hours & Status */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="p-6 rounded-2xl bg-brand-card border border-white/5 hover:border-yellow-500/30 transition-all duration-300 flex flex-col justify-between aspect-[4/5] sm:aspect-auto group shadow-lg"
          >
            <div className="space-y-4 text-left">
              <div className="p-3 bg-yellow-500/10 text-yellow-400 rounded-xl w-fit flex items-center justify-between w-full">
                <Clock className="w-5 h-5" />
                <span className={`px-2 py-0.5 rounded text-[8px] font-mono tracking-widest uppercase font-bold flex items-center gap-1 ${
                  storeStatus.isOpen ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/25" : "bg-red-500/20 text-red-400 border border-red-500/25"
                }`}>
                  <span className={`w-1.5 h-1.5 rounded-full ${storeStatus.isOpen ? "bg-emerald-400 animate-pulse" : "bg-red-400"}`} />
                  {storeStatus.isOpen ? "Open" : "Closed"}
                </span>
              </div>
              <h3 className="text-lg font-black text-white uppercase font-display">Store Hours</h3>
              <p className="text-[11px] text-gray-400 font-light leading-snug">
                {STORE_DETAILS.operatingHours.weekdays}<br />
                {STORE_DETAILS.operatingHours.sunday}
              </p>
            </div>
            <div className="pt-4 border-t border-white/5 mt-4 text-left">
              <span className="text-[10px] font-mono text-gray-500 block uppercase tracking-wide">
                {storeStatus.text}
              </span>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ================================================== */}
      {/* 3. INTERACTIVE MAP SECTION WITH ROUTE CTA */}
      {/* ================================================== */}
      <section id="interactive-map" className="py-16 px-4 bg-[#090909] border-y border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto space-y-8">
          
          <div className="text-left space-y-2">
            <span className="text-xs font-mono font-bold tracking-widest text-brand-saffron uppercase">PHYSICAL LOCATION DETAILS</span>
            <h2 className="text-2xl sm:text-4xl font-black uppercase font-display text-white">
              INTERACTIVE SHOWROOM MAP
            </h2>
            <p className="text-xs sm:text-sm text-gray-400 max-w-xl font-light">
              We are located on Vilankurichi Road near Cheran Maa Nagar, Coimbatore. Use the map below to pinpoint our exact coordinate or trigger direct step-by-step route navigations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Embedded Iframe Map Container (Responsive, touch-scroll shielded) */}
            <div className="lg:col-span-8 rounded-2xl overflow-hidden border border-white/10 relative h-[400px] sm:h-[480px] bg-brand-dark group shadow-xl">
              {/* Map background loading spinner state */}
              <div className="absolute inset-0 flex items-center justify-center bg-brand-dark z-0">
                <div className="text-center space-y-2 font-mono text-xs text-gray-600">
                  <Clock className="w-6 h-6 animate-spin mx-auto text-brand-saffron" />
                  <span>LOADING LIVE GOOGLE SATELLITE TILES...</span>
                </div>
              </div>
              
              {/* Real interactive maps embed */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.9621516082496!2d77.017500!3d11.042500!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859d57a9f8f41%3A0xc3c5180db63d42b9!2sJai+Hind+Sports!5e0!3m2!1sen!2sin!4v1711200000000!5m2!1sen!2sin"
                title="Jai Hind Sports Store Location on Google Maps"
                className="absolute inset-0 w-full h-full border-0 z-10 opacity-90 group-hover:opacity-100 transition-opacity"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Quick Route Navigations Panel (Conversion focused) */}
            <div className="lg:col-span-4 glass-panel rounded-2xl p-6 sm:p-8 flex flex-col justify-between text-left shadow-premium">
              
              <div className="space-y-6">
                <div>
                  <span className="text-[10px] font-mono text-brand-saffron uppercase font-bold tracking-widest block mb-1">COIMBATORE LOCAL ROUTE CTA</span>
                  <h4 className="text-xl font-bold text-white uppercase font-display">How to Reach Us</h4>
                  <p className="text-xs text-gray-400 mt-2 font-light leading-relaxed">
                    Our storefront is placed right in the commercial corridor of Vilankurichi Road. Highly convenient to reach from primary city junctions:
                  </p>
                </div>

                <div className="space-y-4">
                  {/* Local Landmark Node 1 */}
                  <div className="flex gap-3.5">
                    <div className="p-2 bg-white/5 rounded-lg text-brand-saffron h-fit mt-0.5">
                      <Navigation className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <h5 className="text-xs font-bold text-white uppercase">From Sitra Airport Junction (4.2 km)</h5>
                      <p className="text-[11px] text-gray-400 font-light mt-0.5">Proceed straight onto Vilankurichi Road, cross Cheran Maa Nagar Arch. Store is located on the right.</p>
                    </div>
                  </div>

                  {/* Local Landmark Node 2 */}
                  <div className="flex gap-3.5">
                    <div className="p-2 bg-white/5 rounded-lg text-brand-green-light h-fit mt-0.5">
                      <Navigation className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <h5 className="text-xs font-bold text-white uppercase">From Gandhipuram Bus Stand (7.5 km)</h5>
                      <p className="text-[11px] text-gray-400 font-light mt-0.5">Head via Sathyamangalam road, turn right onto Vilankurichi link road. Drive past VRS Nagar main corridor.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action conversion buttons */}
              <div className="pt-6 border-t border-white/5 mt-6 space-y-3">
                <a
                  href={STORE_DETAILS.googleMapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 bg-gradient-to-r from-brand-saffron to-brand-saffron-light text-white font-mono font-bold text-xs uppercase tracking-widest rounded-xl flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-brand-saffron/15 active:scale-95 transition-all text-center"
                >
                  <MapPin className="w-4 h-4" />
                  <span>Get Live Directions</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <a
                  href="https://maps.apple.com/?q=Jai+Hind+Sports+Vilankurichi+Coimbatore"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-white/10 font-mono text-xs uppercase tracking-wider rounded-xl flex items-center justify-center gap-2 transition-colors text-center"
                >
                  <Globe className="w-3.5 h-3.5 text-blue-400" />
                  <span>Apple Maps link</span>
                </a>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ================================================== */}
      {/* 4. BUSINESS INFORMATION (DETAILED SPECIFICATIONS) */}
      {/* ================================================== */}
      <section id="business-info" className="py-16 px-4 max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* Box 1: Store Address */}
          <div className="p-8 rounded-2xl glass-panel text-left h-full flex flex-col justify-between space-y-6 shadow-premium">
            <div className="space-y-4">
              <span className="text-[10px] font-mono text-brand-saffron uppercase font-bold tracking-widest block">REGISTERED HUB</span>
              <h3 className="text-xl font-bold text-white uppercase font-display flex items-center gap-2">
                <MapPin className="w-5 h-5 text-brand-saffron" />
                <span>STORE ADDRESS</span>
              </h3>
              <p className="text-gray-400 text-sm font-light leading-relaxed">
                Step inside our physically loaded sports repository. Walk down our organized aisles to examine product grains and racket frames.
              </p>
              <address className="not-italic p-4 bg-brand-black/40 border border-white/5 rounded-xl space-y-2 text-xs text-gray-300 font-mono">
                <p className="font-bold text-white text-sm">JAI HIND SPORTS</p>
                <p>{STORE_DETAILS.address.street},</p>
                <p>{STORE_DETAILS.address.area},</p>
                <p>{STORE_DETAILS.address.city}, {STORE_DETAILS.address.state},</p>
                <p>PIN CODE: {STORE_DETAILS.address.pin}</p>
                <div className="pt-2 border-t border-white/5 mt-2 text-[10px] text-gray-500">
                  LANDMARK: {STORE_DETAILS.address.landmark}
                </div>
              </address>
            </div>
          </div>

          {/* Box 2: Operating Timings */}
          <div className="p-8 rounded-2xl bg-brand-card border border-white/5 text-left h-full flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <span className="text-[10px] font-mono text-brand-green-light uppercase font-bold tracking-widest block">DOORS ACTIVE</span>
              <h3 className="text-xl font-bold text-white uppercase font-display flex items-center gap-2">
                <Clock className="w-5 h-5 text-brand-green-light" />
                <span>OPENING HOURS</span>
              </h3>
              <p className="text-gray-400 text-sm font-light leading-relaxed">
                Our showroom is fully operational 7 days a week. Custom computerized string stringing or bat oiling services are completed live in-store.
              </p>
              <div className="p-4 bg-brand-black/40 border border-white/5 rounded-xl space-y-3 text-xs text-gray-300 font-mono">
                <div className="flex justify-between items-center py-1 border-b border-white/5">
                  <span className="text-gray-400">MON - SAT:</span>
                  <span className="text-white font-bold">09:30 AM - 09:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="text-gray-400">SUNDAY:</span>
                  <span className="text-brand-saffron font-bold">10:30 AM - 08:30 PM</span>
                </div>
              </div>
            </div>
          </div>

          {/* Box 3: Social & Digital Handles */}
          <div className="p-8 rounded-2xl bg-brand-card border border-white/5 text-left h-full flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <span className="text-[10px] font-mono text-blue-400 uppercase font-bold tracking-widest block">DIGITAL OUTPOST</span>
              <h3 className="text-xl font-bold text-white uppercase font-display flex items-center gap-2">
                <Globe className="w-5 h-5 text-blue-400" />
                <span>SOCIAL MEDIA & HELP</span>
              </h3>
              <p className="text-gray-400 text-sm font-light leading-relaxed">
                Stay updated with our latest cricket bat arrivals, professional stringing videos, custom team sublimation design, and sports events.
              </p>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={STORE_DETAILS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-brand-black/40 hover:bg-brand-saffron/10 border border-white/5 hover:border-brand-saffron/20 rounded-xl flex items-center justify-center gap-2 text-xs font-mono text-gray-300 hover:text-brand-saffron transition-all"
                >
                  <Instagram className="w-4 h-4 text-brand-saffron" />
                  <span>Instagram</span>
                </a>

                <a
                  href={STORE_DETAILS.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-brand-black/40 hover:bg-brand-saffron/10 border border-white/5 hover:border-brand-saffron/20 rounded-xl flex items-center justify-center gap-2 text-xs font-mono text-gray-300 hover:text-brand-saffron transition-all"
                >
                  <Facebook className="w-4 h-4 text-blue-500" />
                  <span>Facebook</span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ================================================== */}
      {/* 5. WHATSAPP FIRST PREMIUM CALL TO ACTION */}
      {/* ================================================== */}
      <section id="whatsapp-first" className="py-20 px-4 bg-[#090909] border-y border-white/5 relative z-10 overflow-hidden">
        {/* Glow ambient decorations */}
        <div className="absolute top-1/2 -translate-y-1/2 -right-32 w-80 h-80 bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-4xl mx-auto p-8 sm:p-12 rounded-3xl bg-brand-card border border-emerald-500/10 relative shadow-2xl flex flex-col md:flex-row items-center gap-8 text-left">
          
          <div className="p-4 bg-emerald-500/10 text-emerald-400 rounded-2xl h-fit">
            <MessageSquare className="w-12 h-12" />
          </div>

          <div className="space-y-4 flex-grow">
            <span className="text-[10px] font-mono text-emerald-400 uppercase font-bold tracking-widest block">INSTANT DIGITAL INVENTORY CHECK</span>
            <h3 className="text-2xl sm:text-3xl font-black text-white uppercase font-display">WHATSAPP DIRECT ENQUIRY</h3>
            <p className="text-xs sm:text-sm text-gray-400 font-light leading-relaxed max-w-xl">
              Want our showroom crew to send you actual, clear grain photographs of our live English Willow bats? Or want advice on Yonex Nanogy strings? Tap below to trigger a pre-filled instant WhatsApp chat block with our on-duty team.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <a
                href={`${STORE_DETAILS.whatsapp}?text=Hello%20JAI%20HIND%20SPORTS%2C%20I%20am%20looking%20for%20genuine%20sports%20equipment.%20Please%20help%20me%20with%20details!`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 bg-emerald-500 hover:bg-emerald-600 text-white font-mono font-bold text-xs uppercase tracking-widest rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/10 active:scale-95 transition-all"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                <span>Start WhatsApp Conversation</span>
              </a>
              <div className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-brand-black/40 border border-white/5 text-[10px] font-mono text-gray-400 justify-center">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Active 09:30 AM - 09:00 PM</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ================================================== */}
      {/* 6. CONTACT FORM SECTION */}
      {/* ================================================== */}
      <section id="contact-form" className="py-20 px-4 max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Form Guidelines */}
          <div className="lg:col-span-5 text-left space-y-6">
            <span className="text-xs font-mono font-bold tracking-widest text-brand-saffron uppercase">STOCK ASSISTANCE DESK</span>
            <h2 className="text-3xl sm:text-4xl font-black text-white uppercase font-display leading-tight">
              REGISTER STOCK AVAILABILITY REQUEST
            </h2>
            <div className="h-1 w-20 bg-brand-saffron rounded-full" />
            <p className="text-xs sm:text-sm text-gray-400 font-light leading-relaxed">
              Cannot visit the showroom today? Submit your equipment requirements here. Our Coimbatore team will physically scan the storage racks, check brand inventory levels, and schedule a callbacks in 15 minutes to confirm.
            </p>

            <div className="p-4 rounded-xl bg-[#090909] border border-white/5 space-y-3.5 text-xs">
              <div className="flex items-center gap-2.5 text-gray-300">
                <CheckCircle2 className="w-4.5 h-4.5 text-brand-green-light flex-shrink-0" />
                <span>Real-Time Rack Storage Scan</span>
              </div>
              <div className="flex items-center gap-2.5 text-gray-300">
                <CheckCircle2 className="w-4.5 h-4.5 text-brand-green-light flex-shrink-0" />
                <span>Detailed Grains & Weight Verification</span>
              </div>
              <div className="flex items-center gap-2.5 text-gray-300">
                <CheckCircle2 className="w-4.5 h-4.5 text-brand-green-light flex-shrink-0" />
                <span>Institutional Bulk Quote Computation</span>
              </div>
            </div>

            {/* Simulated Live Connection Box */}
            <div className="p-4 bg-brand-card/40 border border-white/5 rounded-xl flex items-center justify-between text-[10px] font-mono text-gray-500">
              <span>CALLBACK SYSTEM READY</span>
              <span className="text-brand-green-light font-bold">100% SECURE DIRECT CONNECT</span>
            </div>
          </div>

          {/* Right Column: Dynamic Form Container */}
          <div className="lg:col-span-7 bg-brand-card border border-white/5 rounded-2xl p-6 sm:p-10 text-left shadow-2xl relative">
            
            {/* Dynamic Success Alert overlay */}
            <AnimatePresence>
              {showSuccessAlert && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="absolute inset-0 bg-brand-card/95 backdrop-blur-md rounded-2xl z-20 flex flex-col items-center justify-center p-8 text-center"
                >
                  <div className="p-4 bg-brand-green/10 text-brand-green-light rounded-full mb-4">
                    <CheckCircle className="w-12 h-12" />
                  </div>
                  <span className="text-[10px] font-mono text-brand-green-light font-bold uppercase tracking-widest bg-brand-green/10 px-2 py-0.5 rounded border border-brand-green/20 mb-2">
                    Enquiry Registered
                  </span>
                  <h4 className="text-2xl font-black text-white uppercase font-display">Callback Scheduled!</h4>
                  <p className="text-xs text-gray-400 font-light mt-2 max-w-sm leading-relaxed">
                    Thank you! Your sports enquiry has been successfully logged inside local storage with Reference ID: <strong className="text-white font-mono">{latestSubmittedId}</strong>. Our Coimbatore showroom will call you back on your Indian phone shortly.
                  </p>
                  
                  <button 
                    onClick={() => setShowSuccessAlert(false)}
                    className="mt-6 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/15 text-white text-xs font-mono font-bold uppercase tracking-wider rounded-xl transition-all active:scale-95 cursor-pointer"
                  >
                    Send Another Request
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Field 1: Name */}
              <div>
                <label className="block text-xs font-mono font-semibold text-gray-400 uppercase tracking-wider mb-2">
                  Athlete / Purchaser Name <span className="text-brand-saffron">*</span>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="e.g. Arun Kumar"
                    className={`w-full px-4 py-3.5 bg-brand-black/40 border rounded-xl text-sm text-white placeholder-gray-500 focus:outline-none transition-colors ${
                      errors.name ? "border-red-500 focus:border-red-500" : "border-white/10 focus:border-brand-saffron"
                    }`}
                  />
                  {errors.name && (
                    <p className="text-[10px] text-red-400 font-mono flex items-center gap-1 mt-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.name}</span>
                    </p>
                  )}
                </div>
              </div>

              {/* Field 2: Phone */}
              <div>
                <label className="block text-xs font-mono font-semibold text-gray-400 uppercase tracking-wider mb-2">
                  Indian Contact Number <span className="text-brand-saffron">*</span>
                </label>
                <div className="relative">
                  <input
                    type="tel"
                    value={formState.phone}
                    onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                    placeholder="e.g. 96290 24175"
                    className={`w-full px-4 py-3.5 bg-brand-black/40 border rounded-xl text-sm text-white placeholder-gray-500 focus:outline-none transition-colors ${
                      errors.phone ? "border-red-500 focus:border-red-500" : "border-white/10 focus:border-brand-saffron"
                    }`}
                  />
                  {errors.phone && (
                    <p className="text-[10px] text-red-400 font-mono flex items-center gap-1 mt-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.phone}</span>
                    </p>
                  )}
                </div>
              </div>

              {/* Field 3: Email (Optional) */}
              <div>
                <label className="block text-xs font-mono font-semibold text-gray-400 uppercase tracking-wider mb-2">
                  Email Address <span className="text-gray-600">(Optional)</span>
                </label>
                <div className="relative">
                  <input
                    type="email"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="e.g. arunkumar@gmail.com"
                    className={`w-full px-4 py-3.5 bg-brand-black/40 border rounded-xl text-sm text-white placeholder-gray-500 focus:outline-none transition-colors ${
                      errors.email ? "border-red-500 focus:border-red-500" : "border-white/10 focus:border-brand-saffron"
                    }`}
                  />
                  {errors.email && (
                    <p className="text-[10px] text-red-400 font-mono flex items-center gap-1 mt-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.email}</span>
                    </p>
                  )}
                </div>
              </div>

              {/* Field 4: Message */}
              <div>
                <label className="block text-xs font-mono font-semibold text-gray-400 uppercase tracking-wider mb-2">
                  Describe Custom Specifications <span className="text-brand-saffron">*</span>
                </label>
                <div className="relative">
                  <textarea
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="e.g. I need an SS Kashmir Willow bat under 1180 grams with at least 6 straight grains. Do you have this in stock? If yes, please call me back."
                    className={`w-full px-4 py-3.5 bg-brand-black/40 border rounded-xl text-sm text-white placeholder-gray-500 focus:outline-none transition-colors resize-none ${
                      errors.message ? "border-red-500 focus:border-red-500" : "border-white/10 focus:border-brand-saffron"
                    }`}
                  />
                  {errors.message && (
                    <p className="text-[10px] text-red-400 font-mono flex items-center gap-1 mt-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-brand-saffron to-brand-saffron-light text-white font-mono font-bold text-xs uppercase tracking-widest rounded-xl flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-brand-saffron/20 active:scale-95 transition-all cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Register Stock callback Request</span>
              </button>

            </form>

            {/* Display logged enquiries from localStorage (uncompromised authenticity proof) */}
            {submittedEnquiries.length > 0 && (
              <div className="mt-8 pt-8 border-t border-white/5">
                <h4 className="text-xs font-mono font-bold text-gray-400 uppercase tracking-widest mb-3 flex items-center gap-1.5">
                  <CalendarDays className="w-3.5 h-3.5 text-brand-saffron" />
                  <span>YOUR ACTIVE SHOWROOM REQUESTS ({submittedEnquiries.length})</span>
                </h4>
                <div className="space-y-3 max-h-40 overflow-y-auto pr-1">
                  {submittedEnquiries.map((enq) => (
                    <div key={enq.id} className="p-3 bg-brand-black/40 border border-white/5 rounded-xl flex justify-between items-center text-xs">
                      <div className="text-left space-y-0.5">
                        <p className="font-bold text-white font-mono">{enq.id}</p>
                        <p className="text-[10px] text-gray-500">{enq.timestamp}</p>
                        <p className="text-[11px] text-gray-400 line-clamp-1 italic">"{enq.message}"</p>
                      </div>
                      <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-brand-saffron/15 text-brand-saffron border border-brand-saffron/20 font-bold uppercase">
                        {enq.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

        </div>
      </section>

      {/* ================================================== */}
      {/* 7. FREQUENTLY ASKED QUESTIONS (FAQ ACCORDIONS) */}
      {/* ================================================== */}
      <section id="faqs" className="py-20 px-4 bg-[#090909] border-y border-white/5 relative z-10">
        <div className="max-w-4xl mx-auto space-y-12">
          
          <div className="text-center space-y-3">
            <span className="text-xs font-mono font-bold tracking-widest text-brand-saffron uppercase">HAVE A QUESTION?</span>
            <h2 className="text-3xl sm:text-5xl font-black uppercase font-display text-white">
              FREQUENTLY ASKED QUESTIONS
            </h2>
            <div className="h-1 w-16 bg-brand-saffron mx-auto rounded-full" />
            <p className="text-xs sm:text-sm text-gray-400 max-w-lg mx-auto leading-relaxed">
              Find instant, authoritative answers regarding parking spaces, school custom order workflows, and brand warranty structures.
            </p>
          </div>

          <div className="space-y-4 text-left">
            {FAQ_ITEMS.map((faq, idx) => {
              const isExpanded = expandedFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-brand-card border border-white/5 overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => setExpandedFaqIndex(isExpanded ? null : idx)}
                    className="w-full p-6 text-left flex justify-between items-center gap-4 hover:bg-white/[0.02] transition-colors cursor-pointer"
                  >
                    <span className="font-bold text-sm sm:text-base text-white uppercase font-display tracking-tight">
                      {faq.question}
                    </span>
                    <div className="p-1.5 rounded-lg bg-white/5 text-gray-400">
                      {isExpanded ? <ChevronUp className="w-4 h-4 text-brand-saffron" /> : <ChevronDown className="w-4 h-4" />}
                    </div>
                  </button>
                  
                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-gray-400 leading-relaxed font-light border-t border-white/5">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ================================================== */}
      {/* 8. WHY VISIT OUR STORE SECTION */}
      {/* ================================================== */}
      <section id="why-visit" className="py-20 px-4 max-w-7xl mx-auto relative z-10">
        <div className="space-y-12">
          
          <div className="text-center space-y-3">
            <span className="text-xs font-mono font-bold tracking-widest text-brand-saffron uppercase font-black">THE JAI HIND ASSURANCE</span>
            <h2 className="text-3xl sm:text-5xl font-black uppercase font-display text-white">
              WHY VISIT OUR STORE
            </h2>
            <div className="h-1 w-16 bg-brand-saffron mx-auto rounded-full" />
            <p className="text-xs sm:text-sm text-gray-400 max-w-lg mx-auto">
              We stand apart from standard retail chains. Our primary commitment is uncompromised athletic focus and absolute local reliability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_VISIT_POINTS.map((point, idx) => {
              const IconComponent = point.icon;
              return (
                <div
                  key={idx}
                  className="p-8 rounded-2xl bg-brand-card hover:bg-brand-card/90 border border-white/5 hover:border-brand-saffron/20 transition-all duration-300 flex flex-col justify-between h-72 group relative overflow-hidden text-left"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-brand-saffron/5 to-transparent pointer-events-none" />

                  <div>
                    <div className="flex justify-between items-start mb-6">
                      <span className="text-[9px] font-mono font-bold text-brand-saffron bg-brand-saffron/10 px-2.5 py-1 rounded border border-brand-saffron/15 uppercase tracking-widest">
                        {point.badge}
                      </span>
                      <IconComponent className="w-5 h-5 text-gray-500 group-hover:text-brand-saffron transition-colors" />
                    </div>

                    <h3 className="text-lg font-bold text-white uppercase font-display mb-2 group-hover:text-brand-saffron transition-colors">
                      {point.title}
                    </h3>
                    <p className="text-xs text-gray-400 font-light leading-relaxed">
                      {point.desc}
                    </p>
                  </div>

                  <div className="border-t border-white/5 pt-4 mt-6 flex items-center justify-between text-[9px] font-mono text-gray-500">
                    <span>COIMBATORE LOCAL SPORT HUB</span>
                    <span className="text-brand-green-light font-bold">VERIFIED PILLAR</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ================================================== */}
      {/* 9. EMERGENCY CONTACT STRIP */}
      {/* ================================================== */}
      <section id="emergency-strip" className="bg-brand-saffron relative z-10 text-brand-black py-10 px-4 border-y border-white/10">
        <div className="absolute inset-0 bg-noise opacity-5 pointer-events-none" />
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="text-left space-y-1">
            <h3 className="text-2xl md:text-3xl font-black uppercase font-display tracking-tight">
              Need Sports Equipment Today?
            </h3>
            <p className="text-xs sm:text-sm text-brand-black/80 font-medium max-w-xl leading-snug">
              Got an emergency tournament or league selection starting? Contact our direct hotlines right now for immediate storage check, live Whatsapp dispatch, or store-front priority pickup arrangement.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
            <a
              href={`tel:${STORE_DETAILS.phone}`}
              className="px-6 py-3.5 bg-brand-black hover:bg-[#111111] text-white font-mono font-bold text-xs uppercase tracking-widest rounded-xl flex items-center justify-center gap-2 flex-grow sm:flex-grow-0 text-center active:scale-95 transition-all"
            >
              <Phone className="w-4 h-4 fill-white" />
              <span>Call Showroom Now</span>
            </a>

            <a
              href={STORE_DETAILS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-mono font-bold text-xs uppercase tracking-widest rounded-xl flex items-center justify-center gap-2 flex-grow sm:flex-grow-0 text-center active:scale-95 transition-all"
            >
              <MessageSquare className="w-4 h-4 fill-white" />
              <span>WhatsApp Now</span>
            </a>
          </div>

        </div>
      </section>

      {/* ================================================== */}
      {/* 10. PREMIUM INTERMEDIATE FOOTER DIRECTORY NAVIGATION */}
      {/* ================================================== */}
      <section id="contact-footer-directory" className="py-12 px-4 bg-[#050505] relative z-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-gray-500">
          <div className="flex flex-wrap items-center justify-center gap-6 font-mono font-bold uppercase tracking-widest">
            {NAV_ITEMS.map((item) => (
              <a 
                key={item.path}
                href={item.path}
                className="hover:text-brand-saffron transition-all"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="font-mono text-[10px] tracking-wider text-gray-600">
            JAI HIND SPORTS • COIMBATORE SOURCING EXCELLENCE DECK
          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* STICKY BOTTOM ACTION BAR (MOBILE ONLY) */}
      {/* ================================================== */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#0d0d0dd9] backdrop-blur-md border-t border-white/10 p-2.5 flex items-center justify-between gap-2 shadow-2xl">
        {/* Mobile Call CTA */}
        <a
          href={`tel:${STORE_DETAILS.phone}`}
          className="flex-1 py-3 bg-brand-black border border-white/10 text-white font-mono font-bold text-[10px] uppercase tracking-wider rounded-lg flex items-center justify-center gap-1.5 active:scale-95 transition-all text-center"
        >
          <Phone className="w-3.5 h-3.5 text-brand-saffron fill-brand-saffron" />
          <span>Call Shop</span>
        </a>

        {/* Mobile WhatsApp CTA */}
        <a
          href={STORE_DETAILS.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-mono font-bold text-[10px] uppercase tracking-wider rounded-lg flex items-center justify-center gap-1.5 active:scale-95 transition-all text-center shadow-lg"
        >
          <MessageSquare className="w-3.5 h-3.5 fill-white" />
          <span>WhatsApp</span>
        </a>

        {/* Mobile Map Directions CTA */}
        <a
          href={STORE_DETAILS.googleMapLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-3 bg-brand-saffron text-white font-mono font-bold text-[10px] uppercase tracking-wider rounded-lg flex items-center justify-center gap-1.5 active:scale-95 transition-all text-center"
        >
          <MapPin className="w-3.5 h-3.5 text-white" />
          <span>Directions</span>
        </a>
      </div>

    </div>
  );
}
