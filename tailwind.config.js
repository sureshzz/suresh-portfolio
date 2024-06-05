module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./public/index.html",
    "./components/**/*.{html,js,jsx,ts,tsx}", // if you have a components directory
  ],
  theme: {
    extend: {},
    fontFamily:{
      logo: ["Great vibes"],
    }
  },
  plugins: [],
};
