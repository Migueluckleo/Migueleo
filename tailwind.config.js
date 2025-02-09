module.exports = {
  content: ["./*.html", "./**/*.html", "./js/**/*.js"],
  theme: {
    extend: {
      keyframes: {
        blob: {
          "0%": { transform: "translate(0px, 0px) scale(1)" },
          "25%": { transform: "translate(15px, -20px) scale(1.1)" },
          "50%": { transform: "translate(-10px, 15px) scale(0.9)" },
          "75%": { transform: "translate(20px, 10px) scale(1.2)" },
          "100%": { transform: "translate(0px, 0px) scale(1)" },
        },
      },
      animation: {
        motion: "blob 8s infinite ease-in-out alternate",
      },
      fontFamily: {
        space: ["Space Grotesk", "sans-serif"],
      },
    },
  },
  plugins: [],
};
