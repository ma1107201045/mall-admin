// index.ts
import {createRouter, createWebHashHistory} from 'vue-router'
import User from '../views/system/user/index.vue'

const routes = [
    {
        path: '/',
        component: User
    },
    {
        path: '/user',
        component: User
    }
]

export default createRouter({
    history: createWebHashHistory(),
    routes
})
