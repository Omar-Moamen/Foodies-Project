import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Montserrat', 'sans-serif']
    },
    boxShadow: {
      main: "0 0 0.5rem rgba(0, 0, 0, 0.5)",
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "primary": "rgb(var(--primary-orange))",
        "secondary": "rgb(var(--secondary-orange))",
      },
    },
  },
  plugins: [],
};
export default config;
