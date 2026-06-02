/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        body: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      colors: {
        ink: "#050505",
        ember: "#f0a35b",
        brass: "#d7a864",
        smoke: "#a5a5a5"
      },
      boxShadow: {
        gold: "0 0 60px rgba(240, 163, 91, 0.18)",
        proof: "0 26px 80px rgba(0, 0, 0, 0.5)"
      }
    }
  },
  plugins: []
};
