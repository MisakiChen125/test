import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
            path: '/home',
            name: 'home',
            component: Home

        },
        {
            path: '/cart',
            name: 'cart',
            component: () =>
                import ('./views/Cart.vue')
        },
        {
            path: '/comfim',
            name: 'comfim',
            component: () =>
                import ('./views/Comfim.vue')

        }, {
            path: '*',
            redirect: '/home'
        }

    ]
})