/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    colors: {
      white: "white",
      black: "black",
      transparent: "transparent",
      gold: "var(--gold)",

      "white-01": "rgba(255,255,255,.01)",
      "white-02": "rgba(255,255,255,.02)",
      "white-03": "rgba(255,255,255,.03)",
      "white-04": "rgba(255,255,255,.04)",
      "white-05": "rgba(255,255,255,.05)",
      "white-06": "rgba(255,255,255,.06)",
      "white-07": "rgba(255,255,255,.07)",
      "white-08": "rgba(255,255,255,.08)",
      "white-09": "rgba(255,255,255,.09)",
      "white-1": "rgba(255,255,255,.1)",
      "white-2": "rgba(255,255,255,.2)",
      "white-3": "rgba(255,255,255,.3)",
      "white-4": "rgba(255,255,255,.4)",
      "white-5": "rgba(255,255,255,.5)",
      "white-6": "rgba(255,255,255,.6)",
      "white-7": "rgba(255,255,255,.7)",
      "white-8": "rgba(255,255,255,.8)",
      "white-9": "rgba(255,255,255,.9)",

      "dynamic-header": "var(--dynamic-header)",
      "window-height": "var(--window-height)",
      hero: "var(--hero)",
      brand: "#16C72E",
      secondary: "#06A9AA",
      accent: "#aa7f00",
      "oc-1": "var(--oc-1)",
      "oc-2": "var(--oc-2)",
      "oc-3": "var(--oc-3)",
      "odd-up": "var(--odd-up)",
      "odd-down": "var(--odd-down)",
      b: "#000C24",
      header: "#000C24",
      menu: "#000C24",
      "tab-navigation": "var(--tab-navigation)",
      "hero-hover": "var(--hero-hover)",
      "hero-sc": "var(--hero-sc)",
      "hero-sc-rgb": "var(--hero-sc-rgb)",
      "hero-rgb": "var(--hero-rgb)",
      "brand-hover": "var(--brand-hover)",
      "brand-sc": "var(--brand-sc)",
      "brand-sc-rgb": "var(--brand-sc-rgb)",
      "brand-rgb": "var(--brand-rgb)",
      "secondary-hover": "var(--secondary-hover)",
      "secondary-sc": "var(--secondary-sc)",
      "secondary-sc-rgb": "var(--secondary-sc-rgb)",
      "secondary-rgb": "var(--secondary-rgb)",
      "accent-hover": "var(--accent-hover)",
      "accent-sc": "var(--accent-sc)",
      "accent-sc-rgb": "var(--accent-sc-rgb)",
      "accent-rgb": "var(--accent-rgb)",
      "oc-1-hover": "var(--oc-1-hover)",
      "oc-1-sc": "var(--oc-1-sc)",
      "oc-1-sc-rgb": "var(--oc-1-sc-rgb)",
      "oc-1-rgb": "var(--oc-1-rgb)",
      "oc-2-hover": "var(--oc-2-hover)",
      "oc-2-sc": "var(--oc-2-sc)",
      "oc-2-sc-rgb": "var(--oc-2-sc-rgb)",
      "oc-2-rgb": "var(--oc-2-rgb)",
      "oc-3-hover": "var(--oc-3-hover)",
      "oc-3-sc": "var(--oc-3-sc)",
      "oc-3-sc-rgb": "var(--oc-3-sc-rgb)",
      "oc-3-rgb": "var(--oc-3-rgb)",
      "odd-up-hover": "var(--odd-up-hover)",
      "odd-up-sc": "var(--odd-up-sc)",
      "odd-up-sc-rgb": "var(--odd-up-sc-rgb)",
      "odd-up-rgb": "var(--odd-up-rgb)",
      "odd-down-hover": "var(--odd-down-hover)",
      "odd-down-sc": "var(--odd-down-sc)",
      "odd-down-sc-rgb": "var(--odd-down-sc-rgb)",
      "odd-down-rgb": "var(--odd-down-rgb)",
      "b-hover": "var(--b-hover)",
      "b-sc": "var(--b-sc)",
      "b-sc-rgb": "var(--b-sc-rgb)",
      "b-rgb": "var(--b-rgb)",
      "header-hover": "var(--header-hover)",
      "header-sc": "var(--header-sc)",
      "header-sc-rgb": "var(--header-sc-rgb)",
      "header-rgb": "var(--header-rgb)",
      "menu-hover": "var(--menu-hover)",
      "menu-sc": "var(--menu-sc)",
      "menu-sc-rgb": "var(--menu-sc-rgb)",
      "menu-rgb": "var(--menu-rgb)",
      "tab-navigation-hover": "var(--tab-navigation-hover)",
      "tab-navigation-sc": "var(--tab-navigation-sc)",
      "tab-navigation-sc-rgb": "var(--tab-navigation-sc-rgb)",
      "tab-navigation-rgb": "var(--tab-navigation-rgb)",
    },
    extend: {
      fontFamily: {
        roboto: "'Roboto', sans-serif",
      },
      borderWidth: {
        "1px": "1px",
      },
      fontSize: {
        "10px": "10px",
        "13px": "13px",
      },
      backgroundImage: {
        "blue-to-purple": "linear-gradient(270deg,#8d17c7,#031778)",
        instagram:
          "radial-gradient(circle at 30% 107%,#fdf497 0,#fdf497 5%,#fd5949 45%,#d6249f 60%,#285aeb 90%)",
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
        "18px": "18px",
      },
    },
  },
  plugins: [],
};
