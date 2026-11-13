/**
 * @module calculator
 * Dynamic pricing calculator for SwiftMove moving estimates.
 * All functions are pure — no side-effects, no client directives needed.
 */

// ─── Types ───────────────────────────────────────────────────────────────────

/** Move-size categories accepted by the estimator. */
export type MoveSize =
  | "1rk"
  | "1bhk"
  | "2bhk"
  | "3bhk"
  | "office"
  | "vehicle-car"
  | "vehicle-bike";

/** Distance classification between origin and destination. */
export type DistanceType = "within-city" | "within-state" | "interstate";

/** Packaging tier selected by the customer. */
export type PackagingTier = "standard" | "premium";

/** Input parameters for `calculateEstimate`. */
export type EstimateParams = {
  moveSize: MoveSize;
  distance: DistanceType;
  packaging: PackagingTier;
  /** Floor number the customer is moving from / to (ground = 0). */
  floor?: number;
  /** Whether the building has a working lift. */
  hasLift?: boolean;
};

/** Output of `calculateEstimate`. */
export type EstimateResult = {
  /** Lower bound of the estimate range in ₹. */
  lowEstimate: number;
  /** Upper bound of the estimate range in ₹. */
  highEstimate: number;
  /** Suggested vehicle / truck type for this move size. */
  recommendedVehicle: string;
  /** Packaging tier applied. */
  packagingTier: PackagingTier;
  /** Optional note explaining any surcharges added. */
  surchargeNote?: string;
};

// ─── Constants ───────────────────────────────────────────────────────────────

/** Base price ranges (low–high) per move size in ₹. */
const BASE_PRICES: Record<MoveSize, [low: number, high: number]> = {
  "1rk": [4_000, 6_000],
  "1bhk": [7_000, 10_000],
  "2bhk": [12_000, 16_000],
  "3bhk": [18_000, 25_000],
  office: [25_000, 40_000],
  "vehicle-car": [8_000, 15_000],
  "vehicle-bike": [3_000, 5_000],
};

/** Distance multipliers applied to base prices. */
const DISTANCE_MULTIPLIERS: Record<DistanceType, number> = {
  "within-city": 1,
  "within-state": 1.5,
  interstate: 2.2,
};

/** Packaging-tier multipliers. */
const PACKAGING_MULTIPLIERS: Record<PackagingTier, number> = {
  standard: 1,
  premium: 1.3,
};

/** ₹ surcharge per floor above ground when there is no lift. */
const FLOOR_SURCHARGE_PER_FLOOR = 500;

/** Floors above which the surcharge kicks in. */
const FLOOR_SURCHARGE_THRESHOLD = 2;

/** Recommended vehicle by move size. */
const VEHICLE_MAP: Record<MoveSize, string> = {
  "1rk": "Tata Ace / Mini Truck",
  "1bhk": "Tata Ace / Bolero Pickup",
  "2bhk": "Eicher 14ft / Mahindra Bolero",
  "3bhk": "Eicher 17ft / Full-size Truck",
  office: "Eicher 19ft / Container Truck",
  "vehicle-car": "Car Carrier Trailer",
  "vehicle-bike": "Enclosed Two-Wheeler Carrier",
};

// ─── Core Functions ──────────────────────────────────────────────────────────

/**
 * Calculates a dynamic moving cost estimate.
 *
 * Pricing formula:
 *   base × distance_multiplier × packaging_multiplier + floor_surcharge
 *
 * @param params - Estimation inputs.
 * @returns An {@link EstimateResult} with low/high range, vehicle, and notes.
 */
export function calculateEstimate(params: EstimateParams): EstimateResult {
  const { moveSize, distance, packaging, floor = 0, hasLift = true } = params;

  const [baseLow, baseHigh] = BASE_PRICES[moveSize];
  const distMultiplier = DISTANCE_MULTIPLIERS[distance];
  const packMultiplier = PACKAGING_MULTIPLIERS[packaging];

  let lowEstimate = Math.round(baseLow * distMultiplier * packMultiplier);
  let highEstimate = Math.round(baseHigh * distMultiplier * packMultiplier);

  let surchargeNote: string | undefined;

  // Floor surcharge: applies when no lift AND floor > threshold
  if (!hasLift && floor > FLOOR_SURCHARGE_THRESHOLD) {
    const surcharge = (floor - 0) * FLOOR_SURCHARGE_PER_FLOOR; // per floor above ground
    lowEstimate += surcharge;
    highEstimate += surcharge;
    surchargeNote = `₹${formatPrice(surcharge)} floor-carry surcharge (floor ${floor}, no lift)`;
  }

  return {
    lowEstimate,
    highEstimate,
    recommendedVehicle: VEHICLE_MAP[moveSize],
    packagingTier: packaging,
    surchargeNote,
  };
}

/**
 * Returns the recommended vehicle / truck type for a given move size.
 *
 * @param moveSize - One of the supported {@link MoveSize} keys.
 * @returns Human-readable vehicle recommendation.
 */
export function getRecommendedVehicle(moveSize: string): string {
  return VEHICLE_MAP[moveSize as MoveSize] ?? "Standard Moving Truck";
}

/**
 * Formats a numeric amount as an Indian-style currency string.
 *
 * Uses the `en-IN` locale so thousands grouping follows the
 * lakh / crore pattern (e.g. ₹1,25,000).
 *
 * @param amount - Numeric amount in rupees.
 * @returns Formatted string prefixed with ₹.
 */
export function formatPrice(amount: number): string {
  return `₹${amount.toLocaleString("en-IN")}`;
}
