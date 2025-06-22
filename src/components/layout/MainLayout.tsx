import { AppShell, Group, Title } from '@mantine/core'
import { Link, Outlet } from '@tanstack/react-router'

const MainLayout = () => {
	return (
		<AppShell padding="md" header={{ height: 56 }}>
			<AppShell.Header>
				<Group className="h-full" align="center" px="xl">
					<Link to="/">
						<Title>Title</Title>
					</Link>
				</Group>
			</AppShell.Header>
			<AppShell.Main className="flex">
				<Outlet />
			</AppShell.Main>
		</AppShell>
	)
}

export default MainLayout
