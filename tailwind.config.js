/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        curve: ['"DM Serif Display"'],
        heading: ['"Source Serif 4"'],
        paragraph: ['"DM Sans"'],
      },
      colors: {
        background1: "#fafafa", //(50%)
        background2: "#d54215", //30%
        inputbackground: "#D9D9D9",
        button: "#e16120",
        font1: "#000000",
        font2: "#d54215",
        link: "#423EEA",
      },
    },
  },
  plugins: [],
};
