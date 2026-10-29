import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1557B0",
          hover: "#11458D",
          light: "#EBF3FC",
          subtle: "#F2F7FD",
        },
        navy: {
          DEFAULT: "#102747",
          dark: "#0B1B32",
          light: "#183B6B",
        },
        secondary: {
          DEFAULT: "#3478CC",
          hover: "#2862A8",
        },
        heading: "#14243A",
        body: "#4D5B6C",
        neutral: {
          light: "#F7F8FA",
          card: "#FFFFFF",
          border: "#E2E8F0",
          borderSoft: "#EAF0F7",
        },
        accent: {
          gold: "#D97706",
          goldLight: "#FEF3C7",
          green: "#059669",
          greenLight: "#D1FAE5",
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        heading: ["var(--font-manrope)", "var(--font-jakarta)", "sans-serif"],
      },
      borderRadius: {
        'card': '16px',
        'card-lg': '20px',
      },
      boxShadow: {
        'subtle': '0 2px 10px rgba(16, 39, 71, 0.04)',
        'card': '0 8px 30px rgba(16, 39, 71, 0.06)',
        'card-hover': '0 16px 36px rgba(16, 39, 71, 0.10)',
        'button': '0 4px 14px rgba(21, 87, 176, 0.25)',
      },
      maxWidth: {
        'site': '1280px',
      }
    },
  },
  plugins: [],
};
export default config;

