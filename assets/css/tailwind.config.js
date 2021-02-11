const colors = require('tailwindcss/colors')

module.exports = {
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                'gray': {
                    350: '#bdbdbd',
                    650: '#4b4b4b',
                    660: '#424242',
                    750: '#3a3a3a'
                }
            },
            spacing: {
                0.75: '0.2rem'
            }
        },
        fill: {
            'gray-100': colors.trueGray[100],
            'gray-200': colors.trueGray[200],
            'gray-300': colors.trueGray[300],
            'gray-400': colors.trueGray[400],
            'gray-500': colors.trueGray[500],
            'gray-600': colors.trueGray[600],
            'gray-700': colors.trueGray[700],
            'gray-800': colors.trueGray[800]
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
            gray: colors.trueGray,
            red: colors.rose,
            blue: colors.blue,
        }
    },
    variants: {
        extend: {
            margin: ['first', 'last'],
            fill: ['hover', 'dark'],
            borderWidth: ['hover'],
        }
    },
    plugins: []
}
