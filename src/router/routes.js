
import AppLayout from '@/layout'
export default [
  {
    path: '/',
    name: 'Layout',
    component: AppLayout,
    redirect: '/home',
    children: [
      {
        path: 'home',
        name: 'Home',
        component: () => import('@/views/AppHome.vue'),
        meta: {
          title: '首页'
        }
      },
      {
        path: '/about',
        name: 'About',
        meta: {
          title: '关于'
        },
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '@/views/AppAbout.vue')
      }
    ]
  }
]
