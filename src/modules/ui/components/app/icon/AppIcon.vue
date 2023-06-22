<script setup lang="ts">
import { twMerge } from 'tailwind-merge'
import { type IconProps, iconVariants } from './appIconVariants'
import type { Icon } from '@/icons'
import { icons } from '@/icons'

interface Props {
  icon: Icon
  variant?: IconProps['variant']
  size?: IconProps['size']

}

const {
  icon,
  variant = 'default',
  size = 'default',
} = defineProps<Props>()
const iconComponent = computed(() => icons[icon])
</script>

<template>
  <Component :is="iconComponent" :class="twMerge(iconVariants({ variant, size }))" />
</template>
