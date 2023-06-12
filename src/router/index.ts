// index.ts
import { createRouter, createWebHashHistory } from 'vue-router'
import AuthAdmin from '@/views/auth/admin/index.vue'
import Home from '@/views/home.vue'
import Auth401 from '@/views/auth/401.vue'
import Auth403 from '@/views/auth/401.vue'
import Auth404 from '@/views/auth/401.vue'
import AdminSystemUser from '@/views/system/user/index.vue'

const routes = [
  {
    path: '/',
    component: AuthAdmin
  },
  {
    path: '/auth/admin',
    component: AuthAdmin
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/auth/401',
    component: Auth401
  },
  {
    path: '/auth/403',
    component: Auth403
  },
  {
    path: '/auth/404',
    component: Auth404
  },
  {
    path: '/admin/system/user',
    component: AdminSystemUser
  }
]

export default createRouter({
  history: createWebHashHistory(),
  routes
})
