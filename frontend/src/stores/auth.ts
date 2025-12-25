import { ref} from 'vue'
import { defineStore } from 'pinia'
import api, { getCsrfCookie } from '@/services/api';

export const useAuthStore = defineStore('auth', () => {

  const user = ref<object|null>(null);

  const isInitialized = ref<boolean>(false);
  
  const fetchUser = async () => {
    try{
          await getCsrfCookie()

           const response = await api.get('user/me')
           user.value = response.data
    }catch(error: any){
      console.log(error)
    }finally{
      isInitialized.value = true
    }
  }
  
  

  return { user,  isInitialized, fetchUser}
})
