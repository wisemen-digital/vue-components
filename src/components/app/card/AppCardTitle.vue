<script setup lang="ts">
import AppText from '@/components/app/text/AppText.vue'
</script>

<template>
  <AppText
    boldness="semibold"
    variant="heading"
  >
    <slot />
  </AppText>
</template>
