/**
 * Design Tokens — single source of truth.
 * Every color, radius, shadow, and type value in the project comes from here.
 * To retheme: change values here, nothing else needs to change.
 */

export const colors = {
  // Brand
  brandPrimary: "#1D4ED8",
  brandPrimaryHover: "#1A44C2",

  // Neutrals
  bgBase: "#FAFAF9",
  bgWhite: "#FFFFFF",
  bgSubtle: "#F9FAFB",
  bgMuted: "#F5F5F3",

  // Borders
  borderDefault: "#E5E7EB",
  borderLight: "#D1D5DB",

  // Text
  textPrimary: "#000000",
  textSecondary: "#6B7280",
  textTertiary: "#9CA3AF",
  textOnDark: "#FFFFFF",

  // Semantic
  urgent: "#E24B4A",
  urgentBg: "#FEF2F2",
  urgentBorder: "#FECACA",
  success: "#22C55E",
  successBg: "#D1FAE5",
  warning: "#F59E0B",
  purple: "#A855F7",
};

export const radii = {
  sm: 5,
  md: 8,
  lg: 10,
  xl: 12,
  pill: 20,
};

export const shadows = {
  card: "0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)",
  mockup: "0 16px 56px -8px rgba(0,0,0,0.11), 0 4px 16px -2px rgba(0,0,0,0.05)",
};

export const typography = {
  fontFamily: "'Sora', system-ui, sans-serif",
  weights: {
    regular: 400,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  },
};

export const layout = {
  maxWidth: 1080,
  sectionPaddingY: 68,
  pagePaddingX: 20,
};
