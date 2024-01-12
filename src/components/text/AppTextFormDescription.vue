<script setup lang="ts">
import AppText from '@/components/text/AppText.vue'
</script>

<template>
  <AppText
    variant="subtext"
    class="text-muted-foreground"
  >
    <slot />
  </AppText>
</template>
