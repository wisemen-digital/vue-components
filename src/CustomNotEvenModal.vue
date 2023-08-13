<script setup lang="ts">
const isOpen = defineModel('isOpen')
</script>

<template>
  <div>
    idc
    <slot v-if="isOpen" />
  </div>
</template>
