<script setup lang="ts">
interface Props {
  value: string
}
const props = defineProps<Props>()
</script>

<template>
  <div class="bg-red-500">
    {{ props.value }}
  </div>
</template>
