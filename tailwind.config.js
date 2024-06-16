/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#38023B",
                background: "#fff7f8",
                text: "#38023B",
            }
        },
    },
    plugins: [],
}