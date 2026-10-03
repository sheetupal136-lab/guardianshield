import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cyber: {
          dark: "#030712",
          card: "#0b1220",
          border: "#1e293b",
          neon: "#00f0ff",
          alarm: "#ff0055",
          safe: "#00ff88",
        },
      },
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "ping-slow": "ping 2s cubic-bezier(0, 0, 0.2, 1) infinite",
        "radar-sweep": "spin 4s linear infinite",
      },
      boxShadow: {
        neon: "0 0 25px rgba(0, 240, 255, 0.35)",
        alarm: "0 0 35px rgba(255, 0, 85, 0.5)",
        safe: "0 0 25px rgba(0, 255, 136, 0.35)",
      },
    },
  },
  plugins: [],
};

export default config;
