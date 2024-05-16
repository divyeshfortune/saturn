/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // DMSans: "'DMSans'"
      },
      colors: {
        primary: "#2F73F2",
        DarkPrimary: "#12429A",
        secondary: "#EFFBFF",
        midnight_text: "#102D47",
        grey: "#668199",
        stroke: "#DCE9FA",
        SereneGray: "#ACBCCA",
        DeepOcean: "#547593",
        CrystalSky: "#D1E8FF",
        SnowySky: "#F8FAFC",
        MistyBlue: "#A3BBD1",
        SkyMistBlue: "#AEC8DF",
        MistySky: "#C1DCFF",
        CeruleanBlue: "#46C4FF",
        lightblue: "#D6E4FF",
        SkyBlueMist: "#C0D5FB",
        IceBlue: "#DBE9F6",
        darkmode: "#111928",
        darklight: "#1F2A37",
        InkBlue: "#1F2A37",
        darkborder: "#374151",
      },
      screens: {
        sm: "768px",
        md: "1024px",
        lg: "1280px",
        xl: "1536px",
        "2xl": "1920px",
      },
      fontSize: {
        58: [
          "3.625rem",
          {
            lineHeight: "5.375rem",
          },
        ],
        51: [
          "3.1875rem",
          {
            lineHeight: "4rem",
          },
        ],
        50: [
          "3.125rem",
          {
            lineHeight: "3.625rem",
          },
        ],
        48: [
          "3rem",
          {
            lineHeight: "5rem",
          },
        ],
        40: [
          "2.5rem",
          {
            lineHeight: "3rem",
          },
        ],
        48: [
          "3rem",
          {
            lineHeight: "3.39rem",
          },
        ],
        36: [
          "2.25rem",
          {
            lineHeight: "2.625rem",
          },
        ],
        32: [
          "2rem",
          {
            lineHeight: "2.5rem",
          },
        ],
        28: [
          "1.75rem",
          {
            lineHeight: "2.25rem",
          },
        ],
        24: [
          "1.5rem",
          {
            lineHeight: "2rem",
          },
        ],
        22: [
          "1.375rem",
          {
            lineHeight: "2rem",
          },
        ],
        21: [
          "1.3125rem",
          {
            lineHeight: "1.875rem",
          },
        ],
        18: [
          "1.125rem",
          {
            lineHeight: "1.5rem",
          },
        ],
        17: [
          "1.0625rem",
          {
            lineHeight: "1.4875rem",
          },
        ],
        16: [
          "1rem",
          {
            lineHeight: "1.6875rem",
          },
        ],
        14: [
          "0.875rem",
          {
            lineHeight: "1.225rem",
          },
        ],
      },
    },
  },
  plugins: [
  ],
};