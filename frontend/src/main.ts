import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from '@/App.vue'
import router from '@/router'
import vuetify from '@/plugins/vuetify'
import i18n from '@/plugins/vueI18n'

const app = createApp(App)
app.use(createPinia())
app.use(i18n)
app.use(vuetify)
app.use(router)
app.mount('#app')

