<script setup lang="ts">
import AppButton from '@/components/button/AppButton.vue'
import { useToast } from '@/composables/toast/useToast'
import ColorGeneratorView from '@/color-generator/views/ColorGeneratorView.vue'

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
  <ColorGeneratorView />
  <!-- <RouterView /> -->
</template>
