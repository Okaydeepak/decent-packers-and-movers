/**
 * @module validation
 * Pure validation utilities for SwiftMove form inputs.
 * All validators return a consistent ValidationResult shape.
 */

// ─── Types ───────────────────────────────────────────────────────────────────

/** Standard result returned by every validator. */
export type ValidationResult = {
  valid: boolean;
  error?: string;
};

/** Extended result for date validation that flags urgency. */
export type DateValidationResult = ValidationResult & {
  /** True when the selected date is today or tomorrow. */
  isUrgent: boolean;
};

// ─── Validators ──────────────────────────────────────────────────────────────

/**
 * Validates an Indian 10-digit mobile number.
 * Accepts digits only; must start with 6–9.
 *
 * @param phone - Raw phone string (digits only, no country code).
 * @returns Validation result with contextual error message.
 */
export function validatePhone(phone: string): ValidationResult {
  const trimmed = phone.trim();

  if (!trimmed) {
    return { valid: false, error: "Phone number is required." };
  }

  // Strip optional +91 / 0 prefix callers may pass in
  const digits = trimmed.replace(/^(\+91|91|0)/, "");

  if (!/^\d+$/.test(digits)) {
    return { valid: false, error: "Phone number must contain only digits." };
  }

  if (!/^[6-9]\d{9}$/.test(digits)) {
    return {
      valid: false,
      error: "Enter a valid 10-digit Indian mobile number starting with 6-9.",
    };
  }

  return { valid: true };
}

/**
 * Validates origin and destination location fields.
 *
 * @param origin - Starting city / locality.
 * @param dest   - Destination city / locality.
 * @returns Validation result.
 */
export function validateLocations(
  origin: string,
  dest: string,
): ValidationResult {
  const o = origin.trim();
  const d = dest.trim();

  if (!o || !d) {
    return { valid: false, error: "Both origin and destination are required." };
  }

  if (o.toLowerCase() === d.toLowerCase()) {
    return {
      valid: false,
      error: "Origin and destination cannot be the same.",
    };
  }

  return { valid: true };
}

/**
 * Validates a move date string.
 * Rejects past dates; flags same-day or next-day moves as urgent.
 *
 * @param date - ISO-style date string (YYYY-MM-DD) or any `Date.parse`-able format.
 * @returns Validation result with `isUrgent` flag.
 */
export function validateDate(date: string): DateValidationResult {
  const trimmed = date.trim();

  if (!trimmed) {
    return { valid: false, isUrgent: false, error: "Move date is required." };
  }

  const parsed = new Date(trimmed);

  if (isNaN(parsed.getTime())) {
    return {
      valid: false,
      isUrgent: false,
      error: "Enter a valid date.",
    };
  }

  // Compare calendar dates, not timestamps
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  parsed.setHours(0, 0, 0, 0);

  if (parsed.getTime() < today.getTime()) {
    return {
      valid: false,
      isUrgent: false,
      error: "Move date cannot be in the past.",
    };
  }

  const diffMs = parsed.getTime() - today.getTime();
  const diffDays = Math.round(diffMs / (1000 * 60 * 60 * 24));
  const isUrgent = diffDays <= 1; // same-day or next-day

  return { valid: true, isUrgent };
}

/**
 * Validates a person's name.
 *
 * @param name - Full name string.
 * @returns Validation result.
 */
export function validateName(name: string): ValidationResult {
  const trimmed = name.trim();

  if (!trimmed) {
    return { valid: false, error: "Name is required." };
  }

  if (trimmed.length < 2) {
    return {
      valid: false,
      error: "Name must be at least 2 characters.",
    };
  }

  return { valid: true };
}

/**
 * Validates an email address against a standard pattern.
 *
 * @param email - Email string.
 * @returns Validation result.
 */
export function validateEmail(email: string): ValidationResult {
  const trimmed = email.trim();

  if (!trimmed) {
    return { valid: false, error: "Email is required." };
  }

  // Standard email regex — intentionally permissive to match browser behaviour
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

  if (!emailRegex.test(trimmed)) {
    return { valid: false, error: "Enter a valid email address." };
  }

  return { valid: true };
}

// ─── Sanitisation ────────────────────────────────────────────────────────────

/**
 * Strips HTML / script tags and trims whitespace to prevent XSS injection.
 * Use on any user-supplied string before it is rendered or stored.
 *
 * @param input - Raw user input.
 * @returns Sanitised string with tags removed.
 */
export function sanitizeInput(input: string): string {
  return input
    .replace(/<\/?[^>]+(>|$)/g, "") // strip all HTML tags
    .replace(/on\w+\s*=\s*["'][^"']*["']/gi, "") // strip inline event handlers
    .replace(/javascript\s*:/gi, "") // strip javascript: protocol
    .trim();
}
