import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#F58121",
        secondary: "#F3AE75",
        accent: "#FC9B4C",
      },
      fontFamily: {
        koblenz: ["KoblenzSerialHeavy", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
