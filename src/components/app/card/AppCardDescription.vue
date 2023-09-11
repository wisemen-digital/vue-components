<script setup lang="ts">
import AppText from '@/components/app/text/AppText.vue'
</script>

<template>
  <AppText
    class="text-muted-foreground"
  >
    <slot />
  </AppText>
</template>
