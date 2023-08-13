import { createApp } from 'vue'
import { createHead } from '@vueuse/head'

import { VueQueryPlugin } from '@tanstack/vue-query'
import i18n from './plugins/i18n'
import App from './App.vue'

import './assets/styles/globals.css'

const pinia = createPinia()
const app = createApp(App)
app.use(pinia)
  .use(createHead())
  .use(i18n)
  .use(VueQueryPlugin)
  .mount('#app')
