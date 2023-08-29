// histoire.config.js
import { defineConfig } from 'histoire'
import { HstVue } from '@histoire/plugin-vue'

export default defineConfig({
  tree: {
    groups: [
      {
        id: 'top',
        title: '', // No toggle
      },
      {
        id: 'contributing',
        title: 'Contributing',
      },
      {
        title: 'Components',
        include: (file): boolean => !file.title.includes('Serialize'),
      },
    ],
  },
  defaultStoryProps: {
    layout: {
      type: 'grid',
      width: '100%',
    },
    autoPropsDisabled: true,
  },
  plugins: [
    HstVue(),
  ],
  vite: {
    base: '/vue-components/',
  },
  setupFile: './histoire.setup.ts',
  theme: {
    title: 'Wisemen',
  },
})
