import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      colors: {
        surface: "#0f0f12",
        card: "#121217",
        border: "#2a2a33",
        muted: "#9ea0a6",
        accent: "#7ee787",
        warning: "#ffd166",
        danger: "#ff6b6b"
      },
      boxShadow: {
        glow: "0 0 60px rgba(126, 231, 135, 0.15)",
        card: "0 0 0 1px rgba(255,255,255,0.06), 0 12px 32px rgba(0,0,0,0.35)"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-6px)" }
        },
        shimmer: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "100% 50%" }
        }
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 12s ease infinite"
      }
    }
  },
  plugins: []
};

export default config;