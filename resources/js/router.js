import vueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(vueRouter)

import Index from './views/Index.vue'
import Profile from './views/Profile.vue'
import Login from './views/auth/Login.vue'
import Register from './views/auth/Register.vue'

const routes = [
    {
        path: '/',
        component: Index
    },
    {
        path: '/profile',
        component: Profile
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/register',
        component: Register
    },
    
]

export default new vueRouter({
    mode: 'history',
    routes
})