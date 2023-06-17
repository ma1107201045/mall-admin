// index.ts
import { createRouter, createWebHashHistory } from "vue-router";
import { Path } from "@/enums/path.ts";
//import AuthAdmin from "@/views/auth/admin/index.vue";
// import Index from "@/views/index/index.vue";
// import AdminHome from "@/views/admin/home/index.vue";
// import AdminSystemUser from "@/views/admin/system/user/index.vue";
// import AdminSystemRole from "@/views/admin/system/role/index.vue";
// import AdminSystemMenu from "@/views/admin/system/menu/index.vue";
// import AdminSystemLog from "@/views/admin/system/log/index.vue";
// import Error from "@/views/error/index.vue";

let routes = [
  {
    path: '/auth/admin',
    component: import('@/views/auth/admin/index.vue')
  },
  {
    path: Path.INDEX,
    component: import('@/views/index/index.vue'),
    children: [
      {
        path: 'admin/home',
        component: import('@/views/admin/home/index.vue')
      },
      {
        path: 'admin/system/user',
        component: import('@/views/admin/system/user/index.vue')
      },
      {
        path: 'admin/system/role',
        component: import('@/views/admin/system/role/index.vue')
      },
      {
        path: 'admin/system/menu',
        component:import('@/views/admin/system/menu/index.vue')
      },
      {
        path: 'admin/system/log',
        component: import('@/views/admin/system/log/index.vue')
      },
      {
        path: 'error',
        component: import('@/views/error/index.vue')
      }
    ]
  },
  {
    path: '/error',
    component: import('@/views/error/index.vue')
  },
  {
    path: '/',
    redirect: Path.INDEX
  },
  {
    path: '/:pathMatch(.*)', // 此处需特别注意置于最底部
    redirect: '/error'
  }
]

export default createRouter({
  history: createWebHashHistory(),
  routes
});
