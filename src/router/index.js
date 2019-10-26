import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            component: () => import( /* webpackChunkName: "index" */ '@/pages/index.vue')
        },
        {
            path: '/login',
            component: () => import( /* webpackChunkName: "login" */ '@/pages/login.vue')
        },
        {
            path: '/register',
            component: () => import( /* webpackChunkName: "register" */ '@/pages/register.vue')
        },
        {
            path: '/addArticle',
            component: () => import( /* webpackChunkName: "addArticle" */ '@/pages/addArticle.vue')
        }
    ]
})
