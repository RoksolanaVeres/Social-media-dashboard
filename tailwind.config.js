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
        limeGreen: "hsl(163, 72%, 41%)",
        brightRed: "hsl(356, 69%, 56%)",
        facebook: "hsl(208, 92%, 53%)",
        twitter: "hsl(203, 89%, 53%)",
        instagramFrom: "hsl(37, 97%, 70%)",
        instagramTo: "hsl(329, 70%, 58%)",
        youTube: "hsl(348, 97%, 39%)",
        toggleFrom: "hsl(210, 78%, 56%)",
        toggleTo: "hsl(146, 68%, 55%)",
        // dark theme
        veryDarkBlueBg: "hsl(230, 17%, 14%)", //bg
        veryDarkBlueTop: "hsl(232, 19%, 15%)", //Top BG Pattern
        darkDesaturatedBlue: "hsl(228, 28%, 20%)", // Card BG
        desaturatedBlue: "hsl(228, 34%, 66%)", // text
        darkCardHover: "#333A56",
        // light theme
        veryPaleBlue: "hsl(225, 100%, 98%)", //Top BG Pattern light
        lightGrayishBlue: "hsl(227, 47%, 96%)", // Card BG light
        darkGrayishBlue: "hsl(228, 12%, 44%)", // text light
        lightCardHover: "#E1E3F0",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
