/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        brand: {
          black: "#050505",
          graphite: "#111827",
          blue: "#0066FF",
          cyan: "#00E5FF",
          purple: "#8B2CFF",
          white: "#FFFFFF",
        },
      },

      backgroundImage: {
        "hero-gradient":
          "linear-gradient(135deg,#050505 0%,#0a0f25 45%,#12052b 100%)",
      },

      boxShadow: {
        neon:
          "0 0 40px rgba(0,102,255,0.35)",
      },
    },
  },

  plugins: [],
};

