/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        basecolor: "#808080",
        black: "#000",
        gray_border: "#D6D6D6",
        red: "#ac0a0b",
        gray_element_background: "#D1D5DB",
        text_color: "#FCFCFC",
      },
      backgroundImage: {
        home_feed: "url('./src/assets/house-fill.svg')",
        logo: "url('./src/assets/logo.svg')",
        menu_open: "url('./src/assets/menu.svg')",
        menu_close: "url('./src/assets/menu_close.svg')",
      },
      backgroundSize: {
        6: "24px",
      },
    },
  },
  plugins: [],
};
