import { createRouter, createWebHistory } from 'vue-router'
import Home from '/src/views/Home.vue'
import UploadThemes from '/src/views/UploadThemes.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/upload',
        name: 'UploadThemes',
        component: UploadThemes,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
