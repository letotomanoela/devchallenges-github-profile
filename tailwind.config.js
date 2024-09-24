/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#111729",
        darkBlue: "#1D1B48",
        primary: "#3662E3",
        secondary: "#20293A",
        primaryGray: "#364153",
        secondaryGray: "#4A5567",
        lightGray: "#CDD5E0",
      },
    },
  },
  plugins: [],
};
