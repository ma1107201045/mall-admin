// index.ts
import { createRouter, createWebHashHistory } from 'vue-router'
import Login from '@/views/login/index.vue'
import User from '@/views/system/user/index.vue'

const routes = [
  {
    path: '/',
    component: Login
  },
  {
    path: '/user',
    component: User
  }
]

export default createRouter({
  history: createWebHashHistory(),
  routes
})
