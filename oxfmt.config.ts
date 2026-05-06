import { defineConfig } from "oxfmt";
import ultracite from "ultracite/oxfmt";

export default defineConfig({
  ...ultracite,
  ignorePatterns: [...(ultracite.ignorePatterns as string[]), ".agents/**"],
  semi: false,
  singleQuote: true,
  tabWidth: 4,
});
