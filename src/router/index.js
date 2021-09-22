import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/contacto',
        name: 'Contacto',
        component: () =>
            import ('../views/Contacto.vue')
    },
    {
        path: '/productos',
        name: 'Productos',
        component: () =>
            import ('../views/Productos.vue')
    },
    {
        path: '/*',
        name: 'Notfound',
        component: () =>
            import ('../views/Notfound.vue')
    }

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router