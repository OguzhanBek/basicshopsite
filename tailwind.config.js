module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // Tüm React bileşenleri için Tailwind önerilerini aktif eder
  ],
  theme: {
    extend: {},
  },
  plugins: [require("tailwind-scrollbar")],
};
