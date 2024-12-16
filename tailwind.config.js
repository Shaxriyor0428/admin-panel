/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('./src/assets/image/hero.png')",
        register: "url('./src/assets/register.png')",
      },
    },
    container: {
      center: true,
      screens: {
        lg: "1152px",
      },
    },
  },
  plugins: [],
};
