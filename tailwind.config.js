/** @type {import('tailwindcss').Config} */
module.exports = {
  // In Tailwind v3, 'purge' was replaced by 'content'
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // Integrating the Inter font
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        // Custom color palette defined here
        speedy: {
          navy: "#0B1C3E",
          blue: "#1E3A8A",
          gold: "#E89C31",
          light: "#F5F5F7",
        },
      },
    },
  },
  plugins: [],
};
