import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:"/login",
      component: () => import('@/views/Login.vue'),
      name: 'login'
    },
    {
      path:"/register",
      component: ()=> import('@/views/Register.vue'),
      name:"register"
    }
  ],
})

export default router
