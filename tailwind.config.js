const colors = require("tailwindcss/colors");
const plugin = require("tailwindcss/plugin");
module.exports = {
  purge: ["./src/**/*.html"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    boxShadow: {
      none: "0 0 #000",
      sm: "0px 0px 12px 2px rgba(0, 0, 0, 0.1)",
      md: "0px 0px 12px 2px rgba(0, 0, 0, 0.2)",
    },
    backgroundPosition: {
      "left-center": "left 0.5rem center",
    },
    fontFamily: {
      iran: "IRANSansX",
    },
    extend: {
      animation: {
        wiggle: "wiggle 1s linear infinite",
      },
      customUtilities: {
        direction: { rename: "" },
        fontFamily: { rename: "" },
        transform: { rename: "" },
      },
      direction: {
        "text-rtl": "rtl",
        "text-ltr": "ltr",
      },
      transform: {
        "flip-180": "rotateY(180deg)",
      },
      padding: {
        md: "56%",
      },
      colors: {
        gray: colors.gray,
        violet: colors.violet,
        customGreen: "#06d6a0",
        customGray: {
          100: "f2f2f2",
          600: "3b3b41",
          500: "404046",
          700: "323236",
          800: "232326",
        },
      },
      fill: (theme) => ({
        violet: theme("colors.violet.800"),
        indigo: theme("colors.indigo.400"),
        gray: theme("colors.gray.700"),
        lightGray: theme("colors.gray.400"),
      }),
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-9deg)" },
          "50%": { transform: "rotate(9deg)" },
        },
      },
      inset: {
        "-42": "-10.5rem",
        "-200": "-50rem",
      },
      minWidth: {
        28: "7rem",
        32: "8rem",
        56: "14rem",
      },
      maxHeight: {
        200: "50rem",
      },
      width: {
        18: "4.5rem",
      },
      zIndex: {
        8: "8",
        9: "9",
      },
    },
  },
  variants: {
    scrollbar: ["responsive", "dark", "rounded"],
    extend: {
      flexDirection: ["rtl"],
      fontFamily: ["rtl"],
      fill: ["dark"],
      textColor: ["rtl", "label-checked", "checkbox-checked"],
      boxShadow: ["dark", "label-checked"],
      display: ["group-hover"],
      inset: ["rtl", "group-hover"],
      opacity: ["group-hover"],
      scale: ["group-hover"],
      borderColor: ["label-checked", "checkbox-checked"],
      borderWidth: ["label-checked", "rtl"],
      backgroundColor: ["label-checked", "odd", "even", "checkbox-checked"],
      backgroundPosition: ["rtl"],
      borderRadius: ["rtl"],
      direction: ["rtl"],
      justifyContent: ["rtl"],
      padding: ["rtl"],
      rotate: ["rtl"],
      transform: ["rtl"],
    },
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("tailwindcss-custom-native"),
    require("tailwind-rtl2"),
    require("@tailwindcss/line-clamp"),
    require("tailwind-scrollbar"),
    require("@tailwindcss/forms"),
    plugin(({ addVariant, e }) => {
      addVariant("label-checked", ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          const eClassName = e(`label-checked${separator}${className}`);
          const yourSelector = 'input[type="radio"]';
          return `${yourSelector}:checked ~ .${eClassName}`;
        });
      }),
        addVariant("checkbox-checked", ({ modifySelectors, separator }) => {
          modifySelectors(({ className }) => {
            const eClassName = e(`checkbox-checked${separator}${className}`);
            const yourSelector = 'input[type="checkbox"]';
            return `${yourSelector}:checked ~ .${eClassName}`;
          });
        });
    }),
  ],
};

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
