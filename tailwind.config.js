// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        soehne: ["var(--font-soehne-breit)", "sans-serif"],
      },
      backgroundImage: {
        bronze:
          "radial-gradient(93.43% 93.43% at 76.12% -14.19%, #FFDB66 0%, rgba(255,219,102,0) 100%), linear-gradient(180deg, #CD7F32 0%, #804D1B 100%)",
      },
    },
  },
  plugins: [],
};
