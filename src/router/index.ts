// index.ts
import { createRouter, createWebHashHistory } from 'vue-router'
import { Path } from '@/enums'
import authAdminRoute from '@/router/route/auth/admin'
import indexRoute from '@/router/route/index'

let routes = [
  authAdminRoute,
  indexRoute,
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
