<script setup lang="ts">
import { Toaster, toast } from 'vue-sonner'
import AppButton from '@/components/button/AppButton.vue'
import { useToast } from '@/composables/toast/useToast'

const { showToastSuccess } = useToast()
function handleToast(): void {
  showToastSuccess({
    promise: {
      action: new Promise<string>((resolve) => {
        setTimeout(() => {
          resolve('It worked!')
        }, 2000)
      }),
      loadingMessage: 'Saving...',
      successMessage: test => `Success! ${test}`,
      errorMessage: test => `Error! ${test}`,
    },
    title: 'Saving user',
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
