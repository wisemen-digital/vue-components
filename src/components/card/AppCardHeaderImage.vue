<script setup lang="ts">
import { twMerge } from '@/utils//tailwind/twMerge'

const props = defineProps<{
  /**
   * The image source.
   */
  src: string

  /**
   * The class to be applied to the card content.
   */
  class?: string
}>()
</script>

<template>
  <img
    :src="src"
    :class="twMerge('h-48 w-full object-cover', props.class)"
  >
</template>
