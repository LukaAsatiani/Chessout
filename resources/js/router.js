import vueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(vueRouter)

import Index from './views/Index.vue'
import Profile from './views/Profile.vue'

const routes = [
    {
        path: '/',
        component: Index
    },
    {
        path: '/profile',
        component: Profile
    }
]

export default new vueRouter({
    mode: 'history',
    routes
})