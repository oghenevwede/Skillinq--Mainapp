import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],
  },
  // .eslintrc.json (or the rules section of your config)
{
  "rules": {
    // This rule is defined differently for base ESLint vs. TypeScript ESLint
    "no-unused-vars": "off", // Turn off the base rule
    "@typescript-eslint/no-unused-vars": [
      "warn", // or "error"
      {
        "argsIgnorePattern": "^_", // Ignore arguments starting with underscore
        "varsIgnorePattern": "^_",  // Ignore variables starting with underscore
        "caughtErrorsIgnorePattern": "^_" // Specifically ignore catch errors starting with underscore
      }
    ]
  }
}];
export default eslintConfig;
