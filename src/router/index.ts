// index.ts
import { createRouter, createWebHashHistory } from 'vue-router'
import { Path } from '@/enums'
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
    name: 'AuthAdmin',
    path: '/auth/admin',
    component: () => import('@/views/auth/admin/index.vue')
  },
  {
    name: 'Index',
    path: Path.INDEX,
    component: () => import('@/views/index/index.vue'),
    children: [
      {
        name: 'AdminHome',
        path: 'admin/home',
        component: () => import('@/views/admin/home/index.vue')
      },
      {
        name: 'AdminProductBrand',
        path: 'admin/product/brand',
        component: () => import('@/views/admin/product/brand/index.vue')
      },
      {
        name: 'AdminProductAttribute',
        path: 'admin/product/attribute',
        component: () => import('@/views/admin/product/attribute/index.vue')
      },
      {
        name: 'AdminProductCategory',
        path: 'admin/product/category',
        component: () => import('@/views/admin/product/category/index.vue')
      },
      {
        name: 'AdminProductSpu',
        path: 'admin/product/spu',
        component: () => import('@/views/admin/product/spu/index.vue')
      },
      {
        name: 'AdminMemberMember',
        path: 'admin/member/member',
        component: () => import('@/views/admin/member/member/index.vue')
      },
      {
        name: 'AdminOrderOrder',
        path: 'admin/order/order',
        component: () => import('@/views/admin/order/order/index.vue')
      },
      {
        name: 'AdminInfoLog',
        path: 'admin/info/log',
        component: () => import('@/views/admin/info/log/index.vue')
      },
      {
        name: 'AdminFileFile',
        path: 'admin/file/file',
        component: () => import('@/views/admin/info/log/index.vue'),
        beforeEnter: () => {
          window.open('http://36.137.103.166:9001')
        }
      },
      {
        name: 'AdminSystemUser',
        path: 'admin/system/user',
        component: () => import('@/views/admin/system/user/index.vue')
      },
      {
        name: 'AdminSystemRole',
        path: 'admin/system/role',
        component: () => import('@/views/admin/system/role/index.vue')
      },
      {
        name: 'AdminSystemMenu',
        path: 'admin/system/menu',
        component: () => import('@/views/admin/system/menu/index.vue')
      },
      {
        name: 'AdminSystemLog',
        path: 'admin/system/log',
        component: () => import('@/views/admin/system/log/index.vue')
      },
      {
        name: 'Error',
        path: 'error',
        component: () => import('@/views/error/index.vue')
      }
    ]
  },
  {
    path: '/error',
    component: () => import('@/views/error/index.vue')
  },
  {
    name: '/',
    path: '/',
    redirect: Path.INDEX
  },
  {
    name: 'unknown',
    path: '/:pathMatch(.*)', // 此处需特别注意置于最底部
    redirect: '/error'
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
router.afterEach(to => {
  document.title = <string>to.name
})
export default router
