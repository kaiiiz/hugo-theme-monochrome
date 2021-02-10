module.exports = {
    theme: {
        extend: {},
        fill: theme => ({
            'gray-400': theme('colors.gray.400'),
            'gray-500': theme('colors.gray.500'),
            'gray-600': theme('colors.gray.600'),
            'gray-800': theme('colors.gray.800')
        }),
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
        }
    },
    variants: {
        extend: {
            margin: ['first', 'last'],
            fill: ['hover'],
            borderWidth: ['hover'],
        }
    },
    plugins: []
}
