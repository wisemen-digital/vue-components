import { createPinia } from 'pinia'
import { defineSetupVue3 } from '@histoire/plugin-vue'
import { createI18n } from 'vue-i18n'

import en from './src/locales/en.json'
import nl from './src/locales/nl.json'

export const setupVue3 = defineSetupVue3(async ({ app }) => {
  const isIframe = window.self !== window.top

  if (isIframe || process.env.NODE_ENV === 'development') {
    // @ts-expect-error - this is a hack to make the iframe work
    await import('./src/assets/styles/globals.css')
    // @ts-expect-error - this is a hack to make the iframe work
    await import('./src/assets/styles/transitions.scss')
  }

  const pinia = createPinia()
  const i18n = createI18n({
    legacy: false,
    locale: 'nl', // set locale
    fallbackLocale: 'nl', // set fallback locale
    messages: {
      nl,
      en,
    },
  })
  app.use(pinia) // Add Pinia store
    .use(i18n)
})
