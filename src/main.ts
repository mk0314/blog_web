import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './router';
import ElementPlus from 'element-plus';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
import 'element-plus/dist/index.css';
import './assets/iconfont/iconfont.css';

const app = createApp(App);

Object.keys(ElementPlusIconsVue).forEach(function (key) {
    app.component(ElementPlusIconsVue[key].name, ElementPlusIconsVue[key]);
});

app.use(router).use(ElementPlus).mount('#app');
