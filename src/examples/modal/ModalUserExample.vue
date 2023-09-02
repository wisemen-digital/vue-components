<script setup lang="ts">
import RenderedExample from '@/examples/modal/RenderedExample.vue'
import { useModal } from '@/components/app/modal/useModal'

const { open, close, onClose, onOpen } = useModal({
  // any Component
  component: RenderedExample,
  modalTitle: 'Example',
  // Props and emits typed
  attrs: {
    name: 'John Doe',
    onClickedName: (name: string) => {
      console.error(name)
    },
    onCancel: () => {
      close()
    },
    onConfirm: () => {
      // Do confirm stuff
    },
  },
})

onClose(() => {
  // Do stuff when modal is closed
})

onOpen(() => {
  // Do stuff when modal is opened
})
</script>

<template>
  <div>
    <button @click="open">
      open
    </button>
  </div>
</template>
