import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
//vue-router
import router from '@/router'
//element-plus
import elementPlus from 'element-plus'
import 'element-plus/dist/index.css'
//avue
import avue from '@smallwei/avue'
import '@smallwei/avue/lib/index.css'
//axios
import Axios from 'axios'

createApp(App).use(router).use(elementPlus).use(avue, { Axios }).mount('#app')
