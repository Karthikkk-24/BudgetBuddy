/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#EB5E28",
                background: "#FFFCF2",
                text: "#252422",
            }
        },
    },
    plugins: [],
}