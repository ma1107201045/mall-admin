// index.ts
import { createRouter, createWebHashHistory } from 'vue-router'
import AuthAdmin from '@/views/auth/admin/index.vue'
import Auth401 from '@/views/auth/401.vue'
import Auth403 from '@/views/auth/401.vue'
import Error404 from '@/views/error/404.vue'
import Home from '@/views/home/index.vue'
import AdminIndex from '@/views/admin/index/index.vue'
import AdminSystemUser from '@/views/admin/system/user/index.vue'
import AdminSystemRole from '@/views/admin/system/role/index.vue'
import AdminSystemMenu from '@/views/admin/system/menu/index.vue'
import AdminSystemLog from '@/views/admin/system/log/index.vue'

const routes = [
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
    path: '/',
    component: Home,
    children: [
      {
        path: 'admin/index',
        component: AdminIndex
      },
      {
        path: 'admin/system/user',
        component: AdminSystemUser
      },
      {
        path: 'admin/system/role',
        component: AdminSystemRole
      },
      {
        path: 'admin/system/menu',
        component: AdminSystemMenu
      },
      {
        path: 'admin/system/log',
        component: AdminSystemLog
      }
    ]
  },
  {
    path: '/:pathMatch(.*)', // 此处需特别注意置于最底部
    redirect: '/error404'
  }
]

export default createRouter({
  history: createWebHashHistory(),
  routes
})
