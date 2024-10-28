/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        colour1: "#000000",
        colour2: "#14213d",
        colour3: "#fca311",
        colour4: "#e5e5e5",
        colour5: "#ffffff",
      },
    },
  },
  plugins: [],
};
