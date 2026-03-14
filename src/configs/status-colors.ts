import type { MantineColor } from '@mantine/core'

const STATUS_COLORS = {
    ERROR: 'red',
    INFO: 'blue',
    SUCCESS: 'green',
    WARNING: 'yellow',
} satisfies Record<string, MantineColor>

export default STATUS_COLORS
