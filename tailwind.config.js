/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0499F6",
        dark: "#16242C",
        "blue-light": "#E6F7FF",
        pagination: "#E3E5E5",
        error: "#CD0B0B",
        questin: "#5D5D5D",
        gray: "#FAFBFB",
        color2: "#004CFF",
        step: "#979C9E",
        "mini-app": "#96969E",
      },
      fontFamily: {
        roboto: ["Roboto", "serif"],
        inter: ["Inter", "serif"],
      },
    },
  },
  plugins: [],
};
