/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "1000px",
      },
      colors: {
        transparent: "rgba(14, 14, 15, 0.51)",
      },
      backgroundImage: {
        footer:
          "url('https://itskills.uz/static/media/footer.f0768dd68f457514050e.png')",
      },
    },
  },
  plugins: [],
};
