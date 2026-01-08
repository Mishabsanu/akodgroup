import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/react");

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
    },
    extend: {
      colors: {
        brand: {
          richBlack: "#020202", // Deepest Luxury Black
          champagneGold: "#D4AF37", // Classic Gold
          onyx: "#121212", // Secondary Dark
          platinum: "#E5E4E2", // Soft Text
          darkGray: "#1A1A1A",
          
          // Mappings for existing classes to new theme
          primary: "#D4AF37", 
          secondary: "#020202",
          background: "#020202",
          surface: "#121212",
          
          // Legacy/Fallback mappings (mapped to luxury equivalents)
          appBlue: "#020202", 
          appRed: "#D4AF37", // Red becomes Gold
          white: "#ffffff",
        },
      },
      screens: {
        xs: "400px",
        "3xl": "1680px",
        "4xl": "2200px",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;
