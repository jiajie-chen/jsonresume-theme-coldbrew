/* eslint-env node */
module.exports = {
    root: true,
    plugins: ['jsdoc'],
    extends: ['eslint:recommended', 'plugin:jsdoc/recommended', 'prettier'],
    parserOptions: {
        ecmaVersion: 'latest',
        impliedStrict: true,
        // default to module
        sourceType: 'module',
    },
    overrides: [
        {
            files: ['**/*.cjs'],
            parserOptions: {
                // cjs compatibility
                sourceType: 'script',
            },
        },
        {
            // typescript defaults
            files: ['**/*.{ts,tsx}'],
            plugins: ['@typescript-eslint', 'jsdoc'],
            extends: [
                'eslint:recommended',
                'plugin:@typescript-eslint/recommended',
                'plugin:@typescript-eslint/recommended-requiring-type-checking',
                'plugin:jsdoc/recommended',
                'preact',
                'prettier',
            ],
            parser: '@typescript-eslint/parser',
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
                ecmaVersion: 'latest',
                impliedStrict: true,
                sourceType: 'module',
                // project for non-src files
                project: 'tsconfig.node.json',
                tsconfigRootDir: __dirname,
            },
            rules: {
                // not using jest
                'jest/no-deprecated-functions': 0,
            },
        },
        {
            files: ['src/**/*.{ts,tsx}'],
            parserOptions: {
                // project for src files
                project: 'tsconfig.json',
            },
        },
    ],
}
