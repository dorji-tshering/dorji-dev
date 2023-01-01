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
            backgroundImage: {
                lightRadialGradient: 'radial-gradient( circle at 50%, #0141ff1f 0px, #00000000 )',
                darkRadialGradient: 'radial-gradient( circle at center, #fc00cb0d, #0000000f)',
                lightFeaturedBg: 'linear-gradient(90deg, #f9f9f9 7%, rgba(56,230,244,1) 32%, rgba(56,136,244,1) 54%, rgba(244,56,215,1) 72%, #f9f9f9 92%)',
                darkFeaturedBg: 'linear-gradient(90deg, #222222 7%, rgba(56,230,244,1) 32%, rgba(56,136,244,1) 54%, rgba(244,56,215,1) 72%, #222222 92%)',
                landingBg: 'linear-gradient(0deg, rgba(17,17,17,1) 74%, rgba(63,94,251,1) 100%)'
            },
            screens: {
                xs: '481px'
            },
            boxShadow: {
                nailShadow: "0px 0px 22px 9px #016DF9",
                mainShadow: "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",
                borderedShadow: "0 0 0 1px rgb(0 0 0 / 7%), 0 2px 4px rgb(0 0 0 / 5%), 0 12px 24px rgb(0 0 0 / 5%)"
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