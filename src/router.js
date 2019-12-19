import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Contato from './views/Contato.vue'
import Catalogo from './views/Catalogo.vue'
import Pedidos from './views/Pedidos.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/contato',
            name: 'contato',
            component: Contato
        },
        {
            path: '/pedidos',
            name: 'pedidos',
            component: Pedidos
        },
        {
            path: '/catalogo',
            name: 'catalogo',
            component: Catalogo
        }
    ]
})