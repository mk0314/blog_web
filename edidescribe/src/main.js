// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import ant from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import echarts from 'echarts';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'
window.jQuery = $;
window.$ = $;
import 'echarts/map/js/china.js'; //node_modules中
import 'echarts/map/js/world.js';
Vue.prototype.$echarts = echarts;
Vue.use(ant)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
