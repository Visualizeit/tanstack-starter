import { defineConfig } from "oxlint";
import core from "ultracite/oxlint/core";
import react from "ultracite/oxlint/react";

export default defineConfig({
  extends: [core, react],
  ignorePatterns: [...(core.ignorePatterns as string[]), ".agents/**"],
  overrides: [
    {
      files: ["src/routes/**/*.{ts,tsx}"],
      rules: {
        "unicorn/filename-case": "off",
      },
    },
  ],
  rules: {
    "promise/prefer-await-to-then": "off",
    "react_perf/jsx-no-new-function-as-prop": "off",
  },
});
