/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      container: {
        center: true,
      },
      colors: {
        pimary: "#6b705c",
        secondary: "#dbd0bd",
      },
    },
  },
  plugins: [],
};
