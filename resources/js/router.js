import { createRouter, createWebHistory } from 'vue-router';
import home from './vue/Pages/Home.vue';
import login from './vue/Pages/Login.vue';
import register from './vue/Pages/Register.vue';

const routes = [
    {
        path: '/',
        name: 'home',
        component: home
    },
    {
        path: '/login',
        name: 'login',
        component: login
    },
    {
        path: '/register',
        name: 'register',
        component: register
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;