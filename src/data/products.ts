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
    "id": "hearth-one",
    "name": "Hearth One",
    "price": 12000,
    "power": "8 kW (illustrative)",
    "warranty": "No commercial warranty \u2014 concept only",
    "fuelType": "Wood \u00b7 concept",
    "material": "Cast Iron",
    "description": "A fictional fireplace model exploring calm proportions and a warm architectural presence. Original illustration; specifications and prices are sample interface content.",
    "features": [
      "Quiet proportions",
      "Architectural form",
      "Material exploration"
    ],
    "image": "/concept/stove.svg",
    "heroImage": "/concept/interior.svg",
    "dimensionsImage": "/concept/technical.svg",
    "dimensions": {
      "width": 500,
      "height": 800,
      "depth": 400
    }
  },
  {
    "id": "hearth-two",
    "name": "Hearth Two",
    "price": 14500,
    "power": "8 kW (illustrative)",
    "warranty": "No commercial warranty \u2014 concept only",
    "fuelType": "Wood \u00b7 concept",
    "material": "Steel",
    "description": "A fictional fireplace model exploring calm proportions and a warm architectural presence. Original illustration; specifications and prices are sample interface content.",
    "features": [
      "Quiet proportions",
      "Architectural form",
      "Material exploration"
    ],
    "image": "/concept/wide-stove.svg",
    "heroImage": "/concept/interior.svg",
    "dimensionsImage": "/concept/technical.svg",
    "dimensions": {
      "width": 520,
      "height": 840,
      "depth": 400
    }
  },
  {
    "id": "arc",
    "name": "Arc",
    "price": 17000,
    "power": "8 kW (illustrative)",
    "warranty": "No commercial warranty \u2014 concept only",
    "fuelType": "Wood \u00b7 concept",
    "material": "Cast Iron",
    "description": "A fictional fireplace model exploring calm proportions and a warm architectural presence. Original illustration; specifications and prices are sample interface content.",
    "features": [
      "Quiet proportions",
      "Architectural form",
      "Material exploration"
    ],
    "image": "/concept/slim-stove.svg",
    "heroImage": "/concept/interior.svg",
    "dimensionsImage": "/concept/technical.svg",
    "dimensions": {
      "width": 540,
      "height": 880,
      "depth": 400
    }
  },
  {
    "id": "studio",
    "name": "Studio",
    "price": 19500,
    "power": "8 kW (illustrative)",
    "warranty": "No commercial warranty \u2014 concept only",
    "fuelType": "Wood \u00b7 concept",
    "material": "Steel",
    "description": "A fictional fireplace model exploring calm proportions and a warm architectural presence. Original illustration; specifications and prices are sample interface content.",
    "features": [
      "Quiet proportions",
      "Architectural form",
      "Material exploration"
    ],
    "image": "/concept/stove.svg",
    "heroImage": "/concept/interior.svg",
    "dimensionsImage": "/concept/technical.svg",
    "dimensions": {
      "width": 560,
      "height": 920,
      "depth": 400
    }
  },
  {
    "id": "alcove",
    "name": "Alcove",
    "price": 22000,
    "power": "8 kW (illustrative)",
    "warranty": "No commercial warranty \u2014 concept only",
    "fuelType": "Wood \u00b7 concept",
    "material": "Cast Iron",
    "description": "A fictional fireplace model exploring calm proportions and a warm architectural presence. Original illustration; specifications and prices are sample interface content.",
    "features": [
      "Quiet proportions",
      "Architectural form",
      "Material exploration"
    ],
    "image": "/concept/wide-stove.svg",
    "heroImage": "/concept/interior.svg",
    "dimensionsImage": "/concept/technical.svg",
    "dimensions": {
      "width": 580,
      "height": 960,
      "depth": 400
    }
  },
  {
    "id": "horizon",
    "name": "Horizon",
    "price": 24500,
    "power": "8 kW (illustrative)",
    "warranty": "No commercial warranty \u2014 concept only",
    "fuelType": "Wood \u00b7 concept",
    "material": "Steel",
    "description": "A fictional fireplace model exploring calm proportions and a warm architectural presence. Original illustration; specifications and prices are sample interface content.",
    "features": [
      "Quiet proportions",
      "Architectural form",
      "Material exploration"
    ],
    "image": "/concept/slim-stove.svg",
    "heroImage": "/concept/interior.svg",
    "dimensionsImage": "/concept/technical.svg",
    "dimensions": {
      "width": 600,
      "height": 1000,
      "depth": 400
    }
  }
];
export function getProductById(id:string){return products.find(p=>p.id===id);}
