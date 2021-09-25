import { createRouter, createWebHistory } from 'vue-router'
import Home from '/src/views/Home.vue'
import About from '/src/views/About.vue'
import NotFound from '/src/views/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/About',
    name: 'About',
    component: About,
  },
  {
    path: '/:catchAll(.*)',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router