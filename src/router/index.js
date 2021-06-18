import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import E_commerces from '../views/E-commerces.vue'
import SingUp from '../views/SingUp.vue'
import Login from '../views/Login.vue'
import My_ecommerce from '../views/MyEcommerce.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/ecommerces',
    name: 'E-commerces',
    component: E_commerces
  },
  {
    path: '/singup',
    name: 'SingUp',
    component: SingUp
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/myecommerce',
    name: 'My-ecommerce',
    component: My_ecommerce
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
