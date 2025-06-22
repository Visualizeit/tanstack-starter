import { MantineProvider } from '@mantine/core'
import { type PropsWithChildren } from 'react'
import mantineTheme from './configs/mantineTheme'

const Providers = ({ children }: PropsWithChildren) => {
	return <MantineProvider theme={mantineTheme}>{children}</MantineProvider>
}

export default Providers
