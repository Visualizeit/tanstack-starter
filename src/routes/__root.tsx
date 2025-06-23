import {
	mantineHtmlProps,
	ColorSchemeScript,
	MantineProvider,
} from '@mantine/core'
import { createRootRoute, HeadContent, Scripts } from '@tanstack/react-router'
import MainLayout from '../components/layout/MainLayout'
import appCSSURL from '@/app.css?url'
import mantineTheme from '@/configs/mantineTheme'

const RootComponent = () => (
	<html lang="en" {...mantineHtmlProps}>
		<head>
			<HeadContent />
			<ColorSchemeScript />
		</head>
		<body>
			<MantineProvider theme={mantineTheme}>
				<MainLayout />
			</MantineProvider>
			<Scripts />
		</body>
	</html>
)

export const Route = createRootRoute({
	head: () => ({
		meta: [
			{
				charSet: 'utf-8',
			},
			{
				name: 'viewport',
				content: 'width=device-width, initial-scale=1',
			},
			{
				title: 'Vite Starter',
			},
		],
		links: [
			{ rel: 'icon', type: 'image/svg+xml', href: '/vite.svg' },
			{ rel: 'stylesheet', href: appCSSURL },
		],
	}),
	component: RootComponent,
})
