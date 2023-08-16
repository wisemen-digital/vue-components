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
  setupFile: './histoire.setup.ts',
  theme: {
    title: 'Wisemen',
  },
})
