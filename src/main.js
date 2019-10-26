// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import '@/common/style/reset.css'
import 'element-ui/lib/theme-chalk/index.css'
import '@/common/style/common.css'
import apiRequest from '@/api'
import Util from '@/common/js/util'

window.apiRequest = apiRequest;
window.util = new Util;

Vue.use(ElementUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
