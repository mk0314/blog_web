import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Layout from '../layout/Layout.vue';
const routes: Array<RouteRecordRaw> = [
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
