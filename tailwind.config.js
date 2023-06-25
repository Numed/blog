/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "",
  theme: {
    extend: {
      colors: {
        primary: "#1A1A1A",
        blogPurple: "#6941C6",
        blogPink: "#C11574",
        blogBlue: "#3538CD",
        blogGreen: "#027A48",
        blogGrey: "#667085",
        lightBlogPurple: "#F9F5FF",
        lightBlogPink: "#FDF2FA",
        lightBlogBlue: "#EEF4FF",
        lightBlogGreen: "#ECFDF3",
      },
      fontSize: {
        "10xl": "10rem",
      },
      textUnderlineOffset: {
        6: "6px",
      },
    },
  },
  plugins: [],
};
