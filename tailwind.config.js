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
        background1: "#d54215", //(50%)
        background2: "#85B7DC", //30%
        background3: "85B7DC", //70%
        inputbackground: "#D9D9D9",
        button: "#d54215",
        font1: "#000000",
        link: "#423EEA",
      },
    },
  },
  plugins: [],
};
