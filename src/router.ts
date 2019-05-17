import Vue from 'vue'
import VueRouter from 'vue-router'

import home from './components/home.vue'
import cart from './components/cart.vue'
import my from './components/my.vue'
Vue.use(VueRouter)
export default new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', component: home },
    { path: '/cart', component: cart },
    { path: '/my', component: my },
    { path: '/user/login', component: () => import('@/components/User/login.vue') }
  ]
})
