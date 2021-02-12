const colors = require('tailwindcss/colors')

module.exports = {
    darkMode: 'class',
    theme: {
        extend: {
            spacing: {
                0.75: '0.2rem'
            }
        },
        fill: {
            'gray': {
                50: '#fafafa',
                100: '#f5f5f5',
                150: '#ededed',
                200: '#e5e5e5',
                250: '#dddddd',
                300: '#d4d4d4',
                350: '#bcbcbc',
                400: '#a3a3a3',
                450: '#8b8b8b',
                500: '#737373',
                550: '#636363',
                600: '#525252',
                650: '#494949',
                700: '#404040',
                750: '#333333',
                800: '#262626',
                850: '#1f1f1f',
                900: '#171717',
            }
        },
        fontSize: {
            'xs': '.75rem',
            'sm': '.875rem',
            'base': '1rem',
            'md': '1.125rem',
            'lg': '1.25rem',
            'xl': '1.35rem',
            '2xl': '1.5rem',
            '3xl': '1.875rem',
            '4xl': '2.25rem',
            '5xl': '3rem',
            '6xl': '4rem',
            '7xl': '5rem',
        },
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            black: colors.black,
            white: colors.white,
            gray: {
                50: '#fafafa',
                100: '#f5f5f5',
                150: '#ededed',
                200: '#e5e5e5',
                250: '#dddddd',
                300: '#d4d4d4',
                350: '#bcbcbc',
                400: '#a3a3a3',
                450: '#8b8b8b',
                500: '#737373',
                550: '#636363',
                600: '#525252',
                650: '#494949',
                700: '#404040',
                750: '#333333',
                800: '#262626',
                850: '#1f1f1f',
                900: '#171717',
            },
            red: colors.rose,
            blue: colors.blue,
        }
    },
    variants: {
        extend: {
            margin: ['first', 'last', 'dark'],
            fill: ['hover', 'dark'],
            borderWidth: ['hover'],
            display: ['dark'],
        }
    },
    plugins: []
}
