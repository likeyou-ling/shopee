import Vue from 'vue'
import VueRouter from 'vue-router'

const originalPush = VueRouter.prototype.push
   VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}


Vue.use(VueRouter)

const routes = [
  { path: '', redirect: '/home'},
  { path: '/home', component: () => import('../views/home/Home.vue')},
  { path: '/category', component: () => import('../views/category/Category.vue')},
  { path: '/profile', component: () => import('../views/profile/Profile.vue')},
  { path: '/shopcar', component: () => import('../views/shopcar/Shopcar.vue')}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
