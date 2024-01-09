<script setup lang="ts">
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
</script>

<template>
  <div class="p-20">
    <AppMenu :menu-configuration="menuConfiguration">
      Im a menu
      <template #panel-top>
        <div class="bg-neutral-300 px-4 py-2">
          Im a user
        </div>
      </template>
    </AppMenu>
  </div>
</template>
