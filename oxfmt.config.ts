import { defineConfig } from 'oxfmt'
import ultracite from 'ultracite/oxfmt'

export default defineConfig({
    ...ultracite,
    ignorePatterns: [...(ultracite.ignorePatterns ?? []), '.agents/**'],
    semi: false,
    singleQuote: true,
    tabWidth: 4,
})
