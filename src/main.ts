import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createHead } from '@vueuse/head'

import { VueQueryPlugin } from '@tanstack/vue-query'
import App from '@/App.vue'

import '@/assets/styles/globals.css'
import '@/assets/styles/transitions.scss'
import router from '@/router/router'

const pinia = createPinia()
const app = createApp(App)
app.use(pinia)
  .use(router)
  .use(createHead())
  .use(VueQueryPlugin)
  .mount('#app')
