import { Container, Title } from '@mantine/core'
import { createFileRoute } from '@tanstack/react-router'

const Component = () => (
    <Container>
        <Title c="brand">Hello World!</Title>
    </Container>
)

export const Route = createFileRoute('/')({
    component: Component,
})
