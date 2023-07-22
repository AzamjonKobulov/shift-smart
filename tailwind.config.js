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
          },
        },
      },
      maxWidth: {
        base: "74.5rem",
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
        hero: "url('/assets/images/bg-hero.png')",
        clients: "url('/assets/images/bg-clients.png')",
        pricing: "url('/assets/images/bg-pricing.png')",
        footer: "url('/assets/images/bg-footer.png')",
        "pricing-mobile": "url('/assets/images/bg-pricing-mobile.png')",
        "hero-mobile": "url('/assets/images/bg-hero-mobile.png')",
        "shift-smart": "url('/assets/images/bg-shift-smart.png')",
        feature: "url('/assets/images/bg-big.png')",
        "feature-mobile": "url('/assets/images/bg-big-mobile.png')",
      },
      backgroundSize: {
        auto: "auto",
        cover: "cover",
        contain: "contain",
        "10%": "10%",
        "20%": "20%",
        "30%": "30%",
        "40%": "40%",
        "50%": "50%",
        "60%": "60%",
        "70%": "70%",
        "80%": "80%",
        "90%": "90%",
        16: "4rem",
      },
      lineHeight: {
        11: "3.5156rem",
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

// bg-hero-mobile lg:bg-hero bg-no-repeat xs:bg-cover sm:bg-auto overflow-hidden bg-right-top xxl:bg-right-center
