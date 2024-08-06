/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          default: "#39DB4A",
          light: "#C1F1C6",
        },
        danger: {
          default: "#FF6868",
          light: "#FFC9C9",
        },
      },
    },
  },
  plugins: [],
};
