<script setup lang="ts">
import { twMerge } from 'tailwind-merge'
import { textVariants } from '@/components/app/text/appText.style'
import type { TextProps } from '@/components/app/text/appText.style'

type TextType = 'p' | 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div' | 'blockquote'

interface Props {
  variant?: TextProps['variant']
  boldness?: TextProps['boldness']
  numberOfLines?: TextProps['truncate']
  as?: TextType
}

const {
  variant = 'p',
  numberOfLines,
  boldness,
  as = 'p',
} = defineProps<Props>()

const attrs = useAttrs()
</script>

<template>
  <Component :is="as" :class="twMerge(textVariants({ variant, boldness, truncate: numberOfLines }), attrs?.class as string)">
    <slot />
  </Component>
</template>
