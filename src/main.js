import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
//import BootstrapVue from 'bootstrap-vue'
//import 'bootstrap/dist/css/bootstrap.css'
//import 'bootstrap-vue/dist/bootstrap-vue.css'
import routes from './router.js'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


Vue.config.productionTip = false
//Vue.use(BootstrapVue)
Vue.use(ElementUI);

Vue.use(VueRouter)

const router = new VueRouter({
  routes
})
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
