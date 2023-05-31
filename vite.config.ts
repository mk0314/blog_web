import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
    base: '/blog_web/',
    server: {
        host: '0.0.0.0',
        hmr: true,
    },
    plugins: [vue()],
    build: {
        outDir: 'docs',
    },
});
