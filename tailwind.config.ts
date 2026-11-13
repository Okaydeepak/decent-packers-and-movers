import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "bg-primary": "#FFFFFF",
        "bg-secondary": "#F8FAFC",
        "text-primary": "#0F172A",
        "text-muted": "#475569",
        "border-subtle": "#E2E8F0",
        "brand-red": "#DC2626",
        "brand-red-hover": "#B91C1C",
        "brand-yellow": "#FACC15",
        "brand-yellow-soft": "#FEF9C3",
        "brand-yellow-border": "#EAB308",
      },
      maxWidth: {
        container: "77.5rem",
      },
      borderRadius: {
        sm: "6px",
        md: "12px",
      },
      boxShadow: {
        minimal: "0 4px 20px -2px rgba(15,23,42,0.05)",
      },
      transitionTimingFunction: {
        fast: "cubic-bezier(0.16,1,0.3,1)",
      },
      transitionDuration: {
        fast: "200ms",
      },
      fontSize: {
        hero: [
          "clamp(2.5rem, 5vw, 4.25rem)",
          { lineHeight: "1.1", letterSpacing: "-0.03em", fontWeight: "700" },
        ],
        "section-header": [
          "clamp(1.75rem, 3vw, 2.5rem)",
          { lineHeight: "1.2", fontWeight: "600" },
        ],
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
