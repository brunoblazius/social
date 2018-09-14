import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/home'
import Login from '@/pages/login/login'
import Cadastro from '@/pages/cadastro/cadastro'
import Perfil from '@/pages/perfil/Perfil'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/cadastro',
      name: 'Cadastro',
      component: Cadastro
    },
    {
      path: '/perfil',
      name: 'Perfil',
      component: Perfil
    }
  ]
})
