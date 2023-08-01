/*
 * @Author: mengkun822 1197235402@qq.com
 * @Date: 2023-05-31 14:13:46
 * @LastEditors: mengkun822 1197235402@qq.com
 * @LastEditTime: 2023-07-29 15:24:25
 * @FilePath: \blog_web\vite.config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
// 导入path
import path from 'node:path';

// https://vitejs.dev/config/
export default defineConfig({
    base: '/',
    server: {
        host: '0.0.0.0',
        hmr: true,
    },
    plugins: [vue()],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
            // 增加~bootstrap
            '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
        },
    },
    build: {
        outDir: 'docs',
    },
});
