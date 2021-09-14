import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
    base: '/houdini-themes/',
    plugins: [vue()],
    build: {
        rollupOptions: {
            external: ['/src/assets/houdini_logo.png'],
        },
    },
})
