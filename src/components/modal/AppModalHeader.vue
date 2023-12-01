<script setup lang="ts">
import { DialogTitle } from '@headlessui/vue'
import AppIcon from '@/components/icon/AppIcon.vue'
import { twMerge } from '@/utils//tailwind/twMerge'
import { useModalContext } from '@/composables/modal/useModalContext'

interface Props {
  /**
   * Determines if there is a close button on the modal.
   */
  hideCloseButton?: boolean

  /**
   * The class to be applied to the modal header.
   */
  class?: string
}

const props = defineProps<Props>()
const { close } = useModalContext()

function handleClickCloseButton(): void {
  close()
}
</script>

<template>
  <div :class="twMerge('flex p-4 justify-between gap-4', props.class)">
    <DialogTitle>
      <slot />
    </DialogTitle>
    <div v-if="!hideCloseButton">
      <button @click="handleClickCloseButton">
        <AppIcon icon="close" />
      </button>
    </div>
  </div>
</template>
