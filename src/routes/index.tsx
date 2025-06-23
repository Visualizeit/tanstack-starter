import { Container, Title } from '@mantine/core'
import { createFileRoute } from '@tanstack/react-router'

const HomePage = () => {
	return (
		<Container className="flex-1" size="xl">
			<Title c="brand">Hello World!</Title>
		</Container>
	)
}

export const Route = createFileRoute('/')({
	component: HomePage,
})
