import Vue from 'vue'
import Router from 'vue-router'
import Catelog from '@/views/Catalog'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Catelog',
      component: Catelog
    }
  ]
})
