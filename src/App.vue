<script setup lang="ts">
import { Toaster, toast } from 'vue-sonner'
import AppButton from '@/components/button/AppButton.vue'
import { useToast } from '@/composables/toast/useToast'

const { showToastError } = useToast()
function handleToast(): void {
  showToastError({
    action: {
      label: 'Undo',
      onClick: () => {
        console.warn('test')
      },
    },
    title: 'test',
  })
}
</script>

<template>
  <AppButton @click="handleToast">
    test
  </AppButton>
  <Toaster />
  <!-- <RouterView /> -->
</template>
