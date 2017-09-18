import Vue from 'vue'
import Router from 'vue-router'
import Catelog from '@/views/Catalog'
import javaScript from '@/views/javaScript/javascript'
import Html from '@/views/HTML/Html'
import Css from '@/views/CSS/Css'
import Git from '@/views/Git/Git'
import Mobile from '@/views/Mobile/Mobile'
import Vues from '@/views/Vue/VUE'
import MagnifyingGlass from '@/components/MagnifyingGlass/MagnifyingGlass'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Catelog',
      component: Catelog,
      children: [{
        path: 'javaScript',
        name: 'javaScript',
        component: javaScript,
        children: [
          {
            path: 'MagnifyingGlass',
            name: 'MagnifyingGlass',
            component: MagnifyingGlass
          }
        ]
      },
      {
        path: 'Html',
        name: 'HTMl',
        component: Html
      },
      {
        path: 'CSS',
        name: 'CSS',
        component: Css
      },
      {
        path: 'Git',
        name: 'Git',
        component: Git
      },
      {
        path: 'Mobile',
        name: 'Mobile',
        component: Mobile
      },
      {
        path: 'Vues',
        name: 'Vues',
        component: Vues
      }
      ]
    }
  ]
})
