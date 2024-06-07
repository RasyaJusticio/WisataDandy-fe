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
        primary: "#26273b",
        secondary: "#222338",
        tertiary: "#1b1c31",
        accent: {
          "50": "#f0f3fd",
          "100": "#e3e9fc",
          "200": "#cdd5f8",
          "300": "#aebaf3",
          "400": "#8d96ec",
          "500": "#7174e3",
          "600": "#5d56d5",
          "700": "#4f46bb",
          "800": "#413c97",
          "900": "#393679",
          "950": "#222046",
        },
      },
    },
  },
  plugins: [],
};
export default config;
