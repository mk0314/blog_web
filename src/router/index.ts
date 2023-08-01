/*
 * @Author: mengkun822 1197235402@qq.com
 * @Date: 2023-05-31 14:13:46
 * @LastEditors: mengkun822 1197235402@qq.com
 * @LastEditTime: 2023-07-27 16:28:48
 * @FilePath: \blog_web\src\router\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Layout from '../layout/Layout.vue';
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
const routes: Array<RouteRecordRaw> = [
    {
        path: '/introduce',
        component: () => import('../views/introduce/Introduce.vue'),
    },
    {
        path: '/',
        component: Layout,
        redirect: '/home',
        children: [
            {
                path: '/home',
                component: () => import('../views/home/Home.vue'),
            },
            {
                path: '/article',
                component: () => import('../views/article/Article.vue'),
            },
            {
                path: '/article_detail',
                component: () => import('../views/article/Article_Detail.vue'),
            },
            {
                path: '/message',
                component: () => import('../views/message/Message.vue'),
            },
            {
                path: '/download',
                component: () => import('../views/download/Download.vue'),
            },
            {
                path: '/about',
                component: () => import('../views/about/About.vue'),
            },
        ],
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
