module.exports = {
    theme: {
        extend: {},
        fill: theme => ({
            'gray-400': theme('colors.gray.400'),
            'gray-500': theme('colors.gray.500'),
            'gray-600': theme('colors.gray.600'),
            'gray-800': theme('colors.gray.800')
        })
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
