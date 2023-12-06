<script setup lang="ts">
import { useAttrs } from 'vue'
import { textVariants } from '@/components/text/appText.style'
import type { TextProps } from '@/components/text/appText.style'

type TextType = 'p' | 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div' | 'blockquote'

interface Props {
  /**
   * The variant of the text.
   */
  variant?: TextProps['variant']

  /**
   * The boldness of the text.
   */
  boldness?: TextProps['boldness']

  /**
   * The number of lines to truncate the text.
   */
  numberOfLines?: TextProps['truncate']

  /**
   * The HTML tag to use for the text.
   */
  as?: TextType
}

const {
  variant = 'body',
  numberOfLines,
  boldness,
  as = 'p',
} = defineProps<Props>()

const attrs = useAttrs()
</script>

<template>
  <Component :is="as" :class="textVariants({ variant, boldness, truncate: numberOfLines, class: attrs?.class as string })">
    <slot />
  </Component>
</template>
