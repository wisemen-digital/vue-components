<script setup lang="ts">
import { MenuItem } from '@headlessui/vue'
import { RouterLink } from 'vue-router'
import { menuItemVariants } from '@/components/menu/appMenuItem.style'
import AppIcon from '@/components/icon/AppIcon.vue'
import type { MenuItemProps } from '@/types/menu.type'
import AppTextDescription from '@/components/text/AppTextDescription.vue'

interface MenuItemSlotProps {
  /**
   * If the menu item is active.
   */
  active: boolean
  /**
   * If the menu item is disabled.
   */
  disabled: boolean
  /**
   * Close the menu.
   */
  close: () => void
}

const {
  iconLeft,
  isDisabled,
  text,
  description,
  onSelect,
} = defineProps<MenuItemProps>()
const emits = defineEmits<{
  click: []
}>()

function handleClick(): void {
  if (isDisabled)
    return
  onSelect?.()
  emits('click')
}
</script>

<template>
  <MenuItem
    v-slot="{ active, disabled, close }: MenuItemSlotProps"
    :disabled="isDisabled"
  >
    <Component
      :is="to ? RouterLink : 'button'"
      :to="to"
      disabled
      :class="menuItemVariants({
        isDisabled,
        isActive: active,
      })"
      @click="handleClick"
    >
      <slot
        name="element"
        :is-disabled="isDisabled"
        :active="active"
        :close="close"
      >
        <slot name="left" />
        <div class="flex items-center gap-2">
          <slot name="icon-left">
            <AppIcon
              v-if="iconLeft"
              :icon="iconLeft"
              size="sm"
              class="mr-2"
            />
          </slot>
          <slot
            :is-active="active"
            :is-disabled="disabled || isDisabled"
            :close="close"
          >
            <AppTextDescription :text="text" :description="description" />
          </slot>
        </div>
        <slot name="right" />
      </slot>
    </Component>
  </MenuItem>
</template>
