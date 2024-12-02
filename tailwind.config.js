import plugin from 'tailwindcss/plugin';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ["Inter", "sans-serif"],
      },
      boxShadow: {
        custom: 'inset 20px 10px 20px rgba(0, 0, 0, 0.1), 15px 20px 10px rgba(0, 0, 0, 0.1), 15px 20px 20px rgba(0, 0, 0, 0.1), inset -10px -10px 30px rgba(255, 255, 255, 0.6)'
      },
    },
  },
  plugins: [
    // If you plan to use any Tailwind plugins in the future
  ],
};
