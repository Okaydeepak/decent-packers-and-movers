export interface LeadPayload {
  name: string;
  phone: string;
  email?: string;
  moveFrom: string;
  moveTo: string;
  moveDate: string;
  moveType: "household" | "vehicle" | "office" | "other";
  message?: string;
  inventoryItems?: InventoryItem[];
}

export interface MoveDetails {
  id: string;
  moveFrom: string;
  moveTo: string;
  moveDate: string;
  moveType: "household" | "vehicle" | "office" | "other";
  distanceKm: number;
  estimatedWeight?: number;
  specialItems?: string[];
  floorFrom?: number;
  floorTo?: number;
  liftAvailableFrom?: boolean;
  liftAvailableTo?: boolean;
}

export interface EstimateSummary {
  basePrice: number;
  packingCharges: number;
  transportCharges: number;
  insuranceCharges: number;
  gst: number;
  totalEstimate: number;
  currency: "INR";
  validUntil: string;
}

export interface ServiceCategory {
  id: string;
  title: string;
  description: string;
  icon: string;
  slug: string;
  features: string[];
  image?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface PricingTier {
  id: string;
  name: string;
  description: string;
  basePrice: number;
  features: string[];
  recommended?: boolean;
}

export interface InventoryItem {
  id: string;
  name: string;
  category: string;
  quantity: number;
  fragile?: boolean;
  specialHandling?: boolean;
  notes?: string;
}
