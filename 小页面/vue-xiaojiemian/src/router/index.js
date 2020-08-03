import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    redirect: '/home',
    component: () => import('../views/index.vue'),
    children: [
      {
        path: 'home',
        name: 'home',
        component: () => import('../views/home.vue')
      },
      {
        path: 'game',
        name: 'game',
        component: () => import('../views/game.vue'),
        children: [
          {
            path: 'children',
            name: 'children',
            component: () => import('../views/children.vue')
          }
        ]
      }, {
        path: 'centen',
        name: 'centen',
        component: () => import('../views/centen.vue')
      }
    ]
  },
  {
    path: '/fun',
    name: 'fun',
    component: () => import('../views/fun.vue')
  },
  {
    path: '/deng',
    name: 'deng',
    component: () => import('../views/deng.vue')
  },
  {
    path: '/nao',
    name: 'nao',
    component: () => import('../views/nao.vue')
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
