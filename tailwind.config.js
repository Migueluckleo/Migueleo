module.exports = {
  content: ["./*.html", "./**/*.html", "./js/**/*.js"],
  theme: {
      extend: {
          keyframes: {
              blob: {
                  "0%": { transform: "translate(0px, 0px) scale(1)" },
                  "33%": { transform: "translate(30px, -50px) scale(1.2)" },
                  "66%": { transform: "translate(20px, 20px) scale(.8)" },
                  "100%": { transform: "translate(0px, 0px) scale(1)" },
              },
          },
          animation: {
              blob: "blob 7s infinite",
          },
          fontFamily: {
              space: ["Space Grotesk", "sans-serif"],
          },
      },
  },
  plugins: [],
};
