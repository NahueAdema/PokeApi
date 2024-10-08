/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        bg: "url('/bg2.jpg')",
        bgHome: "Url('/bg-eve.jpg')",
        bgTrivia: "Url('/b2.jpg')",
      },
    },
  },
  plugins: [],
};
