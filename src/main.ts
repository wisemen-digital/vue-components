import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createHead } from '@vueuse/head'

import vue3GoogleLogin from 'vue3-google-login'
import { VueQueryPlugin } from '@tanstack/vue-query'
import router from './router/router'
import i18n from './plugins/i18n'
import App from './App.vue'

import './assets/styles/globals.css'
import './assets/styles/transitions.scss'

const pinia = createPinia()
const app = createApp(App)
app.use(pinia)
  .use(createHead())
  .use(i18n)
  .use(router)
  .use(vue3GoogleLogin, {
    clientId: import.meta.env.VITE_GOOGLE_CLIENT_ID,
  })
  .use(VueQueryPlugin)
  .mount('#app')
