import { useAuthStore } from '@/stores/auth'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      component: () => import('@/views/Login.vue'),
      name: 'login',
      meta: {guestOnly: true}
    },
    {
      path: '/register',
      component: () => import('@/views/Register.vue'),
      name: 'register',
      meta: {guestOnly: true}
    },
    {
      path: '/home',
      alias: '/',
      component: () => import('@/views/Home.vue'),
      name: 'home',
      meta: {requiresAuth: true}
    },
  ],
})

router.beforeEach(async(to, from)=> {
  const authStore = useAuthStore();

  if(!authStore.isInitialized) await authStore.fetchUser();

  if(to.meta.requiresAuth && !authStore.user){
    return {name:'login'}
  }

  if(to.meta.guestOnly && authStore.user){
    return from.fullPath !== '/' ? from.fullPath : { name: 'dashboard' };
  }
})

export default router
