<script setup lang="ts" generic="TPromise">
import type { Ref } from 'vue'
import { computed, ref } from 'vue'
import AppButton from '@/components/button/AppButton.vue'
import AppIcon from '@/components/icon/AppIcon.vue'
import { toast, toastContainer } from '@/components/toast/appToast.style'
import type { ToastParams } from '@/composables/toast/useToast'
import AppLoader from '@/components/loader/AppLoader.vue'
import { fadeTransition } from '@/transitions'

const { action, title, variant, icon, promise } = defineProps<ToastParams<TPromise>>()
const emits = defineEmits<{
  /**
   * Emitted when the toast is closed.
   */
  closeToast: []
}>()

function handleClose(): void {
  emits('closeToast')
}

// Action logic
function handleAction(): void {
  if (!action)
    return
  action.onClick()
  handleClose()
}

// Promise logic
const isPromiseToast = computed(() => {
  return !!promise
})

const promiseStatus = ref<'pending' | 'resolved' | 'rejected'>('pending')
const promiseData = ref<TPromise | undefined | null>(null) as Ref<TPromise | null | undefined>
const promiseError = ref<string | null>(null)

async function handleToast(): Promise<void> {
  promiseStatus.value = 'pending'
  try {
    promiseData.value = await promise?.action
    promiseStatus.value = 'resolved'
  }
  catch (e: Error) {
    promiseStatus.value = 'rejected'
    promiseError.value = e.message
  }
  finally {
    setTimeout(() => {
      handleClose()
    }, 2000)
  }
}
if (isPromiseToast.value)
  handleToast()
</script>

<template>
  <div
    :class="toastContainer({
      variant,
    })"
  >
    <div
      :class="toast({
        variant,
      })"
    >
      <div class="flex items-center gap-2">
        <!-- Icon that is showing -->
        <div v-if="!isPromiseToast">
          <AppIcon v-if="icon" class="h-4" :icon="icon" />
        </div>
        <Transition v-else v-bind="fadeTransition" mode="out-in">
          <AppLoader v-if="promiseStatus === 'pending'" class="h-4" />
          <AppIcon v-else-if="promiseStatus === 'resolved'" class="h-4" icon="checkmark" />
          <AppIcon v-else-if="promiseStatus === 'rejected'" class="h-4" icon="warning" />
        </Transition>

        <!-- Text that is showing -->
        <div>
          <p class="text-subtext">
            {{ title }}
          </p>
          <div class="text-caption">
            <template v-if="!isPromiseToast">
              <p v-if="desciption">
                {{ desciption }}
              </p>
            </template>
            <Transition v-else v-bind="fadeTransition" mode="out-in">
              <p v-if="promiseStatus === 'pending'">
                {{ promise?.loadingMessage }}
              </p>
              <p v-else-if="promiseStatus === 'resolved' && promiseData">
                {{ promise?.successMessage(promiseData) }}
              </p>
              <p v-else-if="promiseStatus === 'rejected' && promiseError">
                {{ promise?.errorMessage(promiseError) }}
              </p>
            </Transition>
          </div>
        </div>
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
