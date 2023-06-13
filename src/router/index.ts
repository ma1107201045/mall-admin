// index.ts
import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/views/home/index.vue'
import AuthAdmin from '@/views/auth/admin/index.vue'
import Auth401 from '@/views/auth/401.vue'
import Auth403 from '@/views/auth/401.vue'
import Error404 from '@/views/error/404.vue'
import Error500 from '@/views/error/500.vue'
import AdminSystemUser from '@/views/admin/system/user/index.vue'

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/auth/admin',
    component: AuthAdmin
  },
  {
    path: '/auth401',
    component: Auth401
  },
  {
    path: '/auth403',
    component: Auth403
  },
  {
    path: '/error404',
    component: Error404
  },
  {
    path: '/error500',
    component: Error500
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
