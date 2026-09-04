import typography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        // Warm-neutral gray scale — matches the near-black look already live
        // on the site. Adjust freely; nothing else depends on exact values.
        base: {
          50: "#F7F6F4",
          100: "#EDEBE7",
          200: "#DCD9D3",
          300: "#B8B3AA",
          400: "#8F887C",
          600: "#6B6459",
          800: "#2A2723",
          900: "#171512",
          950: "#0A0908",
        },
        // Muted gold/amber — an earthy tone in keeping with "Worm," and
        // deliberately not the terracotta/acid-green defaults. Swap this
        // for your actual brand color if you have one picked already.
        accent: {
          400: "#D9AE5C",
          500: "#C08B2E",
          600: "#9C6F22",
        },
      },
      fontFamily: {
        base: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [typography()],
};
