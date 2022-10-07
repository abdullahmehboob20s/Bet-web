/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    colors: {
      white: "white",
      black: "black",
      transparent: "transparent",

      "dynamic-header": "0px",
      "window-height": "661px",
      hero: "#A71F67",
      brand: "#16C72E",
      secondary: "#06A9AA",
      accent: "#aa7f00",
      "oc-1": "#109121",
      "oc-2": "#FFD700",
      "oc-3": "#ff3449",
      "odd-up": "#16C72E",
      "odd-down": "#ff3449",
      b: "#000C24",
      header: "#000C24",
      menu: "#000C24",
      "tab-navigation": "#000C24",
      "hero-hover": "#D22782",
      "hero-sc": "#FFFFFF",
      "hero-sc-rgb": "rgb(255, 255, 255)",
      "hero-rgb": "rgb(167, 31, 103)",
      "brand-hover": "#119923",
      "brand-sc": "#000000",
      "brand-sc-rgb": "rgb(0, 0, 0)",
      "brand-rgb": "rgb(22, 199, 46)",
      "secondary-hover": "#047879",
      "secondary-sc": "#000000",
      "secondary-sc-rgb": "rgb(0, 0, 0)",
      "secondary-rgb": "rgb(6, 169, 170)",
      "accent-hover": "#DDA500",
      "accent-sc": "#FFFFFF",
      "accent-sc-rgb": "rgb(255, 255, 255)",
      "accent-rgb": "rgb(170, 127, 0)",
      "oc-1-hover": "#15BF2B",
      "oc-1-sc": "#FFFFFF",
      "oc-1-sc-rgb": "rgb(255, 255, 255)",
      "oc-1-rgb": "rgb(16, 145, 33)",
      "oc-2-hover": "#CCAC00",
      "oc-2-sc": "#000000",
      "oc-2-sc-rgb": "rgb(0, 0, 0)",
      "oc-2-rgb": "rgb(255, 215, 0)",
      "oc-3-hover": "#FF6777",
      "oc-3-sc": "#FFFFFF",
      "oc-3-sc-rgb": "rgb(255, 255, 255)",
      "oc-3-rgb": "rgb(255, 52, 73)",
      "odd-up-hover": "#119923",
      "odd-up-sc": "#000000",
      "odd-up-sc-rgb": "rgb(0, 0, 0)",
      "odd-up-rgb": "rgb(22, 199, 46)",
      "odd-down-hover": "#FF6777",
      "odd-down-sc": "#FFFFFF",
      "odd-down-sc-rgb": "rgb(255, 255, 255)",
      "odd-down-rgb": "rgb(255, 52, 73)",
      "b-hover": "#001D57",
      "b-sc": "#FFFFFF",
      "b-sc-rgb": "rgb(255, 255, 255)",
      "b-rgb": "rgb(0, 12, 36)",
      "header-hover": "#001D57",
      "header-sc": "#FFFFFF",
      "header-sc-rgb": "rgb(255, 255, 255)",
      "header-rgb": "rgb(0, 12, 36)",
      "menu-hover": "#001D57",
      "menu-sc": "#FFFFFF",
      "menu-sc-rgb": "rgb(255, 255, 255)",
      "menu-rgb": "rgb(0, 12, 36)",
      "tab-navigation-hover": "#001D57",
      "tab-navigation-sc": "#FFFFFF",
      "tab-navigation-sc-rgb": "rgb(255, 255, 255)",
      "tab-navigation-rgb": "rgb(0, 12, 36)",
    },
    extend: {
      fontFamily: {
        roboto: "'Roboto', sans-serif",
      },
      fontSize: {
        "10px": "10px",
      },
      spacing: {
        "mobile-header-main-section-height":
          "var(--mobile-header-main-section-height)",
        "mobile-header-navigation-height":
          "var(--mobile-header-navigation-height)",
        "mobile-header-full-height": "var(--mobile-header-full-height)",
        "1px": "1px",
        "2px": "2px",
        "3px": "3px",
        "4px": "4px",
        "5px": "5px",
        "6px": "6px",
        "7px": "7px",
        "8px": "8px",
        "9px": "9px",
        "10px": "10px",
        "11px": "11px",
        "12px": "12px",
        "13px": "13px",
        "14px": "14px",
      },
    },
  },
  plugins: [],
};
