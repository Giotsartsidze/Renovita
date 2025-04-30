// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from './views/HomeView.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    }
]

const router = createRouter({
    // In Vite, use import.meta.env instead of process.env
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
    scrollBehavior(to) {
        if (to.hash) {
            return {
                el: to.hash,
                behavior: 'smooth'
            }
        } else {
            return { top: 0 }
        }
    }
})

export default router