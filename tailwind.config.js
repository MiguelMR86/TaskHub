const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        rotate360: "rotate360 1s linear infinite",
      },
      keyframes: {
        rotate360: {
          "0%": {transform: "rotate(0deg)"},
          "100%": {transform: "rotate(360deg)"},
        },
      },
      screens: {
        'tablet': '750px',
      },
    },
  },
  plugins: [],
});