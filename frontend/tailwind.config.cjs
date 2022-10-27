/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        Background: "#0f172a",
        Foreground: "#1e293b",
        Heading: "#ffffff",
        Normal: "#94a3b8",
        Exclusive: "#6366f1",
        draculaPink: "#ff79c6",
        draculaPurple: "#bd93f9",
      }
    },
    fontFamily: {
      fira: ["Fira Sans", "sans-serif"]
    },
    
  },
  plugins: [],
}
