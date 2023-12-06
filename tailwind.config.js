/** @type {import('tailwindcss').Config} */

export default {
  darkMode: "class",
  content: ["./index.html", "./main.js"],
  theme: {
    screens: {
      sm: "380px",
      md: "500px",
      lg: "900px",
      xl: "1440px",
    },
    extend: {
      colors: {
        // primary
        red: "hsl(348, 97%, 39%)",
        brightRed: "hsl(356, 69%, 56%)",
        lightOrange: "hsl(37, 97%, 70%)",
        pink: "hsl(329, 70%, 58%)",
        blue: "hsl(208, 92%, 53%)",
        bluishGreen: "hsl(210, 78%, 56%)",
        limeGreen: "hsl(163, 72%, 41%)",
        lightGreen: "hsl(146, 68%, 55%)",
        // dark theme
        veryDarkBlue: "hsl(230, 17%, 14%)", //bg
        darkDesaturatedBlue: "hsl(228, 28%, 20%)", // Card BG
        desaturatedBlue: "hsl(228, 34%, 66%)", // text
        lighterBlue: "#333A56", // dark card hover
        // light theme
        veryPaleBlue: "hsl(225, 100%, 98%)", //Top BG Pattern light
        lightGrayishBlue: "hsl(227, 47%, 96%)", // Card BG light
        darkGrayishBlue: "hsl(228, 12%, 44%)", // text light
        grayishBlue: "#E1E3F0", // light card hover
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
