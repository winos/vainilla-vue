import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Signup from '../views/Signup.vue'

import PageBuilder from '@/components/Builder.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/page-builder',
      name: 'PageBuilder',
      component: PageBuilder
    },


    {
      path: '/signup',
      name: 'Signup',
      component: Signup, // Asocia la ruta con el componente
    },

    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
