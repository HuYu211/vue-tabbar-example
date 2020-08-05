import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

  const routes = [
    {
      path: '/',
      redirect: '/home1'
    },
    {
      path: '/home1',
      component: () => import('../views/pages/Home')
    },
    {
      path: '/home2',
      component: () => import('../views/pages/Home2')
    },
    {
      path: '/home3',
      component: () => import('../views/pages/Home3')
    },
    {
      path: '/home4',
      component: () => import('../views/pages/Home4')
    },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
