import type { MantineColor } from '@mantine/core'

const STATUS_COLORS = {
    INFO: 'blue',
    SUCCESS: 'green',
    WARNING: 'yellow',
    ERROR: 'red',
} satisfies Record<string, MantineColor>

export default STATUS_COLORS
