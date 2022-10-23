import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: () => import('@/views/index'),
    children: [
      {
        path: '/', // 默认子路由
        name: 'home',
        component: () => import('@/views/home')
      },
      {
        path: '/fortune', //
        name: 'fortune',
        component: () => import('@/views/fortune')
      },
      {
        path: '/living', //
        name: 'living',
        component: () => import('@/views/living')
      },
      {
        path: '/message', //
        name: 'message',
        component: () => import('@/views/message')
      },
      {
        path: '/me', //
        name: 'me',
        component: () => import('@/views/me')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
