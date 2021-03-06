module.exports = {
    mode: "jit",
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: 'media', // 'false' or 'media' or 'class'
    theme: {
        extend: {},
        container: {
            center: true
        }
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
