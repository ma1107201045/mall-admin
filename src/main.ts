import { createApp } from 'vue'
import './style.css'
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
//axios
import Axios from 'axios'

const app = createApp(App)
app.use(router)
app.use(elementPlus)
app.use(avue, { Axios })
app.mount('#app')
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
