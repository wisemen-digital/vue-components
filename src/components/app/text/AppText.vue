<script setup lang="ts">
import { twMerge } from 'tailwind-merge'
import { textVariants } from '@/components/app/text/appTextVariants'
import type { TextProps } from '@/components/app/text/appTextVariants'

interface Props {
  variant: TextProps['variant']
  boldness?: TextProps['boldness']
  numberOfLines?: TextProps['truncate']
}

const {
  variant = 'p',
  numberOfLines,
  boldness,
} = defineProps<Props>()

const htmlElement = computed(() => {
  switch (variant) {
    case 'quote':
    case 'large':
    case 'small':
    case 'subtle':
      return 'p'
    default:
      return variant ?? 'p'
  }
})
</script>

<template>
  <Component :is="htmlElement" :class="twMerge(textVariants({ variant, boldness, truncate: numberOfLines }))">
    <slot />
  </Component>
</template>
