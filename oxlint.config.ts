import { defineConfig } from 'oxlint'
import core from 'ultracite/oxlint/core'
import react from 'ultracite/oxlint/react'
import tanstack from 'ultracite/oxlint/tanstack'

export default defineConfig({
    extends: [core, react, tanstack],
    ignorePatterns: [...(core.ignorePatterns ?? []), '.agents/**'],
    overrides: [
        {
            files: ['src/routes/**/*.{ts,tsx}'],
            rules: {
                'unicorn/filename-case': 'off',
            },
        },
    ],
    rules: {
        // Zod uses `.catch()` for fallback values, which Oxlint may treat as Promise `.catch()`.
        'promise/prefer-await-to-then': 'off',
    },
})
