import Vue from 'vue'
import Router from 'vue-router'
import Catelog from '@/views/Catalog'
import MagnifyingGlass from '@/components/MagnifyingGlass/MagnifyingGlass'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Catelog',
      component: Catelog
    },
    {
      path: '/MagnifyingGlass',
      name: 'MagnifyingGlass',
      component: MagnifyingGlass
    }
  ]
})
