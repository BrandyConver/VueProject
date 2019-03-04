import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import routerFirst from './components/routerfirst.vue'
import routerSecond from './components/routersecond.vue'
import routerThird from './components/routerthird.vue'
import routerFourth from './components/routerfourth.vue'
import routerFifth from './components/routerfifth.vue'
import home from './components/home.vue'
import guide from './components/guide.vue'
import about from './components/about.vue'

Vue.use(VueRouter)
const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', redirect: '/home' },
    {
      path: '/home',
      component: home,
      children:
      [
        // { path: '/', redierct: './routerfirst' },
        { path: 'routerfirst', component: routerFirst },
        { path: 'routersecond', component: routerSecond },
        { path: 'routerthird', component: routerThird },
        { path: 'routerfourth', component: routerFourth },
        { path: 'routerfifth/:id', component: routerFifth }
      ]
    },
    { path: '/guide', component: guide },
    { path: '/about', component: about }
  ]
})
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
