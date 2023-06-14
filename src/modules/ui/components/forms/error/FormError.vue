<script setup lang="ts">
interface Props {
  errorMessage?: string
}
const { errorMessage } = defineProps<Props>()
</script>

<template>
  <p class="text-sm text-danger-500">
    <slot>
      {{ errorMessage }}
    </slot>
  </p>
</template>
