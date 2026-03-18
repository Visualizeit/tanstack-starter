import tailwindcss from '@tailwindcss/vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import viteReact from '@vitejs/plugin-react'
import { nitro } from 'nitro/vite'
import { defineConfig } from 'vite'

import customScaffolding from './custom-scaffolding'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        tailwindcss(),
        tanstackStart({
            router: {
                customScaffolding,
            },
        }),
        nitro(),
        viteReact(),
    ],
    resolve: {
        tsconfigPaths: true,
    },
    server: {
        open: true,
    },
})
