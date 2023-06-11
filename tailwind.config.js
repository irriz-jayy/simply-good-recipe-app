/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        curve: ['"DM Serif Display"'],
      },
      colors: {
        background1: "#85B7DC", //(50%)
        background2: "#85B7DC", //30%
        background3: "85B7DC", //70%
        inputbackground: "#D9D9D9",
        button: "#423EEA",
        font1: "#000000",
        link: "#423EEA",
      },
    },
  },
  plugins: [],
};
