module.exports = {
    theme: {
        extend: {},
        fill: theme => ({
            'gray-500': theme('colors.gray.500')
        })
    },
    variants: {
        extend: {
            margin: ['first', 'last'],
            fill: ['hover'],
        }
    },
    plugins: []
}
