/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                'theme': '#3889f4',
                'mainBg': '#111',
                'myRed': '#f56c62',
                'myYellow': '#fbc765',
                'myCyan': '#7efbfd',
                'myGreen': '#62f4ab'
            },
            screens: {
                xs: '481px'
            },
            boxShadow: {
                nailShadow: "0px 0px 22px 9px #016DF9",
                mainShadow: "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px"
            },
            dropShadow: {
                svgGlow: '0px 0px 30px #3889f4',
                workGlow: '0px 0px 10px #fbc765',
                aboutGlow: '0px 0px 10px #7efbfd',
                stackGlow: '0px 0px 10px #f56c62',
                contactGlow: '0px 0px 10px #62f4ab'
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
            },
            animation: {
                rippleAnimation: 'rippleKeyframe 650ms ease-in-out',
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