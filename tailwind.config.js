/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'theme': '#3889f4',
                'mainBg': '#111',
            },
            boxShadow: {
                nailShadow: "0px 0px 22px 9px #016DF9",
            },
            keyframes: {
                rippleKeyframe: {
                    '0%': {
                        transform: 'scale(0)'
                    },
                    '100%': {
                        transform: 'scale(2)', opacity: '0'
                    },
                },
                glow: {
                    '0%': {
                      textShadow: '0 0 10px #2d9da9'
                    },
                    "100%": {
                      textShadow: '0 0 20px #34b3c1, 0 0 10px #4dbbc7'
                    }
                  }
            },
            animation: {
                rippleAnimation: 'rippleKeyframe 650ms ease-in-out',
                textGlow: 'glow 2s ease-in-out infinite alternate',
            },
        },
    },
    future: {
        hoverOnlyWhenSupported: true,
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/line-clamp'),
        require('tailwind-scrollbar-hide')
    ],
}