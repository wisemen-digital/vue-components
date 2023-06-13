export const components = [
  {
    component: 'AppButton',
    name: 'Button',
    files: [{
      type: 'component',
      path: './src/modules/ui/components/app/buttons/app-button/AppButton.vue',
      folder: 'app/buttons',
    }],
    dependencies: [],
  },
  {
    component: 'AppDropdownButton',
    name: 'DropdownButton',
    files: [
      {
        type: 'component',
        path: './src/modules/ui/components/app/buttons/app-dropdown-button/AppDropdownButton.vue',
        folder: 'app/buttons',
      },
      {
        type: 'component',
        path: './src/modules/ui/components/app/buttons/app-button/AppButton.vue',
        folder: 'app/buttons',
      },

    ],
    dependencies: ['@headlessui-float/vue', '@headlessui/vue'],
  },

]
