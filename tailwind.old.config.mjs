/** @type {import('tailwindcss').Config} */
export const content = [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
];
export const theme = {
    extend: {
        colors: {
            lightHover: '#fcf4ff',
            darkHover: '#2a004a',
            darkTheme: '#11001F',
        },
        fontFamily: {
            Outfit: ["Outfit", "sans-serif"],
            Ovo: ["Ovo", "serif"]
        }
    },
};
export const plugins = [];