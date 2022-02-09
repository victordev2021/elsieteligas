const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./vendor/laravel/jetstream/**/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ["Nunito", ...defaultTheme.fontFamily.sans],
            },
            colors: {
                brown: {
                    50: "#fdf8f6",
                    100: "#f2e8e5",
                    200: "#eaddd7",
                    300: "#e0cec7",
                    400: "#d2bab0",
                    500: "#bfa094",
                    600: "#a18072",
                    700: "#977669",
                    800: "#846358",
                    900: "#43302b",
                },
                brand: {
                    50: "#E1BEE7",
                    100: "#CE93D8",
                    200: "#BA68C8",
                    300: "#AB47BC",
                    400: "#8E24AA",
                    500: "#9C27B0",
                    600: "#7B1FA2",
                    700: "#6A1B9A",
                    800: "#4A148C",
                    900: "#AA00FF",
                },
            },
        },
    },

    plugins: [
        require("@tailwindcss/forms"),
        require("@tailwindcss/typography"),
    ],
};
