module.exports = {
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier'
    ],
    plugins: [
        '@typescript-eslint',
    ],
    rules: {
        "no-console": "error",
        "no-promise-executor-return": "warn",
        "default-case": "warn",
        "default-case-last": "error",
        "default-param-last": "error",
        "eqeqeq": "error",
        "grouped-accessor-pairs": "error",
        "no-empty-function": "error",
        "no-eval": "error",
        "no-implicit-coercion": "warn",
        "no-multi-spaces": "warn",
        "no-param-reassign": "error"
    },
    parser: '@typescript-eslint/parser',
};