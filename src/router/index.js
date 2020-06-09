import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Smoothie from '../views/Smoothie'
import SmoothiesList from '../views/SmoothiesList'


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
  },
  {
    path: '/smoothies',
    name: 'Smoothies List',
    component: SmoothiesList
  }
]

const router = new VueRouter({
  routes
})

export default router
