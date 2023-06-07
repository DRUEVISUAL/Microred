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
        logo: "url('./src/assets/logo.svg')",
        menu_open: "url('./src/assets/menu.svg')",
        menu_close: "url('./src/assets/menu_close.svg')",
        search: "url('./src/assets/search.svg')",
        vote: "url('./src/assets/vote.svg')",
        vote_clicked: "url('./src/assets/vote_clicked.svg')",
        comment: "url('./src/assets/comment.svg')",
        comment_hover: "url('./src/assets/comment_hover.svg')",
      },
      backgroundSize: {
        6: "24px",
      },
      screens: {
        xs: "320px",
      },
      borderWidth: {
        1: "1px",
      },
      animation: {
        pulse_3000: "pulse 3000ms ease-in-out infinite",
        pulse_4000: "pulse 4000ms ease-in-out infinite",
        pulse_5000: "pulse 5000ms ease-in-out infinite",
        pulse_6000: "pulse 6000ms ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
