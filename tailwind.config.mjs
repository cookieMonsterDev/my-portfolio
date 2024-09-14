const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      container: {
        center: true,
      },
      colors: {
        "brown-1": "hsl(36 39% 88%)",
        "brown-2": "hsl(35 43% 53%)",
        "brown-3": "hsl(31 41% 48%)",
        "brown-4": "hsl(28 40% 40%)",
        "brown-5": "hsl(26 36% 34%)",
        "brown-6": "hsl(25 34% 28%)",
      },
      textColor: {
        foreground: "hsl(36 45% 20%)",
        "muted-foreground": "hsl(36 45% 25%)",
      },
      borderColor: {
        DEFAULT: "hsl(36 45% 60%)",
      },
    },
  },
  plugins: [],
};
