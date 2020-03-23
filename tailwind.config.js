module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          "50": "#fff8e1",
          "100": "#ffecb3",
          "200": "#ffe082",
          "300": "#ffd54f",
          "400": "#ffca28",
          "500": "#ffc107",
          "600": "#ffb300",
          "700": "#ffa000",
          "800": "#ff8f00",
          "900": "#ff6f00"
        },
        white: "#ededf3",
        transparentWhite: "#ededf3e6",
        softGray: "#E5E5E5",
        darkGray: "#808080"
      },
      boxShadow: {
        neumorphism: "-9px -9px 16px white, 9px 9px 16px #D9D9D9"
      }
    },
    borderRadius: {
      full: "9999px",
      default: "0.5rem",
      lg: "1.5rem"
    },
    fontFamily: {
      body: ["Open Sans"],
      display: ["Nunito"]
    }
  },
  variants: {
    backgroundColor: ["hover", "group-hover", "odd", "even"],
    width: ["responsive", "group-active"]
  },
  plugins: [
    require('tailwindcss-interaction-variants'),
  ]
};
