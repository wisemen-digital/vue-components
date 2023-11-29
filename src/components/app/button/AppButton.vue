<script setup lang="ts">
import AppIcon from '@/components/app/icon/AppIcon.vue'
import AppButtonLoader from '@/components/app/button/AppButtonLoader.vue'
import { buttonVariants } from '@/components/app/button/appButton.style'
import type { ButtonProps } from '@/components/app/button/appButton.style'
import type { Icon } from '@/icons'

interface Props {
  isDisabled?: boolean
  isLoading?: boolean
  isRounded?: boolean
  variant?: ButtonProps['variant']
  size?: ButtonProps['size']
  prefixIcon?: Icon
  suffixIcon?: Icon
}

const {
  variant = 'default',
  size = 'default',
  isDisabled = false,
  isLoading = false,
  prefixIcon,
  suffixIcon,
} = defineProps<Props>()

const emits = defineEmits(['component:click'])

function handleClick(): void {
  if (!isDisabled && !isLoading)
    emits('component:click')
}
</script>

<template>
  <button :class="buttonVariants({ variant, size, isRounded })" @click="handleClick">
    <div :class="{ 'opacity-30': isLoading }" class="flex items-center gap-2 whitespace-nowrap transition-opacity">
      <slot name="prefix">
        <AppIcon v-if="prefixIcon" :icon="prefixIcon" />
      </slot>
      <slot />
      <slot name="suffix">
        <AppIcon v-if="suffixIcon" :icon="suffixIcon" />
      </slot>
    </div>
    <AppButtonLoader :is-loading="isLoading" />
  </button>
</template>
