<script setup lang="ts">
import AppText from '@/components/text/AppText.vue'
</script>

<template>
  <AppText
    boldness="semibold"
    variant="heading"
  >
    <slot />
  </AppText>
</template>
