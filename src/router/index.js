import { createRouter, createWebHistory } from 'vue-router'
import Home from '/src/views/Home.vue'
import UploadThemes from '/src/views/UploadThemes.vue'
import Login from '/src/views/Login.vue'
import Register from '/src/views/Register.vue'
import ForgotPassword from '/src/views/ForgotPassword.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: {
            title: 'Home',
        },
    },
    {
        path: '/upload',
        name: 'UploadThemes',
        component: UploadThemes,
        meta: {
            title: 'Upload',
        },
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
        meta: {
            title: 'Login',
        },
    },
    {
        path: '/register',
        name: 'Register',
        component: Register,
        meta: {
            title: 'Register',
        },
    },
    {
        path: '/forgot-password',
        name: 'ForgotPassword',
        component: ForgotPassword,
        meta: {
            title: 'Forgot Password',
        },
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

router.beforeEach((to, from, next) => {
    document.title = `${to.meta.title} | Houdini Themes`
    next()
})

export default router
