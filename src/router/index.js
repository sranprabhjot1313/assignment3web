import { createRouter, createWebHistory } from 'vue-router'

const Home = () => import('@/views/Home.vue')
const About = () => import('@/views/About.vue')
const Posts = () => import('@/views/Posts.vue')
const Food = () => import('@/views/nested/Food.vue')

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/posts', name: 'Posts', component: Posts },
  { path: '/posts/food', name: 'Food', component: Food }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
