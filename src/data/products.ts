export interface CollectionCategory {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  editorialNote: string;
  image: string;
  itemCountDemonstration: number;
  isConfirmed: boolean;
}

export const COLLECTIONS_DATA: CollectionCategory[] = [
  {
    id: "gold-jewellery",
    slug: "gold-jewellery",
    title: "Gold Jewellery",
    shortDescription:
      "Traditional South Indian ornaments, bridal haaram sets, bangles, and temple-inspired creations.",
    editorialNote:
      "A demonstration collection showcasing traditional South Indian motifs, filigree embellishments, and classic gold craftsmanship.",
    image:
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1000&q=85",
    itemCountDemonstration: 6,
    isConfirmed: true,
  },
  {
    id: "bridal-jewellery",
    slug: "bridal-jewellery",
    title: "Bridal Adornments",
    shortDescription:
      "Majestic wedding collections designed for timeless ceremonies and celebrations.",
    editorialNote:
      "Sample concept showcase. Actual bridal sets, bridal consultation policies, and booking availability to be confirmed with the showroom.",
    image:
      "https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=1000&q=85",
    itemCountDemonstration: 4,
    isConfirmed: false,
  },
  {
    id: "bangles-kadas",
    slug: "bangles-kadas",
    title: "Bangles & Kadas",
    shortDescription:
      "Intricate antique finishes, peacock motifs, and classic everyday bangles.",
    editorialNote:
      "Demonstration items illustrating traditional wrist adornment styles. In-store sizing and designs available upon consultation.",
    image:
      "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=1000&q=85",
    itemCountDemonstration: 4,
    isConfirmed: false,
  },
  {
    id: "earrings-jhumkas",
    slug: "earrings-jhumkas",
    title: "Earrings & Jhumkas",
    shortDescription:
      "Heritage temple drops, chandelier jhumkas, and graceful ear ornaments.",
    editorialNote:
      "Sample collection showcasing South Indian jhumka aesthetics with pearl and gemstone accents.",
    image:
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1000&q=85",
    itemCountDemonstration: 3,
    isConfirmed: false,
  },
];

export interface JewelleryProduct {
  id: string;
  slug: string;
  sku: string;
  title: string;
  categorySlug: string;
  categoryName: string;
  image: string;
  galleryImages: string[];
  subheading: string;
  description: string;
  specifications: {
    metalType: string;
    purityIndication: string;
    designStyle: string;
    craftsmanship: string;
    weightStatus: string;
    pricingNote: string;
  };
  isSampleDemonstration: boolean;
  featured: boolean;
}

