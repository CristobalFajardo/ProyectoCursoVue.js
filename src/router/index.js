import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CarritoComprasView from '../views/CarritoComprasView.vue'
import ListadoProductoView from '../views/ListadoProductoView.vue'
import LoginPersonaView from '../views/LoginPersonaView.vue'
import RegistrarPersonaView from '../views/RegistrarPersonaView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home-World',
    component: HomeView
  },
  {
     path: '/Carrito-Compras',
     name: 'Carrito-Compras',
     component: CarritoComprasView
   },
  {
    path: '/Listado-Producto',
    name: 'Listado-Producto',
    component: ListadoProductoView
  },
   {
     path: '/Login-Persona',
     name: 'Login-Persona',
     component: LoginPersonaView
   },
   {
     path: '/Registrar-Persona',
     name: 'Registrar-Persona',
     component: RegistrarPersonaView
   }
]

const router = new VueRouter({
  routes
})

export default router
