/*
 * @Author       : YH000354
 * @Date         : 2022-03-30 18:34:21
 * @LastEditors  : YH000354
 * @LastEditTime : 2022-04-01 16:50:34
 * @FilePath     : \myblogzh\src\router\index.ts
 */
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: _ => {
      return { path: '/home' }
    },
  },
  {
    path: '/home',
    name: 'HelloWorld',
    component: HelloWorld,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "About" */ '../components/About.vue'),
  },
  {
    path: '/:currentPath(.*)*', // 路由未匹配到，进入这个
    redirect: _ => {
      return { path: '/' }
    },
  },
]
const router = createRouter({
  history: createWebHistory('/Blog/'),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return {
      el: '#app',
      top: 0,
      behavior: 'smooth',
    }
  },
})
export default router
