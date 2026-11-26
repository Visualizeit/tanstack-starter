import antiSlop from 'ultracite/oxlint/anti-slop'
import core from 'ultracite/oxlint/core'
import jsPlugins, { jsPluginSettings } from 'ultracite/oxlint/js-plugins'
import landmines from 'ultracite/oxlint/landmines'
import react from 'ultracite/oxlint/react'
import shadcn from 'ultracite/oxlint/shadcn'
import tanstack from 'ultracite/oxlint/tanstack'
import tanstackJsPlugins from 'ultracite/oxlint/tanstack/js-plugins'
import type { OxlintConfig } from 'vite-plus/lint'

export default {
    env: core.env,
    extends: [
        core,
        react,
        tanstack,
        jsPlugins,
        tanstackJsPlugins,
        antiSlop,
        shadcn,
        landmines,
    ],
    ignorePatterns: core.ignorePatterns,
    jsPlugins: [
        ...jsPlugins.jsPlugins,
        ...shadcn.jsPlugins,
        ...landmines.jsPlugins,
    ],
    options: {
        typeAware: true,
        typeCheck: true,
    },
    settings: jsPluginSettings,
    rules: {
        'landmines-style/no-comments': [
            'error',
            { allow: ['WARNING', 'SAFETY'] },
        ],
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
