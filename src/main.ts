import {createApp} from 'vue'
import './style.css'
import App from './App.vue'
//vue-router
import Router from './router'
//element-plus
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
// import './theme/index.scss';

createApp(App).use(Router).use(ElementPlus).mount('#app')
