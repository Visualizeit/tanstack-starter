import tailwindcss from '@tailwindcss/vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import viteReact from '@vitejs/plugin-react'
import { nitro } from 'nitro/vite'
import { defineConfig } from 'vite'
import devtoolsJson from 'vite-plugin-devtools-json'
import tsconfigPaths from 'vite-tsconfig-paths'
import customScaffolding from './customScaffolding'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        devtoolsJson(),
        tsconfigPaths(),
        tailwindcss(),
        tanstackStart({
            router: {
                customScaffolding,
            },
        }),
        nitro(),
        viteReact(),
    ],
    server: {
        open: true,
    },
})