export const PRODUCTS_DATA: JewelleryProduct[] = [
  {
    id: "prod-1",
    slug: "temple-lakshmi-gold-necklace",
    sku: "DEMO-GLD-NK01",
    title: "Temple Lakshmi Handcrafted Gold Necklace",
    categorySlug: "gold-jewellery",
    categoryName: "Gold Jewellery",
    image:
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1000&q=85",
    galleryImages: [
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=1000&q=85",
    ],
    subheading:
      "Traditional South Indian temple motifs featuring embossed Lakshmi medallion and gemstone drops.",
    description:
      "An exemplary design representing classical South Indian temple jewellery. Crafted with fine filigree patterns, peacock flourishes, and delicate cabochon drops. This piece is presented as a demonstration showcase of the aesthetic tradition celebrated across Chennai showrooms.",
    specifications: {
      metalType: "Gold",
      purityIndication: "22 Karat (Demonstration benchmark)",
      designStyle: "South Indian Temple Motif",
      craftsmanship: "Hand-embossed repoussé & gemstone accents",
      weightStatus:
        "Catalogue sample — Exact piece weight verified in showroom",
      pricingNote:
        "Subject to live market gold rate and making charges upon showroom enquiry",
    },
    isSampleDemonstration: true,
    featured: true,
  },
  {
    id: "prod-2",
    slug: "heritage-filigree-antique-gold-kadas",
    sku: "DEMO-GLD-BG02",
    title: "Heritage Filigree Antique Gold Kadas (Pair)",
    categorySlug: "gold-jewellery",
    categoryName: "Gold Jewellery",
    image:
      "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=1000&q=85",
    galleryImages: [
      "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=1000&q=85",
    ],
    subheading:
      "Ornate antique gold bangles with peacock engravings and studded floral ruby motifs.",
    description:
      "A pair of traditional antique finished gold kadas featuring side-hinged closures, sculpted peacock motifs, and floral ruby gemstone accents. Built with substantial wrist presence, ideal for weddings and formal festivities.",
    specifications: {
      metalType: "Gold",
      purityIndication: "22 Karat (Demonstration benchmark)",
      designStyle: "Antique Heritage Kada",
      craftsmanship: "Intricate filigree and screw-lock hinge",
      weightStatus:
        "Sample piece — Custom sizing and weights available upon visit",
      pricingNote: "Showroom enquiry required for current rate calculation",
    },
    isSampleDemonstration: true,
    featured: true,
  },
  {
    id: "prod-3",
    slug: "classic-pearl-droplet-gold-jhumkas",
    sku: "DEMO-GLD-ER03",
    title: "Classic Pearl Droplet Gold Jhumkas",
    categorySlug: "gold-jewellery",
    categoryName: "Gold Jewellery",
    image:
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1000&q=85",
    galleryImages: [
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1000&q=85",
    ],
    subheading:
      "Tiered bell-shaped earrings with fine granular wirework and seed pearl tassels.",
    description:
      "Classic South Indian jhumkas with layered filigree domes and delicate cultured pearl drops. Engineered for balanced weight distribution, offering graceful movement and celebratory elegance.",
    specifications: {
      metalType: "Gold",
      purityIndication: "22 Karat (Demonstration benchmark)",
      designStyle: "Traditional Jhumka with Pearl Fringe",
      craftsmanship: "Granulation and seed-pearl assembly",
      weightStatus:
        "Sample model — Inquire at Kottivakkam showroom for inventory",
      pricingNote:
        "Calculated based on verified daily rate at time of purchase",
    },
    isSampleDemonstration: true,
    featured: true,
  },
  {
    id: "prod-4",
    slug: "royal-bridal-choker-necklace-set",
    sku: "DEMO-GLD-NK04",
    title: "Royal Bridal Filigree Choker & Haaram",
    categorySlug: "bridal-jewellery",
    categoryName: "Bridal Adornments",
    image:
      "https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=1000&q=85",
    galleryImages: [
      "https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1000&q=85",
    ],
    subheading:
      "Comprehensive bridal centerpiece featuring tiered floral crests and dangling drop clusters.",
    description:
      "An opulent bridal necklace designed to serve as the defining focal point of a traditional South Indian wedding trousseau. Features scalloped collars, layered floral medallions, and meticulous hand-tooling.",
    specifications: {
      metalType: "Gold",
      purityIndication: "22 Karat (Demonstration benchmark)",
      designStyle: "Bridal Collar & Haaram",
      craftsmanship: "Layered die-stamped and hand-finished motifs",
      weightStatus:
        "Demonstration piece — Bespoke bridal consultations at store",
      pricingNote: "Price quote provided directly at showroom",
    },
    isSampleDemonstration: true,
    featured: true,
  },
  {
    id: "prod-5",
    slug: "temple-relief-gold-bangles",
    sku: "DEMO-GLD-BG05",
    title: "Temple Relief Sculpted Gold Bangles",
    categorySlug: "bangles-kadas",
    categoryName: "Bangles & Kadas",
    image:
      "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=1000&q=85",
    galleryImages: [
      "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=1000&q=85",
    ],
    subheading:
      "Deeply carved temple figures bordered by micro-beaded gold edges.",
    description:
      "Sculpted bangle design influenced by ancient Dravidian temple carvings. Features serene mythological relief figures framed by beaded edges, combining antique finishes with enduring gold lustre.",
    specifications: {
      metalType: "Gold",
      purityIndication: "22 Karat (Demonstration benchmark)",
      designStyle: "Temple Relief Bangle",
      craftsmanship: "Lost-wax casting and hand-burnishing",
      weightStatus:
        "Sample catalogue item — Verify availability at Kottivakkam store",
      pricingNote: "Daily bullion rate applies at purchase time",
    },
    isSampleDemonstration: true,
    featured: false,
  },
  {
    id: "prod-6",
    slug: "chand-bali-heritage-jhumka-earrings",
    sku: "DEMO-GLD-ER06",
    title: "Chandbali Heritage Jhumka Earrings",
    categorySlug: "earrings-jhumkas",
    categoryName: "Earrings & Jhumkas",
    image:
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1000&q=85",
    galleryImages: [
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1000&q=85",
    ],
    subheading:
      "Crescent motif earring with suspended bell drops and delicate ruby highlights.",
    description:
      "Harmonizing the grace of the crescent chandbali with the traditional South Indian jhumka bell. Detailed with fine filigree work and petite cabochon ruby accents.",
    specifications: {
      metalType: "Gold",
      purityIndication: "22 Karat (Demonstration benchmark)",
      designStyle: "Chandbali-Jhumka Hybrid",
      craftsmanship: "Delicate wire filigree and gemstone setting",
      weightStatus:
        "Demonstration piece — Confirm piece weight in store",
      pricingNote: "Showroom verification required",
    },
    isSampleDemonstration: true,
    featured: false,
  },
];