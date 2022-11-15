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
                'theme': '#FF4D06',
                'darkBg': '#212020',
                'lightBg': '#29292C',
                'lightGray': '#989797',
                'lightBorder': '#413F3F',
            },
            backgroundImage: {
                'bgLanding': "url('/images/landing-bg.jpeg')",
                'bgAbout': "url('/images/about-bg.jpeg')",
                'bgContact': "url('/images/contact-bg.jpeg')",
                'bgProject': "url('/images/project-bg.jpeg')",
                'bgSkills': "url('/images/skills-bg.jpeg')",
                'bgTechStack': "url('/images/tech-stack-bg.jpeg')",
            },
            boxShadow: {
                'nailShadow': "0px 0px 22px 9px #ff4d06"
            },
            keyframes: {
                rippleKeyframe: {
                    '0%': {transform: 'scale(0)'},
                    '100%': {transform: 'scale(2)', opacity: '0'},
                }
            },
            animation: {
                rippleAnimation: 'rippleKeyframe 650ms ease-in-out'
            },
        },
    },
    future: {
        hoverOnlyWhenSupported: true,
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/line-clamp'),
    ],
}