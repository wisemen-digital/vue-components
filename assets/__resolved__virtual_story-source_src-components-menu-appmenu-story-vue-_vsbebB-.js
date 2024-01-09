const __resolved__virtual_storySource_srcComponentsMenuAppmenuStoryVue = `<script setup lang="ts">
import AppMenu from '@/components/menu/AppMenu.vue'
import type { MenuConfiguration } from '@/types/menu.type'

const menuConfiguration: MenuConfiguration = [
  {
    type: 'item',
    text: 'Item 1',
    onSelect: (): void => {
      console.warn('Item 1 clicked')
    },
    isDisabled: true,
  },
  {
    type: 'item',
    text: 'Item 2',
    onSelect: (): void => {
      console.warn('Item 2 clicked')
    },
  },
  {
    type: 'divider',
  },
  {
    type: 'item',
    text: 'Item 3',
  },
  {
    type: 'item',
    text: 'Item 4',
  },
]
<\/script>

<template>
  <Story
    title="Menu/AppMenu"
  >
    <Variant title="Default" auto-props-disabled>
      <template #controls>
        <HstJson v-model="menuConfiguration" title="Menu configuration" />
      </template>
      <div class="p-20">
        <AppMenu :menu-configuration="menuConfiguration">
          Im a menu
        </AppMenu>
      </div>
    </Variant>
  </Story>
</template>
`;
export {
  __resolved__virtual_storySource_srcComponentsMenuAppmenuStoryVue as default
};
