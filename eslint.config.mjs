import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import { defineConfig } from "eslint/config";
import eslintPluginPrettier from "eslint-plugin-prettier";

export default defineConfig([
	{ ignores: ["eslint.config.mjs"] },
	{ files: ["**/*.{js,mjs,cjs,ts,mts,cts}"], plugins: { js }, extends: ["js/recommended"] },
	{ files: ["**/*.{js,mjs,cjs,ts,mts,cts}"], languageOptions: { globals: globals.browser } },
	tseslint.configs.recommended,
	{
		plugins: {
			prettier: eslintPluginPrettier
		},
		rules: {
			"prettier/prettier": [
				"error",
				{
					singleQuote: true,
					bracketSpacing: true,
					endOfLine: "auto",
					printWidth: 100,
					semi: true,
					tabWidth: 2,
					trailingComma: "none",
					useTabs: true
				}
			]
		}
	}
]);
