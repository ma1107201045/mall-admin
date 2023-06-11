// index.ts
import { createRouter, createWebHashHistory } from 'vue-router'
import Admin from '@/views/auth/admin/index.vue'
import User from '@/views/system/user/index.vue'

const routes = [
  {
    path: '/',
    component: Admin
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
