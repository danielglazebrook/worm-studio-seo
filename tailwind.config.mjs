import typography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#F7F5F1",
        ink: "#1C1B18",
        "ink-muted": "#5B584F",
        line: "#DCD8CE",
        gold: {
          DEFAULT: "#B8862E",
          deep: "#8F6A22",
          light: "#E4C989",
        },
      },
      fontFamily: {
        display: ["Fraunces", "ui-serif", "Georgia", "serif"],
        sans: ["IBM Plex Sans", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["IBM Plex Mono", "ui-monospace", "monospace"],
      },
      fontSize: {
        // Deliberate type scale (~1.25 ratio), not Tailwind's defaults
        xs: ["0.75rem", { lineHeight: "1.5" }],
        sm: ["0.875rem", { lineHeight: "1.6" }],
        base: ["1rem", { lineHeight: "1.65" }],
        lg: ["1.125rem", { lineHeight: "1.6" }],
        xl: ["1.375rem", { lineHeight: "1.5" }],
        "2xl": ["1.75rem", { lineHeight: "1.3" }],
        "3xl": ["2.25rem", { lineHeight: "1.2" }],
        "4xl": ["2.875rem", { lineHeight: "1.15" }],
        "5xl": ["3.75rem", { lineHeight: "1.05" }],
        "6xl": ["4.75rem", { lineHeight: "1" }],
      },
      maxWidth: {
        prose: "68ch",
      },
    },
  },
  plugins: [typography()],
};
