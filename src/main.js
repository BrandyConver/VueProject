import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import home from './components/home.vue'
import trolly from './components/trolly.vue'
import my from './components/my.vue'

Vue.use(VueRouter)
const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', component: home },
    { path: '/trolly', component: trolly },
    { path: '/my', component: my }
  ]
})
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
