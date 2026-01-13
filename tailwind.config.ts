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
          // Final AKOD Palette (#0c2f55, #d60809, #c0cbd4, #ffffff)
          richBlack: "#0c2f55", // Main Background Navy
          champagneGold: "#d60809", // Accent Red (Replacing Gold)
          onyx: "#0c2f55", // Using Main Navy to keep consistency, or subtle variations if opacity used
          platinum: "#c0cbd4", // Secondary Text/Elements Grey
          darkGray: "#0c2f55", // Neutral dark -> Navy

          // Semantic Mappings
          primary: "#0c2f55", // Navy
          secondary: "#d60809", // Red
          background: "#0c2f55", // Navy
          surface: "#0c2f55", // Navy
          
          // Legacy mappings
          appBlue: "#0c2f55", 
          appRed: "#d60809", 
          white: "#ffffff",
        },
      },
      screens: {
        xs: "400px",
        "3xl": "1680px",
        "4xl": "2200px",
      },
      animation: {
        "fade-in-up": "fadeInUp 0.8s ease-out forwards",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;
