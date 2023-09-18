import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createHead } from '@vueuse/head'

import { VueQueryPlugin } from '@tanstack/vue-query'
import i18n from './plugins/i18n'
import App from '@/App.vue'

import '@/assets/styles/globals.css'
import '@/assets/styles/transitions.scss'
import router from '@/router/router'

const pinia = createPinia()
const app = createApp(App)
app
  .use(i18n)
  .use(pinia)
  .use(router)
  .use(createHead())
  .use(VueQueryPlugin)
  .mount('#app')
