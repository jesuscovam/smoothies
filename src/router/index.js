import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Smoothie from '../views/Smoothie'


Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/smoothie',
    name: 'Smoothie',
    component: Smoothie
  }
]

const router = new VueRouter({
  routes
})

export default router
