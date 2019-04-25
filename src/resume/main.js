// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import axios from 'axios';
import './../assets/css/base.css';
import flexible from './../assets/js/flexible';
import './iconfont/iconfont.css';
const { html2canvas } = require('./html2canvas.min.js');

flexible();
Vue.prototype.$http = axios;
Vue.prototype.$html2canvas = html2canvas;

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
});
