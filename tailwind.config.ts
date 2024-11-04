import daisyui from "daisyui";
import type { Config } from "tailwindcss";
import heropatterns from "tailwindcss-hero-patterns";

export default {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        extend: {
            colors: {
                'aquamarine': { DEFAULT: '#84FFC9', 100: '#004e2c', 200: '#009b58', 300: '#00e984', 400: '#37ffa8', 500: '#84ffc9', 600: '#9dffd5', 700: '#b6ffdf', 800: '#ceffea', 900: '#e7fff4' },
                'tiffany_blue': { DEFAULT: '#91E5DB', 100: '#0e3c37', 200: '#1c796e', 300: '#2ab5a5', 400: '#53d7c7', 500: '#91e5db', 600: '#a6eae2', 700: '#bcefe9', 800: '#d2f5f1', 900: '#e9faf8' },
                'non_photo_blue': { DEFAULT: '#97D9E4', 100: '#0f353c', 200: '#1f6b78', 300: '#2ea0b4', 400: '#5ac2d4', 500: '#97d9e4', 600: '#abe0e9', 700: '#c0e8ef', 800: '#d5eff4', 900: '#eaf7fa' },
                'light_sky_blue': { DEFAULT: '#9DCCED', 100: '#0c2c42', 200: '#185885', 300: '#2583c7', 400: '#5aa8e1', 500: '#9dcced', 600: '#b0d5f0', 700: '#c4e0f4', 800: '#d7eaf8', 900: '#ebf5fb' },
                'jordy_blue': { DEFAULT: '#A4BFF6', 100: '#071e4a', 200: '#0f3b95', 300: '#1659df', 400: '#588aee', 500: '#a4bff6', 600: '#b5cbf8', 700: '#c7d8f9', 800: '#dae5fb', 900: '#ecf2fd' },
                'powder_blue': { DEFAULT: '#AAB2FF', 100: '#000855', 200: '#0011a9', 300: '#0019fe', 400: '#5465ff', 500: '#aab2ff', 600: '#bac1ff', 700: '#cbd0ff', 800: '#dce0ff', 900: '#eeefff' },
                purple_pizzazz: '#FF51EB',
                hunyadi_yellow: '#F2BF6C',

            },
            fontFamily: {
                sc: [`Scripto`],
                nm: [`Neue Montreal`]
            }
        }
    },
    plugins: [
        daisyui,
        heropatterns
    ],
    daisyui: {
        themes: [
            {
                backpack: {
                    "primary": "#91E5DB",
                    "secondary": "#EAC178",
                    "accent": "#84FFC9",
                    "neutral": "#A6BBF9",
                    "base-100": "#ffffff",
                    "base-200": "#faf4ed",
                    "base-300": "#333333"
                },
            },
        ]
    }
} satisfies Config;
