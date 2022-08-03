import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router"
import router from './router/index'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/index.css'
Vue.use(VueRouter);
Vue.use(ElementUI);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router  // 挂载到Vue实例
}).$mount('#app')
