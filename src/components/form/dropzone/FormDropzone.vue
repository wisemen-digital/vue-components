<script setup lang="ts">
import { defineEmits, ref } from 'vue'
import { useDropZone } from '@vueuse/core'

const emit = defineEmits(['drop'])
const dropZoneRef = ref<HTMLDivElement>()

function onDrop(files: File[] | null): void {
  if (!files)
    return

  emit('drop', files)
}

const { isOverDropZone } = useDropZone(dropZoneRef, onDrop)
</script>

<template>
  <div
    ref="dropZoneRef" class="dropzone"
  >
    <div
      class="dropzone-overlay" :class="{
        '!hidden': !isOverDropZone,
      }"
    >
      <slot name="placeholder">
        <span>
          Drop files here
        </span>
      </slot>
    </div>
    <slot />
  </div>
</template>

<style scoped>
.dropzone {
  @apply relative h-full
}
.dropzone-overlay {
  @apply z-10 absolute inset-0 grid items-center justify-center rounded border-2 border-dashed;
}
</style>
