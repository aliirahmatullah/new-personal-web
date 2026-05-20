import flowbite from "flowbite/plugin";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      animation: {
        marquee: "marquee 30s linear infinite",
        "marquee-reverse": "marquee-reverse 30s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      colors: {
        primary: "#111111",
        secondary: "#F4F4F0",
        tertiary: "#E5E5E5",
        accent: "#FF3333",
        muted: "#333333",
      },
      boxShadow: {
        "brutal-accent": "8px 8px 0 0 #FF3333",
        "brutal-primary": "8px 8px 0 0 #111111",
      },
    },
  },
  plugins: [flowbite],
};
