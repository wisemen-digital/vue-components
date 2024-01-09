<script setup lang="ts">
import AppText from '@/components/text/AppText.vue'

interface Props {
  /**
   * The main text.
   */
  text: string

  /**
   * The subtext.
   */
  description?: string
}

defineProps<Props>()
</script>

<template>
  <div class="text-left">
    <AppText
      variant="body"
    >
      {{ text }}
    </AppText>
    <AppText
      v-if="description"
      variant="subtext"
      class="text-muted-foreground"
    >
      {{ description }}
    </AppText>
  </div>
</template>
