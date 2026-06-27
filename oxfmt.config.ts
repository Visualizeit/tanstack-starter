import { defineConfig } from 'oxfmt'
import ultracite from 'ultracite/oxfmt'

export default defineConfig({
    ...ultracite,
    semi: false,
    singleQuote: true,
    tabWidth: 4,
})
