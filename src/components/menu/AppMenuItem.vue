<script setup lang="ts">
import { MenuItem } from '@headlessui/vue'
import { menuItemVariants } from '@/components/menu/appMenuItem.style'
import type { Icon } from '@/icons'
import AppText from '@/components/text/AppText.vue'
import AppIcon from '@/components/icon/AppIcon.vue'

interface MenuItemSlotProps {
  active: boolean
  disabled: boolean
  close: () => void
}

export interface MenuItemProps {
  iconLeft?: Icon
  iconRight?: Icon
  isDisabled?: boolean
  text?: string
  description?: string
}

defineProps<MenuItemProps>()
const emits = defineEmits<{
  click: []
}>()

function handleClick() {
  emits('click')
}
</script>

<template>
  <MenuItem
    v-slot="{ active, disabled, close }: MenuItemSlotProps"
  >
    <button
      :disabled="disabled || isDisabled"
      :class="menuItemVariants({
        active,
      })"
      @click="handleClick"
    >
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
          <AppText>
            {{ text }}
          </AppText>
          <AppText
            variant="subtext"
            class="text-muted"
          >
            {{ description }}
          </AppText>
        </slot>
      </div>

      <slot name="icon-right">
        <AppIcon
          v-if="iconRight"
          size="sm"
          :icon="iconRight"
          class="ml-2"
        />
      </slot>
    </button>
  </MenuItem>
</template>
