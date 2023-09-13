<script setup lang="ts">
import { useModal } from '@/composables/app/modal/useModal'
import CustomModal from '@/examples/modal/CustomModal.vue'

const { open, close, onClose, onOpen } = useModal({
  component: CustomModal,
  attrs: {
    name: 'John Doe',
    onCancel: () => {
      close()
    },
    onConfirm: () => {
      close()
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
