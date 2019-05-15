import Vue from 'vue'
import Router from 'vue-router'
import Header from '@/components/header'
import Index from '@/views/index'
import Register from '@/views/register'
import Login from '@/views/login'
import Cart from '@/views/cart'

Vue.use(Router)

export default new Router({
  routes: [
    {path:"/", component:Index},
    {path:"/index", component:Index},
    {path:"/header", component: Header},
    {path:"/reg", component: Register},
    {path:"/login", component: Login},
    {path: '/cart', component:Cart}
  ]
})
