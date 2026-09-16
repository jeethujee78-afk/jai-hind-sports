/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Product {
  id: string;
  name: string;
  category: string;
  brand: string;
  description: string;
  longDescription: string;
  status: "Available" | "New Arrival" | "Popular" | "Premium" | "Limited Stock";
  sizes: string[];
  colors: string[];
  features: string[];
  specifications: Record<string, string>;
  visualGradient: string; // Tailwind gradient classes
  iconSymbol: string; // Icon or abbreviation to render in placeholder
}

export interface CollectionBanner {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  bgGradient: string;
  imageAccent: string; // Aesthetic label/symbol
  tagline: string;
}

export const FEATURED_COLLECTIONS: CollectionBanner[] = [
  {
    id: "col-cricket",
    title: "Professional Cricket Collection",
    subtitle: "English & Kashmir Willow Blades, Premium Guards & Kit Bags",
    category: "Cricket",
    bgGradient: "from-amber-600/35 via-amber-950/20 to-black/90",
    imageAccent: "🏏 WILLOW EDGE",
    tagline: "Hand-selected, double-knocked profile bats for power-hitting."
  },
  {
    id: "col-badminton",
    title: "Badminton Essentials",
    subtitle: "High Tension Carbon Rackets, Shuttles & Computerized Stringing",
    category: "Badminton",
    bgGradient: "from-emerald-600/35 via-emerald-950/20 to-black/90",
    imageAccent: "🏸 CARBON FLEX",
    tagline: "Ultra-light frame series with nanotech high-flex shafts."
  },
  {
    id: "col-football",
    title: "Football Zone",
    subtitle: "FIFA-Spec Match Balls, Elite High-Traction Studs & Guards",
    category: "Football",
    bgGradient: "from-blue-600/35 via-blue-950/20 to-black/90",
    imageAccent: "⚽ ACTIVE TREAD",
    tagline: "Perfect aerodynamic panels paired with carbon outer TPU plates."
  },
  {
    id: "col-fitness",
    title: "Fitness & Gym Equipment",
    subtitle: "Cast Iron Weights, Olympic Bars, Dumbbells & Tech Gear",
    category: "Gym Equipment",
    bgGradient: "from-rose-600/35 via-rose-950/20 to-black/90",
    imageAccent: "💪 HEAVY DUTY",
    tagline: "Industrial-grade home-gym plates and dynamic balance benches."
  },
  {
    id: "col-team",
    title: "Team Sports Arena",
    subtitle: "Basketballs, Volleyballs, Standard Nets & Coaching Accessories",
    category: "Basketball",
    bgGradient: "from-violet-600/35 via-violet-950/20 to-black/90",
    imageAccent: "🏀 TEAM LEAGUE",
    tagline: "Authorized moisture-absorbing leather composites for dynamic grip."
  },
  {
    id: "col-school",
    title: "School Sports Collection",
    subtitle: "Bulk Training Gear, Cones, Markers, Whistles & Team Bibs",
    category: "School Sports Equipment",
    bgGradient: "from-cyan-600/35 via-cyan-950/20 to-black/90",
    imageAccent: "🏆 ACADEMY BUNDLE",
    tagline: "Comprehensive wholesale kits for schools and academy training camps."
  }
];

