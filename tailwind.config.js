/** @type {import('tailwindcss').Config} */
const themes = require("./src/utils/themes");
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    plugins: [require("daisyui")],
    daisyui: {
        themes: themes,
    },
};
