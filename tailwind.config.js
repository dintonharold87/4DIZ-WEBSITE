module.exports = {
  content: ["./public/index.html", "./src/**/*.{html,js}", "./public/*.html"],
  theme: {
    screens: {
      sm: "480px",
      // => @media (min-width: 480px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "976px",
      // => @media (min-width: 976px) { ... }

      xl: "1440px",
      // => @media (min-width: 1440px) { ... }
    },
    colors: {
      primary: "#005F33",
      secondary: "#E6EFEA",
      hoverPrimary: "#00BD65",
      hoverSecondary: "#002413",
      textColor: "#00331B",
      textPrimaryColor: "#E6EFEA",
      textSecondaryColor: "#00331B",
      primaryDark: "#004927",
      transparent: "#E6EFEA",

      // ...
    },
    extend: {},
  },
  plugins: [],
};
