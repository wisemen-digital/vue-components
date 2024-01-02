<script setup lang="ts">
import AppButton from '@/components/button/AppButton.vue'
import AppIcon from '@/components/icon/AppIcon.vue'
import { toast } from '@/components/toast/appToast.style'
import type { ToastParams } from '@/composables/toast/useToast'
import type { Icon } from '@/icons'

const { action, title, variant, icon } = defineProps<ToastParams>()
const emits = defineEmits<{
  /**
   * Emitted when the toast is closed.
   */
  closeToast: []

}>()

function handleClose(): void {
  emits('closeToast')
}

function handleAction(): void {
  if (!action)
    return
  action.onClick()
  handleClose()
}
</script>

<template>
  <div class="w-80 overflow-hidden rounded bg-white shadow-card-shadow">
    <div
      :class="toast({
        variant,
      })"
    >
      <div class="flex items-center gap-2">
        <AppIcon v-if="icon" class="h-4" :icon="icon" />
        <template v-if="typeof title === 'string'">
          {{ title }}
        </template>
      </div>
      <div class="flex items-center gap-1">
        <AppButton v-if="action" size="xs" variant="ghost" @click="handleAction">
          {{ action.label }}
        </AppButton>

        <AppButton size="icon" variant="ghost" @click="handleClose">
          <AppIcon class="h-4" icon="close" />
        </AppButton>
      </div>
    </div>
  </div>
</template>
