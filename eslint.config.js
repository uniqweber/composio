import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import {defineConfig, globalIgnores} from "eslint/config";

export default defineConfig([
    globalIgnores(["dist"]),
    {
        files: ["**/*.{js,jsx}"],
        extends: [js.configs.recommended, reactHooks.configs["recommended-latest"], reactRefresh.configs.vite],
        languageOptions: {
            ecmaVersion: 2020,
            globals: globals.browser,
            parserOptions: {
                ecmaVersion: "latest",
                ecmaFeatures: {jsx: true},
                sourceType: "module",
            },
        },
        rules: {
            eqeqeq: "error",
            "no-var": "error",
            "no-undef": "error",
            "no-console": "warn",
            "prefer-const": "error",
            "no-unreachable": "error",
            "no-duplicate-imports": "error",
            "no-unused-vars": ["error", {varsIgnorePattern: "^[A-Z_]"}],
        },
    },
]);
