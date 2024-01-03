// histoire.config.js
import { defaultColors, defineConfig } from 'histoire'
import { HstVue } from '@histoire/plugin-vue'

export default defineConfig({

  storyMatch: [
    '**/*.story.vue',
    '**/*.utilities.vue',
  ],

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
        id: 'utilities',
        title: 'Utilities',
        include: (file): boolean => file.title.includes('Color'),
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
  viteNodeInlineDeps: [/vue-sonner/],
  vite: {
    base: '/vue-components/',
  },
  setupFile: './histoire.setup.ts',
  theme: {
    title: 'Wisemen Components',
    logo: {
      square: '/logo-square.svg',
      light: '/logo-light.svg',
      dark: '/logo-dark.svg',
    },
    colors: {
      primary: {
        ...defaultColors.cyan,
      },
    },

  },
})
