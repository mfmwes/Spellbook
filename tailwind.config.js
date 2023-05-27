/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}" ],
  theme: {
    extend: {
      fontFamily: {
        rpg: "MedievalSharp_400Regular",
        text: "Roboto_400Regular",
      },
    },
  },
  plugins: [],
};
