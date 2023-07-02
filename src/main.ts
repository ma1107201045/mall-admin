import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
//vue-router
import router from '@/router'
//element-plus
import elementPlus from 'element-plus'
import 'element-plus/dist/index.css'
//element-plus-icon
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
//avue
import avue from '@smallwei/avue'
import '@smallwei/avue/lib/index.css'
//avue国际化
import zhLocale from '@smallwei/avue/lib/locale/lang/zh'
// import enLocale from '@smallwei/avue/lib/locale/lang/en'
//axios
import HttpClient from '@/utils/httpClient.ts'

const app = createApp(App)
app.use(router)
app.use(elementPlus)
app.use(avue, { axios: HttpClient, locale: zhLocale })
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.mount('#app')
