import antiSlop from 'ultracite/oxlint/anti-slop'
import core from 'ultracite/oxlint/core'
import jsPlugins, { jsPluginSettings } from 'ultracite/oxlint/js-plugins'
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
    ],
    ignorePatterns: core.ignorePatterns,
    jsPlugins: [
        ...jsPlugins.jsPlugins,
        ...shadcn.jsPlugins,
        { name: 'landmines', specifier: '@interfere/landmines' },
    ],
    options: {
        typeAware: true,
        typeCheck: true,
    },
    overrides: [
        {
            files: ['**/*.test.{js,jsx,mjs,cjs,ts,tsx,mts,cts}'],
            rules: { 'sonarjs/no-empty-test-file': 'error' },
        },
    ],
    settings: jsPluginSettings,
    rules: {
        'landmines/colocated-tests': 'error',
        'landmines/no-comments': ['error', { allow: ['WARNING', 'SAFETY'] }],
        'landmines/no-explicit-return-types': 'error',
        'landmines/no-fixed-sleep': 'error',
        'landmines/no-flake-masking': 'error',
        'landmines/no-test-doubles': 'error',
        'landmines/no-unsignaled-poll': 'error',
        'landmines/package-exports': 'error',
        'landmines/strict-msw': 'error',
        'landmines/test-file-names': 'error',
        'oxc/no-optional-chaining': 'error',
        'promise/prefer-await-to-then': 'off',
        'shadcn/no-arbitrary-values': ['warn', { allow: ['layout'] }],
        'shadcn/no-inline-styles': 'warn',
        'shadcn/no-raw-colors': 'warn',
        'shadcn/no-restyle': ['warn', { allow: ['layout'] }],
        'shadcn/no-unknown-classes': 'warn',
        'shadcn/require-static-classes': 'warn',
        'sonarjs/no-empty-test-file': 'off',
    },
} satisfies OxlintConfig