export const PRODUCTS_LIST: Product[] = [
  // 1. Cricket
  {
    id: "cri-ss-ton-gladiator",
    name: "SS TON Gladiator English Willow Bat",
    category: "Cricket",
    brand: "SS",
    description: "Premium grade-1 hand-selected English Willow with straight even grains.",
    longDescription: "The SS TON Gladiator is a pinnacle of craftsmanship, designed for elite-level batsmen. Crafted from the finest air-dried English Willow, it boasts a massive profile with thick edges and an outstanding sweet spot. Individually hand-selected for balance and structural excellence.",
    status: "Premium",
    sizes: ["Short Handle (SH)", "Harrow", "Size 6"],
    colors: ["Classic Saffron Wrap", "Carbon Black Edge", "White Cord Grip"],
    features: [
      "Grade 1 Air-Dried English Willow",
      "9 to 12 Straight Grains",
      "Massive edge thickness of 38-40mm",
      "Specially designed scale grip for ultimate control",
      "Pre-knocked with protective wax layering"
    ],
    specifications: {
      "Willow Type": "Grade-1 English Willow",
      "Weight Range": "1160 - 1220 grams",
      "Handle Type": "9-piece Singapore cane handle",
      "Sweet Spot": "Mid-to-Low sweet spot for classical drives and power"
    },
    visualGradient: "from-amber-600/20 via-amber-950/40 to-zinc-900",
    iconSymbol: "SS 🏏"
  },
  {
    id: "cri-sg-players-edition",
    name: "SG Player's Edition Cricket Bat",
    category: "Cricket",
    brand: "SG",
    description: "Authentic match-spec willow replicate, tuned to international standards.",
    longDescription: "The SG Player's Edition is constructed using top-grade clefts chosen for supreme power-to-weight ratio. Engineered with the standard traditional curvature of SG blades, it delivers phenomenal response off the sweet spot. A favorite for first-class tournaments.",
    status: "Popular",
    sizes: ["Short Handle (SH)"],
    colors: ["Vibrant Blue Wrap", "Signature Gold Emblem"],
    features: [
      "Custom pro-grade English Willow",
      "Excellent shock-absorbing handle construction",
      "Enlarged sweet spot profile",
      "Comes with full-padded premium carry case"
    ],
    specifications: {
      "Willow Type": "Select English Willow",
      "Weight Range": "1150 - 1190 grams",
      "Handle": "Premium multi-piece cane",
      "Profile": "Full spine with minimal concaving"
    },
    visualGradient: "from-amber-700/15 via-orange-950/40 to-zinc-900",
    iconSymbol: "SG 🏏"
  },
  {
    id: "cri-mrf-grand-edition",
    name: "MRF Genius Grand Edition Bat",
    category: "Cricket",
    brand: "MRF",
    description: "The official master-class profile, tailored for premium dynamic stroke play.",
    longDescription: "Replicated after the iconic game bats of modern cricket masters. Made from Grade 1 premium English Willow, this bat represents maximum power transfer and exquisite balance. Hand-crafted in India by senior bat-makers.",
    status: "New Arrival",
    sizes: ["Short Handle (SH)", "Size 5"],
    colors: ["Master Red", "Reflective Silver"],
    features: [
      "Superior cleft selection for pristine look",
      "Slightly curved face for enhanced control",
      "Premium dynamic scale grip",
      "Optimized toe-guard installed"
    ],
    specifications: {
      "Willow": "Grade 1 English Willow Cleft",
      "Weight": "1180 grams",
      "Edges": "39mm thick contour",
      "Face": "Flat-face curved profile"
    },
    visualGradient: "from-red-900/25 via-red-950/40 to-zinc-900",
    iconSymbol: "MRF 🏏"
  },
  {
    id: "cri-sg-test-gloves",
    name: "SG Test Professional Batting Gloves",
    category: "Cricket",
    brand: "SG",
    description: "Multi-layered high-density foam padding with premium sheepskin leather palm.",
    longDescription: "Engineered to face 140+ km/h pace bowling comfortably. Features segmented finger designs for flexible control and moisture-wicking technology inside the mesh inserts.",
    status: "Available",
    sizes: ["Adult Men", "Youth"],
    colors: ["Classic White", "Traditional Green Accents"],
    features: [
      "Top-tier Pitards sheep leather palms",
      "Thermoplastic polyurethane inserts on leading fingers",
      "Soft-fill lining for sweat dissipation"
    ],
    specifications: {
      "Protection Level": "Test Match Standards",
      "Palm Material": "Genuine Pittards Leather",
      "Thumb Style": "Two-piece segmented thumb"
    },
    visualGradient: "from-slate-700/20 via-zinc-800 to-zinc-900",
    iconSymbol: "SG 🧤"
  },

  // 2. Badminton
  {
    id: "bad-yonex-astrox-100zz",
    name: "Yonex Astrox 100 ZZ Racket",
    category: "Badminton",
    brand: "Yonex",
    description: "Decisive head-heavy power frame with custom hyper-slim shafts.",
    longDescription: "The Astrox 100 ZZ is an elite head-heavy racquet designed for aggressive, hard-hitting singles or doubles players. It features the Rotational Generator System, distribute weight throughout the grip end, frame top and joint for maximum power and seamless transition between shots.",
    status: "Premium",
    sizes: ["3U/G5", "4U/G5"],
    colors: ["Kurenai (Dark Red / Teal)", "Standard Navy Slate"],
    features: [
      "Namd graphite material for extreme flex and snapback",
      "Hyper-slim solid shaft minimizes air resistance",
      "Energy Boost Cap Plus maximizes energy transfer",
      "Made in Japan under stringent high-end parameters"
    ],
    specifications: {
      "Frame Material": "HM Graphite / Namd / Tungsten",
      "Flexibility": "Extra Stiff",
      "Recommended Tension": "20 - 28 lbs",
      "Balance Point": "Head Heavy Power Profile"
    },
    visualGradient: "from-blue-600/20 via-emerald-900/30 to-zinc-900",
    iconSymbol: "YONEX 🏸"
  },
  {
    id: "bad-yonex-nanoflare-800",
    name: "Yonex Nanoflare 800 Pro",
    category: "Badminton",
    brand: "Yonex",
    description: "Head-light speed frame optimized for lightning-fast drive defense.",
    longDescription: "Engineered for speed, the Nanoflare 800 features the Sonic Flare System and advanced high-modulus carbon to allow explosive shuttle acceleration and supreme defensive speed on fast flat rallies.",
    status: "New Arrival",
    sizes: ["4U/G5"],
    colors: ["Deep Matte Black / Green Accent"],
    features: [
      "Razor frame design to slice through the air",
      "Ultra elastic carbon fibers for immediate rebound",
      "Wide profile layout for improved sweet-spot coverage"
    ],
    specifications: {
      "Weight / Grip": "4U (Avg. 83g) G5",
      "Flex": "Stiff",
      "Recommended Tension": "20 - 28 lbs",
      "Balance": "Head Light Speed Profile"
    },
    visualGradient: "from-cyan-800/20 via-teal-950/40 to-zinc-900",
    iconSymbol: "YONEX 🏸"
  },
  {
    id: "bad-yonex-mavis-350",
    name: "Yonex Mavis 350 Nylon Shuttles",
    category: "Badminton",
    brand: "Yonex",
    description: "The gold standard of durable nylon shuttles with precise recovery flight.",
    longDescription: "Yonex Mavis nylon shuttles are precision-manufactured to offer near-feather flight performance with three times the durability of standard shuttles. Ideal for club practices.",
    status: "Popular",
    sizes: ["6 Shuttles per Tube"],
    colors: ["Yellow (Slow Speed)", "Yellow (Middle Speed)", "White (Middle)"],
    features: [
      "Precision wing rib structure",
      "Excellent flight recovery time",
      "Engineered for consistent spin and trajectories"
    ],
    specifications: {
      "Skirt Material": "Nylon Composite",
      "Base Material": "Natural Portuguese Cork Wood",
      "Quantity": "1 Tube (6 pieces)"
    },
    visualGradient: "from-yellow-700/10 via-zinc-800 to-zinc-900",
    iconSymbol: "YONEX 🏸"
  },

  // 3. Football
  {
    id: "ft-nivia-shining-star",
    name: "Nivia Shining Star Football",
    category: "Football",
    brand: "Nivia",
    description: "FIFA Quality Pro certified match ball with premium hand-stitched leather panels.",
    longDescription: "The Nivia Shining Star is built for elite turf performance. The high-performance polyurethane composite leather provides a super-soft touch with high shape retention and dynamic waterproof seams.",
    status: "Available",
    sizes: ["Size 5"],
    colors: ["Black / White Geometric", "Neon Yellow / Orange"],
    features: [
      "FIFA Quality Pro Certified Match Ball",
      "32 panel hand-stitched premium construction",
      "Latex bladder with high air retention",
      "Reinforced multi-layered backing fabric"
    ],
    specifications: {
      "Material": "PU Microfiber Composite Leather",
      "Weight": "420 - 440 grams",
      "Circumference": "68.5 - 69.5 cm",
      "Rebound": "135 - 155 cm at standard drop"
    },
    visualGradient: "from-blue-900/25 via-slate-900 to-zinc-900",
    iconSymbol: "NIVIA ⚽"
  },
  {
    id: "ft-cosco-platina",
    name: "Cosco Platina FIFA-Spec Ball",
    category: "Football",
    brand: "Cosco",
    description: "Soft-elastomer PU skin for spectacular bounce and precise cross control.",
    longDescription: "Cosco Platina features a micro-texture PU shell that stabilizes air-flight patterns. High-friction texture keeps your passes accurate in dry or wet turf conditions.",
    status: "Popular",
    sizes: ["Size 5", "Size 4"],
    colors: ["Pristine White / Metallic Silver / Crimson Line"],
    features: [
      "Vibration reduction core layer",
      "Seamless thermal bonded leather look",
      "High-abrasion resistance rating"
    ],
    specifications: {
      "Technology": "Hybrid Thermocompressed Panels",
      "Bladder": "Butyl bladder for optimal bounce"
    },
    visualGradient: "from-slate-700/20 via-zinc-800 to-zinc-900",
    iconSymbol: "COSCO ⚽"
  },

  // 4. Basketball
  {
    id: "bb-cosco-tournament-9",
    name: "Cosco Tournament-9 Basketball",
    category: "Basketball",
    brand: "Cosco",
    description: "Premium moisture-absorbing composite leather for ultimate indoor/outdoor grip.",
    longDescription: "The Tournament-9 is engineered with wide deep channels and high-traction friction textures. Nylon-wound core guarantees durable sphericity and uniform bounce on hard-court surfaces.",
    status: "Available",
    sizes: ["Size 7 (Official Men)", "Size 6 (Official Women)"],
    colors: ["Classic Burnt Orange / Black Channels"],
    features: [
      "High-grade composite leather outer skin",
      "Extra tackiness for secure one-handed palms",
      "Nylon wound yarn core with heavy vulcanized butyl bladder"
    ],
    specifications: {
      "Approved By": "FIBA Specifications Compliant",
      "Surface Suitability": "Indoor and Outdoor Premium Courts"
    },
    visualGradient: "from-amber-800/20 via-amber-950/40 to-zinc-900",
    iconSymbol: "COSCO 🏀"
  },
  {
    id: "bb-nivia-graffiti",
    name: "Nivia Graffiti Street Basketball",
    category: "Basketball",
    brand: "Nivia",
    description: "Heavy duty rubber outer cover with premium deep-groove channels for outdoor courts.",
    longDescription: "The perfect gravel and concrete-court companion. Designed to withstand highly abrasive outdoor ground conditions while maintaining balanced feedback and steady bounce.",
    status: "Limited Stock",
    sizes: ["Size 7"],
    colors: ["Graffiti Street Pattern", "Neon Fire Mesh"],
    features: [
      "Ultra-durable vulcanized rubber compound",
      "Wide-channel geometry for improved hand alignment",
      "Resistant to high grit and dust slip"
    ],
    specifications: {
      "Panel Count": "8 classical panels",
      "Pressure Rating": "7 to 9 PSI"
    },
    visualGradient: "from-purple-900/20 via-zinc-800 to-zinc-900",
    iconSymbol: "NIVIA 🏀"
  },

  // 5. Volleyball
  {
    id: "vb-nivia-g-2020",
    name: "Nivia G-2020 Professional Volleyball",
    category: "Volleyball",
    brand: "Nivia",
    description: "Official match-ball with soft micro-fiber panels and minimal impact sting.",
    longDescription: "Designed for international court games. Soft-cushioned synthetic leather minimizes arm strain while maximizing tactile control during spikes, blocks, and float sets.",
    status: "Popular",
    sizes: ["Official Size 5"],
    colors: ["Blue / Yellow Swirl Pattern"],
    features: [
      "18-panel laminated microfiber design",
      "Soft impact-absorbing inner cushion layer",
      "Exceptional flight and spin control"
    ],
    specifications: {
      "Construction": "High-bonding laminated",
      "Outer Layer": "Super Soft Microfiber PU"
    },
    visualGradient: "from-blue-800/20 via-yellow-950/20 to-zinc-900",
    iconSymbol: "NIVIA 🏐"
  },

  // 6. Gym Equipment & Fitness
  {
    id: "gym-vector-adjustable-dumbbells",
    name: "Vector X Chrome Smart Dumbbell Pair",
    category: "Gym Equipment",
    brand: "Vector X",
    description: "Solid chrome finish adjustable bars with double safety spin-locks.",
    longDescription: "This dynamic adjustable steel weight kit allows customized home training. Comes with high-gloss chrome plate coatings that protect against rust, moisture, and scratch chips.",
    status: "Premium",
    sizes: ["20 KG Box Set", "30 KG Box Set"],
    colors: ["Metallic Polished Chrome / Matte Black Grips"],
    features: [
      "Solid heavy-duty steel handles",
      "Ergonomic knurled cross-hatch hand grips",
      "Dual safety collar locks to prevent plate shifting"
    ],
    specifications: {
      "Plate Configurations": "4x 2.5kg, 4x 1.25kg, 4x 0.5kg plates plus rods",
      "Finish Type": "High Gloss Rust-Resistant Electroplated Chrome"
    },
    visualGradient: "from-rose-800/20 via-neutral-900 to-zinc-900",
    iconSymbol: "VECTOR X 💪"
  },
  {
    id: "gym-vector-pushup-bars",
    name: "Vector X Ergo Pushup Bars",
    category: "Fitness",
    brand: "Vector X",
    description: "Angled structural frames with thick neoprene foam handles for wrist protection.",
    longDescription: "The angled design of these push-up bars isolates chest and shoulder muscle groups while relieving pressure on the delicate carpal joints. Built with a solid non-slip floor-grip base.",
    status: "Available",
    sizes: ["One Size"],
    colors: ["Matte Black with Red Trim"],
    features: [
      "Solid industrial-grade polymer construct",
      "Non-slip rubber feet grips for tile or wooden gym floors",
      "Ergonomically tilted hand positions"
    ],
    specifications: {
      "Weight Capacity": "Up to 150 KG user weight",
      "Grip Material": "Double-layered dense sweat-proof foam"
    },
    visualGradient: "from-red-900/15 via-zinc-800 to-zinc-900",
    iconSymbol: "VECTOR X 💪"
  },

  // 7. Running & Footwear
  {
    id: "sh-nike-air-zoom-rival",
    name: "Nike Air Zoom Rival Running Flats",
    category: "Running",
    brand: "Nike",
    description: "Highly responsive Zoom Air heel unit with breathable micro-mesh weave.",
    longDescription: "Engineered for speed drills, road races, and gym running. Features a compressed lightweight foam midsole that absorbs heavy heel impacts and transfers energy forward into responsive toe-offs.",
    status: "Premium",
    sizes: ["UK 7", "UK 8", "UK 9", "UK 10", "UK 11"],
    colors: ["Platinum White / Lime Volt / Charcoal Black"],
    features: [
      "Forefoot zoom air core for explosive responsive bounce",
      "Tension flywire bands wrap the midfoot securely",
      "High-friction carbon rubber outsole pads"
    ],
    specifications: {
      "Heel Drop": "8 mm standard pitch",
      "Arch Profile": "Neutral athletic support"
    },
    visualGradient: "from-lime-800/15 via-zinc-800 to-zinc-900",
    iconSymbol: "NIKE 👟"
  },
  {
    id: "sh-adidas-court-control",
    name: "Adidas Barricade Non-Marking Court Shoes",
    category: "Sports Shoes",
    brand: "Adidas",
    description: "Adiwear outsole design for elite traction on badminton and tennis court floors.",
    longDescription: "Specially formulated non-marking rubber outsoles that leave zero residue on specialized indoor courts. Designed with structured torsion systems to prevent ankle rollover during lateral lunges.",
    status: "Popular",
    sizes: ["UK 6", "UK 7", "UK 8", "UK 9", "UK 10"],
    colors: ["Pure Royal Blue / Cloud White Stripe", "Matte Carbon / Solar Red"],
    features: [
      "Durable Adiwear rubber compound",
      "Breathable nylon weave with synthetic leather overlays",
      "Reinforced drag-guard on inner toes for lateral slides"
    ],
    specifications: {
      "Floor Compatibility": "Indoor Synthetic, Wood, and Asphalt Courts",
      "Heel Cushioning": "Adiprene+ Shock Absorption"
    },
    visualGradient: "from-blue-900/20 via-zinc-800 to-zinc-900",
    iconSymbol: "ADIDAS 👟"
  },
  {
    id: "sh-puma-evo-studs",
    name: "Puma Future Match Football Studs",
    category: "Sports Shoes",
    brand: "Puma",
    description: "Lightweight multi-stud outsole optimized for natural and artificial grass turfs.",
    longDescription: "Features a soft textured upper skin for optimal contact control and ball curve. The strategic stud layout ensures instantaneous acceleration, swift deceleration, and sharp direction shifts.",
    status: "New Arrival",
    sizes: ["UK 7", "UK 8", "UK 9", "UK 10"],
    colors: ["Cyber Yellow / Electric Purple / White"],
    features: [
      "FUZIONFIT adaptive compression band for superb lock",
      "Engineered texturing for ball grip at high speeds",
      "Dynamic Motion System soleplate"
    ],
    specifications: {
      "Ground Profile": "FG/AG (Firm Ground / Artificial Grass)",
      "Lacing Type": "Standard low-profile collar laces"
    },
    visualGradient: "from-purple-800/20 via-zinc-800 to-zinc-900",
    iconSymbol: "PUMA 👟"
  },

  // 8. Sports Wear
  {
    id: "wr-nike-dri-fit-academy",
    name: "Nike Academy Dri-FIT Training Tee",
    category: "Sports Wear",
    brand: "Nike",
    description: "Moisture-wicking, highly breathable knit fabric designed for extreme game heat.",
    longDescription: "Constructed with 100% recycled polyester fibers and micro-vent mesh back panels. Instantly pulls sweat away from the body to keep the core cool and light during extended sessions.",
    status: "Available",
    sizes: ["Small", "Medium", "Large", "XL", "XXL"],
    colors: ["Midnight Navy / White Mesh", "Classic Dark Black / Crimson Swoosh"],
    features: [
      "Dri-FIT microclimate moisture evaporation",
      "Featherlight mesh paneling on back & shoulders",
      "Raglan sleeves allow uninhibited shoulder rotation"
    ],
    specifications: {
      "Material Composition": "100% Double-Knit Recycled Polyester",
      "Fitting Profile": "Standard tailored athletic fit"
    },
    visualGradient: "from-blue-900/15 via-zinc-800 to-zinc-900",
    iconSymbol: "NIKE 👕"
  },

  // 9. Accessories
  {
    id: "acc-yonex-supergrap",
    name: "Yonex AC102EX Supergrap Overgrip",
    category: "Accessories",
    brand: "Yonex",
    description: "The legendary polyurethane overgrip offering tacky control and sweat absorbency.",
    longDescription: "The Supergrap has sold millions worldwide, providing superior feel, tackiness, and sweat protection. It prevents slipping and reduces muscle vibration on heavy smash impacts.",
    status: "Popular",
    sizes: ["3-Grips Pack"],
    colors: ["Optic White", "Neon Yellow", "Teal Blue", "Sleek Charcoal"],
    features: [
      "Provides phenomenal racquet feel and tackiness",
      "Effectively absorbs perspiration",
      "Includes finishing tape for easy installation"
    ],
    specifications: {
      "Material": "Polyurethane elastomer",
      "Dimensions": "Width: 25mm, Length: 1200mm, Thickness: 0.6mm"
    },
    visualGradient: "from-yellow-800/10 via-zinc-800 to-zinc-900",
    iconSymbol: "YONEX 🩹"
  },

  // 10. School Sports Equipment
  {
    id: "sch-training-agility-ladder",
    name: "Jai Hind Premium Speed Agility Ladder",
    category: "School Sports Equipment",
    brand: "Vector X",
    description: "Heavy-duty 4-meter flexible ladder with adjustable rungs for coordination drill training.",
    longDescription: "An absolute necessity for any athletic coaching setup or physical education curriculum. Features high-visibility flat rungs that can be shifted closer or further to modulate drill difficulty.",
    status: "Available",
    sizes: ["4 Meters (8 Rungs)", "6 Meters (12 Rungs)"],
    colors: ["Safety Neon Yellow / Heavy Duty Black Straps"],
    features: [
      "Constructed from high-tensile impact polymers",
      "Includes premium metal ground pins for grass turf anchoring",
      "Comes with quick-draw nylon drawstring carry bag"
    ],
    specifications: {
      "Suitability": "Coordination, lateral footwork, acceleration training",
      "Adjustable Rungs": "Slide along heavy-nylon web bindings"
    },
    visualGradient: "from-cyan-900/15 via-zinc-800 to-zinc-900",
    iconSymbol: "JHS 🏆"
  },
  {
    id: "sch-training-cones-set",
    name: "Jai Hind Marker Cones & Holder Set",
    category: "School Sports Equipment",
    brand: "Vector X",
    description: "Highly flexible, impact-resistant space saucer cones for sports training fields.",
    longDescription: "A bulk set of 50 multi-color saucer cones on a heavy-duty chrome carrying stand. Built to withstand being stepped on, run over, and exposed to hot direct sunlight without cracking or fading.",
    status: "Popular",
    sizes: ["Pack of 50 with Stand"],
    colors: ["Assorted (White, Yellow, Orange, Green, Blue)"],
    features: [
      "Virtually indestructible flexible PVC construction",
      "Porous center for secure stake anchoring",
      "Lightweight stackable space-saver design"
    ],
    specifications: {
      "Cone Dimensions": "Height: 5cm, Outer Diameter: 19cm",
      "Total Weight": "Approximately 1.2 KG including steel rack"
    },
    visualGradient: "from-orange-800/15 via-zinc-800 to-zinc-900",
    iconSymbol: "JHS 🏆"
  }
];
