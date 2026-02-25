/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
      },
      animation: {
        "star-movement-bottom": "star-movement-bottom linear infinite",
        "star-movement-top": "star-movement-top linear infinite",
      },
      keyframes: {
        "star-movement-bottom": {
          "0%": { transform: "translate(0%, 0%)", opacity: "1" },
          "100%": { transform: "translate(-50%, 0%)", opacity: "1" },
        },
        "star-movement-top": {
          "0%": { transform: "translate(0%, 0%)", opacity: "1" },
          "100%": { transform: "translate(50%, 0%)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};