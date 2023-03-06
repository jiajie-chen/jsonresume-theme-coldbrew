module.exports = {
    root: true,
    plugins: ['@typescript-eslint', 'jsdoc'],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:jsdoc/recommended',
        'preact',
        'prettier',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 5,
        impliedStrict: true,
        sourceType: 'module',
    },
    rules: {
        // not using jest
        'jest/no-deprecated-functions': 0,
    },
    overrides: [
        {
            // typechecking only within 'src'
            files: ['src/**/*.{ts,tsx}'],
            extends: [
                'plugin:@typescript-eslint/recommended-requiring-type-checking',
            ],
            parserOptions: {
                project: true,
                tsconfigRootDir: __dirname,
            },
        },
    ],
}
