# JAI HIND SPORTS

### Premium Sports Showroom & Digital Sports Experience

A modern, premium sports showcase and business website built for **JAI HIND SPORTS**, a sports showroom based in Coimbatore, Tamil Nadu, India.

The platform combines a cinematic sports-inspired interface with a structured product catalogue, category discovery, brand showcase, showroom gallery, business information, enquiry management, and a dedicated brand identity system.

---

## 🏆 Project Overview

**JAI HIND SPORTS** is designed as more than a traditional sports-shop website.

It provides a digital showroom experience where customers can:

- Explore sports equipment and collections
- Browse products by category
- Filter products by brand and availability
- View detailed product information
- Explore partner brands
- Discover the physical showroom through an interactive gallery
- Learn about the business
- Contact the showroom directly
- Send product or service enquiries
- Connect through WhatsApp and phone
- Explore the complete JAI HIND SPORTS brand identity

The experience is designed around a **premium dark cinematic interface inspired by athletic performance, stadium environments, and the Indian tricolour identity.**

---

## ✨ Key Features

### 🛍️ Product Catalogue

A structured product catalogue containing **27 curated products** across multiple sporting disciplines.

Product information includes:

- Product name
- Category
- Brand
- Description
- Detailed description
- Availability status
- Sizes
- Colours
- Features
- Specifications
- Product quick view
- WhatsApp enquiry integration

---

### 🔎 Product Discovery & Filtering

The catalogue supports interactive discovery through:

- Search
- Category filtering
- Brand filtering
- Availability/status filtering
- Quick-view product interface
- Collection-based navigation
- Responsive mobile filtering

---

### 🏏 Sports Categories

The platform covers multiple sporting disciplines including:

- Cricket
- Badminton
- Football
- Basketball
- Volleyball
- Gym Equipment
- Fitness
- Running
- Sports Shoes
- Sports Wear
- Accessories
- School Sports Equipment

---

### 🏷️ Brand Showcase

Dedicated brand presentation for major sports brands represented within the catalogue, including:

- YONEX
- SG
- SS
- COSCO
- NIVIA
- VECTOR X
- MRF
- Nike
- Adidas
- Puma

The Brands page presents partner brands using an interactive premium card layout with brand-specific visual treatments.

---

### 🏟️ Interactive Showroom Gallery

The Gallery page creates a digital showroom experience with dedicated sporting zones such as:

- Cricket Zone
- Badminton Zone
- Football Zone
- Fitness Zone
- Accessories Zone

The gallery includes:

- Category filtering
- Full-screen image viewing
- Interactive showroom zones
- Product/service descriptions
- Store information
- Contact actions

---

### 🎨 Brand Identity System

A dedicated **Brand Identity** page documents the visual language of JAI HIND SPORTS.

It includes:

- Logo presentation
- Logo variations
- Colour system
- Typography
- Brand design tokens
- Brand mockups
- Digital brand applications
- Copy-to-clipboard functionality for design values

The visual identity uses a premium dark foundation combined with:

- Saffron
- White
- Indian Green
- Charcoal
- Obsidian

---

### 📩 Contact & Enquiry System

The Contact page provides a complete customer enquiry experience.

Features include:

- Name validation
- Indian mobile number validation
- Email validation
- Enquiry message validation
- Enquiry ID generation
- Submission confirmation
- Local persistence using `localStorage`
- Real-time showroom open/closed status
- FAQ accordion
- Phone contact
- WhatsApp consultation
- Google Maps navigation
- Social media links

Submitted enquiries are stored locally in the browser using:

`jai_hind_contact_enquiries`

> Note: the current implementation is client-side/local-storage based. It does not yet send enquiries to a remote database or CRM.

---

## 📱 Responsive Design

The application is designed for:

- Desktop
- Laptop
- Tablet
- Mobile

The navigation includes a responsive mobile menu and adaptive layouts throughout the application.

---

## 🎬 Motion & Interaction

The UI uses **Motion** for smooth interface transitions and micro-interactions.

Implemented interaction patterns include:

- Fade-in animations
- Slide-up animations
- Slide-down animations
- Staggered content animations
- Hover transitions
- Modal interactions
- Mobile navigation transitions
- Scroll-based UI changes
- Smooth scrolling
- Interactive cards

---

## 🔍 SEO Implementation

The application includes a reusable SEO component supporting:

- Dynamic page titles
- Meta descriptions
- Keywords
- Canonical URLs
- JSON-LD structured data

Structured business data is implemented for the showroom, including business information, address, contact details, opening hours, and social profiles.

---

## 🧭 Application Routes

The application currently contains the following primary routes:

| Route | Purpose |
|---|---|
| `/` | Home |
| `/products` | Product catalogue |
| `/categories` | Sports categories |
| `/brands` | Partner brands |
| `/gallery` | Showroom gallery |
| `/about` | About JAI HIND SPORTS |
| `/contact` | Contact & enquiries |
| `/brand-identity` | Brand identity system |

The application uses **React Router** with a `HashRouter`.

---

## 🛠️ Technology Stack

### Frontend

- React 19
- TypeScript
- Vite
- React Router
- Tailwind CSS
- Motion
- Lucide React

### Development

- Node.js
- npm
- TypeScript
- Vite development server

### UI / Design

- Responsive layouts
- Glassmorphism
- Cinematic dark UI
- Indian tricolour-inspired accents
- Custom typography
- CSS gradients
- Atmospheric lighting effects
- Motion-based interactions

### SEO

- Dynamic metadata
- Canonical URLs
- JSON-LD structured data
- `robots.txt`
- `sitemap.xml`

---

## 📂 Project Structure

```text
jai-hind-sports/
│
├── public/
│   ├── favicon.svg
│   ├── robots.txt
│   └── sitemap.xml
│
├── src/
│   │
│   ├── animations/
│   │   └── index.ts
│   │
│   ├── components/
│   │   ├── BrandLogo.tsx
│   │   ├── Button.tsx
│   │   ├── Loader.tsx
│   │   ├── ScrollToTop.tsx
│   │   └── SEO.tsx
│   │
│   ├── constants/
│   │   └── index.ts
│   │
│   ├── data/
│   │   └── products.ts
│   │
│   ├── hooks/
│   │   └── useScroll.ts
│   │
│   ├── layouts/
│   │   └── RootLayout.tsx
│   │
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── Products.tsx
│   │   ├── Categories.tsx
│   │   ├── Brands.tsx
│   │   ├── Gallery.tsx
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   └── BrandIdentity.tsx
│   │
│   ├── utils/
│   │   └── index.ts
│   │
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
│
├── assets/
│   └── .aistudio/
│
├── .env.example
├── .gitignore
├── index.html
├── metadata.json
├── package.json
├── package-lock.json
├── tsconfig.json
└── vite.config.ts
