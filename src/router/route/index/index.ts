import { Path } from '@/enums'
import adminHomeRoute from '@/router/route/admin/home'
import adminProductBrandRoute from '@/router/route/admin/product/brand'
import adminProductAttributeRoute from '@/router/route/admin/product/attribute'
import adminProductCategoryRoute from '@/router/route/admin/product/category'
import adminProductSpuRoute from '@/router/route/admin/product/spu'
import adminMemberMemberRoute from '@/router/route/admin/member/member'
import adminOrderOrderRoute from '@/router/route/admin/order/order'
import adminInfoLogRoute from '@/router/route/admin/info/log'
import adminFileFileRoute from '@/router/route/admin/file/file'
import adminSystemUserRoute from '@/router/route/admin/system/user'
import adminSystemRoleRoute from '@/router/route/admin/system/role'
import adminSystemMenuRoute from '@/router/route/admin/system/menu'
import adminSystemLogRoute from '@/router/route/admin/system/menu'
import adminErrorRoute from '@/router/route/admin/system/menu'

export default {
  name: 'Index',
  path: Path.INDEX,
  component: () => import('@/views/index/index.vue'),
  children: [
    adminHomeRoute,
    adminProductBrandRoute,
    adminProductAttributeRoute,
    adminProductCategoryRoute,
    adminProductSpuRoute,
    adminMemberMemberRoute,
    adminOrderOrderRoute,
    adminInfoLogRoute,
    adminFileFileRoute,
    adminSystemUserRoute,
    adminSystemRoleRoute,
    adminSystemMenuRoute,
    adminSystemLogRoute,
    adminErrorRoute
  ]
}
