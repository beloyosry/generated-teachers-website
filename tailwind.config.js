/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#22b1da",
                secondary: "#413e65",
                hero: "#f5f8fd",
                page: "#fff",
                subscribe: "#2d2b46",
            },
        },
    },
    plugins: [],
});
