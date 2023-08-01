/*
 * @Author: mengkun822 1197235402@qq.com
 * @Date: 2023-05-31 14:13:46
 * @LastEditors: mengkun822 1197235402@qq.com
 * @LastEditTime: 2023-07-21 10:52:37
 * @FilePath: \blog_web\src\main.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './router';
import ElementPlus from 'element-plus';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
import 'element-plus/dist/index.css';
import './assets/iconfont/iconfont.css';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
const app = createApp(App);

Object.keys(ElementPlusIconsVue).forEach(function (key) {
    app.component(ElementPlusIconsVue[key].name, ElementPlusIconsVue[key]);
});

app.use(router).use(ElementPlus).mount('#app');
