<script setup lang="ts">
interface Props {
  errorMessage?: string
}
const { errorMessage } = defineProps<Props>()
</script>

<template>
  <p class="text-danger-500 text-sm">
    <slot>
      {{ errorMessage }}
    </slot>
  </p>
</template>
