import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('../views/home.vue')
    },
    {
        path: '/user',
        name: 'user.index',
        component: () => import('../views/user/index.vue')
    },
    {
        path: '/user/create',
        name: 'user.create',
        component: () => import('../views/user/create.vue')
    },
    {
        path: '/user/edit/:id',
        name: 'user.edit',
        component: () => import('../views/user/edit.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router