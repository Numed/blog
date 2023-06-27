/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#1A1A1A",
        bodyBlue: "#090D1F",
        blogPurple: "#6941C6",
        blogPink: "#C11574",
        blogBlue: "#3538CD",
        blogGreen: "#027A48",
        blogRed: "#C01048",
        blogOrange: "#C4320A",
        blogDarkBlue: "#363F72",
        blogGrey: "#667085",
        lightBlogPurple: "#F9F5FF",
        lightBlogPink: "#FDF2FA",
        lightBlogBlue: "#EEF4FF",
        lightBlogGreen: "#ECFDF3",
        lightBlogRed: "#FFF1F3",
        lightBlogOrange: "#FFF6ED",
        lightBlogDarkBlue: "#F8F9FC",
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
