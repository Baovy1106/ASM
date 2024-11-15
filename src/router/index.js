import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/trangchitiet',
      name: 'trangchitiet',
      component: () => import('../views/trangchitiet.vue'),
    },
    {
      path: '/port',
      name: 'port',
      component: () => import('../views/CreatePost.vue'),
    },
    {
      path: '/user',
      name: 'user',
      component: () => import('../views/user.vue'),
    },
    
    {
      path: '/dk',
      name: 'dk',
      component: () => import('../views/Register.vue'),
    },
  ],
})

export default router
