<script setup lang="ts">
// Bind this to the child if you want to button to grow to the full width of the parent
const childClasses = 'flex-1'
</script>

<template>
  <div class="flex w-full flex-row gap-2">
    <slot :bindings="{ class: childClasses }" />
  </div>
</template>
