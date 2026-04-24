export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  power: string;
  powerMax?: string;
  warranty: string;
  fuelType: string;
  material: "Cast Iron" | "Steel";
  description: string;
  features: string[];
  image: string;
  dimensionsImage?: string;
  energyRatingImage?: string;
  heroImage?: string;
  dimensions?: {
    width: number;
    height: number;
    depth: number;
  };
}

export const products: Product[] = [
  {
    id: "product_1",
    name: "PRODUCT_1_NAME",
    price: PRODUCT_1_PRICE,
    power: "PRODUCT_1_POWER",
    warranty: "PRODUCT_1_WARRANTY",
    fuelType: "PRODUCT_1_FUEL_TYPE",
    material: "PRODUCT_1_MATERIAL",
    description: "PRODUCT_1_DESCRIPTION",
    features: ["PRODUCT_1_FEATURE_1", "PRODUCT_1_FEATURE_2", "PRODUCT_1_FEATURE_3", "PRODUCT_1_FEATURE_4", "PRODUCT_1_FEATURE_5"],
    image: "PRODUCT_1_IMAGE",
    dimensionsImage: "PRODUCT_1_DIMENSIONS_IMAGE",
    energyRatingImage: "PRODUCT_1_ENERGY_RATING_IMAGE",
    heroImage: "PRODUCT_1_HERO_IMAGE",
    dimensions: { width: PRODUCT_1_WIDTH, height: PRODUCT_1_HEIGHT, depth: PRODUCT_1_DEPTH }
  },
  {
    id: "product_2",
    name: "PRODUCT_2_NAME",
    price: PRODUCT_2_PRICE,
    power: "PRODUCT_2_POWER",
    powerMax: "PRODUCT_2_POWER_MAX",
    warranty: "PRODUCT_2_WARRANTY",
    fuelType: "PRODUCT_2_FUEL_TYPE",
    material: "PRODUCT_2_MATERIAL",
    description: "PRODUCT_2_DESCRIPTION",
    features: ["PRODUCT_2_FEATURE_1", "PRODUCT_2_FEATURE_2", "PRODUCT_2_FEATURE_3", "PRODUCT_2_FEATURE_4", "PRODUCT_2_FEATURE_5", "PRODUCT_2_FEATURE_6"],
    image: "PRODUCT_2_IMAGE",
    dimensionsImage: "PRODUCT_2_DIMENSIONS_IMAGE",
    energyRatingImage: "PRODUCT_2_ENERGY_RATING_IMAGE",
    heroImage: "PRODUCT_2_HERO_IMAGE",
    dimensions: { width: PRODUCT_2_WIDTH, height: PRODUCT_2_HEIGHT, depth: PRODUCT_2_DEPTH }
  },
  {
    id: "product_3",
    name: "PRODUCT_3_NAME",
    price: PRODUCT_3_PRICE,
    power: "PRODUCT_3_POWER",
    warranty: "PRODUCT_3_WARRANTY",
    fuelType: "PRODUCT_3_FUEL_TYPE",
    material: "PRODUCT_3_MATERIAL",
    description: "PRODUCT_3_DESCRIPTION",
    features: ["PRODUCT_3_FEATURE_1", "PRODUCT_3_FEATURE_2", "PRODUCT_3_FEATURE_3", "PRODUCT_3_FEATURE_4", "PRODUCT_3_FEATURE_5"],
    image: "PRODUCT_3_IMAGE",
    dimensionsImage: "PRODUCT_3_DIMENSIONS_IMAGE",
    energyRatingImage: "PRODUCT_3_ENERGY_RATING_IMAGE",
    heroImage: "PRODUCT_3_HERO_IMAGE",
    dimensions: { width: PRODUCT_3_WIDTH, height: PRODUCT_3_HEIGHT, depth: PRODUCT_3_DEPTH }
  },
  {
    id: "product_4",
    name: "PRODUCT_4_NAME",
    price: PRODUCT_4_PRICE,
    power: "PRODUCT_4_POWER",
    warranty: "PRODUCT_4_WARRANTY",
    fuelType: "PRODUCT_4_FUEL_TYPE",
    material: "PRODUCT_4_MATERIAL",
    description: "PRODUCT_4_DESCRIPTION",
    features: ["PRODUCT_4_FEATURE_1", "PRODUCT_4_FEATURE_2", "PRODUCT_4_FEATURE_3", "PRODUCT_4_FEATURE_4", "PRODUCT_4_FEATURE_5"],
    image: "PRODUCT_4_IMAGE",
    dimensionsImage: "PRODUCT_4_DIMENSIONS_IMAGE",
    energyRatingImage: "PRODUCT_4_ENERGY_RATING_IMAGE",
    heroImage: "PRODUCT_4_HERO_IMAGE",
    dimensions: { width: PRODUCT_4_WIDTH, height: PRODUCT_4_HEIGHT, depth: PRODUCT_4_DEPTH }
  },
  {
    id: "product_5",
    name: "PRODUCT_5_NAME",
    price: PRODUCT_5_PRICE,
    originalPrice: PRODUCT_5_ORIGINAL_PRICE,
    power: "PRODUCT_5_POWER",
    warranty: "PRODUCT_5_WARRANTY",
    fuelType: "PRODUCT_5_FUEL_TYPE",
    material: "PRODUCT_5_MATERIAL",
    description: "PRODUCT_5_DESCRIPTION",
    features: ["PRODUCT_5_FEATURE_1", "PRODUCT_5_FEATURE_2", "PRODUCT_5_FEATURE_3", "PRODUCT_5_FEATURE_4"],
    image: "PRODUCT_5_IMAGE",
    dimensionsImage: "PRODUCT_5_DIMENSIONS_IMAGE",
    energyRatingImage: "/images/products/details/ERINO-Naklejka-klasy-energetycznej.jpg",
    heroImage: "/images/products/details/erino-hero-e1734002414832.jpg",
    dimensions: { width: 480, height: 1050, depth: 400 }
  },
  {
    id: "flam",
    name: "Flam",
    price: 16400,
    power: "7 kW",
    warranty: "2 years",
    fuelType: "Wood",
    material: "Steel",
    description: "The signature Flam model offers 7 kW of heating power with the brand's renowned quality and craftsmanship.",
    features: ["Afterburning", "Airwash System", "External Air Supply", "Heat-Resistant Glass"],
    image: "/firepace/flam-1609-600x703.jpg.png",
    dimensionsImage: "/images/products/details/flam-dimensions.png",
    energyRatingImage: "/images/products/details/Nordflam-HS-SP-Z-Energy-Class.jpg.webp",
    heroImage: "/images/products/details/1640-hero.jpg.webp",
    dimensions: { width: 450, height: 980, depth: 380 }
  },
  {
    id: "fokus",
    name: "Fokus",
    price: 13389,
    power: "6 kW",
    warranty: "2 years",
    fuelType: "Wood",
    material: "Steel",
    description: "A compact 6 kW fireplace ideal for smaller spaces, delivering focused warmth with minimal footprint.",
    features: ["Afterburning", "Airwash System", "External Air Supply", "Heat-Resistant Glass"],
    image: "/firepace/FOKUS-e1733299667693-600x680.png",
    dimensionsImage: "/images/products/details/fokus-dimensions.png",
    energyRatingImage: "/images/products/details/fokus_nordflam_hs_sp_z_oo_klasa_energetyczna-1.jpeg",
    heroImage: "/images/products/details/FOKUS-FRONT-e1733299638433-779x1024.png",
    dimensions: { width: 420, height: 920, depth: 360 }
  },
  {
    id: "iberia",
    name: "Iberia",
    price: 24604,
    power: "12 kW",
    warranty: "2 years",
    fuelType: "Wood",
    material: "Cast Iron",
    description: "The Iberia brings Mediterranean-inspired design with powerful 12 kW heating capacity.",
    features: ["Afterburning", "Airwash System", "External Air Supply", "Heat-Resistant Glass", "Recuperation System"],
    image: "/images/products/iberia.png",
    dimensionsImage: "/images/products/details/iberia-dimensions.png",
    energyRatingImage: "/images/products/details/Iberia-naklejka-klasy-energetycznej.jpg",
    heroImage: "/images/products/details/IBERIA.jpeg",
    dimensions: { width: 540, height: 1200, depth: 450 }
  },
  {
    id: "katania",
    name: "Katania",
    price: 21748,
    power: "8 kW",
    warranty: "2 years",
    fuelType: "Wood",
    material: "Cast Iron",
    description: "An elegant 8 kW fireplace with refined styling that complements contemporary interiors.",
    features: ["Afterburning", "Airwash System", "External Air Supply", "Heat-Resistant Glass", "Recuperation System"],
    image: "/firepace/Katania-studio-600x600.png",
    dimensionsImage: "/images/products/details/catania-dimensions.png",
    energyRatingImage: "/images/products/details/catania_nordflam_hs_sp_z_oo_klasa_energetyczna.jpg",
    heroImage: "/images/products/details/catania-hero.jpg",
    dimensions: { width: 500, height: 1100, depth: 420 }
  },
  {
    id: "marsala",
    name: "Marsala",
    price: 29995,
    power: "12.5 kW",
    warranty: "2 years",
    fuelType: "Wood",
    material: "Cast Iron",
    description: "A premium 12.5 kW fireplace offering exceptional heating performance with luxurious design elements.",
    features: ["Afterburning", "Airwash System", "External Air Supply", "Heat-Resistant Glass", "Recuperation System"],
    image: "/firepace/Marsala_studio_001-600x600.png",
    dimensionsImage: "/images/products/details/marsala-dimensions.png",
    energyRatingImage: "/images/products/details/MARSALA-naklejka-klasy-energetycznej.jpg",
    heroImage: "/images/products/details/marsala-hero.jpg",
    dimensions: { width: 550, height: 1220, depth: 460 }
  },
  {
    id: "merido",
    name: "Merido",
    price: 15380,
    power: "8 kW",
    warranty: "2 years",
    fuelType: "Wood",
    material: "Steel",
    description: "The Merido combines affordability with quality, delivering 8 kW of reliable heating power.",
    features: ["Afterburning", "Airwash System", "External Air Supply", "Heat-Resistant Glass"],
    image: "/firepace/MERIDO-e1733299998699-600x563.png",
    dimensionsImage: "/images/products/details/merido-dimensions.png",
    energyRatingImage: "/images/products/details/merido_nordflam_hs_sp_z_oo_klasa_energetyczna-2.jpeg",
    heroImage: "/images/products/details/MERIDO-FRONT-e1733299961731-1024x924.png",
    dimensions: { width: 470, height: 1020, depth: 390 }
  },
  {
    id: "modena",
    name: "Modena",
    price: 26629,
    power: "11 kW",
    warranty: "2 years",
    fuelType: "Wood",
    material: "Cast Iron",
    description: "Italian-inspired design meets powerful 11 kW heating in this sophisticated fireplace model.",
    features: ["Afterburning", "Airwash System", "External Air Supply", "Heat-Resistant Glass", "Recuperation System"],
    image: "/firepace/Modena_studio-600x600.png",
    dimensionsImage: "/images/products/details/modena-dimensions.png",
    energyRatingImage: "/images/products/details/modena_nordflam_hs_sp_z_oo_klasa_energetyczna-1.jpg",
    heroImage: "/images/products/details/modena-hero-1.jpg",
    dimensions: { width: 530, height: 1180, depth: 445 }
  },
  {
    id: "palermo",
    name: "Palermo",
    price: 28187,
    power: "10 kW",
    warranty: "2 years",
    fuelType: "Wood",
    material: "Cast Iron",
    description: "The Palermo is specially designed for homes with recuperation, featuring a fully sealed cast iron chamber with integrated air regulation.",
    features: ["Afterburning", "Airwash System", "External Air Supply", "Heat-Resistant Glass", "Recuperation System", "Fully Sealed Chamber"],
    image: "/firepace/Palermo_001-600x600.png",
    dimensionsImage: "/images/products/details/palermo-dimensions.jpg",
    energyRatingImage: "/images/products/details/palermo_nordflam_hs_sp_z_oo_klasa_energetyczna.jpg",
    heroImage: "/images/products/details/palermo-hero.jpg",
    dimensions: { width: 520, height: 1150, depth: 440 }
  },
  {
    id: "roma",
    name: "Roma",
    price: 19931,
    power: "8 kW",
    warranty: "2 years",
    fuelType: "Wood",
    material: "Cast Iron",
    description: "Classic Roman elegance meets modern heating technology in this 8 kW fireplace.",
    features: ["Afterburning", "Airwash System", "External Air Supply", "Heat-Resistant Glass", "Recuperation System"],
    image: "/firepace/Roma-studio-600x600.png",
    dimensionsImage: "/images/products/details/roma-dimensions.png",
    energyRatingImage: "/images/products/details/roma_nordflam_hs_sp_z_oo_klasa_energetyczna-2.jpg",
    heroImage: "/images/products/details/roma-hero-e1734003110970.jpg",
    dimensions: { width: 490, height: 1080, depth: 410 }
  },
  {
    id: "skane",
    name: "Skane",
    price: 29995,
    power: "9 kW",
    powerMax: "11 kW",
    warranty: "2 years",
    fuelType: "Wood",
    material: "Cast Iron",
    description: "The Skane redefines the wood-burning experience with Polish craftsmanship and modern engineering. Built entirely from premium cast iron with FSC-certified wooden legs, offering outstanding heat retention and long-lasting durability.",
    features: ["Afterburning", "Airwash System", "External Air Supply", "Grill", "Recuperation System", "Full Cast Iron Construction", "Vermiculite Liners"],
    image: "/firepace/skane-2-768x848.jpeg.png",
    dimensionsImage: "/images/products/details/Image-from-Nordflam.png",
    energyRatingImage: "/images/products/details/Nordflam-HS-SP-Z-Energy-Class-19.jpg",
    heroImage: "/images/products/details/1629-hero.jpg",
    dimensions: { width: 545, height: 1200, depth: 455 }
  },
  {
    id: "sora",
    name: "Sora",
    price: 19220,
    power: "8 kW",
    warranty: "2 years",
    fuelType: "Wood",
    material: "Cast Iron",
    description: "The Sora is specially designed for homes with recuperation, made entirely of high quality cast iron with a fully sealed chamber.",
    features: ["Afterburning", "Airwash System", "External Air Supply", "Heat-Resistant Glass", "Recuperation System", "Fully Sealed Chamber"],
    image: "/firepace/Sora_studio_004-768x768.png.png",
    dimensionsImage: "/images/products/details/sora-dimensions.png",
    energyRatingImage: "/images/products/details/SORA-naklejka-klasy-energetycznej.jpg",
    heroImage: "/images/products/details/Wiz_Sora_004.jpeg",
    dimensions: { width: 500, height: 1100, depth: 420 }
  },
  {
    id: "toria",
    name: "Toria",
    price: 31146,
    power: "15 kW",
    warranty: "2 years",
    fuelType: "Wood",
    material: "Cast Iron",
    description: "The flagship Toria delivers an impressive 15 kW of heating power, perfect for large spaces demanding maximum warmth.",
    features: ["Afterburning", "Airwash System", "External Air Supply", "Heat-Resistant Glass", "Recuperation System"],
    image: "/images/products/toria.png",
    dimensionsImage: "/images/products/details/toria-dimensions.png",
    energyRatingImage: "/images/products/details/TORIA-naklejka-klasy-energetycznej.jpg",
    heroImage: "/images/products/details/Toria.jpg",
    dimensions: { width: 580, height: 1280, depth: 480 }
  }
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(p => p.id === id);
};
