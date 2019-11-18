import Vue from 'vue/dist/vue.js'
import App from './App.vue'
import VueRouter from 'vue-router'
import 'bootstrap/dist/css/bootstrap.css'
import routes from './router.js'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '../src/assets/css/iconfont.css';
import '../src/assets/css/custom.css';



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
