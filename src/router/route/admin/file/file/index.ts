export default {
  name: 'AdminFileFile',
  path: 'admin/file/file',
  component: () => import('@/views/admin/info/log/index.vue'),
  beforeEnter: () => {
    window.open('http://36.137.103.166:9001')
  }
}