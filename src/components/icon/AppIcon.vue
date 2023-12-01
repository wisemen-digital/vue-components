<script setup lang="ts">
import { twMerge } from 'tailwind-merge'
import { computed, useAttrs } from 'vue'
import { icons } from '@/icons'
import type { Icon } from '@/icons'
import type { IconProps } from '@/components/icon/appIcon.style'
import { iconVariants } from '@/components/icon/appIcon.style'

interface Props {
  /**
   * The icon to display.
   */
  icon: Icon

  /**
   * The size of the icon.
   */
  size?: IconProps['size']
}

const { icon, size = 'default' } = defineProps<Props>()

const attrs = useAttrs()

const iconComponent = computed(() => icons[icon])
</script>

<template>
  <Component :is="iconComponent" :class="twMerge(iconVariants({ size }), attrs?.class as string)" />
</template>
