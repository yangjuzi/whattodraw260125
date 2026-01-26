import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        art: {
          50: '#fdf8f6',
          100: '#f5ebe6',
          200: '#eadad6',
          300: '#d7c4c0',
          400: '#c2a6a0',
          500: '#ab897e',
          600: '#956d65',
          700: '#7c554f',
          800: '#65453f',
          900: '#543a35',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        body: ['var(--font-body)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
