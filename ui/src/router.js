import Vue from 'vue'
import Router from 'vue-router'

import Dashboard from './views/Dashboard.vue'
import WAN from './views/WAN.vue'
import TrafficShaping from './views/TrafficShaping.vue'

import Logs from './views/Logs.vue'
import About from './views/About.vue'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/wan',
      name: 'wan',
      component: WAN
    },
    {
      path: '/traffic-shaping',
      name: 'traffic-shaping',
      component: TrafficShaping
    },
    {
      path: '/logs',
      name: 'logs',
      component: Logs
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
})