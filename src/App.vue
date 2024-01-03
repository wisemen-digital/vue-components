<script setup lang="ts">
import AppButton from '@/components/button/AppButton.vue'
import { useToast } from '@/composables/toast/useToast'
import AppToastContainer from '@/components/toast/AppToastContainer.vue'

const { showToastSuccess } = useToast()
function handleToast(): void {
  showToastSuccess({
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
