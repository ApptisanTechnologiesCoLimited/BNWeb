import Vue from 'vue/dist/vue.js'
import App from './App.vue'
import VueRouter from 'vue-router'
import 'bootstrap/dist/css/bootstrap.css'
import routes from './router.js'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '../src/assets/css/iconfont.css';
import '../src/assets/css/custom.css';
import VueFilterDateFormat from 'vue-filter-date-format';
import Viewer from 'v-viewer'
import 'viewerjs/dist/viewer.css'
//https://chenxuan1993.gitee.io/component-document/index_prod#/component/seamless-switch
// 滚动图插件
// import scroll from 'vue-seamless-scroll' 
// Vue.use(scroll,{componentName: 'scroll'})

Vue.use(Viewer)
Viewer.setDefaults({
  Options: { 'inline': true, 'button': true, 'navbar': false, 'title': true, 'toolbar': true, 'tooltip': true, 'movable': true, 'zoomable': true, 'rotatable': false, 'scalable': false, 'transition': true, 'fullscreen': true, 'keyboard': true, 'url': 'data-source' }
})



Vue.config.productionTip = false
//Vue.use(BootstrapVue)
Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.use(VueFilterDateFormat)

const router = new VueRouter({
  routes
})
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
