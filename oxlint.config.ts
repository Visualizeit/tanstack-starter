import antiSlop from 'ultracite/oxlint/anti-slop'
import core from 'ultracite/oxlint/core'
import landmines from 'ultracite/oxlint/landmines'
import react from 'ultracite/oxlint/react'
import shadcn from 'ultracite/oxlint/shadcn'
import tanstack from 'ultracite/oxlint/tanstack'
import type { OxlintConfig } from 'vite-plus/lint'

export default {
    extends: [core, antiSlop, react, tanstack, shadcn, landmines],
    ignorePatterns: core.ignorePatterns,
    jsPlugins: [...shadcn.jsPlugins, ...landmines.jsPlugins],
    options: {
        typeAware: true,
        typeCheck: true,
    },
    rules: {
        // Anti-Slop requires SAFETY comments for type assertions.
        'landmines-style/no-comments': 'off',
        'oxc/no-optional-chaining': 'error',
        'promise/prefer-await-to-then': 'off',
        'shadcn/no-arbitrary-values': ['warn', { allow: ['layout'] }],
        'shadcn/no-inline-styles': 'warn',
        'shadcn/no-raw-colors': 'warn',
        'shadcn/no-restyle': ['warn', { allow: ['layout'] }],
        'shadcn/no-unknown-classes': 'warn',
        'shadcn/require-static-classes': 'warn',
    },
} satisfies OxlintConfig
