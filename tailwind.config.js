/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#F75E39",
          gray: {
            primary: "#666",
            100: "#C6C6C6",
            200: "#C1C1C1",
            300: "#f8f8f8",
            500: "#FBFBFB",
          },
        },
      },
      maxWidth: {
        base: "74.5rem",
        "8xl": "120rem",
      },
      screens: {
        "3xl": "120rem",
      },
      fontFamily: {
        "proxima-nova": ["proxima-nova", "sans-serif"],
      },
      fontSize: {
        "body-sm": "15px",
        body: "17px",
        "display-xl": ["45px", "56px"],
        title: "32px",
      },
      backgroundImage: {
        clients: "url('/assets/images/bg-clients.png')",
      },
      boxShadow: {
        base: "0px 20px 25px 6px rgba(152, 152, 152, 0.06)",
      },
      borderRadius: {
        "4xl": "48px",
      },
    },
  },
  plugins: [],
};
