<script setup lang="ts">
const isOpen = defineModel('isOpen')
</script>

<template>
  <div>
    <slot v-if="isOpen" />
  </div>
</template>
