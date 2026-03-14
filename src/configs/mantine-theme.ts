import { Badge, Button, Container, createTheme, Input, Switch } from '@mantine/core'
import type { DefaultMantineColor, DefaultMantineSize, MantineColorsTuple } from '@mantine/core'
import { clsx } from 'clsx'

type ExtendedCustomColors = 'brand' | DefaultMantineColor

type ExtendedCustomSpacing = 'xxs' | DefaultMantineSize

type ExtendedCustomRadius = 'full' | DefaultMantineSize

declare module '@mantine/core' {
    export interface MantineThemeColorsOverride {
        colors: Record<ExtendedCustomColors, MantineColorsTuple>
    }

    export interface MantineThemeSizesOverride {
        radius: Record<ExtendedCustomRadius, string>
        spacing: Record<ExtendedCustomSpacing, string>
    }
}

const mantineTheme = createTheme({
    activeClassName: 'active:brightness-90',
    colors: {
        brand: [
            '#E5F3FF',
            '#CDE2FF',
            '#9AC2FF',
            '#64A0FF',
            '#3884FE',
            '#1D72FE',
            '#0969FF',
            '#0058E4',
            '#004ECD',
            '#0043B5',
        ],
    },
    components: {
        Badge: Badge.extend({
            classNames: { root: 'font-medium' },
        }),
        Button: Button.extend({
            classNames: { root: 'font-medium' },
        }),
        Container: Container.extend({ defaultProps: { strategy: 'grid' } }),
        Input: Input.extend({
            classNames: {
                input: clsx(
                    'transition-none',
                    'focus-within:border-transparent focus-within:outline focus-within:outline-2 focus-within:outline-[var(--mantine-primary-color-filled)] focus-within:-outline-offset-1',
                    '[&.mantine-Spotlight-search]:outline-0',
                ),
            },
        }),
        Switch: Switch.extend({ defaultProps: { withThumbIndicator: false } }),
    },
    defaultRadius: 'md',
    primaryColor: 'brand',
    radius: {
        full: 'calc(infinity * 1px)',
    },
    spacing: {
        full: 'calc(infinity * 1px)',
        xxs: 'calc(0.25rem * var(--mantine-scale))',
    },
})

export default mantineTheme
