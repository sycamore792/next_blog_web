import {createRouter, createWebHashHistory} from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'Main',
        component: () => import('@/views/Main.vue'),
        redirect: '/home',
        children: [{
            path: '/home',
            name: 'home',
            component: () => import('@/views/Home.vue')
        }, {
            path: '/explore',
            name: 'explore',
            component: () => import('@/views/Explore.vue')
        }, {
            path: '/edit',
            name: 'edit',
            component: () => import('@/views/Edit.vue')
        }, {
            path: '/stream',
            name: 'stream',
            component: () => import('@/views/Stream.vue')
        }]
    }, {
        path: '/blogDetail/:id',
        name: 'blogDetail',
        component: () => import('@/views/BlogPage.vue')
    }, {
        path: '/userProfile/:id',
        name: 'userProfile',
        component: () => import('@/views/UserProfile.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
