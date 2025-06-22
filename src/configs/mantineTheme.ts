import {
	type DefaultMantineColor,
	type MantineColorsTuple,
	createTheme,
	Input,
	Switch,
} from '@mantine/core'
import classes from './components.module.css'

type ExtendedCustomColors = 'brand' | DefaultMantineColor

declare module '@mantine/core' {
	export interface MantineThemeColorsOverride {
		colors: Record<ExtendedCustomColors, MantineColorsTuple>
	}
}

const mantineTheme = createTheme({
	components: {
		Input: Input.extend({
			classNames: {
				input: classes.input,
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
})

export default mantineTheme
