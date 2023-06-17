// index.ts
import { createRouter, createWebHashHistory } from 'vue-router'
import { Path } from '@/enums/path.ts'
import AuthAdmin from '@/views/auth/admin/index.vue'
import Index from '@/views/index/index.vue'
import AdminHome from '@/views/admin/home/index.vue'
import AdminSystemUser from '@/views/admin/system/user/index.vue'
import AdminSystemRole from '@/views/admin/system/role/index.vue'
import AdminSystemMenu from '@/views/admin/system/menu/index.vue'
import AdminSystemLog from '@/views/admin/system/log/index.vue'
import Error from '@/views/error/index.vue'

const routes = [
  {
    path: '/auth/admin',
    component: AuthAdmin
  },
  {
    path: Path.INDEX,
    component: Index,
    children: [
      {
        path: '/error',
        component: Error
      },
      {
        path: 'admin/home',
        component: AdminHome
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
    redirect: '/index/error?id=404'
  }
]

export default createRouter({
  history: createWebHashHistory(),
  routes
})
