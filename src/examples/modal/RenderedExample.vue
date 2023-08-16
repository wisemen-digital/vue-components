<script setup lang="ts">
import AppButton from '@/components/app/button/AppButton.vue'

const { name } = defineProps<{ name: string }>()

const emits = defineEmits<{
  clickedName: [string]
  cancel: []
  confirm: []
}>()
</script>

<template>
  <div>
    <div @click="emits('clickedName', name)">
      {{ name }}
    </div>
    <div class="mt-4 flex gap-2">
      <AppButton variant="ghost" @click="emits('cancel')">
        Cancel
      </AppButton>
      <AppButton @click="emits('confirm')">
        Confirm
      </AppButton>
    </div>
  </div>
</template>
