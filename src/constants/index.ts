/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface NavItem {
  name: string;
  path: string;
  description?: string;
}

export interface StoreDetails {
  name: string;
  tagline: string;
  phone: string;
  phoneDisplay: string;
  whatsapp: string;
  whatsappDisplay: string;
  email: string;
  address: {
    street: string;
    area: string;
    city: string;
    state: string;
    pin: string;
    landmark: string;
  };
  googleMapLink: string;
  operatingHours: {
    weekdays: string;
    sunday: string;
  };
}

export const STORE_DETAILS = {
  name: "JAI HIND SPORTS",
  tagline: "YOUR GAME • OUR PASSION • Coimbatore's Premier Sports Showroom",
  phone: "+919629024175",
  phoneDisplay: "+91 96290 24175",
  secondaryPhone: "+918754739973",
  secondaryPhoneDisplay: "+91 87547 39973",
  whatsapp: "https://wa.me/919629024175",
  whatsappDisplay: "WhatsApp Consultation",
  email: "jaihindsports1@gmail.com",
  instagram: "https://instagram.com/jai_hind_sports_shop",
  facebook: "https://facebook.com/jai_hind_sports_shop",
  address: {
    street: "2/17, 17A, VRS Nagar, Near Cheran Maa Nagar",
    area: "Vilankurichi",
    city: "Coimbatore",
    state: "Tamil Nadu",
    pin: "641035",
    landmark: "Near Cheran Maa Nagar",
  },
  googleMapLink: "https://maps.google.com/?q=Jai+Hind+Sports+Vilankurichi+Coimbatore",
  operatingHours: {
    weekdays: "09:30 AM - 09:00 PM (Monday - Saturday)",
    sunday: "10:30 AM - 08:30 PM (Sunday)",
  },
};

export const NAV_ITEMS: NavItem[] = [
  { name: "Home", path: "/" },
  { name: "Products", path: "/products", description: "Explore elite sports gear & equipment" },
  { name: "Categories", path: "/categories", description: "Browse items organized by discipline" },
  { name: "Brands", path: "/brands", description: "Official partners of international quality" },
  { name: "Gallery", path: "/gallery", description: "Inside our state-of-the-art Coimbatore store" },
  { name: "About", path: "/about", description: "Our legacy of sporting excellence" },
  { name: "Contact", path: "/contact", description: "Locate us or request callback" },
];

export const POPULAR_CATEGORIES = [
  { id: "cricket", name: "Cricket Elite", icon: "cricket", count: "120+ Items", desc: "English Willow Bats, Premium Guards & Kit Bags" },
  { id: "badminton", name: "Badminton Pro", icon: "badminton", count: "80+ Items", desc: "Carbon Fibre Rackets, Nylon/Feather Shuttles & Strings" },
  { id: "fitness", name: "Gym & Strength", icon: "fitness", count: "150+ Items", desc: "Dumbbells, Olympic Bars, Treadmills & Accessories" },
  { id: "football", name: "Football Arena", icon: "football", count: "60+ Items", desc: "FIFA-Approved Footballs, Studs, Shin Guards & Jerseys" },
  { id: "tennis", name: "Tennis Court", icon: "tennis", count: "40+ Items", desc: "Professional Rackets, Felt Balls & Overgrips" },
  { id: "athletics", name: "Athletic Gear", icon: "athletics", count: "90+ Items", desc: "Spikes, Running Shoes, Tracksuits & Supports" },
];

export const PARTNER_BRANDS = [
  { name: "YONEX", origin: "Japan", discipline: "Badminton & Tennis" },
  { name: "SG (Sanspareils Greenlands)", origin: "India", discipline: "Cricket Gear" },
  { name: "SS (Sareen Sports)", origin: "India", discipline: "Cricket Gear" },
  { name: "COSCO", origin: "India", discipline: "Multi-Sports Equipment" },
  { name: "NIVIA", origin: "India", discipline: "Football & Sports Gear" },
  { name: "VECTOR X", origin: "India", discipline: "Fitness & Accessories" },
  { name: "LI-NING", origin: "China", discipline: "Badminton Elite" },
  { name: "ADIDAS", origin: "Germany", discipline: "Footwear & Apparel" },
];
