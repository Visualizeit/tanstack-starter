import {
    Badge,
    Button,
    Container,
    createTheme,
    type DefaultMantineColor,
    type DefaultMantineSize,
    Input,
    type MantineColorsTuple,
    Switch,
} from '@mantine/core'
import classes from './components.module.css'

type ExtendedCustomColors = 'brand' | DefaultMantineColor

type ExtendedCustomSpacing = 'xxs' | DefaultMantineSize

type ExtendedCustomRadius = 'full' | DefaultMantineSize

declare module '@mantine/core' {
    export interface MantineThemeColorsOverride {
        colors: Record<ExtendedCustomColors, MantineColorsTuple>
    }

    export interface MantineThemeSizesOverride {
        spacing: Record<ExtendedCustomSpacing, string>
        radius: Record<ExtendedCustomRadius, string>
    }
}

const mantineTheme = createTheme({
    components: {
        Container: Container.extend({ defaultProps: { strategy: 'grid' } }),
        Button: Button.extend({
            classNames: { root: 'font-medium' },
        }),
        Badge: Badge.extend({
            classNames: { root: 'font-medium' },
        }),
        Input: Input.extend({
            classNames: {
                input: classes.inputInput,
            },
        }),
        Switch: Switch.extend({ defaultProps: { withThumbIndicator: false } }),
    },
    primaryColor: 'brand',
    defaultRadius: 'md',
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
    spacing: {
        xxs: 'calc(0.25rem * var(--mantine-scale))',
        full: 'calc(infinity * 1px)',
    },
    radius: {
        full: 'calc(infinity * 1px)',
    },
})

export default mantineTheme
