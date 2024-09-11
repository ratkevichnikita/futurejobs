import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    screens: {
      xl: { max: "1460px" },
      // => @media (max-width: 1527px) { ... }

      lg: { max: "991px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
    },
    extend: {
      container: {
        center: true,
        padding: "15px",
      },
      colors: {
        accent: "#FE4E01",
        siteGray: "#787889",
        siteDark: "#0D0D16",
        warning: "#f9e154",
        error: "#ff4d4f"
      },
      borderWidth: {
        DEFAULT: "1px",
        1: "1px",
        2: "2px",
        3: "3px",
        4: "4px",
        5: "5px",
        6: "6px",
        7: "7px",
        8: "8px",
        10: "10px",
      },
      fontFamily: {
        roboto: ["var(--font-roboto)"],
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("tailwindcss-inner-border")],
};
export default config;
