/**
 * @module whatsapp
 * WhatsApp deep-link utilities for Decent Packers and Movers.
 * Opens wa.me URLs with pre-filled structured messages.
 */

// ─── Types ───────────────────────────────────────────────────────────────────

/** Data shape for the quick-quote form (homepage / process-pricing). */
export type QuoteData = {
  name: string;
  phone: string;
  origin: string;
  destination: string;
  moveSize: string;
  date: string;
  estimate: string;
};

/** Extended data shape for the full contact-page inventory form. */
export type InventoryData = QuoteData & {
  items: string[];
  specialInstructions: string;
  floor: number;
  hasLift: boolean;
};

// ─── Constants ───────────────────────────────────────────────────────────────

/**
 * WhatsApp Business phone number (with country code, no + prefix).
 * Decent Packers & Movers office contact: 9376501262
 */
const WHATSAPP_BUSINESS_NUMBER = "919376501262";

/** Base URL for the WhatsApp click-to-chat API. */
const WA_BASE_URL = "https://wa.me";

// ─── Helpers ─────────────────────────────────────────────────────────────────

/**
 * Builds and opens a wa.me URL in a new browser tab.
 *
 * @param message - Plain-text message body (WhatsApp formatting supported).
 */
function openWhatsApp(message: string): void {
  const encoded = encodeURIComponent(message);
  const url = `${WA_BASE_URL}/${WHATSAPP_BUSINESS_NUMBER}?text=${encoded}`;
  window.open(url, "_blank", "noopener,noreferrer");
}

// ─── Public API ──────────────────────────────────────────────────────────────

/**
 * Sends a quick-quote summary to Decent Packers and Movers' WhatsApp.
 * Constructs a structured message with bold markers for readability.
 *
 * @param data - Completed quote form data.
 */
export function sendQuoteToWhatsApp(data: QuoteData): void {
  const lines = [
    `🚚 *Decent Packers & Movers — Quick Quote Request*`,
    ``,
    `*Name:* ${data.name}`,
    `*Phone:* ${data.phone}`,
    `*From:* ${data.origin}`,
    `*To:* ${data.destination}`,
    `*Move Size:* ${data.moveSize}`,
    `*Preferred Date:* ${data.date}`,
    `*Estimated Cost:* ${data.estimate}`,
    ``,
    `Please confirm slot availability and final quotation. Thank you!`,
  ];

  openWhatsApp(lines.join("\n"));
}

/**
 * Sends a detailed inventory breakdown to Decent Packers and Movers' WhatsApp.
 * Used on the Contact page where users can list individual items.
 *
 * @param data - Completed inventory form data.
 */
export function sendInventoryToWhatsApp(data: InventoryData): void {
  const itemList =
    data.items.length > 0
      ? data.items.map((item, i) => `  ${i + 1}. ${item}`).join("\n")
      : "  (none listed)";

  const lines = [
    `📦 *Decent Packers & Movers — Detailed Move Request*`,
    ``,
    `*Name:* ${data.name}`,
    `*Phone:* ${data.phone}`,
    `*From:* ${data.origin}`,
    `*To:* ${data.destination}`,
    `*Move Size:* ${data.moveSize}`,
    `*Preferred Date:* ${data.date}`,
    `*Estimated Cost:* ${data.estimate}`,
    ``,
    `*Floor:* ${data.floor === 0 ? "Ground" : `Floor ${data.floor}`}`,
    `*Lift Available:* ${data.hasLift ? "Yes" : "No"}`,
    ``,
    `*Items to Move:*`,
    itemList,
    ``,
    `*Special Instructions:*`,
    data.specialInstructions.trim() || "(none)",
    ``,
    `Please review inventory and provide a customized quote. Thank you!`,
  ];

  openWhatsApp(lines.join("\n"));
}
