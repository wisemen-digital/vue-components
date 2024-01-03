<script setup lang="ts">
import AppButton from '@/components/button/AppButton.vue'
import { useToast } from '@/composables/toast/useToast'
import AppToastContainer from '@/components/toast/AppToastContainer.vue'

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
  <AppToastContainer />
  <!-- <RouterView /> -->
</template>
