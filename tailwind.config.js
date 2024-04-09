/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xxs: "300px",
        xs: "320px",
        xss: "480px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      colors: {
        "amp-black": "#0A2D46",
        "amp-l-blue": "#23C3D2",
        "amp-d-blue": "#102534",
        "amp-yellow": "#E6E664",
        "amp-orange": "#F88729",
        "amp-red": "#DC5A46",
        "amp-green": "#8A9C5E",
        "amp-purple": "#822887",
        "amp-grey": "#DCE2DE",
        "amp-gushy-green": "#BCBF65",
        "amp-gushy-yellow": "#D5D96C",
        "amp-d-green": "#475F4A",
        "amp-l-green": "#98A665",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        merri: ["Merriweather", "serif"],
      },
    },
  },
  plugins: [],
};
