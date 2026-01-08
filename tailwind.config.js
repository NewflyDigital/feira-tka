module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ff5d02",
        secondary: "#33A851",
      },
      zIndex: { 9999: "9999" },
    },
    fontFamily: {
      body: ['Poppins', 'sans-serif'],
    },
  },
  plugins: [],
};
