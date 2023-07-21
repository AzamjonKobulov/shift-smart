/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      maxWidth: {
        base: '77.125rem',
      },
      screens: {
        xs: '31.25rem',
      },
      colors: {
        brand: {
          primary: '#F75E39',
          gray: {
            primary: '#666',
            100: '#C6C6C6',
            200: '#C1C1C1',
          },
        },
      },
      fontFamily: {
        'proxima-nova': ['proxima-nova', 'sans-serif'],
      },
      fontSize: {
        'base-sm': '0.9375rem',
        base: '1.0625rem',
        title: '2rem',
      },
      backgroundImage: {
        hero: "url('/assets/images/bg-hero.png')",
        clients: "url('/assets/images/bg-clients.png')",
        pricing: "url('/assets/images/bg-pricing.png')",
        footer: "url('/assets/images/bg-footer.png')",
        'pricing-mobile': "url('/assets/images/bg-pricing-mobile.png')",
        'hero-mobile': "url('/assets/images/bg-hero-mobile.png')",
        'shift-smart': "url('/assets/images/bg-shift-smart.png')",
        feature: "url('/assets/images/bg-big.png')",
        'feature-mobile': "url('/assets/images/bg-big-mobile.png')",
      },
      lineHeight: {
        11: '3.5156rem',
      },
    },
  },
  plugins: [],
};
