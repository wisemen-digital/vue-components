<script setup lang="ts">
import AppText from '@/components/text/AppText.vue'

interface Props {
  /**
   * The main text.
   */
  text?: string

  /**
   * The subtext.
   */
  description?: string
}

defineProps<Props>()
const slots = defineSlots<{
  description?: []
  default?: []
}>()
</script>

<template>
  <div class="text-left">
    <AppText
      variant="body"
    >
      <slot>
        {{ text }}
      </slot>
    </AppText>
    <AppText
      v-if="description || slots.default"
      variant="subtext"
      class="text-muted-foreground"
    >
      <slot name="description">
        {{ description }}
      </slot>
    </AppText>
  </div>
</template>
