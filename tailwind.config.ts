import daisyui from "daisyui";
import type { Config } from "tailwindcss";
import heropatterns from "tailwindcss-hero-patterns";

export default {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {},
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
